export const InternShips = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800 dark:text-gray-300">
        Internships at Companies ~
      </h2>

      <div className="border p-5 rounded-lg dark:border-gray-800 bg-gray-50 dark:bg-[#101010]">
        <div className="pl-3 flex flex-col gap-y-5 mt-3 text-base font-medium text-gray-700 dark:text-gray-300">
          <div className="text-gray-800 text-lg font-semibold dark:text-gray-300">
            <div>
              1.{" "}
              <a
                className="text-blue-500 text-opacity-80 hover:text-opacity-100 duration-300"
                href="https://www.codingal.com"
                target="_blank"
                rel="noreferrer">
                Codingal :
              </a>
              &nbsp;
              <div className="mt-3 pl-5 flex flex-col gap-y-2">
                <div className="text-sm">
                  {" "}
                  Work :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    Worked with Next.js Framework to develop UI/UX Components
                    with tailwind & Used React Context for global state
                    management.
                  </span>
                </div>
                <div className="text-sm">
                  {" "}
                  Duration :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    3 Months.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-800 text-lg font-semibold dark:text-gray-300">
            <div>
              2.{" "}
              <a
                className="text-blue-500 text-opacity-80 hover:text-opacity-100 duration-300"
                href="https://www.preplaced.in"
                target="_blank"
                rel="noreferrer">
                Preplaced :
              </a>
              &nbsp;
              <div className="mt-3 pl-5 flex flex-col gap-y-2">
                <div className="text-sm">
                  {" "}
                  Work :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    Worked with React.js Framework to develop Dashboard for
                    mentor & mentees. Build UI/UX Components using tailwind css
                    & Sign Up flow for users to login with firebase. Also used
                    redux for global state management for crud operations with
                    backend.
                  </span>
                </div>
                <div className="text-sm">
                  {" "}
                  Duration :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    5 Months.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
