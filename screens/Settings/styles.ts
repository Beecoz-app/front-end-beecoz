import styled from "../../styles/styledComponents";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 90%;
  flex: 1;

  justify-content: space-evenly;
  align-items: center;

  align-self: center;

  overflow-y: scroll;
`;

export const IconContainer = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #5565;

  margin-bottom: 100px;
`;
export const OptionsContainer = styled.View`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
