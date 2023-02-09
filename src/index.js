import ReactDOM from 'react-dom/client';
import "./index.css"
import { useState } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToDoList />);

function ToDoList() {
  const [arr, setArr] = useState([])
  const [value, setValue] = useState('')

  function valueChange(e) {
    setValue(e.target.value)
  }

  function add() {
    setArr(() => {
      const arr1 = arr.slice()
      arr1.push(value)
      return arr1
    })
    setValue('')
  }

  function del(index) {
    setArr(() => {
      const arr1 = arr.slice()
      arr1.splice(index, 1)
      return arr1
    })
  }

  return (
    <div className='box'>
      <input className='input' value={value} onChange={valueChange} type="text" />
      <button onClick={add} >添加</button>
      {arr.map((item, index) => { return <Item key={index} index={index} name={item} del={del} ></Item> })}
    </div>
  )
}

function Item(props) {
  return (
    <ul>
      <div className='item'>
        <li className='name'>{props.name}</li>
        <button onClick={props.del.bind(this, props.index)} >删除</button>
      </div>
    </ul>
  )
}