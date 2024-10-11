import styled from "styled-components";
import Header from "../components/Header";
import Form from "../components/Form";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled(Header)`
  background-color: yellow;
`;

function SparkConnect() {
  return (
    <PageContainer>
      <StyledHeader />
      <Form />
    </PageContainer>
  );
}

export default SparkConnect;
