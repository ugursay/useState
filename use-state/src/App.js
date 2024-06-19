import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirtsName] = useState("uğur");
  const [names, setNames] = useState(["Uğur", "Betül", "Nuray"]);
  const [userInfo, setUserInfo] = useState({ name: "Uğur", pass: "1234" });
  const [boole, setBoole] = useState(true);
  const [count, setCount] = useState(0);

  // const Change = () => {
  //   setFirtsName("Betül");
  // };

  const arttir = () => {
    if (count < 10) setCount(count + 1);
  };

  const Azalt = () => {
    if (count > 0) setCount(count - 1);
  };

  console.log("Component Render Edildi");

  return (
    <div style={{ textAlign: "center", fontSize: "50px" }}>
      {/* <div>{firstName}</div> */}
      {/* {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))} */}

      {/* {boole ? (
        <div>
          {userInfo.name} <br></br>
          {userInfo.pass}
        </div>
      ) : (
        <div>Yetkiniz Yok</div>
      )} */}
      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttır</button>
      </div>
      <div>
        <button onClick={Azalt}>Azalt</button>
      </div>
      <div>{/* <button onClick={Change}>İsmi Değiştir</button> */}</div>
    </div>
  );
}

export default App;
