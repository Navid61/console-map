import React from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import CommandFrameButton from "./Button";
import '../../../Style/CommandFrame/CommandBoxArea/CommandBoxArea.css'



const Frame = styled.div`
  width:100%;
  height: 14rem;
  display:flex;
  flex-direction:column;
  align-items:end;
  padding: 0;
  margin: 0.5rem;
  // border: 2px dashed green;
  border-radius: 5px; /* Specify the radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CommandBoxArea: React.FC=()=>{

return(
  <Frame>
    <Form>
    <Form.Group  controlId="exampleForm.ControlTextarea1">
        <Form.Label>Command:</Form.Label>
        <Form.Control id='form_textarea--1' as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <CommandFrameButton/>
  </Frame>
);

}

export default CommandBoxArea;