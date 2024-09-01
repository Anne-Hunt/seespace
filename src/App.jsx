
import React, { useState } from 'react'
import './App.css'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/modal.jsx'

function App() {
  const [showModal, setShowModal] = useState(false)

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
