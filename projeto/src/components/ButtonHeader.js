import styled from "styled-components"
import { Link } from "react-router-dom"

const ButtonHeaderContainer = styled.div `

`

const Button = styled(link) `

`


function ButtonHeader() {
    return (
        <ButtonHeaderContainer>
            <Button to="/Form">SparkConnect</Button>
        </ButtonHeaderContainer>
    )
}

export default ButtonHeader