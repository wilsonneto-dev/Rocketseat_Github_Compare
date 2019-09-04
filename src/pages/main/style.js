import styled from 'styled-components';

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  form {
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
      flex: 1;
      height: 55px;
      padding: 0 20px;
      background: #fff;
      border: 0;
      color: #444;
      border-radius: 3px;

      border: ${props => (props.withError ? '2px solid #f00' : 0)};
    }

    button {
      height: 55px;
      width: 80px;
      padding: 0 20px;
      margin-left: 10px;
      background: #63f5b0;
      color: #fff;
      border: 0;
      font-size: 20px;
      font-weight: bold;
      border-radius: 3px;

      &:hover {
        background: #53d89f;
        cursor: pointer;
      }
    }
  }
`;

export default MainStyled;
