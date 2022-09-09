import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const getCrud = createAsyncThunk("crud/get",async(_,thunkapi)=>{
// try{
//   const res = await axios.get(`http://localhost:4000/api/crud`)
//    return res.data

// }catch(err){

// }
// })
// details 
// export const DetailCrud = createAsyncThunk("crud/detail",async(arg,thunkapi)=>{
//   try{
//     const res = await axios.get(`http://localhost:4000/api/crud/${arg}`)
//      return res.data
  
//   }catch(err){
  
//   }
//   })

// export const addCrud = createAsyncThunk("crud/add",async (arg,thunkapi)=>{
//   console.log(arg)
//   try{
//       const res = await axios.post(`http://localhost:4000/api/crud`,arg)
//      return res.data
//     }catch(err){
    
//     }
// })

// export const editCrud = createAsyncThunk("crud/edit",async (arg,thunkapi)=>{
//     try{
//         const data = await axios.post(`http://localhost:4000/api/crud/${arg.id}`,arg.data)
//        return  data.data
//       }catch(err){
      
//       }
// })


// export const deletCrud = createAsyncThunk("crud/delet",async (arg,thunkapi)=>{
//     try{
//         const data = await axios.delete(`http://localhost:4000/api/crud/${arg}`)
//         return data.data
//       }catch(err){
      
//       }
// })
    


const CrudSlice = createSlice({
    name:"crud",
    initialState:{
 crudArray:[{_id:1,title:"html",discription:"html markup language"},
 {_id:2,title:"Css",discription:"A formatting language for web pages that deals with the look and design of websites"},
 {_id:3,title:"javascript ",discription:"language programing "}
],
 Detailscrud:{_id:"",title:"",discription:""}
    },

reducers:{
  setDetailscrud:(state,action)=>{
       state.Detailscrud = action.payload
  },
  setAdddCrud :(state,action)=>{
    state.crudArray = [...state.crudArray,action.payload]
},
setEditCrud:(state,action)=>{
  state.crudArray = action.payload
},
setDeletCrud:(state,action)=>{
  state.crudArray = action.payload
},
},


extraReducers:{

// [getCrud.pending]:(state,action)=>{

// },
// [getCrud.fulfilled]:(state,action)=>{
// console.log(action.payload)
// state.crudArray = action.payload 
// },
// [getCrud.rejected]:(state,action)=>{

// },

// [deletCrud.pending]:(state,action)=>{

// },
// [deletCrud.fulfilled]:(state,action)=>{
// console.log(action.payload)

// },
// [deletCrud.rejected]:(state,action)=>{

// },

    }
})

export const {setDetailscrud,setAdddCrud,setEditCrud,setDeletCrud} = CrudSlice.actions
export default CrudSlice.reducer