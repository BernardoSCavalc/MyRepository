import styled from "styled-components";
import Header from "../components/Header";
import Form from "../components/Form";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function SparkConnect() {
  return (
    <PageContainer>
      <Header />
      <Form />
    </PageContainer>
  );
}

export default SparkConnect;
