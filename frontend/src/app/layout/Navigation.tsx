"use client"
import Image from "next/image";
import React from "react"
import clsx from "clsx"


const Navigation = () => {
    const [expandHeader, setExpandHeader] = React.useState(false)
    return (
        <>
            {/* Desktop */}
            <div className="bg-zinc-900 hidden sm:flex bg-opacity-70  flex-col h-[84px] flex items-center">
                <div className="px-16 self-center flex  sm:gap-5 my-auto  max-md:flex-wrap max-md:justify-center ">
                    <div className="flex justify-between w-[60%]">
                        <div className="items-start self-center flex w-[687px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
                            <div className="text-white text-center text-sm font-bold leading-[142.857%]">
                                Home
                            </div>
                            <div className="text-white text-center text-sm font-bold leading-[142.857%]">
                                About us
                            </div>
                            <div className="text-white text-center text-sm font-bold leading-[142.857%]">
                                Our teams
                            </div>
                            <div className="items-start flex flex-col">
                                <div className="text-center text-sm font-bold leading-[142.857%]  text-[#DA34DD] bg-clip-text bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)]">
                                    Marketplace
                                </div>
                                <div className="bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)] flex w-4 h-0.5 flex-col" />
                            </div>
                            <div className="text-white text-center text-sm font-bold leading-[142.857%]">
                                Roadmap
                            </div>
                            <div className="text-white text-center text-sm font-bold leading-[142.857%]">
                                White paper
                            </div>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="text-white text-center text-base font-semibold leading-[150%] self-stretch justify-center items-center rounded shadow-[0px_0px_50px_0px_rgba(187,75,255,0.32)] bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)] w-40 max-w-full px-5 py-3.5 max-md:pl-0.5 max-md:pr-px">
                            Connect Wallet
                        </div>
                        <div className="flex gap-4 my-auto">
                            <Image
                                src="/world.svg"
                                alt="Next.js Logo"
                                width={20}
                                height={20}
                                priority
                            />
                            <Image
                                src="/down.svg"
                                alt="Next.js Logo"
                                width={20}
                                height={20}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className={clsx("bg-zinc-900  sm:hidden bg-opacity-70  h-[64px] flex items-center justify-center", expandHeader && "h-[250px]")}>
                <div className={clsx("items-start self-center flex justify-between gap-4 my-auto max-md:flex-wrap max-md:justify-center", expandHeader && "flex-col")}>
                    <div className="text-white text-center text-sm font-bold">
                        Home
                    </div>
                    <div className="text-white text-center text-sm font-bold">
                        About us
                    </div>
                    <div className="text-white text-center text-sm font-bold ">
                        Our teams
                    </div>
                    {expandHeader && (
                        <>
                            <div className="text-white text-center text-sm font-bold leading-[142.857%]">
                                Roadmap
                            </div>
                            <div className="text-white text-center text-sm font-bold leading-[142.857%]">
                                White paper
                            </div>
                            <div className="flex gap-4">
                                <div className="text-white text-center text-base font-semibold leading-[150%] self-stretch justify-center items-center rounded shadow-[0px_0px_50px_0px_rgba(187,75,255,0.32)] bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)] w-40 max-w-full px-5 py-3.5 max-md:pl-0.5 max-md:pr-px">
                                    Connect Wallet
                                </div>
                                <div className="flex gap-4 my-auto">
                                    <Image
                                        src="/world.svg"
                                        alt="Next.js Logo"
                                        width={20}
                                        height={20}
                                        priority
                                    />
                                    <Image
                                        src="/down.svg"
                                        alt="Next.js Logo"
                                        width={20}
                                        height={20}
                                        priority
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div>
                    <button onClick={() => setExpandHeader(!expandHeader)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navigation