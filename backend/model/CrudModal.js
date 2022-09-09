const mongoose = require("mongoose")
// const DB_URL = "mongodb://localhost:27017/crud"
const DB_URL = "mongodb+srv://omaralihussien55:96wo6KEKz4hf6RRx@cluster0.fuoo0is.mongodb.net/crud"
const crudSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    

})

const Crud = mongoose.model("crud",crudSchema)

exports.PostCrud = (data)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            let newcrud  = new Crud(data)
            return newcrud.save()
        }).then((crud)=>{
            mongoose.disconnect()
            resolve(crud)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}




exports.DeletCrud = (id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            return  Crud.findByIdAndDelete(id)
             
        }).then((item)=>{
            mongoose.disconnect()
            resolve(item)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.DetailsCrud = (id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            return  Crud.findById(id)
             
        }).then((item)=>{
            mongoose.disconnect()
            resolve(item)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.AllCrud = ()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            return  Crud.find()
             
        }).then((item)=>{
            mongoose.disconnect()
            resolve(item)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.PutCrud = (id,data)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            return  Crud.findByIdAndUpdate(id,{$set:data},{new:true})
             
        }).then((item)=>{
            mongoose.disconnect()
            resolve(item)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
