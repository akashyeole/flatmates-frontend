import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
                <li><h3>Flatmates Finder</h3></li>
                {
                    auth ? <>
                        <div className='userAndLogout'>
                            <li>{JSON.parse(localStorage.getItem('user')).name}</li>
                            <li><Link className='logoutLink' onClick={logout} to='/'>Logout</Link></li>
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