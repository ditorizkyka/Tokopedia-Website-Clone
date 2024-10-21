


// import React, { useEffect, useState } from "react";
import { dataKategoriPilihanTabs } from "../../assets/data/data-KategoriPilihan-tabs";
import IconButton from "../Elements/IconButton";
import CarouselCustomKategori from "./CarouselKategori";
import TabsElement from "../Elements/TabsElement";

const KategoriPilihan = () => {
    const data = dataKategoriPilihanTabs();
    console.log("ini di kategori pilihan", data);
    return (
        
        <div className="px-6">
            <div className=" w-full h-[291px] shadow-custom bg-white mt-6 pt-6 px-4 rounded-2xl">
            <div className="flex justify-around h-[195px]  ">
                {/* Ketegori Pilihan */}
                <div className="justify-end w-1/2 ">
                    {/* JUDUL */}
                    <div>
                        <h1 className="font-AppBold text-[20px]">Kategori Pilihan</h1>
                    </div>
                    <div className="pr-4 pt-4">
                        <CarouselCustomKategori></CarouselCustomKategori>
                    </div>
                </div>

                {/* TOPUP */}
                <div className="justify-end w-1/2 ">
                    
                    <div className="flex gap-2 items-baseline">
                        {/* JUDUL */}
                        <div>
                            <h1 className="font-AppBold text-[20px]">Topup & Tagihan</h1>
                        </div>

                        {/* Link: lihat semua */}
                        <div className="items">
                            <a href="#" className="font-AppRegular text-greenTokped-0 font-bold text-[12px]">Lihat Semua</a>
                        </div>
                    </div>

                    <div className="mt-5  ml-[-7px]   py-2 rounded-lg shadow-custom">
                        <TabsElement data= {data}/>
                        
                    </div>

                    {/*  */}
                </div>
            </div>

            <div className="flex gap-2 mt-4  justify-between">
                <IconButton text="Kategori" img="../../public/icon/categories.png"></IconButton>
                <IconButton text="Handphone & Tablet" img="../../public/icon/handphone.png"></IconButton>
                <IconButton text="Top-Up & Tagihan" img="../../public/icon/topup.png"></IconButton>
                <IconButton text="Elektronik" img="../../public/icon/elektronik.png"></IconButton>
                <IconButton text="Perawatan Hewan" img="../../public/icon/pet.png"></IconButton>
                <IconButton text="Travel dan Entertainment " img="../../public/icon/plane.png"></IconButton>
                <IconButton text="Keuangan" img="../../public/icon/money.png"></IconButton>
            </div>

        </div>
        </div>
    )
}

export default KategoriPilihan;