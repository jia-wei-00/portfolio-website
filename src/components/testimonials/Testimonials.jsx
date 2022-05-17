import React from "react";
import styled from "styled-components";
import { FaSchool } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { GiSchoolBag } from "react-icons/gi";
import { Pagination } from "swiper";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: <IoMdSchool />,
    name: "Universiti Utara Malaysia",
    course: "Bachelor of Science with Honours (Multimedia) | Bachelor's Degree",
    result: "CGPA3.52",
  },
  {
    avatar: <FaSchool />,
    name: "SMK ST.MICHAEL",
    course: "STPM (Account, Economics, Pengajian Am, Pengajian Perniagaan)",
    result: "CGPA2.84",
  },
  {
    avatar: <GiSchoolBag />,
    name: "SMJK SAM TET",
    course: "SPM (Account, Economics, Science, Mathematics)",
    result: "3A, 2B, 3C",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Flip left>
        <h5>Where I Study</h5>
        <h2>Education</h2>
      </Flip>

      <Fade bottom>
        <TestimonialsContainer className="container">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {data.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <Testimonial>
                    <div>{data.avatar}</div>
                    <h5>{data.name}</h5>
                    <small>{data.course}</small>
                    <small>Result: ({data.result})</small>
                  </Testimonial>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </TestimonialsContainer>
      </Fade>
    </section>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 35%;

  & > :first-child {
    padding-bottom: 4rem;
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
    background: var(--color-primary);
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

const Testimonial = styled.article`
  background: var(--color-bg-variant);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;

  & > :first-child {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid var(--color-primary-variant);

    & > :first-child {
      width: 100%;
      height: 100%;
    }
  }

  & > small {
    color: var(--color-light);
    font-weight: 300;
    display: block;
    width: 80%;
    margin: 0.8rem auto 0;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    & > small {
      width: var(--container-width-sm);
    }
  }
`;
