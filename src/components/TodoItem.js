import React from 'react';
import {useRecoilState} from 'recoil';
import { todoListState } from '../recoil/TodoState';

const TodoItem = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };


  return(
    <div>
      <input type="text" value={item.text} onChange={editItemText}/>
      <input 
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemComplete}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;

const replaceItemAtIndex = (arr, idx, newValue) => {
  return [
    ...arr.slice(0, idx),
    newValue,
    ...arr.slice(idx+1),
  ];
};

const removeItemAtIndex = (arr, idx) => {
  return [
    ...arr.slice(0, idx),
    ...arr.slice(idx + 1)
  ];
};