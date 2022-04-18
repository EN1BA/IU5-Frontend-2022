import react,{useState} from "react"
import s from './TodoList.module.css'
import styles from './TodoList_styles.css'

function TodoList({todo,setTodo}){

    const [edit,setEdit] = useState(null)
    const [value,setValue] = useState('')

    function deleteTodo(id){
        let newTodo=[...todo].filter(item=>item.id!=id)
        setTodo(newTodo)
    }

    function statusTodo(id){
        let newTodo=[...todo].filter(item=>{
            if (item.id==id){
                item.status=!item.status;
            }
            return item;
        })
        setTodo(newTodo)
    }

    function editTodo(id,title){
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id){
        let newTodo=[...todo].map(item=>{
            if (item.id==id){
                item.title=value
            }
            return item;
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return(
        <div>
            {
                todo.map(item=>(
                    <div className='list' key={item.id}>
                        {
                            edit==item.id ?
                                <div>
                                    <input className="editinp" value={value} onChange={(e)=>setValue(e.target.value)}/>
                                </div>:
                                <div className={!item.status ? s.close :''}>{item.title}</div>
                        }

                        {
                            edit==item.id?
                                <div>
                                    <button className="btnsave" onClick={()=>saveTodo(item.id)}>Сохранить</button>
                                </div>:
                                <div className="buttons">
                                    <button className="btnedit" onClick={ ()=>editTodo(item.id,item.title)}>Редактировать</button>
                                    <button className="btndel" onClick={ ()=>deleteTodo(item.id)}>Удалить</button>
                                    <button className="btnst" onClick={ ()=>statusTodo(item.id)}>Выполнено?</button>
                                </div>
                        }
                    </div>
                ))

                }
        </div>
    )
}

export default TodoList