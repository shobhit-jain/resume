export const Personal = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800 dark:text-gray-300">Personal ~</h2>

      <div className="border p-5 rounded-lg dark:border-gray-800 bg-gray-50 dark:bg-[#101010]">
        <div className="pl-3 flex flex-col gap-y-5 mt-3 text-base font-medium text-gray-700 dark:text-gray-300">
          <div className="text-gray-800 text-lg font-semibold dark:text-gray-300">
            <div>
              <div className="flex flex-col gap-y-2">
                <div className="text-sm">
                  {" "}
                  Hobbies :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    Chess, Cricket, Music, Guitar, Food, Movies, Traveling.
                  </span>
                </div>
                <div className="text-sm">
                  {" "}
                  Nationality :{" "}
                  <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    Indian.
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
