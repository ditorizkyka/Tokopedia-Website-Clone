/* eslint-disable react/prop-types */
const InputLabel = (props) => {
    const {label, variantLabel, variantInput, placeholder} = props
    return (
        <div>
            <label htmlFor="pulsa-input" className={`block font-medium ${variantLabel}`}>
                {label}
            </label>
            <input
                placeholder={placeholder}
                type="text"
                id="pulsa-input"
                className={`mt-1 block w-full px-3 py-2 border ${variantInput} rounded-md shadow-sm focus:outline-none focus:ring-greenTokped-0 focus:border-greenTokped-0 sm:text-sm`}
            />
        </div>
    )
}

export default InputLabel;