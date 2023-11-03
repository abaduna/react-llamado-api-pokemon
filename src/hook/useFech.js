
import {useCallback, useEffect,useReducer} from "react"

import { API } from "./../API"

import { fechReducer, initialState} from "../reducers/fech"

import { ACTIONS } from "../action/fech"

export const useFech=(endpoint="pokemon/")=>{
    const [state,dispach]= useReducer(fechReducer,initialState)
    const getdata = useCallback(async ()=>{
        try {
            const {data} = await API.get(`${endpoint}`)
            console.log(`set DATA`);
            dispach({type:ACTIONS.SET_DATA,payload:data})
            console.log(data);
        } catch (error) {
            console.error(error);
            dispach({type:ACTIONS.SET_ERROR})
        }
    },[endpoint])

    useEffect(()=>{
        getdata()
    },[endpoint,getdata])

    return state
}