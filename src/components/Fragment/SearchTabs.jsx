/* eslint-disable no-unused-vars */
import { dataSearchTabs } from "../../assets/data/data-SearchTabs";
import TabsElement from "../Elements/TabsElement";
const SearchTabs = () => {
    const data = dataSearchTabs()
    console.log(data)

    return (
        <div className="mx-6 mt-6  ">
            <h1 className="font-AppBold text-[20px]">Cari Semua di Tokopedia!</h1>
            <div className="mt-4">
                <TabsElement data={data}></TabsElement>
            </div>
        </div>
    )
}

export default SearchTabs;