import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
    return (
        <div className='max-w-96 mx-auto'>
            {/* <Navbar /> */}
            <main className="min-h-screen">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default RootLayout