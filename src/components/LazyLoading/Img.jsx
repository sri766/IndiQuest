import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ alt, src, className }) => {
    return (
        <LazyLoadImage
            className={className || "bg-gray-300"}
            effect="blur"
            src={src}
            alt={alt}
        />
    );
};

export default Img;