import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`;
const FormContainer = styled.div`
  border: 2px solid yellow;
  margin: 0 auto;
  width: 80%;
  text-align: center;
`;

const Introduction = styled.div`
  border: 5px solid blue;
  display: flex;
  flex-direction: column;
  gap: 300px;
`;

const Title = styled.h1`
  font-size: 8rem;
`;

const P = styled.p`
  font-size: 2rem;
  font-family: "Manjari", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

function Form() {
  return (
    <MainContainer>
      <FormContainer>
        <Introduction>
          <Title>SparkConnect</Title>

          <P>
            Bem-vindo ao SparkConnect! Agradecemos por sua visita e por se
            interessar em melhorar a situação da energia em sua comunidade.
            Neste espaço, você pode compartilhar suas experiências, denúncias e
            sugestões. Suas contribuições nós ajudarão a contribuir com ONGs que
            buscam soluções sustentáveis e acessíveis. Juntos, podemos promover
            um futuro energético mais justo para todos!
          </P>
        </Introduction>
      </FormContainer>
    </MainContainer>
  );
}

export default Form;
