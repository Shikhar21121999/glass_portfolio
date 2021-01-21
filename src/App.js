import './App.css';
import Sidebar from './Sidebar.js'
import Dashboard from './Dashboard'
import React,{useState} from 'react';

export const MyContext=React.createContext("Home")

function App() {

  const [curr_pane,setcurr_pane]=useState("Home")

  return (
    <div className="app">
      <MyContext.Provider value={{curr_pane,setcurr_pane}}>
        <Sidebar />
        <Dashboard />
      </MyContext.Provider>
    </div>
  );
}

export default App;
