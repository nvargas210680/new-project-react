import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    async function getData() {
      const result = await fetch("/api");
      const msg = await result.text();
      console.log(msg);

      setMessage(msg);
    }

    getData();
  }, []);

  const [message, setMessage] = useState("!");

  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>style={{backgroundColor: color }}</div> */}
      <div>Hello Nick</div>
      <div>{message}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
