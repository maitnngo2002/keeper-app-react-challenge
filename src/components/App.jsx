import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { isPropertySignature } from "typescript";

function App() {

  const [items, setItems] = useState([]);
  function addItem(item) {
    setItems((prevItems) => { return [...prevItems, item]});
  }
  function deleteItem(id) {
    setItems((prevItems) => { return prevItems.filter((item, index) => {
      return index !== id; 
    })});
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {items.map((item, index) => <Note key={index} id={index} onDelete={deleteItem} title={item.title} content={item.content}/>)}
      <Footer />
    </div>
  );
}

export default App;
