/* eslint-disable array-callback-return */
import './Home.scss';
import React from 'react';
import { TabBar } from 'antd-mobile'
import routes from '@/router';
import { Route, Routes, HashRouter as Router, useNavigate } from 'react-router-dom'


const tabs = routes.filter(item => { if (item.key) return item })

const Bottom = () => {
  const navigate = useNavigate()
  const setRouteActive = (value) => {
    // 页面跳转方法
    navigate(value, { state: {} })
  }
  return (
    <TabBar safeArea onChange={value => setRouteActive(value)}>
      {
        tabs.map(item => (<TabBar.Item key={item.path} icon={item.icon} title={item.title} to={item.path} />))
      }
    </TabBar>
  )
}


function App() {
  return (
    <div className="App">
      <Router>
        <div className='Body'>
          <Routes>
            {
              routes.map((item, index) => {
                return (
                  <Route key={item.path} path={item.path} element={item.element}></Route>
                )
              })
            }
          </Routes>
        </div>
        <div className='Footer'>
          <Bottom />
        </div>
      </Router>
    </div>
  );
}

export default App;
