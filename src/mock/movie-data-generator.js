import { TITLES, ALTERNATIVE_TITLES, RATINGS, POSTERS, AGE_RATINGS, DIRECTORS, RUNTIMES, GENRES, COMMENTS, DATES, EMOTIONS, COUNTRIES } from "../const";
import { generateRandomArray, getRandomInteger, getRandomArrayElement } from "../utils";
import { AUTHORS } from "../const";

const Gap = {
    MIN: 1,
    MAX: 5,
};

const wGap = {
    MIN: 1,
    MAX: 3,
};

const generateRandomComment = () => {
    const author = getRandomArrayElement(AUTHORS);
    const comment = getRandomArrayElement(COMMENTS);
    const date = getRandomArrayElement(DATES);
    const emotion = getRandomArrayElement(EMOTIONS);

    return {
        author,
        comment,
        date,
        emotion,
    };
};

const generateRandomRelease = () => {
    const date = getRandomArrayElement(DATES);
    const country = getRandomArrayElement(COUNTRIES);
    return {
        date,
        country,
    };
};


const generateDescription = (interval) => {
    const descriptions = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Cras aliquet varius magna, non porta ligula feugiat eget.',
        'Fusce tristique felis at fermentum pharetra.',
        'Aliquam id orci ut lectus varius viverra.',
        'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
        'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
        'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
        'Sed sed nisi sed augue convallis suscipit in sed felis.',
        'Aliquam erat volutpat.',
        'Nunc fermentum tortor ac porta dapibus.',
        'In rutrum ac purus sit amet tempus.',
    ];
    return generateRandomArray(descriptions, interval.MIN, interval.MAX).join(' ');
};

const generateWriters = (interval) => {
    const writers = ['Takeshi Kitano', 'Joe Swerling', 'Lindsley Parsons', 'Qlenville Mareth', 'Benjamin Glazer', 'Tom Ford', 'Anne Wiston'];
    return generateRandomArray(writers, interval.MIN, interval.MAX).join(', ');
};

const generateActors = (interval) => {
    const actors = ['Frank Sinatra', 'Eleanor Parker', 'Kim Novak', 'Erich von Stroheim', 'Hal Skelly', 'Nancy Skelly', 'James Stewart'];
    return generateRandomArray(actors, interval.MIN, interval.MAX).join(', ');
};

const generateRandomUser = () => {
    const watching_date = getRandomArrayElement(DATES);
    return {
        watchlist: Boolean(getRandomInteger()),
        already_watched: Boolean(getRandomInteger()),
        watching_date,
        isFavorite: Boolean(getRandomInteger()),
    };
};

export const generateMovieData = () => {
    const title = getRandomArrayElement(TITLES);
    const alternative_title = getRandomArrayElement(ALTERNATIVE_TITLES);
    const total_rating = getRandomArrayElement(RATINGS);
    const poster = getRandomArrayElement(POSTERS);
    const age_rating = getRandomArrayElement(AGE_RATINGS);
    const director = getRandomArrayElement(DIRECTORS);
    const runtime = getRandomArrayElement(RUNTIMES);
    const genre = getRandomArrayElement(GENRES);
    return {
        comments: generateRandomComment(),
        title,
        alternative_title,
        total_rating,
        poster,
        age_rating,
        director,
        writers: generateWriters(wGap),
        actors: generateActors(wGap),
        release: generateRandomRelease(),
        runtime,
        genre,
        description: generateDescription(Gap),
        user_details: generateRandomUser(),
    };
};