import React from "react";

const Form = () => {
  return (
    <form >
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contestant Image
            </label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="text-sm text-gray-600" >
                  <label
                    for="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="text-[#3B841F]">Add your image</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      accept="image/*"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Price per kg in KES
            </label>
            <div className="mt-1">
              <input
                type={"number"}
                className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="2000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Where are you located?
            </label>
            <div className="mt-1">
              <select
                className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className=" text-center rounded-md border border-transparent  bg-[#3B841F] py-2 px-6  font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Animal Feeds to Livestock Farmers
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
