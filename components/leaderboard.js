/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import ExternalLinkLineIcon from "remixicon-react/ExternalLinkLineIcon";

export default function Leaderboard({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-black text-white lg:pt-20 pt-32 lg:px-24 px-4">
      <div className="lg:max-w-xs w-full lg:pr-4 pr-0 pb-6 lg:pb-0">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 pb-6 lg:pb-0">
            <h2 className="font-roboto font-bold lg:text-4xl text-2xl">
              Leaderboard
            </h2>
            <p className="flex font-roboto font-normal lg:text-xl text-base">
              Total Points
            </p>
          </div>
          <a
            href="/results"
            className="flex justify-between font-roboto font-semibold items-center rounded-lg border-2 border-white border-opacity-50 px-5 py-[18px] opacity-80 hover:opacity-100 cursor-pointer"
          >
            <h2 className="text-xl">Results</h2>
            <ExternalLinkLineIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="w-full max-w-3xl space-y-[10px] font-roboto font-semibold lg:text-xl text-base">
        <div className="flex justify-between bg-white bg-opacity-10 px-5 py-4 rounded-lg">
          <div className="flex justify-start space-x-6">
            <p className="text-left">No.</p>
            <p className="text-left">Department</p>
          </div>
          <p className="text-right">Points</p>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between px-5 py-4 rounded-lg border-2 border-white border-opacity-50 "
          >
            <div className="flex justify-start space-x-10 pr-4">
              <p className="text-left">{index + 1}</p>
              <p className="text-left">{item.name}</p>
            </div>
            <p className="text-right">{item.points}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
