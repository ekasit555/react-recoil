import React from 'react';
import {useRecoilValue} from 'recoil';
import { todoListStatsState } from '../recoil/TodoState';

const TodoListStats = () => {
  const {
    total,
    totalCompleted,
    totalUncompleted,
    percenCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percenCompleted * 100)

  return(
    <ul>
      <li>Total items: {total}</li>
      <li>Items Completed: {totalCompleted}</li>
      <li>Items not Completed: {totalUncompleted}</li>
      <li>Percent Completed: {formattedPercentCompleted}</li>
    </ul>
  )
};

export default TodoListStats;