import styled from "@emotion/styled";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export function Content() {
  return (
    <ContentStyles>
      <Sidebar />
      <Tasks />
    </ContentStyles>
  );
}

const ContentStyles = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  max-width: 922px;
  margin: auto;
`;
