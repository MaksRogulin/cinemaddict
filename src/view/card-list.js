import AbstractView from "./abstract";

const createCardList = () => {
  return `<div class="films-list__container"></div>`;
};

export default class CardList extends AbstractView {
  getTemplate() {
    return createCardList();
  }
};