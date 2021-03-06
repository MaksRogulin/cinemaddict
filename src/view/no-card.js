import AbstractView from "./abstract";

const createNoCardTemplate = () => {
  return `<h2 class="films-list__title">There are no movies in our database</h2>`;
};

export default class NoCard extends AbstractView {
  getTemplate() {
    return createNoCardTemplate();
  }
}