/* eslint-disable react/prop-types */
// import ProgressBar from "./ProgressBar";

const MainCardProduct = (props) => {
    const {title, content,price, location, rating, selled, discount} = props
    return (
        <div className="w-[190px] h-[365px] border   bg-transparent shadow-custom rounded-lg ml-2 ">
            <MainCardCover></MainCardCover>
            <MainCardContent title = {title} desc = {content} price = {price} location = {location} rating = {rating} selled = {selled} discount = {discount}></MainCardContent>
        </div>
    )
};

const MainCardCover = () => {
    return (
        <div className="">
            <img src="../../public/img/PRODUCT_shoes.jpg" className="w-[188px] h-[188px] rounded-t-lg"></img>
        </div>
    )
}

const MainCardContent = (props) => {
    const {title, price = "100.000", location = "Amerisya Usyara", rating = "4.5" , 
        selled = "100", discount = "10" , cashback} = props
    return (
        <div className=" p-2 rounded-b-lg ">
            {/* TITLE  : DEFAULT */}
            <div>
                <p className="font-AppRegular text-[12px] m-1">{title}</p>
            </div>

            {/* PRICE : DEFAULT */}

            <div className="m-1">
                <p className="font-AppBold text-[14px]  text-black">{`Rp. ${price}`}</p>
            </div>

            {/* DISCOUNT : NON-DEFAULT */}
            {  
                discount && (
                    <div className="m-1 flex gap-2">
                        <p className="font-AppBold text-[9px] line-through text-grayMedium-0">{`Rp. ${discount}`}</p>
                        <p className="font-AppBold text-[9px] text-PinkTokped-0">-50%</p>
                    </div>
                )
            }

            {/* CASHBACK : NON-DEFAULT */}
            {
                cashback && ( 
                    <div className="w-fit p-[3px] rounded-sm m-1 bg-[#C9FDE0]">
                        <p className="font-AppBold text-[10px] text-[#00AA5B]">Cashback 10rb</p>
                    </div>
                )
            }

            {/* LOKASI : DEFAULT */}
            <div className="flex gap-1 items-center ">
                <img src="../../public/icon/verified-store.png" alt="" className="w-5 h-5" />
                <p className="text-[11px] font-AppSemiBold text-gray-500">{location}</p>
            </div>
            
            {/* RATING : DEFAULT */}
            <div className="flex gap-1 items-center mt-1">
                <img src="../../public/icon/rating-star.png" alt="" className="w-5 h-5 p-[2px]" />
                <p className="text-[11px] font-AppSemiBold text-gray-500">{rating} | {selled}+ Terjual </p>
            </div>
        </div>
    )
};

export default MainCardProduct;