import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './profile.css'
import {FormControl} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { updateUser } from './../../redux/action/action';
function EditProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
      if(user == null){
        // navigate('/')
      }
    }, [])
    

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitBtn = () => {
        dispatch(updateUser({id:user._id,firstname,lastname,email,password}))
    }   
  return (
    <div>
        <div class="container rounded bg-white">
          <div class="row flex-column">
              <div class="col border-right">
                  <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"/><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
              </div>
              <div class="col border-right">
                  <div class="p-3 py-5">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                          <h4 class="text-right">Profile Settings</h4>
                      </div>
                      <div class="row mt-2">
                          <div class="col-md-6"><label class="labels">First Name</label>
                            <FormControl
                                placeholder="First Name"
                                aria-label="FirstName"
                                aria-describedby="basic-addon1"
                                defaultValue={user?.firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                          <div class="col-md-6"><label class="labels">Last Name</label>
                          <FormControl
                                placeholder="Last Name"
                                aria-label="LastName"
                                aria-describedby="basic-addon1"
                                defaultValue={user?.lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                />
                          </div>
                      </div>
                      <div class="row mt-3">
                          <div class="col-md-12"><label class="labels">Email</label>
                          <FormControl
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                defaultValue={user?.email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                          </div>
                          <div class="col-md-12"><label class="labels">Password</label>
                          <FormControl
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                          </div>
                      </div>
                      <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={()=> submitBtn()}>Save Profile</button></div>
                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}

export default EditProfile