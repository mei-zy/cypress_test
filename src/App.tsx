import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onPlusBtnClick = () => {
    if (count >= 10) return;
    setCount(count + 1);
  };

  const onMinusBtnClick = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const onResetBtnClick = () => {
    setCount(0);
  };

  return (
    <section style={{ width: "500px", margin: "40px auto" }}>
      <section style={{ display: "flex" }}>
        <button
          onClick={onMinusBtnClick}
          style={{ width: "60px", fontSize: "30px" }}
        >
          -
        </button>
        <div style={{ margin: "0px 40px", fontSize: "30px" }}>{count}</div>
        <button
          onClick={onPlusBtnClick}
          style={{ width: "60px", fontSize: "30px" }}
        >
          +
        </button>
      </section>
      <button onClick={onResetBtnClick}>Reset</button>
    </section>
  );
};

export default App;
