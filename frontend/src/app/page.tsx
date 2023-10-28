"use client";
import clsx from "clsx";
import Image from "next/image";
import * as React from "react";
import { ThemeService } from "./api/ThemeService";
import { TierService } from "./api/TierService";
import { ItemService } from "./api/ItemService";
import _ from "lodash"
const tags = [
  {
    value: "",
    name: "All"
  },
  {
    value: "item_part",
    name: "Upper Body"
  },
  {
    value: "item_part",
    name: "Hat"
  },
  {
    value: "item_part",
    name: "Shoes"
  },
  {
    value: "item_part",
    name: "Accessory"
  },
  {
    value: "item_part",
    name: "Accessory"
  },
  {
    value: "item_tier",
    name: "Legendary"
  },
  {
    value: "item_tier",
    name: "Mythic"
  },
  {
    value: "item_tier",
    name: "Epic"
  },
  {
    value: "item_tier",
    name: "Rare"
  },
]
const EmptyOption = {
  value: "",
  name: ""
}


const sortByPrice = [
  EmptyOption,
  {
    value: "asc",
    name: "Low to high"
  },
  {
    value: "desc",
    name: "High to low"
  },
]



const sortByDay = [
  EmptyOption,
  {
    value: "3",
    name: "3 Days ago"
  },
  {
    value: "7",
    name: "7 Days ago"
  },
  {
    value: "30",
    name: "30 Days ago"
  },
]

interface IOptionsProps {
  value: string
  name: string
}

