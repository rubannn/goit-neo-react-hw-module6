import "./App.css";
import { useState, useEffect } from "react";

import Description from "./Description/Description";
import Notification from "./Notification/Notification";

function App() {

  return (
    <div className="container">
      <Description />
      <Notification />
    </div>
  );
}

export default App;
