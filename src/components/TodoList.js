import React from 'react';
import { useRecoilValue } from 'recoil';
import { filterTodoListState } from '../recoil/TodoState';
import TodoItemCreater from '../components/TodoItemCreater';
import TodoItem from './TodoItem';
import TodoListFilter from './TodoListFilter';
import TodoListStats from './TodoListStats';

const TodoList = () => {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filterTodoListState);

  return(
    <>
      <TodoListFilter/>
      <TodoItemCreater/>
      <TodoListStats/>
      {
        todoList.map((item) => (
          <TodoItem 
            key={item.id}
            item={item}
          />
        ))
      }
    </>
  );
}

export default TodoList;

