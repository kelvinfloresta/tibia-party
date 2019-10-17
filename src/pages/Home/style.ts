import styled from "styled-components";
import { Card } from "antd";

export const StyledHome = styled.div`
  margin: auto;
  padding-top: 10%;
  display: flex;
  max-width: 1100px;
  justify-content: space-between;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1rem;
  }
`;

export const StyledCard = styled(Card)`
  max-width: 300px;
`;
