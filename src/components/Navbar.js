import React from 'react'

const Navbar = () => {

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between p-2">
        {/* Theme Button */}
        <div className='border border-danger p-1'>
            <b> Change Theme..</b>
        </div>
        <h3 className='text-right'> Ai Generator </h3>
    </nav>
    )
}

export default Navbar;
