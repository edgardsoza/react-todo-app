import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import InputTodo from './InputTodo';
import TodosList from './TodosList';


const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

    return (
      <div>
          <ul>
          <InputTodo addTodoItem={ addTodoItem }/>
          <TodosList todosProps={todos} setTodos={setTodos} delTodo={ delTodo }/>
        </ul>
        </div>
  );
};
  export default TodosLogic;
