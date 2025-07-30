import PropTypes from "prop-types";
import checkIcon from "/ok.png";

const ProjectSummaryCards = ({ summary, summarySection }) => {
  if (!summary || summary.length === 0) return null;

  return (
    <section className=" text-[#ffeabd]">
      <h2 className="text-3xl font-bold text-center text-[#ffeabd] mb-8 uppercase">
        {summarySection.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {summary.map((task, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl p-6 shadow-md border border-[#b2874a]/30"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#b2874a] flex items-center gap-2">
              <img src={checkIcon} alt="check icon" className="w-6 h-6" />
              {task.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {task.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-sm text-center text-[#ffeabd] mt-10">
        {summarySection.info}
      </p>
    </section>
  );
};

ProjectSummaryCards.propTypes = {
  summary: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  summarySection: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectSummaryCards;
