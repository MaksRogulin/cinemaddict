import { generateRandomArray } from '../utils.js';

const MAX_COMMENTS_NUMBER = 5;

const generateRandomComment = (type) => {
  const possibleComments = [
    {
      comment: 'Interesting setting and a good cast',
      emoji: 'smile',
      author: 'Tim Macoveev',
      "date": "2019-05-11T16:12:32.554Z"
    },
    {
      comment: 'Booooooooooring',
      emoji: 'sleeping',
      author: 'John Doe',
      "date": "2019-05-11T16:12:32.554Z"
    },
    {
      comment: 'Very very old. Meh',
      emoji: 'puke',
      author: 'John Doe',
      "date": "2019-05-11T16:12:32.554Z"
    },
    {
      comment: 'Almost two hours? Seriously?',
      emoji: 'angry',
      author: 'Ilya Reilly',
      "date": "2019-05-11T16:12:32.554Z"
    },
    {
      comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
      emoji: 'smile',
      author: 'Tim Macoveev',
      "date": "2019-05-11T16:12:32.554Z"
    }
  ];
  return {
    type,
    offers: generateRandomArray(possibleOffers, 0, MAX_OFFERS_NUMBER),
  };
};


const generateRandomOffers = (types) => {
  return types.map((type) => generateRandomOffer(type));
};


export { generateRandomOffers };
