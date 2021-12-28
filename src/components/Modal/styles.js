import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  backdrop-filter: blur(7px);
  background: rgba(0,0,0, 0.6);
  display:flex;
  justify-content:center;
  align-items: center;
`;
export const Container = styled.div`
  max-width: 450px;
  width: 1000%;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
    color:${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )}
  }

  p {
    margin: 8px;
  }


`;

export const Footer = styled.footer`
  margin-top:22px;
  display:flex;
  align-items:center;
  justify-content: flex-end;

  .cancel-button {
     background:transparent;
     border:none;
     font-size: 16px;
     margin-right: 8px;
     color: ${({ theme }) => theme.colors.gray[200]};
  }

`;
