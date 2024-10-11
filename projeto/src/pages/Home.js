import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SectionHeader from "../components/SectionHeader";

const HomeContainer = styled.body`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <HomeContainer>
      <Header />
      <SectionHeader />
      <Main />
      <Footer />
    </HomeContainer>
  );
}

export default Home;
