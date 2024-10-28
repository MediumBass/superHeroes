import React, { useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useCreateImageMutation, useDeleteHeroMutation} from "../features/apiSlice";

const ButtonList = ({refetch}) => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();
    const [createImage] = useCreateImageMutation();
    const [deleteHero] = useDeleteHeroMutation();

    const handleAddImage = () => {
        setShowModal(true);
    };

    const handleConfirmImage = async () => {
        setShowModal(false);
        await createImage({ hero_id:id, image_link:imageUrl });
        refetch()
    };
    const handleDelete = () => {
        deleteHero(id)
        navigate(`/`);
        window.location.reload(true);
    }


    return (
        <div className="App">
            <Link to={`/edit-hero/${id}`}>
                <button className="button">Edit</button>
            </Link>
            <Link to={`/create-hero/`}>
                <button className="button">Create New</button>
            </Link>
                <button onClick={handleDelete}
                    className="button">Delete</button>
                <button onClick={handleAddImage}
                    className="button" >Add Image</button>
            <Link to={`/`}>
                <button className="button">Go Back</button>
            </Link>

            {showModal && (     //Modal with input for new images
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add new image</h2>
                        <input
                            type="text"
                            placeholder="Введите ссылку на изображение"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <button onClick={handleConfirmImage}>Submit</button>
                        <button onClick={() => setShowModal(false)}>Decline</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonList;