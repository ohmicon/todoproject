import "./App.css";
import Appheader from "./components/Appheader";
import Todolist from "./components/Todolist";
import { useState } from "react";

function App() {



  const todoLists = [
    {
      title: 'clean house',
      id: "1"
    },
    {
      title: 'sitdown',
      id: "2"
    },
    {
      title: 'work',
      id: "3"
    },
    {
      title: 'sleep',
      id: "4"
    },
    {
      title: 'walk',
      id: "5"
    }
  ]

  const [lists, setLists] = useState(todoLists)

  const todoListElement = lists.map((todoList,index) => {
    return <Todolist  todoList={todoList} key={index} deleteList={deleteList}/>
  })

    function deleteList(todoListId){
    console.log("todoListId",todoListId)
    const updateTodos = lists.filter((list)=> list.id !== todoListId.id)
    setLists(updateTodos)
    console.log(updateTodos)
  }
  
  return (
    <div className="App">
      <Appheader />
      {todoListElement}
    </div>
  );
}

export default App;
