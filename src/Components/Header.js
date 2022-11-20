import React, { useEffect } from 'react'
import styled from 'styled-components'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUserEmail, selectUserName } from '../features/Users/userSlice';
import { useNavigate } from 'react-router-dom';


function Header() {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

  useEffect(()=>{
    auth.onAuthStateChanged( async (user)=>{
        if(user){
          setUser(user);
          navigate("/home");
        }
    })

    
},[userName]);

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      setUser(result.user)
    }).catch((error) => {
      alert(error);
    })
  }


  const setUser = (user) => {
    dispatch(
      login({
        name: user.displayName,
        email: user.email
      })
    )
  }

  const userLogout = ()=>{
    dispatch(logout())
    auth.signOut();
    navigate("/");
  }











  return (
    <Nav>
      <Logo src="/images/logo.png" />
      {!userName ? <LoginBtn onClick={handleLogin}>LOGIN</LoginBtn> : <>
        <NavMenu>

          <a href='/home'>
            <img src="/images/home-icon.png" alt='HOME' />
            <span>HOME</span>
          </a>
          <a href='/search'>
            <img src="/images/search-icon.png" alt='HOME' />
            <span>SEARCH</span>
          </a>
          <a href='/watchlist'>
            <img src="/images/watchlist-icon.png" alt='HOME' />
            <span>WATCHLIST</span>
          </a>
          <a href='/orignals'>
            <img src="/images/original-icon.png" alt='HOME' />
            <span>ORIGNALS</span>
          </a>
          <a href='/movies'>
            <img src="/images/home-icon.png" alt='HOME' />
            <span>MOVIES</span>
          </a>
          <a href='/series'>
            <img src="/images/series-icon.png" alt='HOME' />
            <span>SERIES</span>
          </a>

        </NavMenu>
          <LogOut onClick={userLogout}>LOG OUT</LogOut>
      </>}


    
    </Nav>
  )
}

const Nav = styled.nav`
position : fixed;
top :0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
letter-spacing:1.42px;
z-index:2;
`

const Logo = styled.img`
  padding:0;
  width:80px;
  margin-top:10px;
  margin-left:20px;
  display:block;
  max-width:100%;
  cursor:pointer;
`

const NavMenu = styled.div`
align-items:center;
display:flex;
flex-flow: row nowrap;
height:100%;
justify-content:flex-end;
margin-right:auto;
margin-left:25px;
cursor:pointer;

a{
  display:flex;
  align-items:center;
  padding:0 12px;
}

img{
  height:20px;
  width:20px;
  min-width:20px;
}

span{
  color:rgb(249,249,249);
  font-size:13px;
  margin-left:5px
  
}

@media (max-width: 768px){
  display:none;
}
`

const LoginBtn = styled.a`
border:1px solid;
border-color:#f9f9f9f;
padding:8px 16px;
margin-right:10px;
border-radius:4px;
cursor:pointer;

&:hover{
  background-color:#f9f9f9;
  color:#000;
}


`
const LogOut = styled.a`
border:1px solid;
border-color:#f9f9f9f;
padding:8px 16px;
margin-right:10px;
border-radius:4px;
cursor:pointer;

&:hover{
  background-color:#f9f9f9;
  color:#000;
}


`

export default Header