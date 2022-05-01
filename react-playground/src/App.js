import styled from 'styled-components';

const Title = styled.div`
    color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme};
`;

function App() {
    return (
        <Wrapper>
            <Title>Hello!</Title>
        </Wrapper>
    );
}

export default App;
