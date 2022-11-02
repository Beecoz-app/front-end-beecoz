import styled from "../../../../../styles/styledComponents";

interface ContainerProps {
  seeInterested: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;

  margin-bottom: 20px;
  padding-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.main};
`;

