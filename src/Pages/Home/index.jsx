import UpperContent from "../../Component/UpperContent";
import LowerContent from "../../Component/LowerContent";
import "./index.scss";
import { useEffect, useState } from "react";
import { getTestimonialData } from "../../Helper/getData";

function Home() {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    getTestimonialData().then((response) => {
      setTestimonial(response.data);
    });
  }, []);

  return (
    <div className="home">
      <UpperContent dataTesti={testimonial} />
      <LowerContent />
    </div>
  );
}

export default Home;
