import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import friends from "./friend-list/friends.json";
import FriendList from "./components/FriendList";
import FriendListItem from "./components/FriendListItem";

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
      <FriendList />
    </div>
  );
}

export default App;
