import './index.css';
import TodoApp from './components/TodoApp';
import { useState } from 'react';

function App() {
  return (
     <section className="containerTodoApp">
        <TodoApp />
     </section>   
  ); 
}

export default App;
