import React from 'react';
import styled from 'styled-components';

 function Modal({ showModal, setShowModal }) {

    return (
        <>
           <ModalBackground>
            <ModalWrapper>
                <h1>modal</h1>
                <p>jfhsf ushf sfh sdhfn sf sfhjsdnflseufh</p>
            </ModalWrapper>
            
        </ModalBackground>
        
        {/* {showModal ? (
             <ModalBackground>
            <ModalWrapper>
                <h1>modal</h1>
                <p>jfhsf ushf sfh sdhfn sf sfhjsdnflseufh</p>
            </ModalWrapper>
            
        </ModalBackground>)
        :null} */}
     </>
    )
}
export default Modal

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;