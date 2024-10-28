import React, { useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
    useCreateHeroMutation, useCreateImageMutation,
} from "../features/apiSlice";

const AddNewHeroForm = () => {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [realName, setRealName] = useState('');
    const [originDescription, setOriginDescription] = useState('');
    const [superpowers, setSuperpowers] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [image, setImage] = useState('');

    const [updateImage] = useCreateImageMutation();
    const [createHero, { isLoading: isCreating}] = useCreateHeroMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const heroData = {
            nickname:nickname,
            real_name: realName,
            origin_description: originDescription,
            superpowers:superpowers,
            catch_phrase: catchPhrase,
        };

        const response = await createHero({ id:0, heroData });
        console.log({ hero_id:response.data.id, image_link:image })
        await updateImage({ hero_id:response.data.id, image_link:image });

        navigate(`/${response.data.id}`);
        window.location.reload(true);
    };
    const Form = <form onSubmit={handleSubmit} className={"App"}>
        <h2>Add new Hero</h2>
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
        <input
            type="text"
            placeholder="Image Link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" disabled={isCreating} className={"button"}>
             Add
        </button>

    </form>

    return (
        <div className="App">
            {Form}
        </div>
    );
};

export default AddNewHeroForm;