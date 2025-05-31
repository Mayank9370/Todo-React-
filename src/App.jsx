import { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContext from "./contex/TodoContext";
import todoReducer from "./reducers/reducers";
import TodoDispatchContext from "./contex/TodoDispatchContext";

function App() {
  // const [list,setList]  = useState([
  //   { id: 1, todoData: "Todo 1",finished : false },
  //   { id: 2, todoData: "Todo 2",finished : false},
  // ]);
  const [list, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}
export default App;
