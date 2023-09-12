export const CurrentProfession = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800 dark:text-gray-300">
        Current Profession ~
      </h2>

      <div className="border p-5 rounded-lg dark:border-gray-800 bg-gray-50 dark:bg-[#101010]">
        <div className="pl-3 flex flex-col gap-y-5 mt-3 text-base font-medium text-gray-700 dark:text-gray-300">
          <div className="text-gray-800 text-lg font-semibold dark:text-gray-300">
            <div>
              1.{" "}
              <span
                className="text-blue-500 text-opacity-80 duration-300"
                rel="noreferrer">
                Stock Exchange Trading :
              </span>
              &nbsp;
              <div className="mt-3 pl-5 flex flex-col gap-y-2">
                <div className="text-sm">
                  {" "}
                  Work :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    I trade in derivatives market of equity & commodity &
                    currency. But my personal trading happens mostly in index's
                    options for scalping & options selling as hedged positions.
                  </span>
                </div>
                <div className="text-sm">
                  {" "}
                  Experience :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    3 Years.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-800 text-lg font-semibold dark:text-gray-300">
            <div>
              2.{" "}
              <span className="text-blue-500 text-opacity-80 duration-300">
                Giving Back To Community ~{" "}
                <span>( Sharing knowledge & Personal Experience )</span> :
              </span>
              &nbsp;
              <div className="mt-3 pl-5 flex flex-col gap-y-2">
                <div className="text-sm">
                  {" "}
                  Work :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    I share my personal experience and knowledge on my personal
                    portal to provide understanding of psychology & learn
                    technical things in financial market. Some content are free
                    for basic knowledge & some have premium plans for advance
                    knowledge of market understanding & behavior. Everything
                    provided in this portal is for educational & learning
                    purpose. Please do not take any investment ( or ) trading
                    decisions on behalf of my knowledge and experience. Do your
                    own analysis before making any investment & trading
                    decisions.
                  </span>
                </div>

                <div className="text-sm">
                  {" "}
                  Portal :{" "}
                  <a
                    className="text-blue-500 text-opacity-80 hover:text-opacity-100 duration-300"
                    href="https://livetrader.in"
                    target="_blank"
                    rel="noreferrer">
                    Website URL
                  </a>
                  <span className="font-normal text-gray-700 dark:text-gray-500">
                    &nbsp; ~ ( website content is not fully updated & optimized.
                    )
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
