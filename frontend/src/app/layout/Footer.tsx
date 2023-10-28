import React from "react"



export default function Footer() {
    return (
        <div className="bg-zinc-900 self-stretch flex grow flex-col pt-16 pb-52 px-5 max-md:max-w-full max-md:mr-1">
        <div className="self-center w-full max-w-[1623px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
              <div className="flex w-[350px] max-w-full grow items-start justify-between gap-5 max-md:justify-center max-md:mt-10">
                <div className="flex flex-col">
                  <div className="text-white text-xl font-bold leading-[160%]">
                    Navigation
                  </div>
                  <div className="text-white text-base font-medium leading-[150%] mt-10 max-md:mt-10">
                    Home
                  </div>
                  <div className="text-white text-base font-medium leading-[150%] mt-4">
                    About us
                  </div>
                  <div className="text-white text-base font-medium leading-[150%] mt-4">
                    Our teams
                  </div>
                </div>
                <div className="flex flex-col mt-16 max-md:mt-10">
                  <div className="text-white text-base font-medium leading-[150%]">
                    Whitepaper
                  </div>
                  <div className="text-white text-base font-medium leading-[150%] mt-3.5">
                    Marketplace
                  </div>
                  <div className="text-white text-base font-medium leading-[150%] mt-3.5">
                    Roadmap
                  </div>
                </div>
                <div className="flex flex-col mt-16 max-md:mt-10">
                  <div className="text-white text-base font-medium leading-[150%]">
                    FAQs
                  </div>
                  <div className="text-white text-base font-medium leading-[150%] mt-4">
                    News
                  </div>
                  <div className="text-white text-base font-medium leading-[150%] mt-4">
                    Community
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-10">
                <div className="text-white text-xl font-bold leading-[160%] self-center">
                  contact us
                </div>
                <div className="items-start self-stretch flex justify-between gap-2.5 mt-10 max-md:ml-px max-md:mt-10">
                  <div className="text-white text-base font-medium leading-[150%] self-stretch">
                    01234568910
                  </div>
                </div>
                <div className="items-start flex w-[129px] max-w-full gap-2.5 mt-8">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-base font-medium leading-[150%] self-stretch">
                    tymex-talent@tyme.com
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-white text-xl font-bold leading-[160%]">
                  Subcribe to receive our latest update
                </div>
                <div className="flex w-[614px] max-w-full items-start gap-5 mt-11 max-md:flex-wrap max-md:mt-10">
                  <div className="text-zinc-500 text-center text-xs font-medium leading-[166.667%] self-stretch rounded border border-[color:var(--neutral-5,#FFF)] grow basis-auto px-5 py-5 border-solid max-md:max-w-full max-md:pl-px">
                    Your email address
                  </div>
                  <div className="justify-center items-center rounded shadow-[0px_0px_50px_0px_rgba(187,75,255,0.32)] bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)] self-stretch flex w-[168px] max-w-full flex-col px-5 py-4">
                    <div className="text-white text-center text-base font-semibold leading-[150%] self-center">
                      Subcribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-700 self-center w-[1600px] h-px mt-16 max-md:max-w-full max-md:mt-10" />
        <div className="self-center flex mb-0 w-full max-w-[1598px] items-start justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:mb-2.5">
          <div className="text-white text-base font-medium leading-[150%] max-w-[327px] self-stretch grow shrink-0 basis-auto">
            ©2023 Tyme - Edit. All Rights reserved.
          </div>
          <div className="flex items-start justify-between gap-5 flex-1 max-md:justify-center">
            <div className="text-white text-base font-medium leading-[150%] self-stretch">
              Security
            </div>
            <div className="text-white text-base font-medium leading-[150%] self-stretch">
              Legal
            </div>
            <div className="text-white text-base font-medium leading-[150%] self-stretch">
              Privacy
            </div>
          </div>
        </div>
      </div>
    )
}