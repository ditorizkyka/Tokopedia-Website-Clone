/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const IconButton = (props) => {
    const {img, text, variant} = props
    return (
        <button className={`flex gap-2 p-[10px] border shadow-asBorder rounded-3xl ${variant}`} >
            <img src={img} className="w-5 h-5" />
            <p className="text-sm font-AppRegular  text-black">{text}</p>
        </button>
    )
}

export default IconButton