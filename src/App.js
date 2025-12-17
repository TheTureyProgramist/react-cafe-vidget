import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
const Title = styled.h1`
  font-weight: 900;
  font-size: 40px;
  color: blue;
`;
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: darkviolet;
  height: 100vh;
  background-color: #ffd000ff;
  text-align: center;
`;
const Text = styled.p``;
const List = styled.div``;
const Rate = styled.h3``;
const Block = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 16px 0;
`;
const GoodButton = styled.button`
  padding: 15px 30px;
  background-color: green;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
    transition: 2s;
  }
`;
const NeytralButton = styled.button`
  padding: 15px 30px;
  background-color: yellow;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
    transition: 2s;
  }
`;
const BadButton = styled.button`
  padding: 15px 30px;
  background-color: red;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
    transition: 2s;
  }
`;
const Statistic = styled.h3``;
const GeneralQuantity = styled.p``;
const GoodPercent = styled.p``;
const GoodQuantity = styled.p``;
const NeytralQuantity = styled.p``;
const BadQuantity = styled.p``;
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;
  return (
    <div className="App">
      <Container>
        <Title>Ресторан ІндоЛіто</Title>
        <Text>Ми пропонуємо страви української кухні. А також солодощі</Text>
        <List>
          <Rate>Оцініть нас</Rate>
          <Block>
            <GoodButton onClick={() => setGood(good + 1)}>Добре</GoodButton>
            <NeytralButton onClick={() => setNeutral(neutral + 1)}>Нейтрально</NeytralButton>
            <BadButton onClick={() => setBad(bad + 1)}>Погано</BadButton>
          </Block>
        </List>
        <List>
          <Statistic>Статистика</Statistic>
          <GeneralQuantity>Загальна к-сть голосів: {total}</GeneralQuantity>
          <GoodPercent>Відсоток позитивних голосів: {positivePercentage}%</GoodPercent>
          <GoodQuantity>Хороші к-сть: {good}</GoodQuantity>
          <NeytralQuantity>Нейтральні к-сть: {neutral}</NeytralQuantity>
          <BadQuantity>Погані к-сть: {bad}</BadQuantity>
        </List>
      </Container>
    </div>
  );
}
export default App;