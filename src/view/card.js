import AbstractView from "./abstract";

const createCardTemplate = (card) => {
  const { title, total_rating, poster, runtime, description } = card;

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${total_rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">1929</span>
      <span class="film-card__duration">${runtime}</span>
      <span class="film-card__genre"></span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">5 comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class Card extends AbstractView {
  constructor(card) {
    super();
    this._card = card;

    this._popupClickHandler = this._popupClickHandler.bind(this);
  }

  getTemplate() {
    return createCardTemplate(this._card);
  }

  _popupClickHandler(evt) {
    evt.preventDefault();
    this._callback.popupClick();
  }

  setPopupClickHandler(callback) {
    this._callback.popupClick = callback;
    this.getElement().querySelector('.film-card__poster').addEventListener('click', this._popupClickHandler);
    this.getElement().querySelector('.film-card__title').addEventListener('click', this._popupClickHandler);
    this.getElement().querySelector('.film-card__comments').addEventListener('click', this._popupClickHandler);
  }
}