import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
//provider, to provide global state to our app,
import { Provider } from "react-redux";

// got this error in console in browser
// react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more:
// ReactDOM.render(
//   <React.StrictMode>
//     {/* need to wrap the app with provider, same as context api */}
//     {/* need to pass in store, so now our store (global state) will be available to the app */}
//     {/* once added store in the provider, it is available to the entire app */}
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* need to wrap the app with provider, same as context api */}
    {/* need to pass in store, so now our store (global state) will be available to the app */}
    {/* once added store in the provider, it is available to the entire app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
