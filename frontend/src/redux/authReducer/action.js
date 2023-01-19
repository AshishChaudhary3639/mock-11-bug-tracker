
import * as types from "./actionType"
import axios from "axios"
const signup=(payload)=>(dispatch)=>{

    dispatch({type:types.USER_SIGNUP_REQUEST})
    return axios.post(`http://localhost:8080/signup`,payload).then((r)=>{
        dispatch({type:types.USER_SIGNUP_SUCCESS,payload:payload})
    }).catch((e)=>{
        dispatch({type:types.USER_SIGNUP_FAILURE,payload:e})
    })
}

export {signup}