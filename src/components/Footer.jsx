import React from 'react'

export default function Footer(props) {
    const { showModal, toggleModal, data } = props
    return (
        <footer>
            <div className='bgGradient'>

            </div>
            <div>
                <h1>
                    {data?.title}
                </h1>
                <h2>
                    APOD
                </h2>
            </div>
            <button onClick={toggleModal}>
                <i className="fa-solid fa-circle-question"></i>
            </button>
        </footer>
    )
}
