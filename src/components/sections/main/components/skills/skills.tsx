export const Skills = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800 dark:text-gray-300">Skills ~</h2>

      <div className="border p-5 rounded-lg dark:border-gray-800 bg-gray-50 dark:bg-[#101010]">
        <div className="text-gray-800 text-lg font-semibold dark:text-gray-300">
          Total Experience : &nbsp;
          <span className="text-green-800 font-semibold dark:text-green-500 dark:text-opacity-60 text-opacity-70 text-sm">
            ( 5 Years )
          </span>
        </div>

        <div className="pl-3 flex flex-col gap-y-2 mt-3 text-base font-medium text-gray-700 dark:text-gray-300">
          <div>
            Frontend Technologies : &nbsp;
            <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
              HTML 5, CSS 3, JavaScript, JQuery, TypeScript, Bootstrap,
              Tailwind, Redux.
            </span>
          </div>

          <div>
            Frontend Frameworks : &nbsp;
            <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
              React, Next.js, Redux.
            </span>
          </div>
          <div>
            Backend : &nbsp;
            <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
              Node.js, Firebase, Rest Api.
            </span>
          </div>
          <div>
            Backend Frameworks : &nbsp;
            <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
              Express.js , Next.js.
            </span>
          </div>

          <div>
            OS : &nbsp;
            <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
              Linux, Windows.
            </span>
          </div>

          <div>
            Other Tools : &nbsp;
            <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
              Git, Github.
            </span>
          </div>

          <div>
            Editor : &nbsp;
            <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
              VS Code
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
