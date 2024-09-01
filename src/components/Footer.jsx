import React from 'react'

export default function Footer(props) {
    const { showModal, toggleModal } = props
    return (
        <footer>
            <div className='bgGradient'>

            </div>
            <div>
                <h1>
                    APOD Image credits
                </h1>
                <h2>
                    APOD Image Name
                </h2>
            </div>
            <button onClick={toggleModal}>
                <i className="fa-solid fa-circle-question"></i>
            </button>
        </footer>
    )
}
