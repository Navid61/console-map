import React from "react";
import styled from "styled-components";

const Button= styled.button`
width:4rem;
height:2rem;
margin-right:0.5rem;
border: 2px solid red;
border-radius: 5px; /* Specify the radius */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CommandFrameButton: React.FC = () => {
  return (
    <>
    <Button>Send</Button>
    </>
  );
}

export default CommandFrameButton;