import { useState } from "react";
import "./App.css";
import Counterfn from "./Components/CounterFn/Counterfn";
import Buttons from "./Components/ReduxCounter/Buttons/Buttons";

import "bootstrap/dist/css/bootstrap.css";
import Layout from "./Components/Templates/Navbar/layout";
import TodoHome from "./Components/TodoList/TodoHome";
import { Test1 } from "./Components/practice/Test1";
import { HideShow } from "./Components/practice/HideShow";
import Counter from "./Components/practice/Counter";
import CounterDisplay from "./Components/practice/CounterDisplay";
import ButtonRedux from "./Components/practice/ButtonRedux";
import Form, { FormValid } from "./Components/practice/Forms/FormValid";
import { FormsValid } from "./Components/practice/Forms/FormsValid";

function App() {
  // const [toggle, setToggle] = useState(false);

  // const toggleHandler = () => {
  //   setToggle((prevToggle) => !prevToggle);
  // };
  return (
    // <div className="App">
    //   <button onClick={toggleHandler}> {!toggle ? "show" : "hide"} </button>
    //   {toggle && <Counterfn />}
    // </div>
    // <div className="App">
    //    <Buttons />
    //     <Counter />
    // </div>
    // <div className="App">
    //   <Layout />
    // </div>
    // <div className="App">
    //   <TodoHome />
    // </div>
    // <div className="App">
    //   <CounterDisplay />
    //   <ButtonRedux />
    // </div>
    <div className="App">
      <FormsValid />
    </div>
  );
}

export default App;
