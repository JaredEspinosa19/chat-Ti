import { faRobot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Loader } from "./Loader"

export const BotLoader = () => {
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
          <div className="position-relative"
              style={{height: '4rem'}}>
            <div className="position-absolute top-50 start-0 translate-middle-y">
              <Loader />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
