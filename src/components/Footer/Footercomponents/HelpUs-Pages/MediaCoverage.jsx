import React from "react";

const MediaCoverage = () => {
  return (
    <div className="container" id="innerpage">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center font-weight-bold mt-5 text-uppercase">
            Media Coverage
          </h3>
          <hr />
          <div className="row mt-4">
            {[
              {
                href: "https://twitter.com/MPIDC?ref_src=twsrc%5Etfw",
                label: "Tweets by MPIDC",
              },
              {
                href: "https://twitter.com/makeinindia?ref_src=twsrc%5Etfw",
                label: "Tweets by Make in India",
              },
              {
                href: "https://twitter.com/DIPPGOI?ref_src=twsrc%5Etfw",
                label: "Tweets by DIPP GOI",
              },
            ].map((tweet, index) => (
              <div key={index} className="col-md-4">
                <a
                  className="twitter-timeline"
                  data-width="450"
                  data-height="550"
                  data-dnt="true"
                  href={tweet.href}
                >
                  {tweet.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
