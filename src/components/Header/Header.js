import React from 'react'
import logo from '../../images/logo-small.gif'
const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg'
const Header = (props) => {
  return (
    <div style={{display: 'block'}}>
      <div style={{ border: '1px transparent black', display: 'flex', justifyContent: 'center'}}>
        <div style={{width: "120px" }}>
          <img title="logo" src={logo} style={{width: "40%" }}/>
        </div>
        <div>
          {/*<img width="10%" src={TMDBLogo} alt='The Movie Database' />*/}
        </div>
      </div>
      React/Redux/RxJS Film Search <a href='https://github.com/inPhoenix/inReduxObs'>Example</a>
    </div>
  )
}

{/*<a className='tmdblogo' href='./' title='ReactJS TMDb Movie Search'><img src={TMDBLogo} alt='The Movie Database' /></a>*/}
export default Header
