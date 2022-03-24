import { createModal } from '../util/util.js'
import { Note } from './data.js';
import { addNotes, allNodes } from './logic.js'

const cards: HTMLDivElement = document.querySelector('#cards')!
const addBtn: HTMLButtonElement = document.querySelector('#addBtn')!

// modal
const _m: HTMLElement = document.querySelector('#add-modal')!
const title: HTMLInputElement = document.querySelector('#title')!
const text: HTMLInputElement = document.querySelector('#text')!
export const createBtn: HTMLElement = document.querySelector('#createBtn')!

// npm i @types/bootstrap
const modal = createModal(_m)

addBtn.onclick = () => {
  modal.show()
}

createBtn.onclick = () => {
  modal.hide()

  let Olimjan: Note = {
    title: title.value,
    text: text.value,
    data: new Date().toDateString()
  }

  addNotes(Olimjan)
  renderAll()
}


export function renderAll() {
  cards.innerHTML = ''
  let all = allNodes()
  for (const note of all) {
    render(note)
  }
}

export function render(note: Note) {

  let card = document.createElement("div");
  card.className = "card";
  card.style.width = "18rem"

  let cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column gap-2";

  let title = document.createElement("h4");
  title.innerText = note.title;

  let text = document.createElement("div");
  text.className = "card-text";
  text.innerText = note.text;

  let hr = document.createElement("hr")

  let span = document.createElement("span")
  span.style.fontSize = '12px'
  span.innerText = note.data

 let delet = document.createElement('button');
  delet.className = "btn btn-primary";
  delet.innerText = 'Delete'


  cards.appendChild(card)
  card.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(hr);
  cardBody.appendChild(span);
  cardBody.appendChild(delet);
 
 
}
 


