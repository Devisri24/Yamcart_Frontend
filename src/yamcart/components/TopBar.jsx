import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className='companyTitle'>
            <Link to= '/' className='link'>
             <h2 >YAMCART</h2>
            </Link>
           
        </div>
        <div className='searchBar'>
            <input type="text" placeholder='search...' />
        </div>
        <div className='userAuth'>
            Login / SignUp  
        </div>
   </section>
  )
}

export default TopBar