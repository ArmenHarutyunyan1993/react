import React from 'react';
import './Users.css';
import userPhoto from "../../assets/images/_Bearded_Man-17-512.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    // for (let i = 1; i <= pagesCount; i++){
    for (let i = 1; i <= 10; i++){
        pages.push(i)
    }

    return ( <div>
            <div>
                {pages.map(p => {
                    return <span className={ props.currentPage === p ? "selectedPage" : "" + " pages"}
                                 onClick={ (e) => { props.onPageChanged(p); }}
                                 key={p}>-{p}.)</span>
                })}
            </div>
            {
                props.users.map( u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ?
                                        u.photos.small :
                                        userPhoto }
                                         className="userPhoto"/>
                                 </NavLink>
                            </div>
                            <div>
                                { u.followed ?
                                    <button onClick={ () => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials : true,
                                                headers : {
                                                   'API-KEY' : '54e01718-863c-4c9f-b63a-ccb2759f9ce0'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode == 0){
                                                    props.unfollow(u.id)
                                                }
                                            });

                                    } }>Unfollow</button> :
                                    <button onClick={ () => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                            withCredentials : true,
                                            headers : {
                                                'API-KEY' : '54e01718-863c-4c9f-b63a-ccb2759f9ce0'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0){
                                                    props.follow(u.id)
                                                }
                                            });

                                    } }>Follow</button>
                                }

                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </span>
                </div>)
            }
        </div>
    );
};

export default Users;
