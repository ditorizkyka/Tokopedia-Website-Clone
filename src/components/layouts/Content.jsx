import KategoriPilihan from "../Fragment/KategoriPilihan"
import CarouselCustomNavigation from "../Fragment/Carousel"
import FlashSale from "../Fragment/FlashSale";
import Trending from "../Fragment/Trending";
import CODPart from "../Fragment/COD-Part";
import TabCategory from "../Fragment/TabsCategory";
import SearchTabs from "../Fragment/SearchTabs";
import AboutTokopedia from "../Fragment/AboutTokopedia";

const Content = () => {
    return (
        <div className="z-10 flex justify-center pt-10">
            <div className="w-full">
                <CarouselCustomNavigation/>
                <KategoriPilihan></KategoriPilihan>
                <FlashSale></FlashSale>
                <Trending></Trending>
                {/* <div className="w-full px-6 h-1 bg-grayLight-0"></div> */}
                <CODPart></CODPart>
                <div className="w-full h-3 bg-grayLight-0"></div>
                <TabCategory/>
                <SearchTabs/>
                <AboutTokopedia/>
                
            </div>
        </div>
    )
}

export default Content;