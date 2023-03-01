import "../styles/teampage.css";
import Bianca from "../images/Bianca.jpeg";

export function Teampage() {

  const teamMembers = [
    {name: "Leonardo", gitLink: "https://github.com/LeonardoCahuas", linkedinLink: "https://www.linkedin.com/in/leonardo-cahuas-867162261/", icon:""},
    {name: "Bianca", gitLink: "https://github.com/biancafrancini", linkedinLink: "https://www.linkedin.com/in/bianca-francini/", icon: Bianca},
    {name: "Yari", gitLink: "https://github.com/Yaricherchi7", linkedinLink: "https://www.linkedin.com/in/yari-cherchi/", icon:""}
  ]

  return (
      <div className="team-container flex flex-row items-center">
        {/* <h3>⏬️ Space to introduce our team 😎 ⏬️</h3>*/}
        {teamMembers.map((person, index) => <div key={person.name + index} className="avatar-about-container flex flex-row items-center my-10">
          <div className="avatar">
            <div className="w-32 mask mask-hexagon">
              <img src={person.icon} alt="Avatar"/>
            </div>
          </div>
            <div className="about p-5 mt-5 text-left">
              <h3 className="name-avatar-title font-bold mb-2"> {person.name}  
              <br />
              <span className="text-xs font-light">Junior Full Stack Developer</span> </h3>
              <a href={person.gitLink} className="mx-2" rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href={person.linkedinLink} rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>)}
      </div>
  );
}
