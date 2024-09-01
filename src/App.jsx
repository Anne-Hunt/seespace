
import React, { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/modal.jsx'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getAPODData() {
      const APOD_KEY = import.meta.env.VITE_API_KEY
      const apiURL = 'https://api.nasa.gov/planetary/apod' + `?api_key=${APOD_KEY}`
      const ahora = (new Date()).toDateString()
      const localDate = `NASA-${ahora}`
      if (localStorage.getItem(localDate)) {
        const localData = JSON.parse(localStorage.getItem(localDate))
        setData(localData)
        return
      }
      localStorage.clear()
      try {
        const response = await fetch(apiURL)
        const NASAdata = await response.json()
        localStorage.setItem(localDate, JSON.stringify(NASAdata))
        setData(NASAdata)
        // console.log("Success", NASAdata)
      } catch (error) {
        console.log("Unable to get APOD", error.message)
      }
    }
    getAPODData()
  }, [])

  function toggleModal() {
    setShowModal(!showModal)
  }
  return (
    <>
      {data ? (<Main data={data} />) : (<div className="loadingState"><i className="fa-solid fa-spinner"></i></div>)}
      {showModal && (<Modal toggleModal={toggleModal} data={data} />)}
      {data && (<Footer toggleModal={toggleModal} data={data}></Footer>)}
    </>
  )
}

export default App
