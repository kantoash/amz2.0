import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../slices/basketSlice'

export const store = configureStore({
  reducer: {
    basket: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch