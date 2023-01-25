
import React, { useState } from "react";

function MyForm() {
  const [userVisibleValue, setUserVisibleValue] = useState("");
  const hiddenValue = "hidden value";

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserVisibleValue(`${userVisibleValue} ${hiddenValue}`);
    //Submit the form here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userVisibleValue} onChange={(e) => setUserVisibleValue(e.target.value)} placeholder="Enter user-visible value" />
      <input type="hidden" value={hiddenValue} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

