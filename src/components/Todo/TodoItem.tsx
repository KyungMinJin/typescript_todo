import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../modules/todo';

const StyledItem = styled.div`
  .TodoItem .text {
    cursor: pointer;
  }

  .TodoItem.done .text {
    color: #999999;
    text-decoration: line-through;
  }

  .TodoItem .remove {
    color: red;
    margin-left: 4px;
    cursor: pointer;
  }
`;

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  console.log(todo.id);
  const handleToggle = () => {
    onToggle(todo.id);
  };
  const handleRemove = () => {
    onRemove(todo.id);
  };
  return (
    <StyledItem>
      <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
        <span className="text" onClick={handleToggle}>
          {todo.text}
        </span>
        <span className="remove" onClick={handleRemove}>
          X
        </span>
      </li>
    </StyledItem>
  );
}

export default TodoItem;
