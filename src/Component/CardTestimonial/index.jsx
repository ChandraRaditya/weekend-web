import "./index.scss";

function CardTestimonial(props) {
  return (
    <div className="card-testimonial">
      <h3 className="card-testimonial__title">{props.user}</h3>
      <p className="card-testimonial__text">{props.text}</p>
    </div>
  );
}

export default CardTestimonial;
