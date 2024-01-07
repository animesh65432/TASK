import { useState } from "react";
import User from "./Comoponent/User";

function App() {
  const [count, setCount] = useState(0);

  const ondataApp = (obj) => {
    console.log(obj);
  };

  return (
    <>
      <User ondataUser={ondataApp} />
    </>
  );
}

export default App;
