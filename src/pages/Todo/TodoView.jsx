import styles from "./TodoView.module.scss";
import {ButtonView} from "../../components/Button/ButtonView";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {BUTTON} from "../../constants/constants";
import Switch from 'react-switch';
import {useContext} from "react";
import {ThemeContext} from "./Todo";

export const TodoView = ({
                             changeInput,
                             userValue,
                             handlerAddTask,
                             todos,
                             isCreatedTodo,
                             handlerDragStart,
                             handlerDragEnd,
                             handlerDragOver,
                             handlerDrop,
                             isDragEnd,
                             isOver
                         }) => {

    const theme = useContext(ThemeContext);

    return (
        <section id={styles['todo']}>
            <div className={styles['todo-container']} style={{backgroundColor: theme.theme}}>
                <div className={styles['todo-row']}>
                    <input className={styles['input']} type="text" placeholder={'New task'}
                           onChange={changeInput}
                           value={userValue}
                    />
                    <ButtonView click={handlerAddTask}
                                text={'Create'}
                                variant={BUTTON.ADD}
                    >
                        <FontAwesomeIcon icon={faPlus}/>
                    </ButtonView>
                </div>

                <div>
                    {isCreatedTodo && <div className={styles['todo-items']}>
                        {
                            todos.map((todo) => (
                                <div draggable={'true'}
                                     onDragStart={() => handlerDragStart(todo.id)}
                                     onDragEnd={handlerDragEnd}
                                     onDragOver={(e) => handlerDragOver(e, todo)}
                                     onDrop={() => handlerDrop(todo.id)}
                                     className={`${styles['todo-item']}
                                 ${isOver(todo) ? styles.over : ''}
                                 ${isDragEnd ? styles.dragend : ''}
                                 `}

                                     key={todo.id}
                                >
                                    {todo.task}
                                </div>
                            ))}
                    </div>
                    }
                </div>

                <div className={styles['toggle-switch']}>
                    <label style={{color: theme.colorLabel}} htmlFor="switch">Light Mode</label>
                    <Switch id='switch' checked={theme.checked} onChange={theme.toggleTheme}/>
                </div>
            </div>
        </section>
    )
}