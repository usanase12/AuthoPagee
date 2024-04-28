import React from 'react'

function Layout() {
  return (
    <div className="bg-[#c78ad5] p-3 ">
        <Header/>
     <div className="flex">
        <SideBar/>
        <div className="flex  w-[100%] h-[100vh] bg-yellow-100 rounded-lg border border-[#828181]">
        <Outlet/>
        </div>
     </div>
    </div>
  )
}

export default Layout