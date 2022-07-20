import styled from "styled-components";

const Title = styled.label`
  font-size: 24px;
  font-weight: 700;
`;

const DailyItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 15px;
  height: 50px;
  margin: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 20px;
`;

const ForecastIcon = styled.img`
  width: 50px;
`;

const ForecastDay = styled.label`
  color: #212121;
  font-weight: 600;
  margin-left: 15px;
`;

const WeatherDescription = styled.label`
  margin-left: 15px;
`;

const MinMaxTemp = styled.label`
  margin-left: 15px;
`;

const DailyDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  background-color: #edf5fa;
  border-radius: 15px;
  margin: 5px;
  transform: translateY(-20px);
  animation: ani 1s forwards;

  @keyframes ani {
    0% {transform: translateY(-20px);}
    100% {transform: translateY(0);}
  }
`;

const DailyDetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;
export {Title, DailyItem, ForecastIcon, ForecastDay, WeatherDescription, MinMaxTemp, DailyDetails, DailyDetailsItem};