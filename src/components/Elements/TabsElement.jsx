/* eslint-disable react/prop-types */
import React from "react";


import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

// import { dataKategoriPilihanTabs } from "../../assets/data/data-KategoriPilihan-tabs";
 
const TabsElement = (props) => {
  const {data} = props;
  // console.log(data[0].value)
  const [activeTab, setActiveTab] = React.useState(data[0].value);
 
  
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 z-10"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-greenTokped-0 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-greenTokped-0 font-AppBold text-sm" : "font-AppBold text-grayDark-0 text-sm"}
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
  );
}

export default TabsElement;