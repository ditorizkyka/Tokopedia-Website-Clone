import ProgressBar from "./ProgressBar";

const CardProduct = () => {
    return (
        <div className="w-[188px] bg-transparent shadow-custom rounded-lg ">
            <CardCover></CardCover>
            <CardContent></CardContent>
        </div>
    )
};

const CardCover = () => {
    return (
        <div className="">
            <img src="../../public/img/PRODUCT_shoes.jpg" className="w-[188px] h-[188px] rounded-t-lg"></img>
        </div>
    )
}

const CardContent = () => {
    return (
        <div className="bg-white p-2 rounded-b-lg ">
            {/* PRICE */}
            <div>
                <p className="font-AppBold text-[14px]">Rp1.000.000,00</p>
            </div>
            <div className="mt-[2px] flex gap-2">
                <p className="font-AppBold text-[9px] line-through text-grayMedium-0">Rp. 1.000.001</p>
                <p className="font-AppBold text-[9px] text-PinkTokped-0">-50%</p>
                
            </div>
            <div className="pt-3">
                <ProgressBar ></ProgressBar>
            </div>
            <p className="text-grayDark-0 font-AppBold text-[11px] mt-1">Lagi Diminati</p>
        </div>
    )
};

export default CardProduct;