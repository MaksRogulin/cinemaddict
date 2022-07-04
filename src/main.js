import UserNameView from './view/user-name.js';
import MainMenuView from './view/main-menu.js';
import CardListView from './view/card-list.js';
import CardView from './view/card.js';
import PopupView from './view/popup.js';
import ButtonShowMoreView from './view/btn-show.js';
import NoCardView from './view/no-card.js';

import {render, RenderPosition, replace, remove} from './utils/render.js';
// import {generateRandomArray, getRandomInteger, getRandomArrayElement, createElement, render, RenderPosition} from './utils';
import { generateMovieData } from './mock/movie-data-generator.js';

const MOVIE_COUNT = 20;

const cards = new Array(MOVIE_COUNT).fill().map(generateMovieData);

const siteBodyElement = document.querySelector('.page-body');

const userName = siteBodyElement.querySelector('.header');
render(userName, new UserNameView().getElement(), RenderPosition.BEFOREEND);

const filmsListContainer = document.querySelector('.films-list');

const renderBoard = (filmsListContainer, cards) => {
  const renderCard = (cardListElement, card) => {
    const cardComponent = new CardView(card);
    const popupComponent = new PopupView(card);
  
    const replaceCardToPopup = () => {
      siteBodyElement.appendChild(popupComponent.getElement(), cardComponent.getElement());
      // replace(popupComponent, cardComponent);
    };
  
    const replacePopupToCard = () => {
      // siteBodyElement.removeChild(popupComponent.getElement());
      replace(cardComponent, popupComponent);
    };
  
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replacePopupToCard();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
  
    // cardComponent.getElement().querySelector('.film-card__poster').addEventListener('click', () => {
    //   replaceCardToPopup();
    //   siteBodyElement.classList.add('hide-overflow');
    //   document.addEventListener('keydown', onEscKeyDown);
    // });
  
    // cardComponent.getElement().querySelector('.film-card__title').addEventListener('click', () => {
    //   replaceCardToPopup();
    //   siteBodyElement.classList.add('hide-overflow');
    // });
  
    // cardComponent.getElement().querySelector('.film-card__comments').addEventListener('click', () => {
    //   replaceCardToPopup();
    //   siteBodyElement.classList.add('hide-overflow');
    // });

    cardComponent.setPopupClickHandler(() => {
      replaceCardToPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });
  
    // popupComponent.getElement().querySelector('.film-details__close-btn').addEventListener('click', () => {
    //   replacePopupToCard();
    //   siteBodyElement.classList.remove('hide-overflow');
    //   document.removeEventListener('keydown', onEscKeyDown);
    // });

    popupComponent.setPopupHandler(() => {
      replacePopupToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    });
  
    render(cardListElement, cardComponent, RenderPosition.BEFOREEND);
  };
  
  if (cards.length === 0) {
    render(filmsListContainer, new NoCardView(), RenderPosition.BEFOREEND);
  } else {
    const menuElement = siteBodyElement.querySelector('.main');
    render(menuElement, new MainMenuView(), RenderPosition.AFTERBEGIN);
    
    const cardListComponent = new CardListView();
    render(filmsListContainer, cardListComponent.getElement(), RenderPosition.BEFOREEND);
  
    for (let i = 0; i < MOVIE_COUNT; i++) {
      renderCard(cardListComponent.getElement(), cards[i]);
    }
  }

  const btnShow = siteBodyElement.querySelector('.films-list');
  render(btnShow, new ButtonShowMoreView(), RenderPosition.BEFOREEND);
};

renderBoard(filmsListContainer, cards);