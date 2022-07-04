import AbstractView from "./abstract";

const createFilmsList = () => {
  return `<div class="films-list"></div>`;
};

export default class FilmsList extends AbstractView {
  getTemplate() {
    return createFilmsList();
  }
};