import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='row bg-primary pt-1 fixed'>
          <div className='col-4'><h2 className='mt-3 text-align text-light'><i className="fa-solid fa-address-book"></i>&nbsp; Recovero</h2></div>
          <div className='col-5'></div>
          <div className='col-1'><button className='mt-3' onClick={() => navigate('/addMember')} >ADD</button></div>
          <div className='col-2'><button className='mt-3'>LOGOUT</button></div>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default AdminDashboard