const baseUrl = "../../img";

const ProjectCard = (props) => {
  const { name, description, image, url } = props;
  return (
    <div>
      <a href={url}>
        <img src={image}></img>
        <div className="text-2xl font-semibold">{name}</div>
        <div className="text-l">{description}</div>
      </a>
    </div>
  );
};

export default ProjectCard;
