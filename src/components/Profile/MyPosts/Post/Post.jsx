import React from 'react';

import './Post.css';

const Post = (props) => {

    return (

            <div className="post-item">
                <img src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                {props.message}
                <div>
                    <span><i>Like</i> <b>{props.likesCount}</b></span>
                </div>
            </div>

    );
}

export default Post;
