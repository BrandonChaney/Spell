import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _drawApiSpells() {
  let spells = store.State.apiSpells;
  let template = ''
  spells.forEach(name => {
    template += `<li class="action" onclick="app.spellsController.getSpellDetails('${this.id}')">${name}</li>`
  });
  document.getElementById('api-spells').innerHTML = template;
}

function _drawActiveSpell() {
  let spells = store.State.activeSpells
  if (spells) {
    document.getElementById("active-spells").innerHTML = spells.Template
  } else {
    document.getElementById("active-spells").innerHTML = ""
  }
}

function _drawMySpells() {
  let spells = store.State.mySpells;
  let template = ''
  spells.forEach(spell => {
    template += `<li class="action" onclick="app.spellsController.setActiveSpell('${spell.name}')">${spell.name}</li>`
  });
  document.getElementById('my-spell').innerHTML = template;
}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("apiSpells", _drawApiSpells);
    store.subscribe("mySpells", _drawMySpells);
    store.subscribe("activeSpell", _drawActiveSpell)
  }

  getSpellDetails(id) {
    SpellsService.getSpellDetails(id);
    console.log(id);

  }

  learn() {
    SpellsService.learn()
  }

  delete() {
    SpellsService.delete()
  }

  setActiveSpell(id) {
    SpellsService.setActiveSpell(id)
  }
}
