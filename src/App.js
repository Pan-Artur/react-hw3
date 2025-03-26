import "./App.css";

import user from "./json/user.json";
import data from "./json/data.json";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";

import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="App">
      <section className="Task1">
        <h2>Task 1</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section className="Task2">
        <h2>Task 2</h2>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <section className="task3">
        <h2>Task 3</h2>
        <FriendList friends={friends} />
      </section>
      <section className="task4">
        <h2>Task 4</h2>
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
}

export default App;
