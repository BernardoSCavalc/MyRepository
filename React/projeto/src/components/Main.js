import styled from "styled-components"

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`


function Main() {
    return (
        <main>
            <MainContainer>
                <h1>Main Content</h1>
            </MainContainer>
        </main>
        
    )
}

export default Main