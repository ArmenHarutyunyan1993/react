import React from 'react';
import './Users.css';

const Users = (props) => {
    if ( props.users.length === 0 ){
        props.setUsers([
            { id:1, photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCO4vs56hKMXXZ5h4fzZfKq3N54M7XJKs_Q6ldOlNWFMxW6NdjA',
                followed:false, fullName:"Dmitry K", status : "I am a Boss...", location : { city : "Minsk", country : "Belarus" } },
            { id:2, photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAP75McVwIVTDIB6gzBteYMOxjnvZnZpXSwy5O4rx6M356Oxgw0A',
                followed:true, fullName:"Sasha", status : "I am a Boss...", location : { city : "Moscow", country : "Russia" } },
            { id:3, photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrkKZZB1f4jRUXIK1iCk8Gu04zCLibsbjgKe8kDNyiYU5ZPq2Ww',
                followed:false, fullName:"Andre", status : "I am a Boss...", location : { city : "Kiev", country : "Ukraine" } }
        ]);
    };

    return ( <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className="userPhoto"/>
                    </div>
                    <div>
                        { u.followed ?
                            <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> :
                            <button onClick={ () => { props.follow(u.id) } }>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
      </div>
  );
};

export default Users;
