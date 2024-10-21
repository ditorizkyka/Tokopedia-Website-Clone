
const RectangleCard = () => {
    
    return (
        <div className="w-[290px] h-[100px] shadow-custom rounded-xl mt-3 flex"  >
            
            <img src="../../public/img/PRODUCT_shoes.jpg" alt="" className="rounded-tl-xl rounded-bl-xl w-[100px] " />
            
            <div className="w-[190px] flex flex-col justify-center px-10">
                <h1 className="text-black font-AppBold text-[18px]">halo</h1>
                <p className="pt-2 text-grayDark-0 font-AppRegular text-[14px]">182rb Produk</p>
            </div>
        </div>
    )
}

export default RectangleCard;