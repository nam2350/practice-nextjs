import { NextPage } from "next";
import { useState } from "react";
import { cls } from "../libs/utils";
import Layout from "../components/layout";

const Home = () => {
  const [method, setMethod] = useState("");
  const onAllViewClick = () => setMethod("all")
  const onSinjumClick = () => setMethod("sinjum");
  const onSajuClick = () => setMethod("saju");
  const onTarrotClick = () => setMethod("tarrot");
  return (
    <Layout title="용한 언니" hasTabBar>
      <div className="flex flex-col space-y-5 mt-5 ">
        <div>
          <div className="w-full h-40  shadow-sm bg-slate-300 as aspect-video" />
        </div>
        <div className="flex flex-col items-center">
          <div className="grid border-b w-full mt-4 grid-cols-4 gap-8">
          <button
              className={cls(
                "pb-4 font-medium border-b-2",
                method === "all"
                  ? " border-purple-700 text-purple-700"
                  : "border-transparent text-gray-500"
              )}
              onClick={onAllViewClick}
            >
              전체
            </button>
            <button
              className={cls(
                "pb-4 font-medium border-b-2",
                method === "sinjum"
                  ? " border-purple-700 text-purple-700"
                  : "border-transparent text-gray-500"
              )}
              onClick={onSinjumClick}
            >
              신점
            </button>
            <button
              className={cls(
                "pb-4 font-medium border-b-2",
                method === "saju"
                  ? " border-purple-700 text-purple-700"
                  : "border-transparent text-gray-500"
              )}
              onClick={onSajuClick}
            >
              사주
            </button>
            <button
              className={cls(
                "pb-4 font-medium border-b-2",
                method === "tarrot"
                  ? " border-purple-700 text-purple-700"
                  : "border-transparent text-gray-500"
              )}
              onClick={onTarrotClick}
            >
              타로
            </button>
          </div>
        </div>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex  px-4 border-b pb-4 cursor-pointer justify-between"
          >
            <div className="flex space-x-4">
              <div className="w-20 h-20 rounded-md bg-gray-400" />
              <div className="pt-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">처녀보살</h3>
                <span className="text-xs text-gray-500">#속마음 #금전운</span>
                <span className="font-medium mt-1 text-gray-900">
                  ₩1,300(30초)
                </span>
              </div>
            </div>
            <div className="flex space-x-2 items-end justify-end">
              <div className="flex space-x-0.5 items-center text-sm text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
              <div className="flex space-x-0.5 items-center text-sm text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
            </div>
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

export default Home;
