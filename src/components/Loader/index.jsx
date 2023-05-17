import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

const LoaderContent = styled.div`
  padding: 10px;
  border: 6px solid red;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

function Loader() {
  return (
    <div>
      <h1>loading</h1>
      <LoaderContent />
    </div>
  );
}

export default Loader;
