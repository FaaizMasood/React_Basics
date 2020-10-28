import "./App.css";
import Profile from "./Profile";
import AnotherProfile from "./AnotherProfile";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Profile />
      <AnotherProfile text={{ name: "Peter" }} />
    </div>
  );
}

export default App;
