import styled from 'styled-components';

const CompareListStyle = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .repository {
    margin: 0 5px;
    width: 250px;
    background: #fff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;

    header {
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 64px;
        padding-bottom: 15px;
      }

      strong {
        font-size: ;
      }
    }

    ul {
      list-style: none;

      li {
        font-weight: bold;
        padding: 12px 20px;

        small {
          font-weight: normal;
          font-size: 12px;
          color: #999;
          font-style: italic;
        }

        &:nth-child(odd) {
          background-color: #f0f0f0;
        }
      }
    }
  }
`;

export default CompareListStyle;
