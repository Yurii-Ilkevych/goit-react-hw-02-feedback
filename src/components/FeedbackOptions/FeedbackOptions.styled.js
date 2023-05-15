import styled from '@emotion/styled';

const WrapperButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  column-gap: 10px;
`;
const BtnGood = styled.button`
  background-color: rgb(55, 173, 55);
  cursor: pointer;
  border: 1px solid rgb(74, 72, 71);
  border-radius: 2px;
  box-shadow: 0 1px #666;
  &:hover {
    background-color: rgb(26, 133, 26);
    transform-style: 1px;
  }
  &:active {
    background-color: rgb(55, 173, 55);
    box-shadow: none;
    transform: translateY(1px);
  }
`;
const BtnNeutral = styled.button`
  background-color: rgb(240, 246, 240);
  cursor: pointer;
  border: 1px solid rgb(74, 72, 71);
  border-radius: 2px;
  box-shadow: 0 1px #666;
  &:hover {
    background-color: rgb(152, 157, 152);
    transform-style: 1px;
  }
  &:active {
    background-color: rgb(240, 246, 240);
    box-shadow: none;
    transform: translateY(1px);
  }
`;
const BtnBad = styled.button`
  background-color: rgb(244, 41, 41);
  cursor: pointer;
  border: 1px solid rgb(74, 72, 71);
  border-radius: 2px;
  box-shadow: 0 1px #666;
  &:hover {
    background-color: rgb(189, 15, 15);
    transform-style: 1px;
  }
  &:active {
    background-color: rgb(244, 41, 41);
    box-shadow: none;
    transform: translateY(1px);
  }
`;
export { WrapperButton, BtnGood, BtnNeutral, BtnBad };