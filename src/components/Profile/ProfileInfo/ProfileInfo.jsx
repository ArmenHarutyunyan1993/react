import React from 'react';

import './ProfileInfo.css';

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src="https://www.kirupa.com/developer/flash8/code/bgImage.jpg"/>
            </div>
            <div className="descriptionBlock">
                <img src={props.profile.photos.large}/>
                <p><b>Name : </b>{props.profile.fullName}</p>
                <p><b>About : </b> {props.profile.aboutMe}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;
