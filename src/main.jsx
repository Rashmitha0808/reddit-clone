import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Post from "./Pages/Post/Post.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* <div className="flex justify-start  bg-[#dfecf2]">
          <Post />
        </div> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
