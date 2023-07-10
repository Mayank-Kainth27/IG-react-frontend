import React from "react";

import './css/post.css';
import post from '../assests/post-image.png';
import postImage from '../assests/post-image.avif'

const Post = () => {

    const random = "mayank";
    const count = 1111;
    const account_name = "darthunder";
    const caption = "This the styling template";
    const emoji = "image";
    const time = "12h"

    return (
        <div id="post-container">
            <div id="profile-info">
                <div>
                    <img src={post} alt="post"/>
                    <h4>{account_name}</h4>
                    <span/>
                    <p>{time}</p>
                </div>
                <button>...</button>
            </div>
            <div id="post-image-container">
                <img className="post-image" src={postImage} alt="post"/>
            </div>
            <div id="interactive-clicks">
                <div>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <button></button>    
                </div>    
            </div>
            <div id="liked-by">
                <img src={post} alt="post"/>
                <span>Liked by {random} and {count} others</span>
            </div>
            <div id="description">
                <span>{account_name} {caption}</span>
            </div>
            <div id="comments">
                <p>view all {count} comments</p>
            </div>
            <div id="add-comment">
                <input type="text" placeholder="Add a comment"/>
                <button>{emoji}</button>
            </div>
        </div>
    )
}

export default Post;