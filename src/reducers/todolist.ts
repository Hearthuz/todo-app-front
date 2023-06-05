import { createSlice } from "@reduxjs/toolkit"
import { createSelector } from "reselect"
import { RootState } from "store"

export interface TodolistState {
  todo?: []
  modalShow?: boolean
  addModalShow?: boolean
  change?: boolean
}

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {} as TodolistState,
  reducers: {
    setTodo: (state, { payload }) => {
      state.todo = payload
    },
    setModalShow: (state, { payload }) => {
      state.modalShow = payload
    },
    setAddModalShow: (state, { payload }) => {
      state.addModalShow = payload
    },
    setChange: (state, { payload }) => {
      state.change = payload
    },
  },
})

export const { setTodo, setModalShow, setAddModalShow, setChange } =
  todolistSlice.actions

export const getTodolistState = (state: RootState) => state?.todolist

export const getTodolist = createSelector(
  getTodolistState,
  (state) => state.todo
)

export const getModalShow = createSelector(
  getTodolistState,
  (state) => state.modalShow
)

export const getAddModalShow = createSelector(
  getTodolistState,
  (state) => state.addModalShow
)

export const getChange = createSelector(
  getTodolistState,
  (state) => state.change
)

export default todolistSlice.reducer
