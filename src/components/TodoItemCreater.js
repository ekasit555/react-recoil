import React, {useState} from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/TodoState';

const TodoItemCreater = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  const addItem = () => {
    setTodoList((previousState) => 
      [
        ...previousState,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]
    );
    setInputValue('');
  };


  return(
    <div>
      <input type="text" value={inputValue} onChange={onChange}/>
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreater;


let id= 0;
const getId = () => id++;