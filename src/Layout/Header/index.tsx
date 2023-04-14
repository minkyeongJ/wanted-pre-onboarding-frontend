import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import logo from "../../assets/images/logo.png";
import routerConst from "../../helper/routerConst";
import { useLocation } from "react-router";
import { ACCESS_TOKEN } from "../../helper/etcConsts";

const Header = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem(ACCESS_TOKEN);

  return (
    <header className="bg-white drop-shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href={routerConst.HOME} className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src={logo}
              width="12"
              height="12"
              alt=""
            />
          </a>
        </div>
        <div className="flex"></div>
        <h1 className="font-bold text-xl px-2">Todo List</h1>
        <div className="flex flex-1 justify-end">
          {location.pathname !== routerConst.LOGIN && !isAuthenticated && (
            <a
              href={routerConst.LOGIN}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          )}
          {isAuthenticated && (
            <span
              onClick={()=>{
                window.open('/')
                localstorage.removeItem('access_token')
              }}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log out
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
