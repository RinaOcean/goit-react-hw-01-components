import React from "react";

import "./App.css";

import friends from "./friend-list/friends.json";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
