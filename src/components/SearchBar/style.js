import styled from "styled-components";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin: 10px auto;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;

  :focus {
    border: 2px solid #98ccec;
  }
`;

const SearchBtn = styled.button`
  margin-left: 5px;
  color: rgba(71, 71, 76, 0.911);
  font-size: 18px;
`;

const Geolocation = styled.div`
  color: rgba(71, 71, 76, 0.911);
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;
export {SearchBox, SearchBtn, Geolocation};
