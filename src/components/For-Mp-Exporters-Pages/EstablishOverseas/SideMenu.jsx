import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      href: "/operating-business",
      text: "Operating a business",
      id: "operating",
    },
    { href: "#tax_system_china", text: "Tax system", id: "tax" },
    {
      href: "#china_legal_enviornment",
      text: "Legal Environment",
      id: "legal",
    },
    {
      href: "#china_foreign_investment",
      text: "Foreign Investment",
      id: "investment",
    },
    {
      href: "#china_business_practices",
      text: "Business Practices",
      id: "practices",
    },
    {
      href: "#china_entry_requirements",
      text: "Entry requirement",
      id: "entry",
    },
    {
      href: "#china_practical_information",
      text: "Practical Information",
      id: "info",
    },
    { href: "#china_living", text: "Living", id: "living" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h4 className="text-center pt-2">Establish Overseas</h4>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <a href="javascript:void(0)">Operating a business</a>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">Tax system</a>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">Legal Environment</a>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">Foreign Investment</a>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">Business Practices</a>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">Entry requirement</a>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">Practical Information</a>
          </li>
          <li className="list-group-item">
            <a  onClick={() => navigate("establishOverseas")}>
              Living
            </a>
          </li>
        </ul>
      </div>
      //{" "}
      {/* <div className="card-body">
        //{" "}
        <ul className="list-group">
          //{" "}
          {menuItems.map((item) => (
            <li key={item.id} className="list-group-item">
              <Link
                to={item.href}
                className="text-decoration-none text-dark"
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    const element = document.getElementById(
                      item.href.substring(1)
                    );
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default SideMenu;
