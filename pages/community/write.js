import { NextPage } from "next";

const Write = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-purple-700 rounded-md border-gray-300 focus:border-purple-700 "
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="mt-2 w-full bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none ">
        Submit
      </button>
    </form>
  );
};

export default Write;
