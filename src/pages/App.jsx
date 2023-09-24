import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Button, message } from 'antd'

import Login from './login/login'

const App = (props) => {

  function btnClick() {
    // props.addItem()
    // message.info('NODE_ENV: ' + ENV)
  }
  
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <ul>
          <li><Link to="/login">login</Link></li>
          <li>
            <Button type="primary" onClick={btnClick}>Click</Button>
          </li>
          {/* {
            props.list.map((v, i) => <li key={i}>{v}</li>)
          } */}
        </ul>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
