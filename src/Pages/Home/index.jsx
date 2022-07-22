import UpperContent from "../../Component/UpperContent";
import LowerContent from "../../Component/LowerContent";
import "./index.scss";
import { useEffect, useState } from "react";
import { getTestimonialData, getTipsData } from "../../Helper/getData";

function Home() {
  const [testimonial, setTestimonial] = useState([]);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    getTestimonialData().then((response) => {
      setTestimonial(response.data);
    });

    getTipsData().then((response) => {
      setTips(response.data);
    });
  }, []);

  return (
    <div className="home">
      <UpperContent dataTesti={testimonial} />
      <LowerContent dataTips={tips} />
    </div>
  );
}

export default Home;
