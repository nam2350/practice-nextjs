import { useState } from "react";
import { cls } from "../libs/utils"

const Enter = () => {
  const [method, setMethod] = useState("");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className="mt-16 px-4">
      <h3 className="text-3xl font-bold text-center text-purple-700">용한 언니</h3>
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <div className="grid border-b w-full mt-8 grid-cols-2 gap-16">
            <button
              className={cls(
                "pb-4 font-medium border-b-2",
                method === "email"
                  ? " border-purple-700 text-purple-700"
                  : "border-transparent text-gray-500"
              )}
              onClick={onEmailClick}
            >
              이메일
            </button>
            <button
              className={cls(
                "pb-4 font-medium border-b-2",
                method === "phone"
                  ? " border-purple-700 text-purple-700"
                  : "border-transparent text-gray-500"
              )}
              onClick={onPhoneClick}
            >
              전화번호
            </button>
          </div>
        </div>
        <form className="flex flex-col mt-8">
          <label htmlFor="input" className="text-sm font-medium text-gray-700">
            {method === "email" ? "이메일 주소" : null}
            {method === "phone" ? "전화번호" : null}
          </label>
          <div className="mt-2">
            {method === "email" ? (
              <input id="input" 
                type="email"
                className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-700 focus:border-purple-700"
                required
              />
            ) : null}
            {method === "phone" ? (
              <div className="flex rounded-md shadow">
                <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">+82</span>
                <input id="input" type="number" className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-700 focus:border-purple-700" required />
              </div>
            ) : null}
          </div>
          <button className="mt-5 bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none">
            {method === "email" ? "로그인" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form>
        <div className="mt-8 ">
          <div className="relative">
            <div className="absolute w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white text-sm text-gray-500">소셜 로그인</span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-6 gap-3">
            <button className="flex justify-center items-center py-2 px-4 border border-yellow-300 rounded-md shadow-sm bg-yellow-500 text-sm font-medium text-black hover:bg-yellow-400">
              카카오 로그인
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-green-300 rounded-md shadow-sm bg-green-500 text-sm font-medium text-black hover:bg-green-400">
              네이버 로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enter;
