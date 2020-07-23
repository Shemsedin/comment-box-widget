import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Config from "../config/config";
import InputTrigger from "react-input-trigger";
import SuggestionList from "./SuggestionList";
import getSortedSuggestions from "../util/sort-suggestions";
import insertMention from "../util/insert-mention";
import CommentWrapper from "./CommentWrapper";

class CommentWidget extends Component {
  static propTypes = {
    users: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    users: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      top: null,
      left: null,
      startPosition: null,
      isTriggered: false,
    };
  }

  onToggle = (metaInformation) => {
    const { hookType, cursor } = metaInformation;

    if (hookType === "start") {
      this.setState({
        filteredSuggestions: [],
        showSuggestions: true,
        left: cursor.left,
        top: cursor.top + cursor.height,
        startPosition: cursor.selectionStart,
        isTriggered: true,
      });
    }
    if (hookType === "cancel") {
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        top: null,
        left: null,
        startPosition: null,
      });
    }
  };

  // This handles the event when users starts typing after the trigger event
  // i.e. when user has pressed the character that triggers the user mention in
  // our case '@'.
  onTypeAfterTrigger = (metaInformation) => {
    const { users } = this.props;
    const userInput = metaInformation.text;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = getSortedSuggestions(users, userInput);

    this.setState({
      filteredSuggestions,
      userInput: metaInformation.text,
    });
  };

  // Handles mouse click selection from the list of suggestions.
  onClick = (e) => {
    const { startPosition, textAreaValue } = this.state;
    const newText = insertMention(
      textAreaValue,
      startPosition,
      e.currentTarget.innerText,
      e.currentTarget.innerText.length
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      left: null,
      top: null,
      startPosition: null,
      textAreaValue: newText,
      isTriggered: false,
    });
    this.endTriggerHandler();
  };

  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions, isTriggered } = this.state;

    // The following logic only happens if the user has pressed '@'.
    if (isTriggered) {
      if (e.keyCode === Config.KEY_CODES.KEYUP) {
        e.preventDefault();
        if (activeSuggestion === 0) {
          return;
        }
        this.setState({ activeSuggestion: activeSuggestion - 1 });
      } else if (e.keyCode === Config.KEY_CODES.KEYDOWN) {
        if (activeSuggestion - 1 === filteredSuggestions.length) {
          return;
        }
        this.setState({ activeSuggestion: activeSuggestion + 1 });
      } else if (e.keyCode === Config.KEY_CODES.ENTER) {
        e.preventDefault();

        const { startPosition, textAreaValue } = this.state;
        const newText = insertMention(
          textAreaValue,
          startPosition,
          filteredSuggestions[activeSuggestion].name,
          filteredSuggestions[activeSuggestion].name.length
        );

        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          left: null,
          top: null,
          startPosition: null,
          textAreaValue: newText,
          isTriggered: false,
        });
        this.endTriggerHandler();
      }
    }
  };

  handleTextareaInput = (event) => {
    const { value } = event.target;
    this.setState({
      textAreaValue: value,
    });
  };

  handleTrigger = () => {
    return { keyCode: Config.KEY_CODES.TRIGGER_MENTION, shiftKey: true };
  };

  render() {
    const {
      handleTrigger,
      onClick,
      onKeyDown,
      state: { filteredSuggestions, showSuggestions, userInput },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <SuggestionList {...this.state} onClick={onClick} />
        );
      }
    }

    return (
      <Fragment>
        <CommentWrapper>
          <InputTrigger
            trigger={handleTrigger()}
            onStart={(metaData) => this.setState(this.onToggle(metaData))}
            onType={(metaData) => {
              this.setState(this.onTypeAfterTrigger(metaData));
            }}
            endTrigger={(endTriggerHandler) => {
              this.endTriggerHandler = endTriggerHandler;
            }}
          >
            <textarea
              className={"comment"}
              onChange={(e) => {
                this.setState(this.handleTextareaInput(e));
              }}
              onKeyDown={onKeyDown}
              value={this.state.textAreaValue}
            />
          </InputTrigger>
          {suggestionsListComponent}
        </CommentWrapper>
      </Fragment>
    );
  }
}

export default CommentWidget;
