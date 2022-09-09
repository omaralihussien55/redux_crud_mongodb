import React ,{useEffect,useState,useRef}from 'react'
import { useDispatch, useSelector } from 'react-redux'  

import Content from './Content'
import Form from './Form'
import { getCrud } from '../reducer/CrudSlice'
import { useNavigate } from 'react-router-dom'
const ContainerCrud = () => {

    const {crudArray} = useSelector((state)=> state.crud)
    const [showEdit,setEhowEdit] = useState(false)
    const dispatch = useDispatch()
  const navigate = useNavigate()
    useEffect(()=>{

        dispatch(getCrud())
        navigate("/")
   },[dispatch])
  return (
    <div>
    <Form showEdit={showEdit} dispatch={dispatch} setEhowEdit={setEhowEdit} />
    <Content crudArray={crudArray} dispatch={dispatch} setEhowEdit={setEhowEdit}/>
    </div>
  )
}

export default ContainerCrud