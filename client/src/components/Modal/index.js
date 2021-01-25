import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function BootstrapModal(){

    const [showHide, setShowHide] = useState(false);

 
        
        return(
            <div>
                
                <Modal show={setShowHide(true)}>
                    
                    <Modal.Header closeButton onClick={()=> setShowHide(false)}>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowHide(false)}>
                        Close 
                    </Button>
                    
                    </Modal.Footer>
                </Modal>

            </div>
        )
        
    
    
}

export default BootstrapModal;