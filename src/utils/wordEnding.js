export default (num, words) => {
  let result = '';

  if (num === 0 || num === undefined) {
    result = `без ${words[2]}`;
  } else if (num === 1 || num % 10 === 1) {
    result = `${num} ${words[0]}`;
  } else if ((num + 10) % 10 === 2 || (num + 10) % 10 === 3 || (num + 10) % 10 === 4) {
    result = `${num} ${words[1]}`;
  } else {
    result = `${num} ${words[2]}`;
  }

  return result;
};
