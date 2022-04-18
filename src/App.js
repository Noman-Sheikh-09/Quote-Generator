import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    let data = async () => {
      let resValue = await axios.get("http://api.quotable.io/random");
      setQuote(resValue.data);
    };
    data();
  }, []);
  const fetchData = async () => {
    let resValue = await axios.get("http://api.quotable.io/random");
    setQuote(resValue.data);
  };
  return (
    <div className="App">
      <div className="card-bg">
        <div className="card text-center my-5">
          <div className="card-body">
            <h5 className="card-title">{quote.author}</h5>
            <p className="card-text">{quote.content}</p>
            <button className="btn btn-primary" onClick={fetchData}>
              Go Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
