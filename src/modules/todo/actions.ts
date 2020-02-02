import { createStandardAction, createAction } from 'typesafe-actions';

// 액션 type
export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO, action => (text: string) =>
  action({
    id: nextId++,
    text
  })
);
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
