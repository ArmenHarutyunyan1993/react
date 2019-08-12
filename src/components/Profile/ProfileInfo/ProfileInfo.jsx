import React from 'react';

import './ProfileInfo.css';

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src="https://www.kirupa.com/developer/flash8/code/bgImage.jpg"/>
            </div>
            <div className="descriptionBlock">
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
