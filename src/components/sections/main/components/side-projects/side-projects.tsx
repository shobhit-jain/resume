export const SideProjects = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800 dark:text-gray-300">
        Side Projects ~
      </h2>

      <div className="border p-5 rounded-lg dark:border-gray-800 bg-gray-50 dark:bg-[#101010]">
        <div className="pl-3 flex flex-col gap-y-5 mt-3 text-base font-medium text-gray-700 dark:text-gray-300">
          <div className="text-gray-800 text-lg font-semibold dark:text-gray-300">
            <div>
              1.{" "}
              <a
                className="text-blue-500 text-opacity-80 hover:text-opacity-100 duration-300"
                href="https://netflix-web.vercel.app"
                target="_blank"
                rel="noreferrer">
                Netflix Clone :
              </a>
              &nbsp;
              <div className="mt-3 pl-5 flex flex-col gap-y-2">
                <div className="text-sm">
                  {" "}
                  Frontend :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    Next.js, Tailwind css.
                  </span>
                </div>

                <div className="text-sm">
                  {" "}
                  Backend :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    Firebase , firestore, firebase auth.
                  </span>
                </div>
                <div className="text-sm">
                  {" "}
                  Repository : &nbsp;
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    <a
                      className="text-blue-600 dark:text-blue-500 dark:text-opacity-80 dark:hover:text-opacity-100  text-opacity-80 hover:text-opacity-100 duration-300"
                      href="https://github.com/shobhit-jain/Next.js-Netflix-Clone"
                      target="_blank"
                      rel="noreferrer">
                      Github URL
                    </a>
                  </span>
                </div>

                <div className="text-sm">
                  {" "}
                  Demo : &nbsp;
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    <a
                      className="text-blue-600 dark:text-blue-500 dark:text-opacity-80 dark:hover:text-opacity-100 text-opacity-80 hover:text-opacity-100 duration-300"
                      href="https://netflix-web.vercel.app"
                      target="_blank"
                      rel="noreferrer">
                      Website URL
                    </a>
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
                href="https://hydrogen-ecommerce.vercel.app"
                target="_blank"
                rel="noreferrer">
                Shopify E-Commerce Store :
              </a>
              &nbsp;
              <div className="mt-3 pl-5 flex flex-col gap-y-2">
                <div className="text-sm">
                  {" "}
                  Frontend Framework :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    Hydrogen & React, Tailwind.
                  </span>
                </div>

                <div className="text-sm">
                  {" "}
                  Backend :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    Shopify Api & Auth.
                  </span>
                </div>

                <div className="text-sm">
                  {" "}
                  Repository : &nbsp;
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    <a
                      className="text-blue-600 dark:text-blue-500 dark:text-opacity-80 dark:hover:text-opacity-100 text-opacity-80 hover:text-opacity-100 duration-300"
                      href="https://github.com/shobhit-jain/shopify-hydrogen-deployment"
                      target="_blank"
                      rel="noreferrer">
                      Github URL
                    </a>
                  </span>
                </div>

                <div className="text-sm">
                  {" "}
                  Demo : &nbsp;
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    <a
                      className="text-blue-600 dark:text-blue-500 dark:text-opacity-80 dark:hover:text-opacity-100 text-opacity-80 hover:text-opacity-100 duration-300"
                      href="https://hydrogen-ecommerce.vercel.app"
                      target="_blank"
                      rel="noreferrer">
                      Website URL
                    </a>
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
