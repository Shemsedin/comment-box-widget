import React, { useState, useEffect } from "react";
import CommentWidget from "./components/CommentWidget";
import "./index.css";
import Config from "./config/config";
import NoMention from "./components/NoMention";

function App() {
  const [users, setUsers] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    // We use second callback as any errors that might've occurred during
    // useState maybe left unhandled.
    fetch(Config.ENDPOINT.USER_DATA)
      .then((response) => response.json())
      .then(
        (response) => {
          return setUsers(response);
        },
        (error) => {
          if (error) {
            return setHasErrors(true);
          }
        }
      );
  });

  // If there is an error while fetching user data we render a different
  // component that has the comment area so user can still comment but without
  // the autosuggestion functionality since there will be no user data.
  return (
    <div>
      <h1>Comment Box Widget</h1>
      <p>
        Comment as you would and then when you want to mention a user, type
        <b>@</b> and then start typing a user's name.
      </p>
      {hasErrors ? <NoMention /> : <CommentWidget users={users} />}
    </div>
  );
}

export default App;
