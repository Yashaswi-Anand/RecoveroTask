import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()
  const [addUser, setAddUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:8000/allUsers`)
      const data = await res.json()
      console.log(data);
      setAddUser(data.users)
      setLoading(false);
    })()
  }, [])


  const onDeteteUser =(id) =>{
    console.log(id);
  }


  return (
    <div>
      <div className='row bg-primary pt-1 fixed'>
        <div className='col-4'><h2 className='mt-3 text-align text-light'><i className="fa-solid fa-address-book"></i>&nbsp; Recovero</h2></div>
        <div className='col-5'></div>
        <div className='col-1'><button className='mt-3' onClick={() => navigate('/addMember')} >ADD</button></div>
        <div className='col-2'><button className='mt-3'>LOGOUT</button></div>
      </div>

      <div>
        {addUser.length === 0
          ? <h3 className='text-danger'><i>No any user available...</i></h3>
          : <div className='container'>
            <div className='margin'>
              <div className='row mt-3 ms-5'>
              <div className='col-1 text-success fs-3 todo-text'>S.no</div>
                <div className='col-3 text-success fs-3 todo-text'>All Users</div>
                <div className='col-3 text-success fs-3 todo-text'>Status</div>
                <div className='col-3 text-success fs-3 todo-text'>Billing Details</div>
                <div className='col-2 text-success fs-3 todo-text'>Delete</div>
              </div>
            </div>

            <div className='margin'>
              {loading
                ? (<p>Loading....</p>)
                : (addUser.map((item,index) => (
                  <div className='row mt-3 ms-5 ' key={item._id}>
                    <div className='col-1 fs-4 todo-text'>{index+1}</div>
                    <div className='col-3 fs-4 todo-text'>{item.email}</div>
                    <div className='col-3 fs-4 todo-text'>{item.status}</div>
                    <div className='col-2 todo-text ms-4'>&#x20B9; 248</div>
                    <div className='col-2 todo-text ms-4'><i onClick={() => onDeteteUser(item._id)} className="text-danger fa-solid fa-trash-can fs-6"></i></div>
                  </div>
                )))}
            </div>
          </div>}
      </div>
    </div>
  )
}

export default AdminDashboard