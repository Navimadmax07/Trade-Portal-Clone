import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  const galleryItems = [
    {
      src: "src/assets/img/gallery/BalaghatRiceInvestormeet.png",
      caption: "Balaghat Rice Investor Meet",
      title: "Balaghat Rice Investor Meet",
    },
    {
      src: "src/assets/img/gallery/bhind.jpg",
      caption: "Bhind",
      title: "Bhind",
    },
    {
      src: "src/assets/img/gallery/skfoodratlam-export.png",
      caption: "SK Food Ratlam",
      title: "SK Food Ratlam",
    },
    {
      src: "src/assets/img/gallery/Rewa1.jpeg",
      caption: "",
      title: "",
    },
    {
      src: "src/assets/img/gallery/Rewa2.jpeg",
      caption: "",
      title: "",
    },
    {
      src: "src/assets/img/gallery/Rewa3.jpeg",
      caption: "",
      title: "",
    },
    {
      src: "src/assets/img/gallery/Rewa4.jpeg",
      caption: "",
      title: "",
    },
    {
      src: "src/assets/img/gallery/Rewa5.jpeg",
      caption: "",
      title: "",
    },
    {
      src: "src/assets/img/gallery/Rewa6.jpeg",
      caption: "",
      title: "",
    },
    {
      src: "src/assets/img/gallery/Chattarpur.png",
      caption: "Chattarpur",
      title: "Chattarpur",
    },
    {
      src: "src/assets/img/gallery/Hosangabad.png",
      caption: "Hosangabad",
      title: "Hosangabad",
    },
    {
      src: "src/assets/img/gallery/SeoniOutreach.png",
      caption: "Seoni Outreach",
      title: "Seoni Outreach",
    },
  ];

  return (
    <div className="container" id="innerpage">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center font-weight-bold mt-5 text-uppercase">
            Gallery
          </h3>
          <hr />

          <div className="row mt-4">
            {galleryItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <img
                  src={item.src}
                  className="img-fluid img-thumbnail"
                  data-fancybox="gallery"
                  data-caption={item.caption}
                  alt={item.caption || "Gallery image"}
                />
                {item.title && (
                  <h5 className="text-center pt-2">{item.title}</h5>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
