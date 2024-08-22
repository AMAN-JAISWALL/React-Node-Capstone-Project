import { useForm } from "react-hook-form";
import React from "react";
const UseFormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center my-24">
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              {...register("fullname", { required: true, minLength: 4 })}
              name="fullname"
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.fullname && "border-red-500"
              }`}
              type="text"
              placeholder="Jane"
            />
            {errors.fullname && errors.fullname.type == "required" && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
            {errors.fullname && errors.fullname.type == "minLength" && (
              <p className="text-red-500 text-xs italic">
                Please enter atleast 4 cheracter
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              name="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="Doe@gmail.com"
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500">Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">Invalid email format</span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Phone
            </label>
            <input
              {...register("phone", {
                required: "please fill data",
                pattern: {
                  value: /^\d{10}$/,
                  message: "please enter valid no.",
                },
              })}
              name="phone"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="0123456789"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone?.message}</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required.",
                },
                pattern: {
                  value:
                    /(?=^.{8,}$)((?=.\d)|(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$/,
                  message:
                    "Password (UpperCase, LowerCase, Number/SpecialCar and min - 8 Chars).",
                },
              })}
              name="password"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password?.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Confirm Password
            </label>
            <input
              {...register("cpassword", {
                required: {
                  value: true,
                  message: "Password is required.",
                },
                validate: (value) =>
                  value === getValues("password") || "Password not match",
              })}
              name="cpassword"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-cpassword"
              type="password"
              placeholder="******"
            />
            {errors.cpassword && (
              <span className="text-red-500">{errors.cpassword?.message}</span>
            )}
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                {...register("state.name", { required: true })}
                name="state.name"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="">Select State</option>
                <option value="mexico">New Mexico</option>
                <option value="missouri">Missouri</option>
                <option value="texas">Texas</option>
              </select>
              {errors.state && (
                <span className="text-red-500">State is required</span>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-bold">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            {...register("message", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
          {errors.message && (
            <span className="text-red-500">Message is required</span>
          )}
        </div>
        <div className="flex gap-3 items-center mb-4">
          <h6 className="mb-2 pb-1 col">Gender: </h6>

          <div className="form-check form-check-inline">
            <input
              {...register("genders", { required: true })}
              value="female"
              className="form-check-input cursor-pointer mx-1"
              type="radio"
              name="genders"
              id="female"
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              {...register("genders", { required: true })}
              value="male"
              className="form-check-input cursor-pointer mx-1"
              type="radio"
              name="genders"
              id="male"
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              {...register("genders", { required: true })}
              value="others"
              className="form-check-input cursor-pointer mx-1"
              type="radio"
              name="genders"
              id="otherGender"
            />
            <label className="form-check-label" htmlFor="otherGender">
              Other
            </label>
          </div>
          {errors.genders && (
            <span className="text-red-500">Gender is required</span>
          )}
        </div>

        <div className="md:flex flex-col md:items-start items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input
              {...register("agree", { required: true })}
              name="agree"
              className="mr-2 leading-tight"
              type="checkbox"
            />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
          {errors.agree && (
            <span className="text-red-500">please check this </span>
          )}
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UseFormValidation;