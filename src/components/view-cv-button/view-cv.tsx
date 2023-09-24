export const ViewCV = () => {
  return (
    <>
      <a
        href="/resume/cv.pdf"
        target="_blank"
        className="flex items-center gap-2 border text-[11px] text-blue-500 dark:text-blue-300 py-[7.5px] px-4 border-blue-300 dark:border-blue-500 rounded-md dark:hover:text-blue-500 dark:hover:border-blue-500 opacity-40 hover:opacity-100 dark:hover:opacity-70 duration-300">
        View CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="w-[12px] h-[12px] mb-1">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </>
  );
};
