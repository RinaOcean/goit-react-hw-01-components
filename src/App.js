import React from "react";

import "./App.css";

import user from "./social-profile/user.json";
import statistics from "./statistics/statistical-data";
import friends from "./friend-list/friends.json";

import Profile from "./components/Profile.jsx";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList.jsx";

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
      <Statistics title="Upload stats" stats={statistics} />
      {/* <Statistics stats={statistics} /> */}
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
