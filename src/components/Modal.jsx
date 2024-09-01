import React from 'react'

export default function Modal() {


    return (
        <div className="modal">
            <div className="bgOverlay"></div>
            <div className="modalContents">
                <h2>
                    APOD Image name
                </h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">APOD Image desciption</p>
                    <p>more about this beauty</p>
                </div>
                <button>
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
        </div>
    )
}
