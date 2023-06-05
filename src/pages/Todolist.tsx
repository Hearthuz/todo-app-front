import React, { useState } from "react"
import { deleteList, updateList } from "services"
import { Modal } from "components"

export const Todolist = ({ list, onChange }) => {
  const [showModal, setShowModal] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [checked, setChecked] = useState(list.status === "Todo" ? false : true)

  console.log(list.id)
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (e.target.checked === true) {
      await updateList(list.id, { status: "In Progress" })
      onChange()
    } else {
      await updateList(list.id, { status: "Todo" })
      onChange()
    }
  }

  const onDone = async () => {
    const status = {
      status: "Done",
    }
    await updateList(list.id, status)
    alert("Sucessfully")
    onChange()
  }

  const onUpdate = async (data) => {
    try {
      const title = data.title !== "" ? data.title : list.title
      const date = data.date !== "" ? data.date : list.date
      const description =
        data.description !== "" ? data.description : list.description
      const newList = {
        title: title,
        date: date,
        description: description,
      }
      onHide()
      await updateList(list.id, newList)
      onChange()
    } catch (err) {
      console.error(err)
    }
  }

  const onDelete = async (e) => {
    try {
      e.preventDefault()
      deleteList(list.id)
      alert("Sucessfully Deleted")
      onChange()
    } catch (err) {
      console.error(err)
    }
  }

  const onHide = () => {
    setShowModal(false)
  }

  return (
    <>
      <div
        className="grid items-center  grid-cols-12 p-4 my-4 bg-primary md:text-base text-sm text-primary-content rounded w-full shadow hover:bg-primary-focus hover:shadow-lg"
        onClick={() =>
          showDropDown === false
            ? setShowDropDown(true)
            : setShowDropDown(false)
        }
      >
        <div className="flex items-center sm:col-span-6 col-span-7">
          {list.status === "Done" ? null : (
            <input
              type="checkbox"
              className="mr-2 sm:mr-4 w-4 h-4 md:w-6 md:h-6 accent-base-200 delay-150"
              onChange={handleChange}
              checked={checked}
            />
          )}
          <div>
            <div className="flex items-center">
              <div className="title textm-sm sm:text-base font-bold">
                {list.title}
              </div>
              <div className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 "
                  onClick={() => setShowModal(true)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-base-content">
              {list.date.split("T")[0]}
            </div>
          </div>
        </div>
        <div className="text-xs sm:text-sm sm:col-span-3 col-span-2 font-semibold">
          {list.status}
        </div>
        <div className="flex col-span-3 justify-end">
          {list.status === "Done" ? null : (
            <div className="md:mx-4 mx-2 text-green-500 bg-primary-content rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-8 sm:h-8"
                onClick={onDone}
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          )}

          <div className="md:ms-4 ms-2 text-orange-600 bg-primary-content rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-8 sm:h-8"
              onClick={onDelete}
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        {showDropDown ? (
          <div className="col-span-12 text-xs sm:text-sm text-neutral pt-3">
            <div>{list.description}</div>
          </div>
        ) : null}
      </div>
      {showModal ? (
        <Modal
          onHide={onHide}
          onUpdate={onUpdate}
          required={false}
          msg={"Edit"}
        />
      ) : null}
    </>
  )
}
