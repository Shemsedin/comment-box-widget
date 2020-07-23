const getSortedSuggestions = (users, userInput) => {
  return users
    .filter(
      (user) => user.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )
    .map((user) => user);
};

export default getSortedSuggestions;
