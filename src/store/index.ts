
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'
import backgroundReducer from './slices/backgroundSlice'
// 用于支持异步action

const store = configureStore({
    reducer: {
        counter: counterReducer,
        background: backgroundReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;