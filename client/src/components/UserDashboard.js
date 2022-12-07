import React from 'react'

function UserDashboard() {
  return (
    <div>
      <div className='row bg-primary pt-1 pb-2 fixed'>
          <div className='col-3'><h2 className='mt-3 text-align text-light'><i className="fa-solid fa-address-book"></i>&nbsp; Recovero</h2></div>
          <div className='col-6'></div>
          <div className='col-3'><button className='mt-3' style={style.button}>LOGOUT</button></div>
      </div>
        <h3 className='mt-5'>User access this dashboard...</h3>
     
    </div>
  )
}

const style = {
  button: {
    color: 'green',
    border: '1px solid red',
    borderRadius: '8px',
    padding: '7px 16px'
  }
}

export default UserDashboard