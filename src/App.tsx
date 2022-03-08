import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null as any);
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 1000);
  }, []);

  return (
    <div>
      {data && <div>data</div>}
      <h1>Hello world</h1>
      <button>Добавить</button>
      <input type="text" placeholder="input..." />
    </div>
  );
}

export default App;
