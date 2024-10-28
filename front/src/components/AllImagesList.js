import React from 'react';
import { useGetImagesQuery } from '../features/apiSlice'; // Импортируйте ваш хук для получения изображений

function ALLImagesList({ id }) {

    const { data: images, error, isLoading } = useGetImagesQuery(id);

    if (isLoading) {
        return <div>Loading images...</div>;
    }

    if (error) {
        return <div>Error loading images: {error.message}</div>;
    }


    if (!images || !Array.isArray(images) || images.length === 0) {
        return <div>No images available.</div>;
    }

    return (
        <div className="vertical-container">
            <div className="App">
                {images.slice(1).map(item => {
                    if (item && typeof item.image_link === 'string') {
                        return (
                            <img
                                key={item.id}
                                src={item.image_link}
                                alt="hero"
                                className="fixed-size-image"
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default ALLImagesList;