import styled from "styled-components";

export const EditButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .button-logOut {
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    background-color: #ce813a;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 600;
    box-sizing: border-box;
    border: 2px solid orange;
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    appearance: none;
    margin: 0;
    outline: none;
    padding: 16px 24px;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;

    :hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }

    :active {
      box-shadow: none;
      transform: translateY(0);
    }
  }
`;
