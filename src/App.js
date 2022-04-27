import React from 'react'
// import axios from 'axios'
import './App.css'
import Weatherdetails from './components/details/weatherdetails.components'
import Weathersearch from './components/weathersearch-app/weathersearch-app.components'

const App =()=>{
    return (
      <>
      <div className="search-bar">
      <input type="search" placeholder="search weather details"/>
      <button>search</button>
      </div>
        <Weatherdetails />
        <Weathersearch />
      </>
    );
    }

export default App
