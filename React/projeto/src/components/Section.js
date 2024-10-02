import React, { useEffect } from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/Pic1.jpg');
    background-size: cover;
    background-position: center;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
`;

const DynamicTitle = styled.h1`
    font-size: 2.25rem;
    color: #f6e24b;
    letter-spacing: 2px solid #b30000;
    padding-left: 5%;
    font-weight: bold;
    display: inline-block;
    border-right: 3px solid;
    animation: blinkCursor 0.8s steps(1) infinite;
    height: 1.19em;
    overflow: hidden;
    margin-bottom: 0.25rem;

    @keyframes blinkCursor {
        50% {
        border-color: transparent;
        }
    }
`;

const SubHeading = styled.h2`
    margin: 0.1rem;
`;

const texts = ["Impacto", "Consciência", "Sustentabilidade"];

function Section() { 
    useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const delayBetweenTexts = 3000;
    const titleElement = document.getElementById('dynamic-title');

    function typeText() {
      const currentText = texts[textIndex];
      titleElement.textContent = currentText.substring(0, charIndex);

      if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => {
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeText, typingSpeed);
        }, delayBetweenTexts);
      }
    }

    typeText();
  }, []);

return (
    <HomeSection>
        <DynamicTitle id="dynamic-title"></DynamicTitle>
        <SubHeading>Invista em um futuro mais verde e limpo para as próximas gerações.</SubHeading>
        <SubHeading>Descubra como fazer parte dessa revolução energética.</SubHeading>
        <SubHeading>Juntos, podemos fazer a diferença!</SubHeading>
    </HomeSection>
    );
}

export default Section;