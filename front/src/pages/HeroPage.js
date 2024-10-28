import React from 'react';
import {useParams} from "react-router-dom";
import {useGetImagesQuery, useGetOneHeroQuery} from "../features/apiSlice";
import ButtonList from "../components/ButtonList";
import AllImagesList from "../components/AllImagesList";
const defaultImage =   'https://img.freepik.com/premium-vector/adorable-superhero-cartoon-characters-collection-iconic-designs_1300528-4992.jpg?semt=ais_hybrid'
const HeroPage = () => {
    const { id } = useParams();
    const hero = useGetOneHeroQuery(id);
    const { data: images, isLoading, refetch } = useGetImagesQuery(id);
    if (hero.isLoading||isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="App">
            <div className="vertical-container">
                <img
                    src={images[0]?.image_link|| defaultImage}
                    alt="hero"
                     className="fixed-size-image"
                    />

                <div>
                    <p>Real Name : {hero.data.real_name}</p>
                    <p>Origin : {hero.data.origin_description}</p>
                    <p>Superpowers : {hero.data.superpowers}</p>
                    <p>Catch Phrase : {hero.data.catch_phrase}</p>
                </div>
            </div>
            <div className="vertical-container">
                <AllImagesList id={id}/>
                <ButtonList refetch={refetch}/>
            </div>
        </div>
    );
};

export default HeroPage;