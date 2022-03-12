import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null as any);
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 1000);
  }, []);

  return (
    <div>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div>data</div>}
      <h1>Hello world</h1>
      <button
        data-testid="toggle-btn"
        onClick={() => setToggle((prev) => !prev)}
      >
        Добавить
      </button>
      <input type="text" placeholder="input..." />
    </div>
  );
}

export default App;
