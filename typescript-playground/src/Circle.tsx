import styled from 'styled-components';

interface ContainerProps {
    backColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.backColor};
    border-radius: 100px;
`;

interface CircleProps {
    bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
    return <Container backColor={bgColor}>Hello!</Container>;
}

export default Circle;
