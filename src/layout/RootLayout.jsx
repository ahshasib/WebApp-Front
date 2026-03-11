import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
    return (
        <div className="max-w-2xl mx-auto min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/BACKGROUND.41af007b.png')" }}>
            {/* <Navbar /> */}
            <main className="min-h-screen">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default RootLayout