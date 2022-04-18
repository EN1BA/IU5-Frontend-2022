import React,{useState} from 'react'
import TodoList from './TodoList'
import styles from './/AddTodo_styles.css'

function AddTodo({todo,setTodo}){

    const [value,setValue] = useState('')

    function saveTodo(){
        setTodo( [...todo,{
            id:Math.random(1000000),
            title:value,
            status:true
        }])
        setValue('')
    }

    return(
        <div>
            <input className='inp'placeholder='Введите задачу' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className='inpbtn' onClick={saveTodo}>Сохранить</button>
        </div>
    )
}

export default AddTodo