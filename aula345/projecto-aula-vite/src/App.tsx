import "./App.css";
import UserProfile from "./components/UserProfile";
import Counter from "./components/counter";
import Clock from "./components/Clock";

function App() {
  return(
    <div className="main-container"> 
    <UserProfile />
    <Counter />
    <Clock />
    </div>
  )
}

export default App; 