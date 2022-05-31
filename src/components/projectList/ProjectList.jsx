import "./projectList.css";
import Project from "../project/Project";
import project from "../../design";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create and Inspire. It's Diva</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          itaque tempore vero fuga pariatur nulla!
        </p>
      </div>
      <div className="pl-list">
        {project.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
