import React from 'react'
import {useSelector } from 'react-redux'  
import {setDeletCrud, setDetailscrud } from '../reducer/CrudSlice'

const Content = ({setEhowEdit,dispatch}) => {
  const {crudArray} = useSelector((state)=> state.crud)

    const edit= (id)=>{
      let item = crudArray.find((i)=> i._id === id)
      console.log(item)
      dispatch(setDetailscrud(item))
      setEhowEdit(true)
      
    }
    const delet= (id)=>{

      let item = crudArray.length >= 1 && crudArray.filter((i)=>{
        return i._id !== id
      })
         dispatch(setDeletCrud(item))
    }

  
  return (
    <div>
    <ul className='row p-0 m-0 bg-info text-white'>
       <li className='p-1 text-center border col'>name project</li>
       <li className='p-1 text-center border col'>description</li>
       <li className='p-1 text-center border col'>update</li>
       <li className='p-1 text-center border col'>remove</li>
    </ul>
    {crudArray.length >= 1 && crudArray.map((i,idx)=>{
            return(
                <ul className='row p-0 m-0 bg-light ' key={idx} >
                <li className='p-1 text-center border col'>{i.title}</li>
                <li className='p-1 text-center border col'>{i.discription}</li>
                <li className='p-1 text-center border col'><button  onClick={()=> edit(i._id)} className='btn btn-success'>update</button></li>
                <li className='p-1 text-center border col'><button  onClick={()=> delet(i._id)} className='btn btn-danger'>remove</button></li>
             </ul>
            )
        })
    }
    </div>
  )
}

export default Content