import React from "react";

const NoMention = () => {
  return (
    <div className="no-suggestions">
      <textarea className={"comment"} />
      <p>
        <em>
          Error fetching user data. You can still comment but without
          autosuggestion functionality.
        </em>
      </p>
    </div>
  );
};

export default NoMention;
