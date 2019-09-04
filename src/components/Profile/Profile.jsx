import React from 'react';

import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import PreLoader from "../common/PreLoader/Preloader";

const Profile = (props) => {

    if(!props.profile){
        return <PreLoader/>
    }

    return (

        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
