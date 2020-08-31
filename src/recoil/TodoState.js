import { atom, selector } from 'recoil';

const todoListState = atom({
  key: 'todoListState',
  default: [],
});

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: "Show All"
});

const filterTodoListState = selector({
  key: 'filterTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const totalCompleted = todoList.filter((item) => item.isComplete).length;
    const totalUncompleted = total - totalCompleted;
    const percenCompleted = total === 0 ? 0 : totalCompleted / total;

    return {
      total,
      totalCompleted,
      totalUncompleted,
      percenCompleted,
    }
  }
});

export { 
  todoListState, 
  todoListFilterState,
  filterTodoListState,
  todoListStatsState
};