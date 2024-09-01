
import React, { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/modal.jsx'

function App() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getAPODData() {
      const APOD_KEY = import.meta.env.VITE_API_KEY
      const apiURL = 'https://api.nasa.gov/planetary/apod' + `?api_key=${APOD_KEY}`
      try {
        const response = await fetch(apiURL)
        const data = await response.json()
        console.log("Success", data)
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
      <Main></Main>
      {showModal && (<Modal toggleModal={toggleModal} />)}
      <Footer toggleModal={toggleModal}></Footer>
    </>
  )
}

export default App
