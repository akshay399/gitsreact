export const About = (props) => {
  return (
    <div id="about" className='text-center'>
      <div className="container">
            <div className="section-title">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
             
            </div>
          </div>
        </div>
   
    
  );
};
