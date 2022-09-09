import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCrud, editCrud, getCrud } from '../reducer/CrudSlice'

const Form = ({dispatch,showEdit,setEhowEdit}) => {
  const {Detailscrud} = useSelector((state)=> state.crud)
  const [titel,setTitel ] = useState( Detailscrud.title )
  const [disc,setDisc ] = useState( Detailscrud.discription )
  const RefTitel = useRef(null)
  const RefDisc = useRef(null)

const navigate = useNavigate()


useEffect(()=>{

  if(showEdit){

    setDisc(Detailscrud.discription)
    setTitel(Detailscrud.title)
    console.log(Detailscrud)
  }

},[showEdit])

    const HandleSubmitAdd= (e)=>{

   e.preventDefault()
   let crud = {
    title:titel,
    discription:disc
   }

  dispatch(addCrud(crud))
  setEhowEdit(false)
  //  navigate("/")
   window.location="/"
    }

   const  HandleSubmitEdit = (e)=>{
    e.preventDefault()
    let crud = {
     title:titel,
     discription:disc
    }
 
   dispatch(editCrud({id:Detailscrud._id,data:crud}))
  //  navigate("/")
  setEhowEdit(false)
  window.location="/"
     }

    
    
  return (
    <div>
    <div className=''>
         <h2 className={showEdit?'p-1 text-center text-success':'p-1 text-center text-primary'}>{showEdit?"Edit Crud":"Add Crud"}</h2>
         <form onSubmit={!showEdit ?HandleSubmitAdd:HandleSubmitEdit} >
            <div className='col col-12 col-md-10 p-2'>
              <input type={'text'} ref={RefTitel}  onChange={(e)=> setTitel(e.target.value)} value={titel} placeholder="name project" className='form-control mb-2' />
              <input type={'text'} ref={RefDisc}  onChange={(e)=> setDisc(e.target.value)} value={disc} placeholder="description" className='form-control mb-2' />
          {
            !showEdit ? <input  type={'submit'} value="add Project" onSubmit={HandleSubmitAdd} className='btn btn-primary'/>:
            <input  type={'submit'} value="edit Project" onSubmit={HandleSubmitEdit} className='btn btn-success'/>
          }
              </div>
         </form>
         <br/>
    </div>
    
    </div>
  )
}

export default Form