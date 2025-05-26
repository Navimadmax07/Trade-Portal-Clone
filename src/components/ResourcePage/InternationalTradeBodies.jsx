import React from "react";

const tradeBodies = [
  {
    name: "World Trade Organization",
    url: "https://www.wto.org/",
    img: "/src/assets/img/indina-trade/1.png",
  },
  {
    name: "World Customs Organization",
    url: "http://www.wcoomd.org/en.aspx",
    img: "/src/assets/img/indina-trade/2.png",
  },
  {
    name: "World Organization for Animal Health",
    url: "https://www.oie.int/en/home/",
    img: "/src/assets/img/indina-trade/3.png",
  },
  {
    name: "International Plant Protection Convention",
    url: "https://www.ippc.int/en/",
    img: "/src/assets/img/indina-trade/4.png",
  },
  {
    name: "Food and Agricultural Organization of the United Nations",
    url: "http://www.fao.org/home/en/",
    img: "/src/assets/img/indina-trade/5.png",
  },
  {
    name: "CODEX International Food Standards",
    url: "http://www.fao.org/fao-who-codexalimentarius/en/",
    img: "/src/assets/img/indina-trade/6.png",
  },
];

function handleExternalLink(e, url) {
  e.preventDefault();
  alert("You are navigating to other Website");
  window.open(url, "_blank");
}

const InternationalTradeBodies = () => {
  return (
    <div className="container-fluid" id="innerpage">
      <style>{`
      #indian_trade .col-md-4 .card-body {
        height: 300px;
      }
      #indian_trade a {
        text-decoration: none;
      }
    `}</style>
      <div className="row bg-white" id="dashboard">
        <div className="col-md-12">
          <div className="container" id="indian_trade">
            <h1 className="text-center">International Trade Bodies</h1>
            <div className="row mt-5">
              {tradeBodies.slice(0, 3).map((body, idx) => (
                <div className="col-md-4 col-sm-4" key={body.name}>
                  <div className="card">
                    <a
                      href={body.url}
                      onClick={(e) => handleExternalLink(e, body.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <img
                          src={body.img}
                          width="auto"
                          height="100%"
                          alt={body.name}
                        />
                      </div>
                      <div className="card-footer text-center">
                        <p className="text-dark">{body.name}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-5" id="trade_second">
              {tradeBodies.slice(3).map((body, idx) => (
                <div className="col-md-4 col-sm-4" key={body.name}>
                  <div className="card">
                    <a
                      href={body.url}
                      onClick={(e) => handleExternalLink(e, body.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <img src={body.img} width="100%" alt={body.name} />
                      </div>
                      <div className="card-footer text-center">
                        <p className="text-dark">{body.name}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalTradeBodies;
