import React from 'react'

export default function Modal(props) {
    const { toggleModal, data } = props

    return (
        <div className="modal">
            <div className="bgOverlay"></div>
            <div className="modalContents">
                <h2>
                    {data?.title}
                </h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">Description</p>
                    <p>{data?.explanation}</p>
                    <p>Date: {data?.date}</p>
                    <p>By: {data?.copyright}</p>
                </div>
                <button onClick={toggleModal}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
        </div>
    )
}
