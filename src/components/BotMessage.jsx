import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

export const BotMessage = ({message = ''}) => {
  return (
    <div className="col-lg-6">
      <div className="row ps-4 w-auto">
        <div className="col-2 position-relative">
          <FontAwesomeIcon 
            className='position-absolute top-50 start-50 translate-middle'
            icon={faRobot}
            size={'2xl'}
            style={{height: '2.5rem'}}/>
        </div>
        <div className="col-10">
          <div  
            className={'card w-auto overflow-auto'} 
            style={{width: '50%', maxWidth: '30rem', minWidth: '10rem', }}>
            <div className="card-body border">
              <h5 className="card-title">Chat-TI</h5>
              <p className="card-text">{message}</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}
