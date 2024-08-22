import React from "react";

const Loading = () => {
  return (
    <div className="h-screen justify-center items-center">
      <div className="text-6xl  text-center font-semibold flex gap-2 items-center mt-12 md:mt-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 animate-spin fill-white block mx-auto"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
            data-original="#000000"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
