import css from "./ToDoItem.module.css"

const ToDoItem = () => {

    return (
       <div> <input className={css.checkbox} type="checkbox" checked /> ToDoItem
     
        <button className={css.edit}>Edit</button>
        <button className={css.delete}>Delete</button>
        
       </div>
      
    )
}
export default ToDoItem