import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1 className="text-green-700 text-6xl">Hello React World!</h1>
    </div>
  )
}

render(<App />, document.getElementById("root"));