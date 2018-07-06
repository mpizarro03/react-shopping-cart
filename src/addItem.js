import React from 'react';
import ListItem from './listItem.js';

const AddItem = (props) => {
    return (
      <div className="container">
        <form>
          <label for="quantity">Quantity</label>
          <input type="number" max="50" name="Quantity"></input>
          <label for="type">Type</label>
          <select>
            {props.type.map(item => <ListItem name={item.name}/>
            )}
          </select>
        </form>
      </div>
    );
}
export default AddItem;
