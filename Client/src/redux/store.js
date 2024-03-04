import {configureStore} from "@reduxjs/toolkit"
import userreducer from "./Slicecomponent/userslice"

const store = configureStore({
    reducer:{
        userstore : userreducer,

    }
})

export default store