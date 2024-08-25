import Image from "next/image";
import { Container } from "@/components/Home/Container";
import { Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex w-full items-center lg:w-1/2">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-gray-800 text-4xl font-bold leading-snug tracking-tight dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              DeRepair
            </h1>
            <p className="text-gray-500 dark:text-gray-300 py-5 text-xl leading-normal lg:text-xl xl:text-2xl">
              DeRepair is a place to solve your electronic problems by providing
              exclusive solutions and repairs that are 100% trusted.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white "
              >
                View our Work
              </a>
              <a
                href="/"
                rel="noopener"
                className="text-gray-500 dark:text-gray-400 flex items-center space-x-2"
              >
                <Linkedin />
                <span> View on Linkedin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="">
            <Image
              src={"/img/DeviceIlustration.png"}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-gray-700 text-center text-xl dark:text-white">
            Trusted by <span className="text-indigo-600">2000+</span> customers
            worldwide
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5 md:justify-around">
            <div className="text-gray-400 dark:text-gray-400">
              <AndroidLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <AppleLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400 pt-1">
              <WindowLogo />
            </div>
            
          </div>
        </div>
      </Container>
    </>
  );
};




function AppleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      width="108"
      height="60"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

function WindowLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"width="108"
    height="60"
    fill="none">
      <path fill="currentColor" d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
  );
}



function AndroidLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="108"
    fill="none"
  height="60">
    <path   fill="currentColor" d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
  </svg>
  );
}
