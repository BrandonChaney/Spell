import store from "../store.js";
import Spell from "../Models/Spell.js"


// @ts-ignore
const _spellsApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/spells",
  timeout: 3000
})

// @ts-ignore
const _sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/spenser/spells",
  timeout: 3000
})

class SpellsService {
  constructor() {
    this.getApiSpells()
    this.getMySpells()
  }

  setActiveSpell(name) {
    let spell = store.State.mySpells.find(s => s.name == name)
    if (spell) {
      store.commit('activeSpell', spell)
    }
  }
  getApiSpells() {
    _spellsApi.get()
      .then(res => {
        console.log(res);

        let spellNames = res.data.map(r => r.name)
        store.commit("apiSpells", spellNames)
      })
      .catch(e => console.error(e))
  }
  getSpellDetails(name) {
    console.log(name);

    _spellsApi.get(name)
      .then(res => {
        console.log(res);

        let spell = new Spell(res.data)
        store.commit('activeSpell', spell)
      })
      .catch(e => console.error(e))
  }
  getMySpells() {
    _sandboxApi.get('')
      .then(res => {
        let spell = res.data.data.map(s => new Spell(s))
        store.commit('mySpells', spell)
      })
      .catch(e => console.error(e))
  }

  //Post
  learn() {
    _sandboxApi.post("", store.State.activeSpell)
      .then(res => {
        this.getMySpells();
      })
      .catch(e => console.error(e))
  }

  //Delete
  delete() {
    _sandboxApi.delete(store.State.activeSpell.name)
      .then(res => {
        this.getMySpells();
        store.commit("activeSpell", null)
      })
      .catch(e => console.error(e))
  }

}


const service = new SpellsService();
export default service;
