import {ADD_NEW_USER,LOGIN,CURRENT} from '../action-type/actionType'
import axios from 'axios'

// export const addUser = (userData) => { 
//     return (dispatch) => {
//     return axios.post("http://localhost:5050/register",userData).then((res) => { 
//         dispatch({ 
//         type: ADD_NEW_USER, 
//         payload: res.data,   
//       });
//     });
//   };
// }

export let addUser = (user) => async(dispatch)=>{
    console.log(user)
    try {
        const {data} =  await axios.post('http://localhost:5050/api/register',user)
        dispatch({type:ADD_NEW_USER, payload:data}) 
    } catch (error) {
        console.log(error)
    }
}

export const login = (user,Navigate) => async(dispatch)=>{
    try {
        const res =  await axios.post('http://localhost:5050/api/login',user)
        console.log(res)
        dispatch({type:LOGIN, payload:res.data}) 
        localStorage.setItem('token',res.data.token)
        
        dispatch(current(Navigate))
    } catch (error) {
        console.log(error)
    } 
}

export const current = (Navigation) => async(dispatch)=>{
    const config = {
        headers:{
            Authorization:localStorage.getItem('token')
        }
    }
    try {
        const {data} =  await axios.get('http://localhost:5050/api/current',config)
        dispatch({type:CURRENT, payload:data}) 
        localStorage.setItem('user',JSON.stringify(data.user))
            Navigation('/profile')
        // localStorage.clear()
    } catch (error) {
        console.log(error)
    }
}


export const updateUser = (user) => async(dispatch)=>{
    try {
        const res =  await axios.put('http://localhost:5050/api/updateUser',user)
        dispatch({type:'updateUser', payload:res.data}) 
        localStorage.setItem('user',JSON.stringify(res.data.user))
    } catch (error) {
        console.log(error)
    } 
}