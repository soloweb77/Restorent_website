import React, { useState } from 'react';
import { Box, Typography } from "@mui/material"
import { styled } from '@mui/system'
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/logo.png'


import MenuIcon from "@mui/icons-material/Menu"
import FeauturedPlayListIcon from "@mui/icons-material/FeaturedPlayList"
import MiscellaneousServiceIcon from "@mui/icons-material/MiscellaneousServices"
import HomeIcon from "@mui/icons-material/Home"
import ContactsIcon from "@mui/icons-material/Contacts"

import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
}from "@mui/material"
import { useNavigate } from 'react-router-dom';

function Header() {

    const[mobileMenu,setMobileMenu]=useState({left:false})

    const navigate=useNavigate()

    const toogleDrawer=(anchor,open)=>(event)=>{
        if (event.type === "keydown" && (event.type === "Tab" || event.type === "shift")){
          return
        }
        setMobileMenu({...mobileMenu,[anchor]:open})
    }

    const list = (anchor)=>(
        <Box sx={{width:anchor === "top" || anchor === "bottom" ? 'auto':250}}
              role='presentation' onClick={toogleDrawer(anchor,false)}
              onKeyDown={toogleDrawer(anchor,false)}>
            <List>{
                nav_titles.map((item,index)=>(
                   <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {
                                index === 0 && <HomeIcon/>
                            }
                             {
                                index === 1 && <FeauturedPlayListIcon/>
                            }
                             {
                                index === 2 && <MiscellaneousServiceIcon/>
                            }
                             {
                                index === 3 && <ContactsIcon/>
                            }
                       
                        </ListItemIcon>
                        <ListItemText primary={item.display}/>
                    </ListItemButton>
                </ListItem>
               ) )}
                
            </List>
        </Box>

    )

    const nav_titles = [{
        path: '/',
        display: 'Home'
    }, {
        path: '/dishes',
        display: 'Dishes'
    }, {
        path: '/services',
        display: 'Services'
    }, {
        path: '/about',
        display: 'About Us'
    }]

    const NavBarLinkBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }))

    const NavBarLink = styled(Typography)(() => ({
        fontSize: '15px',
        color: '#4F5361',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff'
        }
    }))

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        display:'none',
        marginRight:theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    }))

     const NavBarLogo = styled('img')(({ theme }) => ({
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }))

    return (

//--------------------------- Navbar----------------------->>>>>>>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px',
            maxWidth: 'auto',
            backgroundColor: '#FED801',
            marginLeft: '0px',
            marginBottom: '-24px'
        }}>


{/* -----------Logo & MenuList--------------------------------- */}

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem'
            }}>

           {/* ----------------------Logo-------------------  */}

                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                    <CustomMenuIcon onClick={toogleDrawer("left",true)}/>
                    <Drawer
                     anchor='left'
                     open={mobileMenu["left"]}
                     onClose={toogleDrawer('left',false)}
                     >
                      {list('left')}
                     </Drawer>
                    <NavBarLogo src={logoImg} />
                </Box>

           {/* -----------menu list-------------  */}
                < NavBarLinkBox>
                    {
                        nav_titles.map((item, index) => (
                            <NavBarLink variant='body2' onClick={()=>navigate(item.path)}>
                                {item.display}
                            </NavBarLink >

                        ))
                    }
                </ NavBarLinkBox>
            </Box>


{/* ------------Login & Logout ----------------------*/}

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem'
            }}>
                <NavBarLink variant='body2'>
                    Sign Up
                </NavBarLink >
                <CustomButton buttonText='Register'
                    backgroundColor='#0F1B4C'
                    color='#fff' />

            </Box>
        </Box>
    );
}

export default Header;