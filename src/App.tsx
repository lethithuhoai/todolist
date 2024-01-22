import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import AddForm from './addForm/AddForm';
import TodoList from './todoList/TodoList';
import "./todoList/style.css";



export const App = () => {
  const arrayTodo = [
    { id: 1, title: "Learn Javascript", status: "ACTIVE", isShow: true },
    { id: 2, title: "Learn React", status: "ACTIVE", isShow: true },
    { id: 3, title: "Build a React App", status: "COMPLETED", isShow: true },
    { id: 4, title: "Learning English", status: "ACTIVE", isShow: true }
  ]
  const [todoList, setTodoList] = useState(arrayTodo)

  function handleTodoClick(todo: any) {

    //handle delete button
    let cloneData = [...todoList]
    cloneData.forEach((item) => {
      if (item?.id === todo?.id) {
        item.isShow = false
      }
    })

    setTodoList(cloneData)
  }

  function handleTodoAll() {
    setTodoList(arrayTodo)
  }

  function handleTodoFormSubmit(formValues: any) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
      status: "ACTIVE"
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  // handle button
  function handleOnClickButton(items: any) {
    const filterTodo = arrayTodo.filter((item) => (
      item.status === "ACTIVE"
    ))
    setTodoList(filterTodo)
  }

  function handleOnclickCompleted(items: any) {
    const filterTodoCompleted = todoList.filter((item) => (
      item.status === "COMPLETED"
    ))
    setTodoList(filterTodoCompleted)
  }

  console.log(
    { todo: todoList?.filter((value: any) => (value.isShow)) }
  );


  return (
    <div className='main'>
      <div className='container'>
        <h1 className='text-2xl'>THINGS TO DO</h1>
        <AddForm onSubmit={handleTodoFormSubmit} />
      </div>
      <div className='ml-24'>
        <TodoList todos={todoList} onTodoClick={handleTodoClick} setTodoList={setTodoList} />
      </div>
      <hr />
      <Row>
        <Col span={3} className='ml-24'>
          <PlusOutlined />
          <SearchOutlined className='ml-6' />
        </Col>
        <Col span={4} className='mr-36'>
          <p>{`|  ${todoList?.filter((value: any) => (value.isShow))?.length || 0} items left`}</p>
        </Col>
        <Col span={10}>
          <Button type="text" onClick={handleTodoAll}>All</Button>
          <Button type="text" onClick={handleOnClickButton}>Active</Button>
          <Button type="text" onClick={handleOnclickCompleted}>Completed</Button>
        </Col>
      </Row>
    </div>
  )
}