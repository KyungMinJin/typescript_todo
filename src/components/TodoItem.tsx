import React from 'react';
import styled from 'styled-components';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

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

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <StyledItem>
      <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
        <span className='text' onClick={onToggle}>
          {todo.text}
        </span>
        <span className='remove' onClick={onRemove}>
          X
        </span>
      </li>
    </StyledItem>
  );
}

export default TodoItem;
