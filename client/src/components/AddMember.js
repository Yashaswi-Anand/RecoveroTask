import React, { useState } from 'react'
import { signup } from '../Utils/ApiUtils';

function AddMember() {
    const [signUpData, setLogin] = useState({
        email: "",
        password: ""
      });
    
      const onHandleEvent = (event) => {
        setLogin({ ...signUpData, [event.target.name]: event.target.value, [event.target.name]: event.target.value, [event.target.name]: event.target.value})
        console.log(signUpData);
      }
    
      const onAddMember = async () => {
        console.log(signUpData);
        const apiResponce = await signup(signUpData)
        if (apiResponce.status === 200) {
            console.log("responcemessage", apiResponce);
        } else {
            console.log("error");
        }
      }
  return (
    <div>
        <div className='row bg-primary pt-1 fixed'>
          <div className='col-3'></div>
          <div className='col-6'><h2 className='mt-3 text-align text-light'><i className="fa-solid fa-address-book"></i>&nbsp; Add New Member</h2></div>
          <div className='col-3'></div>
      </div>


      <div>
        <form className="d-flex mt-5 flex-column align-items-center ">
          <input
            type='text'
            name='email'
            placeholder='Enter email'
            className="form-control w-50 mt-2"
            onChange={(e) => onHandleEvent(e)}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control w-50 mt-2"
            onChange={(e) => onHandleEvent(e)}
          />

          <select onChange={onHandleEvent} className="form-control w-50 mt-2" name="status">
            <option>Choose an option</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
          
        </form>
        <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() => onAddMember()}>
          Add new member
        </button>
      </div>
    </div>
  
  )
}

export default AddMember