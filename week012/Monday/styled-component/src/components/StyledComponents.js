import React from "react";
import Wrapper from "./styled-components/Wrapper";
import HeaderText from "./styled-components/HeaderText";
import Button from "./styled-components/Button";

const StyledComponents = () => {
    return(
        <Wrapper bgColor="wheat">
            <HeaderText>
                Clarusway
            </HeaderText>
            <HeaderText color="blue">
                Styled Elements
                <br/>
                <Button bgColor="white" textColor="red">BUTTON</Button>
            </HeaderText>
        </Wrapper>
    )
}

export default StyledComponents