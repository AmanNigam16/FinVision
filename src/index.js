import React from "react";
import ReactDOM from "react-dom/client";   //here 'react-dom/client' or 'react-dom/server' are also used when applicable(see d1.txt)
import "./index.css";
import App from "./App";            // u can also use './App.js' instead
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContextProvider><App /></ContextProvider>);              //This is going to make sure to hook our react application to the root div
