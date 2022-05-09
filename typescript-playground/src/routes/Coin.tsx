import { useParams } from 'react-router';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;
const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
    display: block;
    text-align: center;
`;

interface RouteState {
    name: string;
}

function Coin() {
    const { coinId } = useParams();
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { name } = location.state as RouteState;
    console.log(location);
    console.log(name);
    return (
        <Container>
            <Header>
                <Title>{name}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null}{' '}
        </Container>
    );
}

export default Coin;
