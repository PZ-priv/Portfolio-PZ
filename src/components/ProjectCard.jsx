import PropTypes from "prop-types";
import { useState } from "react";
import ProjectSummaryCards from "./ProjectSummaryCards";

const ProjectCard = ({ project, cardLabels }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="w-full h-[75vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row items-center justify-start gap-6 text-white px-4 md:px-16">
      {/* Obrazki jako jedna kolumna z lightboxem na mobile */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[#b2874a]/50 scrollbar-track-transparent md:max-h-full pr-2">
        {project.images.length > 0 ? (
          project.images.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setFullscreenImage(img)}
            >
              <img
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className="object-cover w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))
        ) : (
          <ProjectSummaryCards
            summary={project.summary || []}
            summarySection={cardLabels.summarySection}
          />
        )}
      </div>

      {/* Opis */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-sm md:text-base px-2 md:px-4">
        <div className="flex items-center gap-3">
          {project.icon && (
            <img
              src={project.icon}
              alt="Ikona projektu"
              className="w-10 h-auto rounded-md"
            />
          )}
          <h3 className="text-xl md:text-2xl font-bold text-[#b2874a]">
            {project.name}
          </h3>
        </div>

        <p>
          <strong className="text-[#ffeabd]">{cardLabels.company}:</strong>{" "}
          {project.company}
        </p>
        <p>
          <strong className="text-[#ffeabd]">{cardLabels.goal}:</strong>{" "}
          {project.purpose}
        </p>
        <p>
          <strong className="text-[#ffeabd]">{cardLabels.improvements}:</strong>{" "}
          {project.improvement}
        </p>

        {/* Technologie */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-[#b2874a] text-white text-xs px-3 py-1 rounded-full shadow"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Linki */}
        {project.links?.length > 0 && (
          <div className="mt-3 space-y-2">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block underline text-[#ffeabd] hover:text-white transition"
              >
                🔗 {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Iframe – osadzony post LinkedIn */}
        {project.links?.some((link) => link.url.includes("linkedin.com")) && (
          <div className="mt-4 rounded overflow-auto shadow-lg max-h-64 scrollbar-thin scrollbar-thumb-[#b2874a]/50 scrollbar-track-transparent custom-scroll scrollbar-thin scrollbar-thumb-[#b2874a] scrollbar-track-transparent">
            <iframe
              src={
                project.links.find((l) => l.url.includes("linkedin.com"))?.url
              }
              className="w-full h-64 rounded"
              frameBorder="0"
              allowFullScreen
              title="LinkedIn post"
            ></iframe>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen screenshot"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    company: PropTypes.string.isRequired,
    purpose: PropTypes.string.isRequired,
    improvement: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    icon: PropTypes.string,
    summary: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        points: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ),
  }).isRequired,
  cardLabels: PropTypes.shape({
    company: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    improvements: PropTypes.string.isRequired,
    summarySection: PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectCard;
