import React from "react";
import styles from "./TestimonialSection.module.css";

export type TestimonialData = {
  name: string;
  image: string;
  affiliation: string;
  rating: number;
  review: string;
};

export type TestimonialSectionProps = {
  title: string;
  testimonials: TestimonialData[];
};

function TestimonialSection(props: TestimonialSectionProps) {
  return (
    <section
      className={styles.testimonialSection}
      aria-label="Testimonial Section"
    >
      <h2 className={styles.testimonialSectionTitle}>{props.title}</h2>
      <div className={styles.testimonials} aria-label="Testimonials List">
        {props.testimonials.map((testimonial, index) => {
          return <Testimonial key={index} {...testimonial} />;
        })}
      </div>
    </section>
  );
}

type TestimionialProps = TestimonialData;

function Testimonial(props: TestimionialProps) {
  return (
    <article className={styles.testimonial} aria-label="Testimonial">
      <p className={styles.testimonialReview}>{props.review}</p>
      <div className={styles.userProfile}>
        <img
          src={props.image}
          className={styles.userImage}
          width={50}
          height={50}
          alt="User profile"
        />
        <div className={styles.userRatingContainer}>
          <RatingStars rating={props.rating} />
          <div className={styles.userContainer}>
            <span className={styles.userName}>{props.name}</span>
            <span className={styles.userAffiliation}>{props.affiliation}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

type RatingStarsProps = {
  rating: number;
};

function RatingStars(props: RatingStarsProps) {
  return (
    <div className={styles.userRating} arial-label="rating stars out of five">
      {props.rating}
    </div>
  );
}

export default TestimonialSection;
