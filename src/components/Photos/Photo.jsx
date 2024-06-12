import React from 'react';
import Img from '../LazyLoading/Img';

const Photo = ({ data }) => {
    console.log(data);

    return (
        <section className="h-full p-4 flex flex-wrap justify-center gap-4">
            {data?.map((photo, index) => (
                <div
                    key={index}
                    className="w-1/5 md:w-1/3 lg:w-1/4 p-2"
                >
                    <Img
                        src={photo.src.portrait}
                        alt={photo.alt}
                        className="w-full rounded-xl shadow-lg  transition-transform transform hover:scale-105"
                    />
                </div>
            ))}
        </section>
    );
};

export default Photo;
