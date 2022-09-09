const router = require("express").Router()
const CrudModal = require("../model/CrudModal")
// Create
router.post("/",(req,res)=>{

   CrudModal.PostCrud(req.body).then(()=>{
    console.log(res.json("add hotel"))
 }).catch((err)=>{
    console.log(err)
 })

})

// Update 
router.post("/:id",(req,res)=>{
   
   CrudModal.PutCrud(req.params.id,req.body).then(()=>{
      console.log(res.json("updated hotel"))
   }).catch((err)=>{
      console.log(err)
   }) 
  
  })

//   Delete

router.delete("/:id",(req,res)=>{
   
   CrudModal.DeletCrud(req.params.id).then(()=>{
      console.log(res.json("deleted hotel"))
   }).catch((err)=>{
      console.log(err)
   }) 
  
  })

//   Details
router.get("/:id",(req,res)=>{
   
   CrudModal.DetailsCrud(req.params.id).then((item)=>{
      res.json(item)
   }).catch((err)=>{
      console.log(err)
   }) 
  
  })

//   Find All
router.get("/",(req,res)=>{
   
   CrudModal.AllCrud().then((item)=>{
      console.log(res.json(item))
   }).catch((err)=>{
      console.log(err)
   }) 
  
  })



module.exports = router