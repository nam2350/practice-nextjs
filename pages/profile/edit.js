import { NextPage } from "next";

const EditProfile = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-500" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 text-gray-700"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          이메일
        </label>
        <input
          id="email"
          type="email"
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-700 focus:border-purple-700"
          required
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          전화번호
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id="input"
            type="number"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-700 focus:border-purple-700"
            required
          />
        </div>
      </div>
      <button className="mt-5 w-full bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none ">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
