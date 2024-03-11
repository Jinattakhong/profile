import styled from 'styled-components';

const NameTag = ({ name }) => {
  const Container = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    text-align: center;
  `;

  const Name = styled.h1`
    font-size: 18px;
    margin-bottom: 5px;
  `;

  const Title = styled.h2`
    font-size: 14px;
    margin-top: 5px;
  `;

  return (
    <Container>
      <Name>{name}</Name>
      <Title></Title>
    </Container>
  );
};

export default NameTag;
