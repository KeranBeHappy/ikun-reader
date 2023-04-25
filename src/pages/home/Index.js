/* eslint-disable array-callback-return */
import './Index.scss';
import React from 'react';
import { TabBar } from 'antd-mobile'
import routes from '@/router';
import { Route, Routes, HashRouter as Router, } from 'react-router-dom'


const tabs = routes.filter(item => { if (item.key) return item })

const Bottom = () => {
  return (
    <TabBar safeArea>
      {tabs.map(item => (<TabBar.Item key={item.path} icon={item.icon} title={item.title} to={item.path} />))}
    </TabBar>
  )
}


function App() {
  return (
    <div className="App">
      <div className='body'>
        <Router>
          <Routes>
            {
              routes.map((item, index) => {
                return (
                  <Route key={index} path={item.path} element={item.element}></Route>
                )
              })
            }
          </Routes>
        </Router>
      </div>
      <div className='footer'>
        <Bottom/>
      </div>
    </div>
  );
}

export default App;
