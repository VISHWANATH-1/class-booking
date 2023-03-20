import React from 'react'

const Navbar = () => {
    return (
        <div className='Navbar'>
             <div className='navlink'>
                <li>Home</li>
                <li>About</li>
                <li>contactUs</li>
            </div>
            <div className='form'>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">Srch</button>
            </div>
           
        </div>
    )
}

export default Navbar