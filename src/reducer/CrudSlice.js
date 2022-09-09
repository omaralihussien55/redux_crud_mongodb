import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCrud = createAsyncThunk("crud/get",async(_,thunkapi)=>{
try{
  const res = await axios.get(`http://localhost:4000/api/crud`)
   return res.data

}catch(err){

}
})
// details 
// export const DetailCrud = createAsyncThunk("crud/detail",async(arg,thunkapi)=>{
//   try{
//     const res = await axios.get(`http://localhost:4000/api/crud/${arg}`)
//      return res.data
  
//   }catch(err){
  
//   }
//   })

export const addCrud = createAsyncThunk("crud/add",async (arg,thunkapi)=>{
  console.log(arg)
  try{
      const res = await axios.post(`http://localhost:4000/api/crud`,arg)
     return res.data
    }catch(err){
    
    }
})

export const editCrud = createAsyncThunk("crud/edit",async (arg,thunkapi)=>{
    try{
        const data = await axios.post(`http://localhost:4000/api/crud/${arg.id}`,arg.data)
       return  data.data
      }catch(err){
      
      }
})


export const deletCrud = createAsyncThunk("crud/delet",async (arg,thunkapi)=>{
    try{
        const data = await axios.delete(`http://localhost:4000/api/crud/${arg}`)
        return data.data
      }catch(err){
      
      }
})
    


const CrudSlice = createSlice({
    name:"crud",
    initialState:{
 crudArray:[],
 Detailscrud:{_id:"",title:"",discription:""}
    },

reducers:{
  setDetailscrud:(state,action)=>{
       state.Detailscrud = action.payload
  }
},


extraReducers:{

[getCrud.pending]:(state,action)=>{

},
[getCrud.fulfilled]:(state,action)=>{
console.log(action.payload)
state.crudArray = action.payload 
},
[getCrud.rejected]:(state,action)=>{

},

// [DetailCrud.pending]:(state,action)=>{

// },
// [DetailCrud.fulfilled]:(state,action)=>{
// console.log(action.payload)
// state.Detailscrud = action.payload 
// },
// [DetailCrud.rejected]:(state,action)=>{

// },

    }
})

export const {setDetailscrud} = CrudSlice.actions
export default CrudSlice.reducer