import React from 'react';

import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (

        <div>
            <ProfileInfo/>
            {/*<MyPostsContainer store={props.store} />*/}
            <MyPostsContainer />
        </div>
    );
}

export default Profile;