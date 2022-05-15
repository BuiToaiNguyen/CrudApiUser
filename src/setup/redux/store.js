import {configureStore} from '@reduxjs/toolkit';
import userSlice from './modal/userSlice';

export const store = configureStore({
    reducer:{
        user:userSlice
    }
  });
  