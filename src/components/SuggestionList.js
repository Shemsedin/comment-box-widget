import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const UserName = styled.span`
  margin-left: 25px;
`;

const SuggestionsUl = styled.ul`
  position: absolute;
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  height: 415px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);
  border-radius: 6px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px;
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left + "px"};
  li {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
`;

const SuggestionList = React.forwardRef((props, ref) => {
  return (
    <SuggestionsUl top={props.top} left={props.left}>
      {props.filteredSuggestions.map((user, index) => {
        let className;

        // Flag the active suggestion with a class
        if (index === props.activeSuggestion) {
          className = "suggestion-active";
        }

        return (
          // Using  unique identifier for key as recommended by React see @link
          // https://reactjs.org/docs/lists-and-keys.html
          <li
            className={className}
            key={user.username.toString()}
            onClick={props.onClick}
            ref={ref}
          >
            <Avatar src={user.avatar_url} />
            <UserName>{user.name}</UserName>
          </li>
        );
      })}
    </SuggestionsUl>
  );
});

export default SuggestionList;
