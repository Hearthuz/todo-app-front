import { useForm } from "react-hook-form"

export const Modal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  console.log(errors)

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none hover:scale-100 transition ease-linear hover:-translate-y-5 duration-200">
        <form
          className="relative w-4/5 my-6 mx-auto max-w-3xl"
          onSubmit={handleSubmit(props.onUpdate)}
        >
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-content outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start p-5 rounded-t">
              <h3 className="text-primary text-3xl font-bold">{props.msg}</h3>
              <h3 className="text-base-100 text-3xl font-semibold">List</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="w-full text-base-200">
                <div className="relative mt-1 rounded-md shadow-sm">
                  <label className="block text-md font-medium my-2">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border p-3 pr-12 outline-none text-primary ring-1 ring-primary sm:text-sm"
                    placeholder="Input Title"
                    {...register("title", {
                      required: props.required,
                      maxLength: 80,
                    })}
                  />
                  <label className="block text-md font-medium my-2">Date</label>
                  <input
                    type="date"
                    className="w-full rounded-md border p-3 pr-15 outline-none text-primary ring-1 ring-primary sm:text-sm"
                    placeholder="Input Date"
                    {...register("date", {
                      required: props.required,
                      maxLength: 80,
                    })}
                  />
                  <label className="block text-md font-medium my-2">
                    Description
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border p-3 pr-12 outline-none text-primary ring-1 ring-primary sm:text-sm"
                    placeholder="Input Description"
                    {...register("description", {
                      required: props.required,
                      maxLength: 80,
                    })}
                  />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 rounded-b">
              <button
                className="text-slate-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.onHide}
              >
                Close
              </button>
              <button
                className="bg-primary text-white active:bg-primary-focus font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
