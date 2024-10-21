import RectangleCard from "../Elements/RectangleCard";

function Trending() {
    return (
        <div className="pt-10 px-6 pb-8">
            <div className="flex gap-5 items-baseline">
                <h1 className="text-black font-AppBold text-[20px]">Lagi Trending, nih</h1>
                <a href="" className="flex gap-2">
                    <img src="../../public/icon/refresh.png" alt="" className="w-5 h-5" />
                    <h1 className="text-greenTokped-0 font-AppBold text-[16px]">Muat Lainnya</h1>
                </a>
            </div>
            <div className="pt-3 grid grid-cols-4">
                <RectangleCard/>
                <RectangleCard/>
                <RectangleCard/>
                <RectangleCard/>
                <RectangleCard/>
                <RectangleCard/>
                <RectangleCard/>
                <RectangleCard/>
            </div>
        </div>
    );
}
export default Trending;