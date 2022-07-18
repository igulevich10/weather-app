import styled from "styled-components";

const WeatherWrapper = styled.div`
  width: 400px;
  border-radius: 5px;
  box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 20%);
  color: #333;
  background-color: #fff;
  margin: 20px auto 0 auto;
  padding: 0 20px 20px 20px;
`;

const WeatherTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CityName = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  margin: 0;
  letter-spacing: 1px;
`;

const CurrentCondition = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  margin: 0;
`;

const WeatherIcon = styled.img`
  width: 100px;
  margin-top: 20px;
`;

const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfo = styled.div`
  width: 100%;
  padding-left: 25px;
`;

const CurrentTemp = styled.p`
  font-weight: 600;
  font-size: 36px;
  width: auto;
  margin: 10px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  text-align: left;
  font-weight: 400;
  font-size: 16px;
`;

const Value = styled.span`
  text-align: right;
  font-weight: 600;
  font-size: 16px;
`;



export {WeatherWrapper,  WeatherTop, CityName,  CurrentCondition, WeatherIcon, WeatherContainer, WeatherInfo, CurrentTemp, Row, Label, Value};