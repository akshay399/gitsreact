import Typewriter from "typewriter-effect"
import { useState } from "react";
 
export const Header = (props) => {

 

  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2>
                  {props.data ? props.data.title1 : 'Loading'}
                  </h2>
                  <h2><Typewriter options = {{
                    autoStart : true,
                    delay: 40,
                    strings : [props.data.title2],
                    loop: true
                  }}
                 
                 /></h2>
                
                 <h2>{props.data ? props.data.title3 : 'Loading'}</h2>
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
