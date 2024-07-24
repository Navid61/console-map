import React from "react";
import styled from "styled-components";
import MapFrame from "../MapFrame/MapFrame";
import CommandFrame from "../CommandFrame/CommandFrame";

const Frame = styled.div`
  width: auto;
  display:flex;
  justify-content:flex-start;
  flex-direction:row-reverse;
  height: 100%;
  border: 2px solid #ccc;
  border-radius: 5px; /* Specify the radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MapMainFrame: React.FC = () => {
  return (
    <>
      <Frame>
      <MapFrame/>
      <CommandFrame/>
      </Frame>
    </>
  );
}

export default MapMainFrame;