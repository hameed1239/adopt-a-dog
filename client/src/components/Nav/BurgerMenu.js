import React,{useState} from 'react';

import styled from 'styled-components';
import Sidebar from './Sidebar';

const BurgerMenu = () => {

    const [open , setOpen] = useState(false);

    return (
        <>
            <Burger open={open}  onClick={() => setOpen(!open)} >

                <div></div>
                <div></div>
                <div></div>
                    
            </Burger>
            <Sidebar open={open}  onClick={() => setOpen(!open)}/>
        </>
    )
}

export default BurgerMenu


const Burger = styled.div`
  display:none;
  ${'' /* padding:.3rem; */}
    width:2.3rem;
    height:1.6rem;
    position:fixed;
    top:1.3rem;
    right:1rem;
    clip-path: ${({open}) => open ? 'inset(0 0 0 0)' : 'polygon(26% 0, 59% 0, 100% 0, 100% 100%, 12% 100%, 12% 69%, 0 68%, 0 36%, 25% 36%)'};
    z-index:20;
    @media only screen and (max-width: 768px) { 
    
    
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;
    

    div{
        width:1.7rem;
        height:.2rem; 
        background-color: ${({open}) => open ? '#ccc' :  '#11be8b'};
        border-radius:2px;
        transform-origin:1px;
        transition:all .3s linear;

        &:nth-child(1) {
         transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
    } 
` 


