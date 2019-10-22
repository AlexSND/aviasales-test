export default (time) => {
  const minutes = time % 60 < 10
    ? `0${time % 60}`
    : time % 60;

  const hours = (time - minutes) / 60 < 10
    ? `0${(time - minutes) / 60}`
    : (time - minutes) / 60;

  return `${hours}ч ${minutes}м`;
};
