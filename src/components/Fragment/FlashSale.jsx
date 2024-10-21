
import CardProduct from "../Elements/CardProduct";



const FlashSale = () => {
    return (
        <div className="h-[378px] w-full items-center justify-center mt-16  pt-2 px-6">
            {/* TITLE AND COUNTDOWN */}
            <div className="flex items-baseline gap-4 ">
                <h1 className="font-AppBold text-[20px]">Flash Sale</h1>
                <p className="font-AppRegular text-grayDark-0 text-sm ">Berakhir dalam</p>
                <div className="flex gap-2">
                    {/* Hour */}
                    <div className="h-8 w-8 bg-PinkTokped-0 flex  justify-center font-AppBold text-white mb-2 rounded-lg">
                        <p className="item-center my-1">02</p>
                    </div>
                    <p className="text-PinkTokped-0">:</p>
                    {/* Minute */}
                    <div className="h-8 w-8 bg-PinkTokped-0 flex  justify-center font-AppBold text-white mb-2 rounded-lg">
                        <p className="item-center my-1">02</p>
                    </div>
                    <p className="text-PinkTokped-0">:</p>
                    {/* Second */}
                    <div className="h-8 w-8 bg-PinkTokped-0 flex  justify-center font-AppBold text-white mb-2 rounded-lg">
                        <p className="item-center my-1">02</p>
                    </div>
                </div>
                <a href="#" className="font-AppRegular text-greenTokped-0 font-bold text-[12px]">Lihat Semua</a>
            </div>
            {/* card */}

            <div className="h-[325px] relative ">
                <div className="h-[325px] w-[293px] bg-purple-200 rounded-lg absolute inset-0  opacity-50">           
                </div>
                <div className="absolute inset-0 gap-5 flex pl-52 items-center">
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                </div>
            </div>

        </div>
    )
};

export default FlashSale;