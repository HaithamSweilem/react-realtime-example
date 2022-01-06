import './App.css';
import {useEffect, useState} from "react";
import Api from "./Api";

const App = () => {

  const [timestamp, setTimestamp] = useState("")

  useEffect(() => {

    Api.subscribeToTimer((timestamp) => {
      setTimestamp(timestamp);
    })

  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <h2>Our Awesome Drawing App</h2>
        Timer timestamp value: {timestamp}
      </div>
    </div>
  );
}

export default App;
