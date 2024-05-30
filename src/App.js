
import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

// import NewsItem from './Components/NewsItem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {


  const[progress,setprogress] = useState(0)
  

   const setProgress = (progress) =>{
    setprogress(progress)
  }


    return (
     
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      
      />
       <Navbar/>
      
       <Routes>
        <Route exact path='/'element = {<News   setProgress = {setProgress}  key="general" pageSize={9}  country="in" category= "general"/>}></Route>
        <Route exact path='/business' element = {<News   setProgress = {setProgress}  key= "business" pageSize={9}  country="in" category= "business"/>}></Route>
        <Route exact path='/sports' element = {<News   setProgress = {setProgress}  key="sports"  pageSize={9}  country="in" category= "sports"/>}></Route>
        <Route exact path='/Health' element={<News   setProgress = {setProgress}  key="health"  pageSize={9}  country="in" category= "Health"/>}></Route>
        <Route exact path='/science'element={<News   setProgress = {setProgress}  key="science"  pageSize={9}  country="in" category= "science"/>}></Route>
        <Route exact path='/technology'element={<News   setProgress = {setProgress}  key="technology"  pageSize={9}  country="in" category= "technology"/>}></Route>
        <Route exact path='/entertainment'element={<News   setProgress = {setProgress}  key="entertainment"  pageSize={9}  country="in" category= "entertainment"/>}></Route>    
     
        </Routes>
       </Router>
      </div>
    )
  }
export default App