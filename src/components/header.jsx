import Typewriter from "typewriter-effect";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row dist">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>{props.data ? props.data.title1 : "Loading"}</h2>
                <h2 className="glow">
                  {props.data ? props.data.title2 : "Loading"}
                </h2>
                <h2>{props.data ? props.data.title3 : "Loading"}</h2>
                <legend />
                <br />
                <h2 style={{ color: "white" }}>We</h2>
                <h2 style={{ color: "#6372ff" }}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      delay: 40,
                      strings: ["Develop 💻", "Interact 🤝", "Organise 🚀"],
                      loop: true,
                    }}
                  />
                </h2>
                <span></span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
