import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

export const BotAudioMessage = ({audioUrl = 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3'}) => {

  // useEffect(() => {
  //   const audio = new Audio(audioUrl);
  //   audio.play();

  // }, [audioUrl]); 

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
              <div className="content-center position-relative"
                style={{height: '3.5rem'}}>
                <audio 
                  className='position-absolute top-50 start-50 translate-middle'
                  src={audioUrl} 
                  controls  />
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
