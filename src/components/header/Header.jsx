import css from "./Header.module.css"
import { useState } from "react"

const Header = (props) => {
 

    return (
        <div className={css.wrapper}>
            <h1 className={css.title}> ToDos ({props.todoDone} / {props.todoLength})</h1>
        </div>

    )
}
export default Header;