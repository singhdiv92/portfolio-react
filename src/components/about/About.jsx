import "./about.css";
import Award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1601353125437-05d59f2b7f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Its a long established fact that a reader will be distracted by the
          readable content
        </p>
        <p className="a-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          molestiae deleniti aut adipisci voluptatum doloremque earum nostrum
          nobis impedit reprehenderit rem natus, in molestias, consequuntur
          exercitationem itaque neque, modi quia iste provident numquam omnis
          error ut.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
