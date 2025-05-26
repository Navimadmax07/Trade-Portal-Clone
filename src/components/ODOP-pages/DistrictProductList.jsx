import React from "react";

const cityData = {
  AgarMalwa: "agarmalwa",
  Alirajpur: "alirajpur",
  Anuppur: "anuppur",
  AshokNagar: "ashoknagar",
  Balaghat: "balaghat",
  Barwani: "barwani",
  Betul: "betul",
  Bhind: "bhind",
  Bhopal: "bhopal",
  Burhanpur: "burhanpur",
  Chhatarpur: "chhatarpur",
  Chhindwara: "chhindwara",
  Damoh: "damoh",
  Datia: "datia",
  Dewas: "dewas",
  Dhar: "dhar",
  Dindori: "dindori",
  Guna: "guna",
  Gwalior: "gwalior",
  Narmadapuram: "narmadapuram",
  Indore: "indore",
  Jabalpur: "jabalpur",
  Jhabua: "jhabua",
  Katni: "katni",
  Khandwa: "khandwa",
  Khargone: "khargone",
  Mandla: "mandla",
  Mandsaur: "mandsaur",
  Morena: "morena",
  Narsinghpur: "narsinghpur",
  Seoni: "seoni",
  Panna: "panna",
  Raisen: "raisen",
  Rajgarh: "rajgarh",
  Ratlam: "ratlam",
  Rewa: "rewa",
  Sagar: "sagar",
  Satna: "satna",
  Sehore: "sehore",
  Shahdol: "shahdol",
  Shajapur: "shajapur",
  Sheopur: "sheopur",
  Shivpuri: "shivpuri",
  Sidhi: "sidhi",
  Singrauli: "singrauli",
  Tikamgarh: "tikamgarh",
  Ujjain: "ujjain",
  Umaria: "umaria",
  Vidisha: "vidisha",
};

const DistrictProductList = () => {
  return (
    <div className="container">
      <div className="row">
        {Object.entries(cityData).map(([city, slug], index) => (
          <div className="col-md-3 shadow" key={index}>
            <div className="card border-0 bg-transparent" role="article">
              <div className="card-header p-3 text-center">
                <a href={`/${slug}`} target="_blank">
                  <img
                    src={`/assets/product/${city.replace(/\s/g, "")}.png`}
                    alt={city}
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-12 text-center py-2">
                <a href={`/${slug}`} target="_blank">
                  <h3>{city}</h3>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-12 text-center p-5">
          <a
            href="/src/assets/pdf/mpodopseller.pdf"
            target="_blank"
            className="btn btn-primary btn-lg text-white"
          >
            ODOP SELLERS LIST
          </a>
        </div>
      </div>
    </div>
  );
};

export default DistrictProductList;
