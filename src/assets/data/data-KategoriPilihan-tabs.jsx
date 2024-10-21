import InputLabel from "../../components/Elements/InputLabel";
import ButtonFilled from "../../components/Elements/ButtonFilled";


export const dataKategoriPilihanTabs = () => {
  return [
    {
      label: "Pulsa",
      value: "html",
      features: (
        <div className="flex items-end gap-9 ">
          <InputLabel label="Nomor Telepon" variantLabel="text-grayDark-0 font-bold font-AppBold text-[12px]" variantInput="border border-grayDark-0" placeholder="Masukan Nomor Telepon" ></InputLabel>
          <InputLabel label="Masukan Nominal" variantLabel="text-grayDark-0 font-bold font-AppBold text-[12px]" variantInput="border border-grayDark-0" placeholder="Masukan Nominal" ></InputLabel>
          <ButtonFilled filled={true} text="Beli" variant="bg-grayMedium-0 text-grayDark-0 w-20"></ButtonFilled>
        </div>
      ),
    },
    {
      label: `Paket Data` ,
      value: "react",
      features: (
        <div className="flex items-end gap-9 ">
          <InputLabel label="Nomor Telepon" variantLabel="text-grayDark-0 font-bold font-AppBold text-[12px]" variantInput="border border-grayDark-0" placeholder="Masukan Nomor Telepon" ></InputLabel>
          <InputLabel label="Masukan Nominal" variantLabel="text-grayDark-0 font-bold font-AppBold text-[12px]" variantInput="border border-grayDark-0" placeholder="Masukan Nominal" ></InputLabel>
          <ButtonFilled filled={true} text="Beli" variant="bg-grayMedium-0 text-grayDark-0 w-20"></ButtonFilled>
        </div>
      ),
    },
    {
      label: "Flight",
      value: "vue",
      features: ``,
    },
    {
      label: "Listrik PLN",
      value: "angular",
      features: (
        <div className="flex items-end gap-3 ">
          <InputLabel label="Jenis Produk Listrik" variantLabel="text-grayDark-0 font-bold font-AppBold text-[12px]" variantInput="border border-grayDark-0" placeholder="Masukan Nomor Telepon" ></InputLabel>
          <InputLabel label="No. Meter/ID Pel" variantLabel="text-grayDark-0 font-bold font-AppBold text-[12px]" variantInput="border border-grayDark-0" placeholder="Masukan Nominal" ></InputLabel>
          <InputLabel label="Nominal" variantLabel="text-grayDark-0 font-bold font-AppBold text-[12px]" variantInput="border border-grayDark-0" placeholder="Masukan Nominal" ></InputLabel>
          <ButtonFilled filled={true} text="Beli" variant="bg-grayMedium-0 text-grayDark-0 w-20"></ButtonFilled>
        </div>
      ),
    },

  ];
}