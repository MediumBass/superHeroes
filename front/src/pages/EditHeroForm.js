import React, {useEffect, useState,} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {
    useDeleteImageMutation,
    useGetImagesQuery,
    useGetOneHeroQuery,
    useUpdateHeroMutation
} from "../features/apiSlice";

const EditHeroForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [realName, setRealName] = useState('');
    const [originDescription, setOriginDescription] = useState('');
    const [superpowers, setSuperpowers] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');

    const [updateHero, { isLoading: isUpdating}] = useUpdateHeroMutation();
    const [deleteImage] = useDeleteImageMutation()
    const { data } = useGetOneHeroQuery(id);
    const { data: images, refetch } = useGetImagesQuery(id);

    // Эффект для установки данных в форму, когда они загружаются
    useEffect(() => {
        if (data) {
            setNickname(data.nickname);
            setRealName(data.real_name);
            setOriginDescription(data.origin_description);
            setSuperpowers(data.superpowers);
            setCatchPhrase(data.catch_phrase);
        }
    }, [data]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const heroData = {
            nickname:nickname,
            real_name: realName,
            origin_description: originDescription,
            superpowers:superpowers,
            catch_phrase: catchPhrase,
        };

            await updateHero({ id, heroData });

        navigate(`/${id}`);
        window.location.reload(true);
    };
    const handlePictureDelete=(imgiId)=>{
        deleteImage(imgiId)
        refetch()
    }
    const Form = <form onSubmit={handleSubmit} className={"App"}>
        <h2>Edit Hero</h2>
        <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Real Name"
            value={realName}
            onChange={(e) => setRealName(e.target.value)}
        />
        <textarea
            placeholder="Origin Description"
            value={originDescription}
            onChange={(e) => setOriginDescription(e.target.value)}
        />
        <input
            type="text"
            placeholder="Superpowers"
            value={superpowers}
            onChange={(e) => setSuperpowers(e.target.value)}
        />
        <input
            type="text"
            placeholder="Catch Phrase"
            value={catchPhrase}
            onChange={(e) => setCatchPhrase(e.target.value)}
        />
        <button type="submit" disabled={isUpdating} className={"button"}>
            {id ? 'Edit' : 'Add'}
        </button>

    </form>
    if (images.isLoading) {
        return (<div className="App">
                    {Form}
                    <p>Loading...</p>
                </div>);
    }
    return (
        <div className="App">
            {Form}
            {images.map(item => (
                <div className="vertical-container">
                <img key={item.id}
                     src={item.image_link}
                     alt="hero"
                     className="fixed-size-image"
                />
                <button onClick={()=>{handlePictureDelete(item.id)}}
                >Delete</button>
                </div>
            ))}
        </div>
    );
};

export default EditHeroForm;