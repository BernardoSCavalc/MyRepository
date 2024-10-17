import styled from "styled-components"

import LayoutONG from "./layoutONGs"
import LayoutPessoas from "./layoutPessoas"
import LayoutProf from "./layoutProf"


function Ongs() {

    return (
        <div>
            <LayoutONG></LayoutONG>
            <LayoutPessoas></LayoutPessoas>
            <LayoutProf></LayoutProf>
        </div>
    )
}

export default Ongs