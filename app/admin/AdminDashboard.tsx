
import Image from 'next/image'
import React from 'react'

const AdminDashboard = () => {
 
  return (
    <div className='flex w-full h-full bg-gray-100'>
      <div
        className={`bg-white border-r w-64 border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* sidebar */}
        <div className='flex items-center  p-4'>
          <Image
            src="/bblogo.png"
            alt='logo'
            width={50}
            height={50}
          />
          <h1 className='font-semibold'>BurnBox</h1>
        </div>
        
      </div>
    </div>  
  )
}

export default AdminDashboard
