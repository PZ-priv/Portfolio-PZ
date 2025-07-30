import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../components/ProjectCard";

const Projects = ({ t }) => {
  return (
    <section id="projects" className="section py-20 px-4 md:px-12 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#b2874a]">
        {t.title}
      </h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="w-full max-w-[85vw] h-full max-h-[85vh] overflow-hidden"
      >
        {t.items.map((project, idx) => (
          <SwiperSlide key={idx}>
            <ProjectCard project={project} cardLabels={t.cardLabels} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

Projects.propTypes = {
  t: PropTypes.array.isRequired,
}.isRequired;

export default Projects;
