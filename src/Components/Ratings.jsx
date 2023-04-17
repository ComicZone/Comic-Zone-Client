import { MdStar, MdStarHalf } from "react-icons/md";
import styled from "styled-components";

const RATINGS = [1, 2, 3, 4, 5];

const Ratings = ({ rating, className, size }) => {
  const ratings = Number(rating);
  return (
    <Container className={className}>
      {RATINGS.map((v, i) => {
        if (v <= ratings) {
          if (i + 1 === parseInt(ratings)) {
            return <MdStarHalf key={i} size={size} color="#FFC700" />;
          }
          return <MdStar key={i} size={size} color="#FFC700" />; //<MdStar size={24} color="#FFC700" />;
        }
        return <MdStar key={i} size={size} color="#E8E8E8" />;
      })}
    </Container>
  );
};

export default Ratings;

const Container = styled.div`
  display: flex !important;
  margin: 0.5em 0 2em;
  gap: 8px;
`;
