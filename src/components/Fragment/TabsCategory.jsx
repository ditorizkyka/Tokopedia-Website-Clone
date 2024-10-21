import {Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import MainCardProduct from "../Elements/MainCard";
import React from "react";
import Button from "../Elements/ButtonFilled";
import { useAppStore } from "../../state-manager/app-store";

const TabCategory = () => {
    const [activeTab, setActiveTab] = React.useState("foryou");
    console.log(activeTab)
    // const [loadMore, setLoadMore] = React.useState(18);
    const setLoadItem = useAppStore((state) => state.setLoadItem)
    const loadItem = useAppStore((state) => state.loadItem)
    console.log(loadItem)

    // const handleLoadMore = () => {
    //     setLoadMore(() => {
    //         return loadMore + 15
    //     });
    // }

    // console.log(loadMore)
    
    const data = [
        {
          label: "For You",
          background: "bg-gradient-to-r from-purple-600 to-purple-300",
          value: "foryou",
          features: (
            <div className="grid grid-cols-6 items-end gap-3 px-1 ">
               {Array.from({ length:loadItem }).map((_, index) => (
                <div key={index} >
                    <MainCardProduct/>
                </div>
                ))}
            </div>
          ),
        },
        {
          label: `Gym & Fitness` ,
          background: "bg-gradient-to-r from-orange-600 to-orange-300",
          value: "gym",
          features: (
            <div className="grid grid-cols-6 items-end gap-3 px-1 ">
            {Array.from({ length: 30 }).map((_, index) => (
       <div key={index} >
         <MainCardProduct/>
         
       </div>
     ))}
         </div>
          ),
        },
        {
          label: "Bumbu & Bahan Masakan",
          background: "bg-gradient-to-r from-green-600 to-green-300",
          value: "bbm",
          features: (
            <div className="grid grid-cols-6 items-end gap-3 px-1 ">
               {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} >
            <MainCardProduct/>
            
          </div>
        ))}
            </div>
          )
          
        },
        {
          label: "Perlengkapan Makan Bayi",
          background: "bg-gradient-to-r from-purple-600 to-purple-300",
          value: "pmb",
          features: (
            <div className="grid grid-cols-6 items-end gap-3 px-1 ">
               {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} >
            <MainCardProduct/>
            
          </div>
        ))}
            </div>
          ),
        },
        {
            label: "Mirip yang kamu cek",
            background: "bg-gradient-to-r from-blue-600 to-blue-300",
            value: "similar",
            features: (
                <div className="grid grid-cols-6 items-end gap-3 px-1 ">
                {Array.from({ length: 30 }).map((_, index) => (
           <div key={index} >
             <MainCardProduct/>
             
           </div>
         ))}
             </div>
            ),
          },
    
      ];
    return (
        <div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="font-AppBold  bg-red-900 text-white px-6 text-sm  mt-6"
                    indicatorProps={{
                    className:
                        "bg-transparent ",
                    }}
                >
                    {data.map(({ label, value , background }) => (
                    <Tab
                        key={value}
                        value={value}
                        background={background}
                        onClick={() => setActiveTab(value = "foryou")}
                        className={`font-AppBold rounded-lg text-white flex justify-start items-start ${background}  pt-3 pb-6 mx-2 text-sm`}
                    >
                        {label}
                    </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, features }) => (
                    <TabPanel key={value} value={value}>
                        {features}
                    </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
            <div className="flex  justify-center">
                <Button text="Muat Lebih Banyak"  variant="bg-white font-AppBold border border-greenTokped-0 mx-2 px-14 text-greenTokped-0 text-lg" 
                onclick = {setLoadItem} ></Button>
                {/* <button onClick={() => setLoadMore(loadMore + 15)}>halo</button> */}
            </div>
        </div>

       )

}

export default TabCategory;