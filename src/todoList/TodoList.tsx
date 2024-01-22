import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, type CheckboxProps } from 'antd';

type Props = {
    todos: any[];
    onTodoClick: (todo: any) => void
    setTodoList: (todo: any) => void
}

function TodoList({ todos, onTodoClick, setTodoList }: Props) {

    // library checkbox
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const handleChange = (isChecked: boolean, id: number) => {
        let cloneData = JSON.parse(JSON.stringify(todos))
        cloneData.forEach((item: any) => {
            if (item?.id === id && isChecked) {
                item.status = "COMPLETED"
            }
        })

        setTodoList(cloneData)
    }

    console.log({ todos });

    const newTodoArray = todos?.filter((value: any) => (value.isShow))
    console.log({ newTodoArray })

    return (
        <ul className='todo-list'>
            {todos?.length > 0 && todos.map((todo: any) => (
                todo?.isShow === true && <li key={todo?.id} style={{ display: "flex" }} >
                    <Checkbox onChange={(e) => handleChange(e.target.checked, todo?.id)} />
                    <span>  {todo?.title}</span>
                    <Button onClick={() => onTodoClick(todo)}>Delete</Button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;