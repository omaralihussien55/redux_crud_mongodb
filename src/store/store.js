import { configureStore } from "@reduxjs/toolkit";

import CrudSlice from "../reducer/CrudSlice";

const store = configureStore({
    reducer:{
        crud:CrudSlice
    }
})

export default  store