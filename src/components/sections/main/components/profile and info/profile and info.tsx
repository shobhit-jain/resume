export const ProfileAndInfo = () => {
  return (
    <>
      <div className="border flex justify-between flex-wrap gap-7 p-5 rounded-lg dark:border-gray-800 bg-gray-50 dark:bg-[#101010]">
        <div className="flex gap-5">
          <img
            src="https://avatars.githubusercontent.com/u/29859013?v=4"
            className="rounded-full"
            width={100}
            height={100}
            alt=""
          />

          <div className="flex flex-col gap-y-1 text-gray-500 mt-2">
            <span className="text-xl">Shobhit Jain</span>
            <span className="text-[10px]">24/03/1994</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          {/* linkedin & github */}
          <div className="space-x-2">
            <span className="text-blue-500 text-opacity-80 duration-300 hover:text-opacity-100 dark: text-xs font-normal">
              <a
                href="https://www.linkedin.com/in/shobhit-2403"
                target="_blank"
                rel="noreferrer">
                Linkedin
              </a>
            </span>

            <span className="dark:text-gray-700 text-gray-300 text-xs">|</span>

            <span className="text-blue-500 text-opacity-80 duration-300 hover:text-opacity-100 dark: text-xs font-normal">
              <a
                href="https://github.com/shobhit-jain"
                target="_blank"
                rel="noreferrer">
                Github
              </a>
            </span>
          </div>

          {/* email */}
          <div className="text-gray-500 text-sm font-semibold">
            Email : &nbsp;
            <span className="text-gray-500 dark: text-xs font-normal">
              shobhitjain.work@gmail.com
            </span>
          </div>

          {/* phone */}
          <div className="text-gray-500 text-sm font-semibold">
            Phone : &nbsp;
            <span className="text-blue-500 text-opacity-80 duration-300 hover:text-opacity-100 dark: text-xs font-normal">
              <a href="tel:+91 8090920577">8090920577</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
