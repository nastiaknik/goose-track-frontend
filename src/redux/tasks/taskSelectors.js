import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.tasks.tasks;
export const selectMonth = state => state.tasks.date;
export const selectIsLoading = state => state.tasks.status;

//==========>Update after MAX pull request with CALENDAR component
export const selectTasksByDay = day =>
  createSelector(selectTasks, tasks =>
    tasks.filter(task => {
      const taskDate = new Date(task.taskDate).toLocaleDateString();
      const userSelectedDay = new Date(day).toLocaleDateString();
      return taskDate === userSelectedDay;
    })
  );
