import { useState } from "react";
import "./App.css";
import Body from "./bigPartsOfWeb/js/body";
import Header from "./bigPartsOfWeb/js/header.js";
import PostHandlePopup from "./components/js/post-handle-popup";

function App() {
  const [popupOn, setPopupOn] = useState(false)
    return (
      <div className="App">
        <Header />
        <Body popupOn = {popupOn} setPopupOn = {setPopupOn} />
        <div className={popupOn === true ? "pop-up-wrap" : "pop-up-wrap off"}>
        <PostHandlePopup  popupOn = {popupOn} setPopupOn = {setPopupOn}/>
        </div>
      </div>
    );
  }


export default App;
