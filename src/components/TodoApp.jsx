import Header from './Header';
import TodosLogic from './TodosLogic';
import '../styles/main.css';

const TodoApp = () => {
    return (
        <div className="wrapper">
        <div className="todos">
      <Header />
      <TodosLogic />
      </div>
      </div>
    ); 
  };
  export default TodoApp;
  