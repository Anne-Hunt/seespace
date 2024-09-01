import React from 'react'

export default function Modal() {


    return (
        <div className='modal'>
            <div className="bgOverlay"></div>
            <div className="modalContents">

                <h2>
                    APOD Image name
                </h2>
                <div>
                    <p>APOD Image desciption</p>
                    <p>more about this beauty</p>
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
            </div>
        </div>
    )
}
