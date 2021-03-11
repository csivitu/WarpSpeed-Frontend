import { configureStore } from '@reduxjs/toolkit';
  import userReducer from '../features/userslice';
  import appReducer from '../features/appSlice'
  export default configureStore({
    reducer: {
      user: userReducer,
      
    },
  });