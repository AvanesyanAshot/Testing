import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null as any);
  const [toggle, setToggle] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 1000);
  }, []);

  return (
    <div>
      <div data-testid="value-elem">{value}</div>
      {toggle && <div data-testid="toggle-elem">value</div>}
      {data && <div>data</div>}
      <h1>Hello world</h1>
      <button
        data-testid="toggle-btn"
        onClick={() => setToggle((prev) => !prev)}
      >
        Добавить
      </button>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="input..."
      />
    </div>
  );
}

export default App;
