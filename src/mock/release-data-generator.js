import { generateRandomArray } from "../utils.js";

const MAX_RELEASES_NUMBER = 1;

const generateRandomReleaseData = () => {
  const possibleReleases = [
    {
      release_date: '2019-05-11T00:00:00.000Z',
      release_country: 'Finland'
    },
    {
      release_date: '2019-05-11T00:00:00.000Z',
      release_country: 'Finland'
    },
    {
      release_date: '2019-05-11T00:00:00.000Z',
      release_country: 'Finland'
    },
    {
      release_date: '2019-05-11T00:00:00.000Z',
      release_country: 'Finland'
    },
    {
      release_date: '2019-05-11T00:00:00.000Z',
      release_country: 'Finland'
    },
    {
      release_date: '2019-05-11T00:00:00.000Z',
      release_country: 'Finland'
    },
    {
      release_date: '2019-05-11T00:00:00.000Z',
      release_country: 'Finland'
    }
  ];
  return {
    releases: generateRandomArray(possibleReleases, MAX_RELEASES_NUMBER),
  };
};

const generateRandomReleases = () => {
  return generateRandomReleaseData();
};

export { generateRandomReleases };