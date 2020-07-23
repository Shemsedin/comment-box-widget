const insertMention = (textAreaValue, startPosition, text, textLength) => {
  return `${textAreaValue.slice(0, startPosition)}${text}${textAreaValue.slice(
    startPosition + textLength,
    textAreaValue.length
  )}`;
};

export default insertMention;
