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

export const login = (user) => async(dispatch)=>{
    try {
        const {data} =  await axios.post('http://localhost:5050/api/login',user)
        dispatch({type:LOGIN, payload:data}) 
        localStorage.setItem('token',data.token)
        
        dispatch(current())
    } catch (error) {
        console.log(error)
    } 
}

export const current = () => async(dispatch)=>{
    const config = {
        headers:{
            Authorization:localStorage.getItem('token')
        }
    }
    try {
        const {data} =  await axios.get('http://localhost:5050/api/current',config)
        dispatch({type:CURRENT, payload:data}) 
        localStorage.setItem('user',JSON.stringify(data.user))
        // localStorage.clear()
    } catch (error) {
        console.log(error)
    }
}