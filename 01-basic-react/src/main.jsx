import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}

const reactElement = {
  type : 'a',
  props:{
    href:"https://google.com",
    target:'_blank',
  },
  children:"Clicke me to vistit google"
}

const anotherElement = (
  <a href="https://google.com">click here to visit google</a>
)

const newReactElement = React.createElement(
  'a',
  {href:"https://google.com", target:'_blank', },
  'click here to visit google'
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <App/>
  //<MyApp />
  //MyApp()
  //reactElement
  //anotherElement
  //newReactElement

);
