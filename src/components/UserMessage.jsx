import React from "react";

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const UserMessage = ({message='', name='Usuario'}) => {

  return (
    <div className="col-lg-6 offset-lg-6">
      <div className="row ps-lg-5 w-auto">
        <div className="col-10">
          <div  
            className={'card text-end w-auto overflow-auto'} 
            style={{width: '50%', maxWidth: '30rem', minWidth: '10rem', }}>
            {/* Aqui comienza el componenten */}
            <div className="card-body border card"> 
              <h5 className="card-title fw-semibold">{name}</h5>
              <p 
                className="card-text fw-normal"
                style={{textAlign: 'justify'}}>
                {message.replace(/y/,'<br>')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 position-relative">
          <FontAwesomeIcon
            className='position-absolute top-50 start-50 translate-middle'
            icon={faUser}
            size={'2xl'}
            style={{height: '2.5rem'}}/>
        </div>
      </div>
    </div>
  )

}
