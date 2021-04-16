import React from "react";

import "./App.css";

import user from "./social-profile/user.json";
import friends from "./friend-list/friends.json";
import Profile from "./components/Profile";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
