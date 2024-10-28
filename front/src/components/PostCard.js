import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
const PostCard = ({item}) => {
    const defaultImage =   'https://img.freepik.com/premium-vector/adorable-superhero-cartoon-characters-collection-iconic-designs_1300528-4992.jpg?semt=ais_hybrid'
    return (
        <Link to={`/${item.id}`}>
        <div className={"cards"}>
            <h1>{item.nickname}</h1>
            <img
                src={item.images[0]?.image_link || defaultImage}
                alt="hero"
                className="fixed-size-image"
            />
        </div>
        </Link>
    );
};

export default PostCard;