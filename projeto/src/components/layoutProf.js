import '../styles/layoutProfStyle.css'

import styled from 'styled-components'

import { useEffect } from 'react'

const LayoutProfP = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    margin: 10px;
`

const LayoutProfAux = styled.div`

    display: flex;
    flex-direction: column;

    transform: translateY(-50%);

    opacity: 0;
    transition: opacity 1s, transform 0.5s ;

`

const LayoutProfAux1 = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1124px) {
        flex-direction: column;
    }
`

const LayoutProfAux2 = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1124px) {
        flex-direction: column;
    }
`

const Prof = styled.div`

    border-radius: 20px;
    border-color: yellow;
    border-style:solid;
    margin: 10px;
    background-size: cover;
    background-position: center;
    box-shadow: 0 5px 10px yellow;

    color: white;
    text-shadow: 2px 2px 5px black;
    text-align: justify;

`

function LayoutProf(){

    useEffect(() => {
        const layoutProf = document.getElementById('pr')
        const quad1 = document.getElementById('quad1')
        const quad2 = document.getElementById('quad2')
        const quad3 = document.getElementById('quad3')
        const quad4 = document.getElementById('quad4')
        const quad5 = document.getElementById('quad5')
        const quad6 = document.getElementById('quad6')
        const quad7 = document.getElementById('quad7')

        let layoutProfAux = false;

        function LayoutProff(){
            if(layoutProfAux === false ){ 
                layoutProf.style.opacity = 1;
                layoutProf.style.transform = `translateY(0)`
                layoutProfAux = true;
                quad1.style.transform = `translateY(0)`
                quad2.style.transform = `translateY(0)`
                quad3.style.transform = `translateY(0)`
                quad4.style.transform = `translateY(0)`
                quad5.style.transform = `translateY(0)`
                quad6.style.transform = `translateY(0)`
                quad7.style.transform = `translateY(0)`
            }
        }
        LayoutProff()
    })
    return(
        
        <LayoutProfP class="layout-prof" style={{display: "flex",flexDirection: "column", justifyContent: "center"}}>
            <h1 style={{textAlign: "center", color: "yellow"}}>Profissões na Área de Energias Renováveis</h1>
            <LayoutProfAux class="layout-prof-aux" id="pr">
                <LayoutProfAux1 class="layout-prof-aux-1">
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <Prof class="prof" id="quad1" style={{backgroundImage: "url(https://inap.com.br/wp-content/uploads/2022/04/tecnico-em-eletrotecnica-1-1024x542.jpg)"}}>
                            <h2>Tecnólogo em Sistemas Elétricos</h2>
                            <p>Responsável por projetar e efetuar manutenções em sistemas de geração e distribuição de energia. Com conhecimentos em tecnologias eólicas, solares e de biomassa, este profissional tem uma demanda crescente no mercado de trabalho.</p>
                        </Prof>
                        <Prof class="prof" id="quad2"  style={{backgroundImage: "url(https://i1.rgstatic.net/ii/profile.image/838001072562176-1576806433372_Q512/Leonardo-Selvenca.jpg)"}}>
                            <h2>Tecnólogo em Biocombustíveis</h2>
                            <p>Trabalha na área de pesquisa e desenvolvimento de biocombustíveis, atuando sobre conhecimentos em biotecnologia, química e processos industriais.</p>
                        </Prof>
                    </div>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Prof class="prof" id="quad3"  style={{backgroundImage: "url(https://senaies.com.br/wp-content/uploads/2022/01/Engenheiro-Ambiental-scaled.jpg)"}}>
                            <h2>Engenheiro Ambiental</h2>
                            <p>Profissional que administra a implementação de projetos ecologicamente corretos. Atua sob o planejamento e desenvolvimento de infraestruturas para fontes renováveis como solar, eólica, hidrelétrica e biomassa.</p>
                        </Prof>

                        <Prof class="prof" id="quad4"  style={{backgroundImage: "url(https://www.laboneconsultoria.com.br/wp-content/uploads/2022/08/Principais-disciplinas-do-curso-de-Engenharia-H%C3%ADdrica.jpg)"}}>
                            <h2>Técnico em Hidrologia</h2>
                            <p>Responsável pela pesquisa e organização de informações que auxiliem na administração de recursos hídricos para posterior aplicação em hidrelétricas, irrigação e abastecimento.</p>
                        </Prof>
                    </div>

                    </LayoutProfAux1>
                <LayoutProfAux2 class="layout-prof-aux-2" >
    
                        <Prof class="prof" id="quad5"  style={{backgroundImage: "url(https://www.undb.edu.br/hubfs/shutterstock_1155187792.jpg)"}}>
                            <h2>Engenheiro de software</h2>
                            <p>Atuam no desenvolvimento de sistemas de monitoramento e previsão na produção das usinas elétricas.</p>
                        </Prof>
                        <Prof class="prof" id="quad6"  style={{backgroundImage: "url(https://th.bing.com/th/id/R.fcf4e83517a0e69767070bf6f4e4daba?rik=vaO2O0AI5wz10Q&pid=ImgRaw&r=0)"}}>
                            <h2>Especialista em Controle Ambiental</h2>
                            <p>Perito em análise e desenvolvimento de medidas ambientalmente corretas que ajudem usinas de energia renovável a mitigarem seus impactos ambientais.</p>
                        </Prof>
                        <Prof class="prof" id="quad7"  style={{backgroundImage: "url(https://network.grupoabril.com.br/wp-content/uploads/sites/4/2017/09/meioambiente.jpg?quality=70&strip=info)"}}>
                            <h2>Técnico em Geoprocessamento</h2>
                            <p>Analisa o potencial que uma determinada área tem para a instalação de uma espécie de geração de energia renováveis.</p>
                        </Prof>

                </LayoutProfAux2>
            </LayoutProfAux>
        </LayoutProfP>
    )
}

export default LayoutProf