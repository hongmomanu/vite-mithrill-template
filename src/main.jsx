import "./index.css";
import Count from "./count.jsx";
import Hello from "./Hello";
import { CountStore } from "./state";
var root = document.getElementById("app");
const state1 = new CountStore(1);
const state2 = new CountStore(2);
var parent = {
  view: () => {
    console.log("main render");
    return (
      <>
        <Count state={state1} />
        <Count state={state2} />
        <Hello />
      </>
    );
  },
};
m.mount(root, parent);
