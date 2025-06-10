import React from 'react'; // Assuming you have a footer component

const Helpline = () => {
  return (

      <div 
        className="container" 
        id="innerpage" 
        style={{
          backgroundImage: "url('src/assets/bg.jpg')",
          backgroundSize: "100%"
        }}
      >
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <img src="src/assets/img/helpline.png" alt="Helpline" />
            <h1>YOUR PARTNER FOR EXPORT SUCCESS</h1>
            <h1 style={{ fontSize: '70px' }}>
              <img 
                src="src/assets/img/calling.gif" 
                width="100px"
                height="100px" 
                alt="Calling animation" 
              /> 
              0755 -257-7145
            </h1>
          </div>
        </div>
      </div>
  );
};

export default Helpline;