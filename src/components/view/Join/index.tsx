import { useState } from "react";
import { isPassedEmailPassWord } from "../../../utils/loginJoinUtil";
import routerConst from "../../../helper/routerConst";
import useJoin from "../../../hooks/join/useJoin";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doJoin } = useJoin();
  console.log("회원가입 페이지");

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              회원가입
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              doJoin({ email, password });
            }}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  placeholder="Email address"
                  data-testid="email-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  placeholder="Password"
                  data-testid="password-input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-25"
                data-testid="signup-button"
                disabled={!isPassedEmailPassWord({ email, password })}
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Join;
