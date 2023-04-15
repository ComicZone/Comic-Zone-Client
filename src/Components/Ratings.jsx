import { BsStarFill } from "react-icons/bs";
import styled from "styled-components";

const Ratings = ({rating}) => {
  return (
    <Container>
      {Array.from([1, 2, 3, 4, 5]).map((v, i) => {
        return <Star><BsStarFill color={'#FFC700'} /></Star>;
      })}
    </Container>
  );
};

export default Ratings

const Container = styled.div`
  display: flex !important;
  margin: 0.5em 0 2em;
`;

const Star = styled.p`
  
`