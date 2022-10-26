import { NextPage } from "next";
import Layout from "../../components/layout";

const Stream = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 divide-y-2 space-y-4">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <div className="pt-4 px-4" key={i}>
            <div className="w-full rounded-md shadow-sm bg-slate-300 as aspect-video" />
            <h3 className="text-gray-700 text-lg mt-2">
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
        <button className="fixed hover:bg-purple-500 transition-colors bottom-24 right-5 shadow-xl bg-purple-700 rounded-full p-4 text-white ">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
