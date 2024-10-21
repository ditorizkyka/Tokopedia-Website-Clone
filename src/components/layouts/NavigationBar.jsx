import Button from "../Elements/ButtonFilled";

// import { CarouselCustomNavigation } from "./Carousel";

const NavigationBar = () => {
    return (
        <div className="bg-[#FFFFFF] w-full sticky top-0  z-20">
            <Navigation></Navigation>
            <NavigationSearch></NavigationSearch>
            <hr />
            
        </div>
        
        
        
    )
}
const NavigationSearch = () => {
    return(
        <div className="px-6" >
            <div className="w-full flex items-center  ">
                <img src="public/icon/TOKOPEDIA.svg" className="pl-4 py-3"></img>
                <div className="pl-12 pr-6">
                    <p className="gap-right-2">Kategori</p>
                </div>
                {/* SEARCH BAR */}
                <div>
                    <input type="text" placeholder="Cari..." className="w-[640px] py-2 border-grayDark-0 border rounded-lg  px-2"></input>
                </div>
                <div className="pl-6">
                    <img src="public/icon/cart.svg" className="w-7 h-7"></img>
                </div>
                <p className="text-grayDark-0 text-3xl pl-10 pr-4 mb-2">|</p>
                
                <Button text="Masuk"  variant="bg-white border border-greenTokped-0 mx-2 px-4 text-greenTokped-0" ></Button>
                <Button text="Daftar"  variant="bg-greenTokped-0 text-white px-4"></Button>
                
            </div>
            <div className="flex items-center justify-between py-2">
                <div className=" flex pl-72 gap-7">
                    <a href="#" className="text-grayDark-0 font-AppRegular text-[12px] hover:text-green-500 ">Hp Second</a>
                    <a href="#" className="text-grayDark-0 font-AppRegular text-[12px] hover:text-green-500 ">Rak Dinding</a>
                    <a href="#" className="text-grayDark-0 font-AppRegular text-[12px] hover:text-green-500 ">Lock N Lock</a>
                    <a href="#" className="text-grayDark-0 font-AppRegular text-[12px] hover:text-green-500 ">ssd Data</a>
                    <a href="#" className="text-grayDark-0 font-AppRegular text-[12px] hover:text-green-500 ">Rtx 3070 Ti</a>
                    <a href="#" className="text-grayDark-0 font-AppRegular text-[12px] hover:text-green-500 ">Dus Packing</a>
                </div>
                <div className="flex items-center gap-2">
                    <img src="public/icon/markMap.svg" alt="" className="w-4 h-5" />
                    <a href="#" className=" font-AppRegular text-[12px] ">
                        Dikirim ke <span className="font-bold">Jakarta Pusat</span>
                    </a>
                    <img src="public/icon/arrowDown.svg" alt="" className="w-4 h-4" />
                </div>
            </div>
        </div>
    )
}

const Navigation = () => {
    return (
        <div className="bg-greyLight-0  flex left-0 right-0 top-0 h-9  justify-between items-center px-6  ">
            {/* DOWNLOAD TOKOPEDIA */}
            
            <div className="flex items-center">
                {/* ICON PHONE */}
                <img src="public/icon/smartphone.png" className="w-12 pb-1 h-12"></img>
                {/* DOWNLOAD LINK */}
                <a href="https://www.tokopedia.com/mobile-apps/" className="text-grayDark-0 font-AppRegular text-[11px] hover:text-green-500 font-semibold items-center">Download Tokopedia App</a>
            </div>

            {/* NAVIGATION */}
            <div className="flex gap-14 items-center ">
                <a href="#" className="text-grayDark-0 font-AppRegular text-[11px] hover:text-green-500 font-semibold">Tentang Tokopedia</a>
                <a href="#" className="text-grayDark-0 font-AppRegular text-[11px] hover:text-green-500 font-semibold">Mitra Tokopedia</a>
                <a href="#" className="text-grayDark-0 font-AppRegular text-[11px] hover:text-green-500 font-semibold">Mulai Berjualan</a>
                <a href="#" className="text-grayDark-0 font-AppRegular text-[11px] hover:text-green-500 font-semibold">Promo</a>
                <a href="#" className="text-grayDark-0 font-AppRegular text-[11px] hover:text-green-500 font-semibold">Tokopedia Care</a>
            </div>
        </div>
    )
}


export default NavigationBar;