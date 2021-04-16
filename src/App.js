import React from "react";

import "./App.css";

import user from "./data/user";
import statistics from "./data/statistical-data";
import friends from "./data/friends";
import transactions from "./data/transactions";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionsHistory from "./components/TransactionsHistory/TransactionHistory";

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
      <TransactionsHistory items={transactions} />
    </div>
  );
}

export default App;
