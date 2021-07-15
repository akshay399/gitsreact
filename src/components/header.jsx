import Typewriter from "typewriter-effect"

 
export const Header = (props) => {

 

  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h3>
                  {props.data ? props.data.title1 : 'Loading'}
                  </h3>
                  <h2><Typewriter options = {{
                    autoStart : true,
                    delay: 40,
                    strings : [props.data ? props.data.title2 : 'Loading'],
                    loop: true
                  }}
                 
                 /></h2>
                
                 <h3>{props.data ? props.data.title3 : 'Loading'}</h3>
                  <span></span>
                
               
              {' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
