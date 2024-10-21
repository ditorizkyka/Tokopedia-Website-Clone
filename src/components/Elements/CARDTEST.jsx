/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{content}</p>
        </div>
    );
};

export default Card;
