import React from "react"



export default function Banner() {
    return (
        <>
            <div className="sm:p-48 sm:h-[400px] flex justify-center items-center">
                <img
                    src="/new-arrival.png"
                    className="h-[auto] w-[800px]"
                    alt=""
                />
            </div>
            <div className="hidden sm:flex relative self-stretch flex w-full flex-col max-md:max-w-full">
                <div className="flex-col  self-stretch relative flex  w-full pr-2 max-md:max-w-full">
                    <div className="relative self-center w-full max-w-[1599px] mt-9 px-5 max-md:max-w-full h-[300px] bg-[url('/Group13161.png')] bg-no-repeat w-full flex items-center">
                        <div className="gap-5 w-full flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col  items-stretch w-[70%] max-md:w-full max-md:ml-0">
                                <div className="relative flex flex-col max-md:max-w-full max-md:mt-5">
                                    <div className="self-center w-full max-w-[1046px] max-md:max-w-full max-md:mt-10">
                                        <div className="gap-5 my-auto flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                                                <div className="flex  flex-col max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="/Group13197.png"
                                                        className="aspect-[1.19] object-cover object-center w-full  self-stretch"
                                                    />
                                                    <div className="text-zinc-900 text-center text-lg font-bold leading-[155.556%] self-center mt-6">
                                                        Assassin
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                                                <div className="flex  flex-col max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="/Group13197.png"
                                                        className="aspect-[1.19] object-cover object-center w-full  self-stretch"
                                                    />
                                                    <div className="text-zinc-900 text-center text-lg font-bold leading-[155.556%] self-center mt-6">
                                                        Neon Guy
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                                                <div className="flex  flex-col max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="/Group13197.png"
                                                        className="aspect-[1.19] object-cover object-center w-full  self-stretch"
                                                    />
                                                    <div className="text-zinc-900 text-center text-lg font-bold leading-[155.556%] self-center mt-6">
                                                        Mafia England
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                                                <div className="flex  flex-col max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="/Group13197.png"
                                                        className="aspect-[1.19] object-cover object-center w-full  self-stretch"
                                                    />
                                                    <div className="text-zinc-900 text-center text-lg font-bold leading-[155.556%] self-center mt-6">
                                                        Bassketball Girl
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col relative items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="flex-col  absolute flex  bottom-0">
                                    <img
                                        loading="lazy"
                                        src="/dj.png"
                                    />
                                    <div className=" w-full absolute bottom-0">
                                        <div className=" w-[80%]">
                                            <img
                                                loading="lazy"
                                                className=" w-auto"
                                                src="/the-dj.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}