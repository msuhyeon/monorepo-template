import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  font-size: 24px;
  color: red;
`;

function MyComponent() {
  return (
    <>
      <StyledDiv>Hello, This is Emotion!</StyledDiv>
    </>
  );
}

export default MyComponent;
