import React from "react";
import styled from "styled-components";
import Map from '../Map/Map';

const Frame = styled.div`
  width: 70vw;
  float:right;
  height: 90vh;
  padding: 20px;
  margin: 10px;
  border: 1px solid red;
  border-radius: 5px; /* Specify the radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MapFrame: React.FC = () => {
  return (
    <>
      <Frame>
       <Map/>
      </Frame>
    </>
  );
}

export default MapFrame;
