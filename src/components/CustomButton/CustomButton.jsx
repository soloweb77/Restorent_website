import { Button } from '@mui/material';
import { styled } from '@mui/system'
import React from 'react';

function CustomButton({
        backgroundColor,
        color,
        buttonText,
        welcomeBtn,
        guideBtn,
        getStartBtn,
    }){
        const CustomButton = styled(Button)(({theme})=>({
            backgroundColor: backgroundColor,
            color:color,
            fontWeight:'700',
            fontSize:'14px',
            cursor:'pointer',
            padding:'0.5rem 1.5re',
            borderRadius:'7px',
            textTransform:'none',
            display:'block',
            border:'2px solid transparent',
            "&:hover":{
                backgroundColor:color,
                color:backgroundColor,
                borderColor:backgroundColor,
            },
            [theme.breakpoints.down('md')]:{
                margin:(welcomeBtn || getStartBtn)&&theme.spacing(0,'auto',3,'auto'),
                width:(welcomeBtn || getStartBtn)&& "90%"
            },
            [theme.breakpoints.down('sm')]:{
                marginTop:guideBtn && theme.spacing(3),
                width:guideBtn &&'90%'
            }
        }))
    



    return (
        <div>
           <CustomButton>{buttonText}</CustomButton>
        </div>
    );
}

export default CustomButton;