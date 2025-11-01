import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handleNeutralClick = this.handleNeutralClick.bind(this);
    this.handleBadClick = this.handleBadClick.bind(this);
  }

  handleGoodClick() {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  }

  handleNeutralClick() {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  }

  handleBadClick() {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositivePercentage() {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositivePercentage();

    return (
      <div className="App">
        <Container>
          <Title>Ресторан ІндоЛіто</Title>
          <Text>Ми пропонуємо страви української кухні. А також солодощі</Text>
          <List>
            <Rate>Оцініть нас</Rate>
            <Block>
              <GoodButton onClick={this.handleGoodClick}>Добре</GoodButton>
              <NeytralButton onClick={this.handleNeutralClick}>Нейтрально</NeytralButton>
              <BadButton onClick={this.handleBadClick}>Погано</BadButton>
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
}

export default App;