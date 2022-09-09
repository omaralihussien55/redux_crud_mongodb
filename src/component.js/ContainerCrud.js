import React ,{useState}from 'react'
import { useDispatch} from 'react-redux'  

import Content from './Content'
import Form from './Form'
// import { getCrud } from '../reducer/CrudSlice'

const ContainerCrud = () => {


    const [showEdit,setEhowEdit] = useState(false)
    const dispatch = useDispatch()
  // const navigate = useNavigate()
  //   useEffect(()=>{

  //       dispatch(getCrud())
     
  //  },[dispatch])
  return (
    <div>
    <Form showEdit={showEdit} dispatch={dispatch} setEhowEdit={setEhowEdit} />
    <Content  dispatch={dispatch} setEhowEdit={setEhowEdit}/>
    </div>
  )
}

export default ContainerCrud