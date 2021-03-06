import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _drawApiSpells() {
  let spells = store.State.apiSpells;
  let template = ''
  console.log(spells);

  spells.forEach(spell => {
    template += `<li class="action" onclick="app.spellsController.getSpellDetails('${spell.id}')">${spell.name}</li>`
  });
  document.getElementById('api-spells').innerHTML = template;
}

function _drawActiveSpell() {
  let spell = store.State.activeSpell
  console.log(spell.id)
  if (spell) {
    document.getElementById("active-spells").innerHTML = spell.Template
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

  getSpellDetails(name) {
    SpellsService.getSpellDetails(name);
    console.log();

  }

  learn(_id) {
    SpellsService.learn(_id)
  }

  delete() {
    SpellsService.delete()
  }

  setActiveSpell(name) {
    SpellsService.setActiveSpell(name)
  }
}
