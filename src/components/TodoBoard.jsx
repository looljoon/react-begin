import React from "react";
import TodoItem from "./TodoItem"
// 같은 폴더상이라 폴더명만

function TodoBoard(props){

    return(
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}
export default TodoBoard

// map이란 array에 있는 값을 하나하나 가져와 아이템으로 반환해줌.