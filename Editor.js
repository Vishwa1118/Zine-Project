import React, { useState } from "react";

const Editor = () => {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h2>Collaborative Editor</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        cols="50"
      />
      <button onClick={() => alert("Saved!")}>Save</button>
    </div>
  );
};

export default Editor;
