import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const ProjectCard = ({ id,title, brief, imgUrl }) => {
  const navigate = useNavigate();

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx"  
      onClick={() => {
      navigate("/project/" + id);
    }}>
        <img src={imgUrl} alt="proj_img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{brief}</span>
        </div>
      </div>
    </Col>
  )
}
