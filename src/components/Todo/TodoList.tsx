import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../../modules/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;