export default function MyComponent(props: any) {
  const [theme, setTheme] = React.useState<Array<IOptionsProps>>([])
  const [tier, setTier] = React.useState<Array<IOptionsProps>>([])
  const [selectedTag, setSelectedTag] = React.useState("All")
  const [selectedSortByPrice, setSelectedSortByPrice] = React.useState("")
  const [selectedSortByDay, setSelectedSortByDay] = React.useState("")
  const [selectedTheme, setSelectedTheme] = React.useState("")
  const [selectedTier, setSelectedTier] = React.useState("")
  const [priceRange, setPriceRange] = React.useState({ from: "", to: "" })
  const [search, setSearch] = React.useState("")
  const [items, setItems] = React.useState([])
  const debouncedFunction = React.useCallback(_.debounce((fn, value) => {
    fn(value)
  }, 100), []);

  const refSearch = React.useRef<HTMLInputElement>(null)
  const refFromPrice = React.useRef<HTMLInputElement>(null)
  const refToPrice = React.useRef<HTMLInputElement>(null)
  const pagnation = React.useRef({offset: 0})
  const getParams = () => {
    let body = {}

    if (search) {
      body = { ...body, q: search }
    }
    if (priceRange.from) {
      body = { ...body, from_price: Number(priceRange.from) }
    }
    if (priceRange.to) {
      body = { ...body, to_price: Number(priceRange.from) }
    }
    if (selectedSortByDay) {
      body = { ...body, range_day: Number(selectedSortByDay) }
    }
    if (selectedSortByPrice) {
      body = { ...body, order_by: selectedSortByPrice }
    }

    if (selectedTheme) {
      body = { ...body, theme: Number(selectedTheme) }
    }

    if (selectedTier) {
      body = { ...body, tier: Number(selectedTier) }
    }

    body = { ...body, offset:  pagnation.current.offset}
    return body
  }


  const handleInputChange = (e: any) => {
    debouncedFunction(setSearch, e.target.value)
  }

  const handleFromPriceChange = (e: any) => {
    debouncedFunction(setPriceRange, { ...priceRange, from: e.target.value })
  }

  const handleToPriceChange = (e: any) => {
    debouncedFunction(setPriceRange, { ...priceRange, to: e.target.value })
  }

  const loadMore = () => {
    pagnation.current.offset += 20
    let params = getParams() as any
    params.offset = pagnation.current.offset
    const fetch = async () => {
      const request = [ItemService.getAll(params)]
      Promise.all(request).then(([itemRes]: any) => {
        setItems((prev) => ([...prev, ...(itemRes?.data ?? []) as never[]]))
      })
    }
    fetch()
  }

  const resetFilter = () => {
    setPriceRange({ from: "", to: "" })
    setSearch("")
    setSelectedSortByDay("")
    setSelectedTheme("")
    setSelectedTier("")
    setSelectedSortByPrice("")

    pagnation.current.offset = 0
    
    if(refSearch?.current) {
      refSearch.current.value = ""
    }
    if(refFromPrice?.current) {
      refFromPrice.current.value = ""
    }
    if(refToPrice?.current) {
      refToPrice.current.value = ""
    }
  }

  const filter = () => {
    let params = getParams()
    console.log(params)
    const fetch = async () => {
      const request = [ItemService.getAll(params)]
      Promise.all(request).then(([itemRes]: any) => {
        setItems(itemRes?.data ?? [])
      })
    }
    fetch()
  }
  React.useEffect(() => {
    const fetch = async () => {
      const request = [TierService.getAll(), ThemeService.getAll(), ItemService.getAll()]
      Promise.all(request).then(([tierRes, themeRes, itemRes]: any) => {
        const tierOption = tierRes?.data.map((tier: any) => ({
          name: tier.tier_value,
          value: tier.tier_id
        }))
        setTier([EmptyOption, ...tierOption])

        const themeOption = themeRes?.data.map((theme: any) => ({
          name: theme.theme_value,
          value: theme.theme_id
        }))
        setTheme([EmptyOption, ...themeOption])

        setItems(itemRes?.data ?? [])
      })
    }
    fetch()
  }, [])

  React.useEffect(() => {
    let params = getParams()
    const fetch = async () => {
      const request = [ItemService.getAll(params)]
      Promise.all(request).then(([itemRes]: any) => {
        setItems(itemRes?.data ?? [])
      })
    }
    const interval = setInterval(() => {
      fetch()
    }, 60000)
    return () => {
      clearInterval(interval)
    }
  }, [priceRange, selectedSortByDay, selectedSortByPrice, selectedTag, selectedTheme, selectedTier, search])


  return (
    <div className="mx-auto flex flex-col pr-px">
      <div className="flex-col   self-center relative flex  w-full max-w-[1918px] pr-0 pb-0 pl-0  max-md:max-w-full max-md:mb-10">
        <div className="self-center w-full max-w-[1645px] mt-10 px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-10">
                <div>
                  <input ref={refSearch} placeholder="Search" onChange={handleInputChange} className="h-[40px] p-4 outline-none w-full" />
                </div>

                <div className="text-zinc-500 text-base font-semibold leading-[150%] mt-11 max-md:mt-10">
                  Price
                </div>
                <div className="flex gap-1 grow shrink-0 basis-auto">
                  <input ref={refFromPrice} placeholder="From" onChange={handleFromPriceChange} className="h-[40px] p-4 outline-none w-full" />
                  <input ref={refToPrice} placeholder="To" onChange={handleToPriceChange} className="h-[40px] p-4 outline-none w-full" />
                </div>
                <div className="text-zinc-500 text-base font-semibold leading-[150%] mt-11 max-md:mt-10">
                  TIER
                </div>
                <select value={selectedTier} onChange={e => setSelectedTier(e.target.value)}>
                  {tier.map(item => (
                    <option key={item.name} value={item.value}>{item.name}</option>
                  ))}
                </select>
                <div className="text-zinc-500 text-base font-semibold leading-[150%] mt-6">
                  THEME
                </div>
                <select value={selectedTheme} onChange={e => setSelectedTheme(e.target.value)}>
                  {theme.map(item => (
                    <option key={item.name} value={item.value}>{item.name}</option>
                  ))}
                </select>
                <div className="text-zinc-500 text-base font-semibold leading-[150%] mt-6">
                  TIME
                </div>
                <select value={selectedSortByDay} onChange={e => setSelectedSortByDay(e.target.value)}>
                  {sortByDay.map(item => (
                    <option key={item.name} value={item.value}>{item.name}</option>
                  ))}
                </select>
                <div className="text-zinc-500 text-base font-semibold leading-[150%] mt-6">
                  ORDER BY
                </div>
                <select value={selectedSortByPrice} onChange={e => setSelectedSortByPrice(e.target.value)}>
                  {sortByPrice.map(item => (
                    <option key={item.name} value={item.value}>{item.name}</option>
                  ))}
                </select>
                <div className="flex w-[332px] max-w-full items-start justify-between gap-2 mt-8 max-md:justify-center">

                  <div onClick={resetFilter} className="hover:cursor-pointer justify-center items-center rounded shadow-[0px_0px_50px_0px_rgba(187,75,255,0.32)] self-stretch flex w-[168px] max-w-full flex-col px-5 py-4">
                    <div className="text-white text-center text-base font-semibold leading-[150%] self-center">
                      Reset filter
                    </div>
                  </div>
                  <div onClick={filter} className="hover:cursor-pointer justify-center items-center rounded shadow-[0px_0px_50px_0px_rgba(187,75,255,0.32)] bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)] self-stretch flex w-[168px] max-w-full flex-col px-5 py-4">
                    <div className="text-white text-center text-base font-semibold leading-[150%] self-center">
                      Search
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
              <div className="self-center flex w-full max-w-[1600px] items-start justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                {tags.map(item => (
                  <>
                    <div key={item.name} className={clsx("bg-[linear-gradient(91.47deg, rgba(218, 69, 143, 0.4) -6%, rgba(218, 52, 221, 0.4) 113.05%)]  text-white text-base font-semibold leading-[150%] hover:cursor-pointer self-stretch items-start rounded max-w-full px-4 py-2.5",
                      item.name === selectedTag && "bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)]")}>
                      {item.name}
                    </div>
                  </>
                ))}
              </div>
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[99%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                      <div className="self-stretch mt-10 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                          {items.map((item: any) => (
                            <>
                              <div key={item.Item.item_id} className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
                                <div className="justify-center items-center bg-zinc-700 bg-opacity-60 flex w-full grow flex-col flex-1 mx-auto p-4 rounded-xl max-md:mt-10">
                                  <img
                                    loading="lazy"
                                    src={item.Item.item_image}
                                    className="aspect-[1.01] object-cover object-center w-full  self-stretch"
                                  />
                                  <div className="justify-center items-start self-stretch flex flex-col mt-7">
                                    <div className="flex w-full items-start justify-between gap-5">
                                      <div className="text-white text-base font-semibold leading-[150%] my-auto">
                                        {item.Item.item_name}
                                      </div>
                                      <div className="items-start self-stretch flex justify-between gap-2">
                                        <img
                                          loading="lazy"
                                          srcSet="..."
                                          className="aspect-[0.67] object-cover object-center w-2  self-center max-w-full my-auto"
                                        />
                                        <div className="text-white text-center text-sm font-medium leading-[142.857%] self-stretch">
                                          {item.Item.item_price} ETH
                                        </div>
                                      </div>
                                    </div>
                                    <div className="items-start flex w-[140px] max-w-full gap-3 mt-5">
                                      <img
                                        loading="lazy"
                                        src={item.Author.author_avatar}
                                        className="rounded-full aspect-square object-cover object-center w-8  self-stretch max-w-full"
                                      />
                                      <div className="text-white text-xs font-medium leading-[166.667%] self-center my-auto">
                                        {item.Author.author_name}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}

                        </div>
                        <div onClick={loadMore} className="hover:cursor-pointer mx-auto mt-4 justify-center items-center rounded shadow-[0px_0px_50px_0px_rgba(187,75,255,0.32)] bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)] self-stretch flex w-[168px] max-w-full flex-col px-5 py-4">
                          <div className="text-white text-center text-base font-semibold leading-[150%] self-center">
                            Load more
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-col items-stretch w-[1%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-neutral-500 flex w-1.5 max-w-full grow flex-col mt-6 mx-auto pt-[884px] pb-[957px] rounded max-md:mt-10">
                      <div className="bg-yellow-400 self-stretch flex mb-0 w-full h-[119px] flex-col rounded max-md:mb-2.5" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative justify-center items-center rounded shadow-[0px_0px_50px_0px_rgba(187,75,255,0.32)] bg-[linear-gradient(91deg,#DA458F_-6%,#DA34DD_113.05%)] self-center flex w-[326px] max-w-full flex-col ml-52 mt-12 px-5 py-7 max-md:mt-10">
          <div className="text-white text-center text-base font-semibold leading-[150%] self-center">
            View more
          </div>
        </div> */}
        <div className="relative self-stretch z-[1] flex w-full flex-col mt-14 max-md:max-w-full max-md:mt-10">
          <img
            loading="lazy"
            src="/frame.png"
            className="aspect-[4.59] object-cover object-center w-full justify-center items-center opacity-80  self-stretch max-md:max-w-full"
          />

        </div>
      </div>
    </div>
  );
}


