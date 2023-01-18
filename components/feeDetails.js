import React from "react";
import InformationLineIcon from "remixicon-react/InformationLineIcon";
import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import { Disclosure } from "@headlessui/react";

export default function FeeDetails() {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-black text-white lg:pt-20 pt-32 lg:px-24 px-4">
      <div className="lg:max-w-xs w-full lg:pr-4 pr-0">
        <div className="flex flex-col space-y-2 pb-6 lg:pb-0">
          <h2 className="font-roboto font-bold lg:text-4xl text-2xl">
            Fee Details
          </h2>
          <p className="flex font-roboto font-normal lg:text-xl text-base">
            All Events
          </p>
          <div className="flex flex-col space-y-6 rounded-lg border-2 border-white border-opacity-50 px-5 py-[18px]">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex space-x-[10px] font-roboto font-semibold items-center">
                    <InformationLineIcon className="w-6 h-6" />
                    <h2 className="text-xl">Appeal Information</h2>
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-col space-y-6">
                    <div className="flex lg:flex-col sm:flex-row flex-col sm:flex-wrap justify-between gap-6">
                      <div className="flex flex-col space-y-2">
                        <h2 className="font-roboto font-semibold text-xl">
                          Dr.Shiny Paul
                        </h2>
                        <p className="font-roboto font-normal text-base">
                          +919496721408
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <h2 className="font-roboto font-semibold text-xl">
                          Anilkumar K K
                        </h2>
                        <p className="font-roboto font-normal text-base">
                          +919447058981
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <h2 className="font-roboto font-semibold text-xl">
                          Sreelekshmi H
                        </h2>
                        <p className="font-roboto font-normal text-base">
                          +918281381871
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <h2 className="font-roboto font-semibold text-xl">
                          Yadhu G
                        </h2>
                        <p className="font-roboto font-normal text-base">
                          +919061200033
                        </p>
                      </div>
                    </div>
                    <a
                      href="./doc/appeal_form_SATTVA.docx"
                      className="flex space-x-[10px] font-roboto font-semibold items-center opacity-80 hover:opacity-100 cursor-pointer"
                    >
                      <DownloadLineIcon className="w-6 h-6" />
                      <h2 className="text-xl">Appeal Form</h2>
                    </a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:max-w-3xl space-y-3 lg:space-y-2 font-roboto font-semibold text-xl lg:text-2xl">
        <div className="flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
          <p>Individual Item Fee</p>
          <p>30/-</p>
        </div>
        <div className="flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
          <div className="flex flex-col space-y-1 lg:space-y-2">
            <p>Group Item</p>
            <p className="font-normal lg:text-base text-base">
              Per Participant
            </p>
          </div>
          <p>20/-</p>
        </div>
        <div className="flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
          <p>Substitution</p>
          <p>50/-</p>
        </div>
        <div className="flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
          <div className="flex flex-col space-y-1 lg:space-y-2">
            <p>Appeal</p>
            <p className="font-normal lg:text-base text-base">
              Individual Item
            </p>
          </div>
          <p>250/-</p>
        </div>
        <div className="flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
          <div className="flex flex-col space-y-1 lg:space-y-2">
            <p>Appeal</p>
            <p className="font-normal lg:text-base text-base">Group Item</p>
          </div>
          <p>500/-</p>
        </div>
      </div>
    </div>
  );
}
