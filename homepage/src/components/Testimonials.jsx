import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/human.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>HAPPY CUSTOMERS</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          A cultural journey like no other! 2RISM offers a rich tapestry of global cultures.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Rekha Bannerjee,</h4>
              <span>Chandigarh</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          A must-visit for culture enthusiasts!"
"Dive deep into the heart of diverse cultures with 2RISM.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Jaya Singh,</h4>
              <span>Manali</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          "An enriching cultural exploration awaits at 2RISM.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Shusma Arora,</h4>
              <span>Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: background: #D7E2FF;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;