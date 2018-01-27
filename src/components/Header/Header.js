import React from 'react'
const Header = (props) => {
  return (
    <div className='Header'>
      <div className='logo-container'>
        <a href='http://github.com/inPhoenix' className='github'/>
        <a href='http://reactivex.io/rxjs/' className='rxjs'/>
        <span style={{ alignSelf: 'center', paddingLeft: '10px' }}>RxJs Example</span>
      </div>
      <div className='logo-container-title'>
      <a href='https://www.themoviedb.org/' className='tmdb'/>
      </div>
    </div>
  )
}

export default Header
