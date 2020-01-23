import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTodo } from '../modules/todo';

export default function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}
