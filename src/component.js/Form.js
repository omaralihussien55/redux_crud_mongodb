import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAdddCrud,setEditCrud } from '../reducer/CrudSlice'

const Form = ({dispatch,showEdit,setEhowEdit}) => {
  const {Detailscrud,crudArray} = useSelector((state)=> state.crud)
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
    _id: crudArray.length + 1,
    title:titel,
    discription:disc
   }

   dispatch(setAdddCrud(crud))
   setEhowEdit(false)
   setTitel("")
   setDisc("")
  // dispatch(addCrud(crud))
  

    }

   const  HandleSubmitEdit = (e)=>{
    e.preventDefault()
let item =crudArray.length >= 1&& crudArray.map((i)=>{
  if(i._id === Detailscrud._id ){
    console.log("true")
      return {...i,title:titel,discription:disc}
  }else{
    return i
  }
})
console.log(item)


dispatch(setEditCrud(item))
setDisc("")
setTitel("")
    setEhowEdit(false)
    // let crud = {
     
    //  title:titel,
    //  discription:disc
    // }
    
  //  dispatch(editCrud({id:Detailscrud._id,data:crud}))
  //  navigate("/")
  

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