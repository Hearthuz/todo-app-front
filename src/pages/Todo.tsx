import React, { useEffect } from "react"
import { Todolist } from "./index"
import { useDispatch, useSelector } from "react-redux"
import {
  getTodolist,
  setTodo,
  setAddModalShow,
  getAddModalShow,
  getChange,
  setChange,
} from "reducers"
import { getList, postList } from "services"
import { Modal } from "components"

export const Todo = () => {
  const todo = useSelector(getTodolist)
  const dispatch = useDispatch()
  const modalAddShow = useSelector(getAddModalShow)
  const change = useSelector(getChange)

  useEffect(() => {
    async function getLists() {
      const lists = await getList()
      dispatch(setTodo(lists.Items))
      dispatch(setChange(false))
    }
    getLists()
  }, [dispatch, modalAddShow, change])

  const onPost = async (data) => {
    try {
      if (data.title && data.date && data.description !== undefined) {
        const list = {
          ...data,
          status: "Todo",
        }
        onHide()
        dispatch(setChange(true))
        await postList(list)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const onChange = () => {
    dispatch(setChange(true))
  }

  const onHide = () => {
    dispatch(setAddModalShow(false))
  }

  return (
    <>
      <div className="h-full min-h-screen flex justify-center pb-5 bg-base-100 bg-cover">
        <div className="w-4/5">
          <div className="text-5xl text-center font-bold text-base-content my-8">
            <div>Todo List</div>
          </div>
          <div className="w-full">
            {todo
              ? todo.map((list) => <Todolist list={list} onChange={onChange} />)
              : null}
          </div>
          <div className="flex justify-center">
            <div
              className="p-4 mt-2 bg-primary active:bg-primary-focus hover:shadow-lg rounded-full shadow"
              onClick={() => dispatch(setAddModalShow(true))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-neutral"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
        {modalAddShow === true ? (
          <Modal
            onHide={onHide}
            onUpdate={onPost}
            required={true}
            msg={"Add"}
          />
        ) : null}
      </div>
    </>
  )
}
