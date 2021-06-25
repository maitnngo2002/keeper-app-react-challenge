import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [newItem, setNewItem] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const {name, value} = event.target;
    setNewItem(prevItem => {
      return {
      ...prevItem, [name]: value}
    });
  }
  function handleClick(event) {
    // call the onAdd in this file equals to calling the addItem in the App.jsx
    props.onAdd(newItem);
    setNewItem({title: "", content: ""});
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
      {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value={newItem.title}/>
)}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={newItem.content}/>
        <Zoom in={isExpanded}> 
          <Fab onClick={handleClick}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
