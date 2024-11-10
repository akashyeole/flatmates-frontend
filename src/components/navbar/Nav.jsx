import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import pimage from '../../images/profile.png'
const Nav = () =>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/');
    }
    return(
        <div>

            <ul className='nav-ul'>
                <li><Link className='dropdown-item' to="/"><h2>Flatmates Finder</h2></Link></li>
                {
                    auth ? <>
                        <div className="dropdown userAndLogout">
                            <a className="btn btn-primary dropdown-toggle navDrop"href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={pimage} style={{height: "25px", widht: "25px"}}/>
                            <li>{JSON.parse(auth).name}</li>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className='dropdown-item' to="/editprofile">Edit Profile</Link></li>
                                <li><Link className='dropdown-item' onClick={logout} >Logout</Link></li>
                            </ul>
                        </div>
                    </>
                    :<>
                        
                    </>
                }
            </ul>
        </div>
        


        
    );
};

export default Nav;