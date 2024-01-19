import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f0ec50;
  z-index: 0;
  overflow: hidden;
`;

export const ModalBox = styled.div`
  position: relative;

  width: 1314px;
  height: 745px;
  background-color: #fff;
`;
