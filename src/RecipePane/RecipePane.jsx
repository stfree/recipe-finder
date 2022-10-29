import React from "react";
import "./RecipePane.css";

function RecipePane({ image, title, missing, likes }) {
    return (
        <div className="recipe-pane">
            <img className="picture" src={image} alt="title"></img>
            <div className="info">
                <h1 className="title">{title}</h1>
                {missing.map((item) => {
                    return <div> Missing Item: {item.name}</div>;
                })}
                <div>Likes: {likes}</div>
            </div>
        </div>
    );
}

export default RecipePane;
