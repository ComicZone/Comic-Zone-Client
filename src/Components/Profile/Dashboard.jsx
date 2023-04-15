import React from "react";
import styled from "styled-components";
import "../../Stylesheets/SidebarProfile.css";
import { AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <UserBooks>
        <Heading>My Books</Heading>
        <BooksContainer>
          <Slider {...settings}>
            <Book>
              <BookCard></BookCard>
              <BookDetails>
                <div className="book-route-container">
                  <h1 className="peaceful-rath">Peaceful Rath</h1>
                  <h1 className="thrill">Thrill/ Drama/ Sci-Fi</h1>
                  <div className="book-cardsection">
                    <span className="star">
                      <AiOutlineStar /> 4.7
                    </span>
                    <h2 className="review">120 reviews</h2>
                  </div>
                </div>
              </BookDetails>
            </Book>
            <Book>
              <BookCard></BookCard>
              <BookDetails>
                <div className="book-route-container">
                  <h1 className="peaceful-rath">Peaceful Rath</h1>
                  <h1 className="thrill">Thrill/ Drama/ Sci-Fi</h1>
                  <div className="book-cardsection">
                    <span className="star">
                      <AiOutlineStar /> 4.7
                    </span>
                    <h2 className="review">120 reviews</h2>
                  </div>
                </div>
              </BookDetails>
            </Book>
          </Slider>
        </BooksContainer>
      </UserBooks>
      <NewRelease></NewRelease>
    </Container>
  );
};

export default Dashboard;

const Container = styled.section`
  // background: yellow;
  border: 1px solid red;
  height: 100%;
  display: flex;
  width: 100%;
  padding: 1em 2em;
  font-family: "Comic Sans MS";
`;

const UserBooks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3em;
`;

const Heading = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 92.5%;
  color: #203049;
`;
const BooksContainer = styled.div`
  display: flex;
`;
const Book = styled.div`
  height: 283px;
  display: flex;
  width: 470px;
  max-width: 470px;
  outline: 1px solid black;
  position: relative;
`;
const BookCard = styled.div`
  position: absolute;
  top: 0;
  left: 21px;
  z-index: 1;
  width: 226px;
  height: 242px;
  background: linear-gradient(
      127.65deg,
      rgba(5, 84, 242, 0.06) 0%,
      rgba(32, 156, 255, 0.29) 100%
    ),
    url("../../Assets/images/src2.jpg");
  border-radius: 15px;
`;
const BookDetails = styled.div`
  position: absolute;
  bottom: 0;
  width: 470px;
  height: 137px;
  background: #0b1a35;
  border-radius: 30px;
  /* align-self: end; */
`;

const NewRelease = styled.div``;
