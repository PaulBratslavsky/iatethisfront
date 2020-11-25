import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    border: 16px solid #e8f0fe; /* Light grey */
    border-top: 16px solid pink; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loade() {
  return (
    <LoaderContainer>
      <div className='loader'></div>
    </LoaderContainer>
  );
}
