
import { saveToken } from "../../utils/localStorage"
import * as types from "./actionType"
import axios from "axios"
const signup=(payload)=>(dispatch)=>{

    dispatch({type:types.USER_SIGNUP_REQUEST})
    return axios.post(`https://dark-ruby-fly-sock.cyclic.app/signup`,payload).then((r)=>{
        dispatch({type:types.USER_SIGNUP_SUCCESS,payload:payload})
    }).catch((e)=>{
        dispatch({type:types.USER_SIGNUP_FAILURE,payload:e})
    })
}


const login=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_SIGNUP_REQUEST})
    return axios.post(`https://dark-ruby-fly-sock.cyclic.app/login`,payload).then((r)=>{
        dispatch({type:types.USER_SIGNUP_SUCCESS,payload:payload})
    }).catch((e)=>{
        dispatch({type:types.USER_SIGNUP_FAILURE,payload:e})
    })
}
export {signup,login}