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
  padding: 30px;
  border: 6px solid red;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  position: absolute;
  left: 47%;
  top: 80%;
  transform: translate(-47%, -80%);
`;

function Loader() {
  return (
    <div>
      <h2>LOADING...</h2>
      <LoaderContent />
    </div>
  );
}

export default Loader;
