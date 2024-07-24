import React from "react";
import styled from "styled-components";
import CommandBoxArea from "./CommandFrameComponents/CommandBoxArea";
import OutputArea from "./CommandFrameComponents/OutputArea";

const Frame = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  height: 92vh;
  padding: 10px;
  margin: 10px;
  border: 1px solid red;
  border-radius: 5px; /* Specify the radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CommandFrame: React.FC = () => {
  return (
    <>
      <Frame>
        <OutputArea/>
        <CommandBoxArea />
      </Frame>
    </>
  );
};

export default CommandFrame;
