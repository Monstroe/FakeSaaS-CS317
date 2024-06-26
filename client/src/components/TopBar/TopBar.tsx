import React from 'react'

function TopBar() {
    return (
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark position-sticky'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>Fake SQL SaaS</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </div>
        </nav>
    )
}

export default TopBar