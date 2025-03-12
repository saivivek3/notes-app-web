import React, { useRef } from "react";

function AutoResizeTextarea() {
  const textareaRef = useRef(null);
  const [text, setText] = useState(initialText);
  

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={1}
      style={{
        width: "100%",
        minHeight: "100px",
        overflow: "hidden",
        resize: "none",
        fontSize: "14px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          marginTop: "10px",
          whiteSpace: "pre-line", // This converts \n into line breaks
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          background: "#f9f9f9",
        }}
      >
        {text}
      </div>
    </textarea>
  );
}

export default AutoResizeTextarea;
