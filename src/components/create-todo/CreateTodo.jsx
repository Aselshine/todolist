import  css from './CreateTodo.module.css'

const CreateToDo = () =>{
    return (
        <div>
            <input className= {css.enter} placeholder="Enter todo here" type="text" />
            <button className={css.submit}>Submit</button>
         </div>
    );
};



export default CreateToDo;