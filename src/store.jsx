import {configureStore} from '@reduxjs/toolkit'
import studentAll from './StudentSlice'
import userslice from './UserSlics'
const store=configureStore({
    reducer:{
        students:studentAll,
        users:userslice
        

    }
})
export default store;

