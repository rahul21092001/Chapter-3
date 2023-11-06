import React, { useRef, useEffect } from "react";

const FocusBox = () => {
  
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>Auto-Focus Input Box</h1>
      <h2>When Page Reload</h2>
      <input ref={inputRef} />
      <hr />
    </div>
  );
};

export default FocusBox;
