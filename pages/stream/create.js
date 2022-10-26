import { NextPage } from "next";

const Create = () => {
  return (
    <div className="space-y-5 py-10 px-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          이름
        </label>
        <div className=" flex items-center rounded-md shadow-sm">
          <input
            id="name"
            className="appearance-none pl-7  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-700 focus:border-purple-700"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label htmlFor="price" className="text-sm font-medium text-gray-700">
          가격
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="absolute left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 text-sm">₩</span>
          </div>
          <input
            id="price"
            className="appearance-none pl-7  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-700 focus:border-purple-700"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 items-center pointer-events-none">
            <span className="text-gray-500">원</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          설명
        </label>
        <div>
          <textarea
            id="description"
            className="mt-1 shadow-sm w-full  focus:ring-purple-700 rounded-md border-gray-300 focus:border-purple-700"
            rows={4}
          />
        </div>
      </div>
      <button className="mt-4 w-full bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none">
        Go Live
      </button>
    </div>
  );
};

export default Create;
