import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [itemList, setItemList] = useState([])
  return (
    <div className="app">
      <Header />
      <ListingsContainer itemList={itemList} setItemList={setItemList}/>
    </div>
  );
}

export default App;
