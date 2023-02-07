import "./App.css";
import Appheader from "./components/Appheader";
import Todolist from "./components/Todolist";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState([])

  function deleteList(todoList){
    console.log("id",todoList)
    const updateTodos = lists.filter((list)=> list.todoList !== todoList)
    setLists(updateTodos)
  }

  const todoLists = [
    {
      title: 'clean house'
    },
    {
      title: 'sitdown'
    },
    {
      title: 'work'
    },
    {
      title: 'sleep'
    },
    {
      title: 'walk'
    }
  ]

  const todoListElement = todoLists.map((todoList,index) => {
    return <Todolist todoList={todoList} key={index} deleteList={deleteList}/>
  })
  
  return (
    <div className="App">
      <Appheader />
      {todoListElement}
    </div>
  );
}

export default App;
