import { ArrowUpRight } from "lucide-react";
import Tilt from "@/components/common/Tilt";
import TextGenerate from "@/components/common/TextGenerate";

/** Tilts toward the cursor; hover (or keyboard focus) pops up the details. */
export default function ProjectCard({ project }) {
  return (
    <Tilt as="article" className="project-card" tabIndex={0}>
      <div className="project-image">
        <img src={project.image} alt={project.name} loading="lazy" />
        <span className="project-location">{project.market}</span>
        <span className="project-open"><ArrowUpRight size={22} /></span>
        <div className="hover-detail">
          <p className="eyebrow">{project.type} · {project.city}</p>
          <p>{project.text}</p>
          <a className="text-link light" href="#enquire" data-enquire>Enquire <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="project-info">
        <p className="eyebrow">{project.type}</p>
        <TextGenerate as="h3">{project.name}</TextGenerate>
        <span>{project.city}</span>
      </div>
    </Tilt>
  );
}
