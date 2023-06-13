import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { getMessageStrcuture } from "../helpers";

export const BotMessage = ({message = 'Algunas de las mejores universidades son:<br>Cambridge:<b> Es una universidad tarara <br>-Harvard <br> Puedes encontrar más informacion en <n>https://twitter.com/home<lk>.<br>'}) => {

  const regex = /<n>|<b>|<br>|<lk>/
  const hasRegex = regex.test(message)

  let structuredMessage = []

  if (hasRegex) {
    structuredMessage = getMessageStrcuture(message);
    console.log(structuredMessage);
  }
  // const structuredMessage = getMessageStrcuture(message);

  // console.log(structuredMessage);

  return (
    <div className="col-lg-6">
      <div className="row ps-4 w-auto">
        <div className="col-2 position-relative">
          <FontAwesomeIcon 
            className='position-absolute top-50 start-50 translate-middle'
            icon={faRobot}
            size={'2xl'}
            color="rgb(0, 29, 61)"
            style={{height: '2.5rem'}}/>
        </div>
        <div className="col-10">
          <div  
            className={'card w-auto overflow-auto'} 
            style={{width: '50%', maxWidth: '30rem', minWidth: '10rem', }}>
            <div className="card-body border">
              <h5 className="card-title fw-semibold">Chat-TI</h5>
              <p 
                className="card-text fw-normal"
                style={{textAlign: 'justify'}}>
                {/* {
                  structuredMessage.map((element, index) => (
                    element.pattern === '<br>'
                      ? (<React.Fragment key={index}>
                          {element.messaje}
                          <br />
                        </React.Fragment>)
                      : element.pattern === '<b>'
                        ? (<React.Fragment key={index}>
                            -<b>{element.messaje}</b>
                          </React.Fragment>)
                        : element.pattern === '<lk>'
                          ? (<React.Fragment key={index}>
                              <a href={`${element.messaje}`} target="_blank">{element.messaje}</a>
                            </React.Fragment>)
                          : element.pattern === '<n>'
                            ? (<React.Fragment key={index}>
                                {element.messaje}
                              </React.Fragment>)
                            : (<React.Fragment key={index}>
                                {element.message}
                              </React.Fragment>)  
                  ))
                } */}
                {
                  !hasRegex
                  ? `${message}`
                  : structuredMessage.map((element, index) => (
                    element.pattern === '<br>'
                      ? (<React.Fragment key={index}>
                          {element.messaje}
                          <br />
                        </React.Fragment>)
                      : element.pattern === '<b>'
                        ? (<React.Fragment key={index}>
                            <b>{element.messaje}</b>
                          </React.Fragment>)
                        : element.pattern === '<lk>'
                          ? (<React.Fragment key={index}>
                              <a href={`${element.messaje}`} target="_blank">{element.messaje}</a>
                            </React.Fragment>)
                          : element.pattern === '<n>'
                            ? (<React.Fragment key={index}>
                                {element.messaje}
                              </React.Fragment>)
                            : element.pattern === undefined
                              ?(<React.Fragment key={index}>
                                {element.message}
                                </React.Fragment>)  
                              : <></>
                  ))
                }
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}
