import React from 'react'
import styled from 'styled-components';

const Leftside = () => {
    return (
       <Container>
           <ArtCard>card</ArtCard>
       </Container>
    )
}
const Container = styled.div`
grid-area: leftside;

`;
const ArtCard = styled.div`
grid-area: leftside;

`;
export default Leftside
