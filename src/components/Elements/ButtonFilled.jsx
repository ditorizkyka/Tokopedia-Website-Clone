// import { useAppStore } from "../../state-manager/app-store";

/* eslint-disable react/prop-types */
const Button = (props) => {
    const {variant, text , onclick} = props
    // const setLoadItem = useAppStore((state) => state.setLoadItem)
    // const item = useAppStore((state) => state.loadItem)
    return (
        <button className={`  font-App font-bold  text-[12px] py-2 rounded-lg ${variant}`}
        onClick={onclick}>{text}</button>
    )
};

export default Button;