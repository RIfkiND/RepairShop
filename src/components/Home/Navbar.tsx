"use client";
import { Mail, Twitter, Facebook ,LogIn} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import DarkModeSwitcher from "../Header/DarkModeSwitcher";

export const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        {/* Logo  */}

        {/* Menu Mobile */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                {/* Logo */}
                <Link href="/">
                  <span className="dark:text-gray-100 flex items-center space-x-2 text-2xl font-medium text-indigo-500">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>Nextly</span>
                  </span>
                </Link>
                <div className="flex items-center">
                  <div className="mr-5   flex list-none items-center justify-end gap-2 2xsm:gap-4 lg:hidden">
                    <DarkModeSwitcher />
                  </div>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="text-gray-500 dark:text-gray-300 dark:focus:bg-trueGray-700 ml-auto flex items-center rounded-md px-2 py-1 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none lg:hidden"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="text-gray-500 dark:text-gray-300 dark:focus:bg-gray-800 -ml-4 w-full rounded-md px-4 py-2 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none"
                      >
                        {item}
                      </Link>
                    ))}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="mt-3 w-full rounded-md bg-indigo-600 px-6 py-2 text-center text-white lg:ml-5">
                         <Mail className="mr-2 "/> Send Us An Email
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="mb-5">
                            Chose Your Social Account{" "}
                          </DialogTitle>
                        </DialogHeader>

                        <Button>
                          <Mail className="mr-2 h-4 w-4" /> Login with Email
                        </Button>

                        <Button>
                          <Twitter className="mr-2 h-4 w-4" /> Login with
                          Twitter
                        </Button>

                        <Button>
                          <Facebook className="mr-2 h-4 w-4" /> Login with
                          FaceBook
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link
                  href="/"
                  className="text-gray-800 dark:text-gray-200 dark:focus:bg-gray-800 inline-block rounded-md px-4 py-2 text-lg font-normal no-underline hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop*/}
        <div className="nav__item mr-3 hidden space-x-4 lg:flex ">
        

          <div className="mr-5  mt-2 flex list-none items-center justify-end gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
};
