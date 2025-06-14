import React, { useState } from "react";
import { Link } from "react-router-dom";

const TradeFinance = () => {
  const [selectedBank, setSelectedBank] = useState("Allahabad Bank");

  return (
    <div className="container" id="innerpage">
      <div className="row">
        <div className="col-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>

            <li className="breadcrumb-item active">Dashboard</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h3 className="pl-3">Trade Finance</h3>
          <p className="pl-3">
            Make the most of your available capital and find solutions to trade
            internationally.
          </p>
          <hr />
        </div>

        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#p1"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Trade Finance
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#p2"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Credit Insurance/Guarantee
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#p3"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Incoterms
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="p1"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="col-md-12 pt-3">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="text-center">Bank with us</h2>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i
                                  className="fa fa-credit-card"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                            <select className="form-control">
                              <option>Select Bank</option>
                              <option value="" selected>
                                Allahbad Bank
                              </option>
                            </select>
                          </div>
                          <div className="form-group text-center">
                            <input
                              type="submit"
                              className="btn btn-danger"
                              value="Find Now"
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-center pt-3">
                        <a
                          className="btn btn-primary text-white"
                          href="/CreditRating"
                        >
                          Credit Rating
                        </a>
                        <a className="btn btn-primary text-white" >
                          Master Circular
                        </a>
                        <a className="btn btn-primary text-white" >
                          AD Bank
                        </a>
                      </div>

                      <div className="col-md-12">
                        <div className="card">
                          <div className="card-header p-4">
                            <h4>ALLAHABAD BANK </h4>
                            <p>
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              2, NETAJI SUBHASH ROAD, KOLKATA 700 001{" "}
                            </p>
                            <p>
                              <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                              www.allahabadbank.in
                              <i className="fa fa-envelope"></i>{" "}
                              customercare@allahabadbank.in{" "}
                              <i className="fa fa-phone"></i> 022-22670544
                            </p>
                            <p>
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                              ></i>{" "}
                              <a
                                href="https://www.andhrabank.in/english/InterestRate.aspx"
                                target="_blank"
                              >
                                MCLR: https://www.allahabadbank.in/Dep_rate.aspx
                              </a>
                            </p>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-4">
                                <h4>ADVANCE PAYMENT AGAINST IMPORTS</h4>
                                <p>
                                  <b>Puspose:</b> TO FACILITATE IMPORTS OF
                                  GOODS.
                                  <br />
                                  <b>Currency:</b> USD, EUR, GBP, JPY, HKD, CAD,
                                  AUD, CHF, <br />{" "}
                                  <b> Interest Rate / Commission / Fees:</b>AS
                                  PER CIRCULARISED INSTRUCTIONS AVAILABLE ON OUR
                                  BANK WEBSITE : www.allahabadbank.in/ AS PER
                                  TERMS OF SANCTION OF CREDIT FACILITY <br />{" "}
                                  <b>Any Other Condition: </b> NIL
                                </p>
                              </div>
                              <div className="col-md-4">
                                <h4>IMPORT BILLS ON COLLECTION</h4>
                                <p>
                                  <b>Puspose:</b> TO FACILITATE IMPORTS OF GOODS
                                  AND SETTLEMENT OF PAYMENT. <br />
                                  <b>Currency:</b> USD, EUR, GBP, JPY, HKD, CAD,
                                  AUD, CHF <br />{" "}
                                  <b>Interest Rate / Commission / Fees:</b>AS
                                  PER CIRCULARISED INSTRUCTIONS AVAILABLE ON OUR
                                  BANK WEBSITE : www.allahabadbank.in/ AS PER
                                  TERMS OF SANCTION OF CREDIT FACILITY <br />{" "}
                                  <b>Any Other Condition: </b> NIL
                                </p>
                              </div>
                              <div className="col-md-4">
                                <h4>IMPORT LC</h4>
                                <p>
                                  <b>Puspose:</b>TO FACILITATE IMPORTS OF GOODS
                                  AND SETTLEMENT OF PAYMENT.
                                  <br />
                                  <b>Currency:</b> USD, EUR, GBP, JPY, HKD, CAD,
                                  AUD, CHF <br />{" "}
                                  <b>Interest Rate / Commission / Fees:</b>AS
                                  PER CIRCULARISED INSTRUCTIONS AVAILABLE ON OUR
                                  BANK WEBSITE : www.allahabadbank.in/ AS PER
                                  TERMS OF SANCTION OF CREDIT FACILITY <br />{" "}
                                  <b>Any Other Condition: </b> NIL
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="p2"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row pt-3">
                    <div className="col-md-12">
                      <div className="card">
                        <div className="card-body">
                          <form>
                            <div className="input-group mb-3 input-group-sm">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i
                                    className="fa fa-credit-card"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <select className="form-control">
                                <option>ECGC LTD.</option>
                                <option value="" selected>
                                  ECGC LTD
                                </option>
                                <option value="" selected>
                                  CGTMSE
                                </option>
                              </select>
                            </div>
                            <div className="form-group text-center">
                              <input
                                type="submit"
                                className="btn btn-danger"
                                value="Find Now"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="col-md-12">
                        <div className="card">
                          <div className="card-header p-4">
                            <h4>ECGC LTD. </h4>
                            <p>
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              REGISTERED OFFICE, ECGC Limited, Express Towers,
                              10th Floor, Nariman Point, Mumbai - 400 021{" "}
                            </p>
                            <p>
                              <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                              www.ecgc.in <i className="fa fa-envelope"></i>{" "}
                              webmaster@ecgc.in <i className="fa fa-phone"></i> 022
                              6659 0500 / 0510
                            </p>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-4">
                                <h4>
                                  Shipment Comprehensive Risks (SCR) Policy
                                </h4>
                                <p>
                                  <b>Puspose:</b> An exporter whose anticipated
                                  annual export turnover is more than INR 500
                                  lakhs is eligible for this Policy.
                                  <br />
                                  <b>Percentage Of Cover: </b> 90% <br />{" "}
                                  <b>Period Of Policy: </b>12 months
                                </p>
                              </div>
                              <div className="col-md-4">
                                <h4>Exports Turnover Policy (ETP)</h4>
                                <p>
                                  <b>Puspose:</b> Turnover Policy is for the
                                  benefit of large exporters who contribute not
                                  less than INR 10 lakhs per annum towards
                                  premium based on projection of the export
                                  turnover of the policy holder for a year.
                                  <br />
                                  <b>Percentage Of Cover: </b> 90% <br />{" "}
                                  <b> Period Of Policy: </b>12 months
                                </p>
                              </div>
                              <div className="col-md-4">
                                <h4>Specific Shipment Policy (SSP)</h4>
                                <p>
                                  <b>Puspose:</b>The Specific Buyers Policy
                                  provides cover for shipments made to a
                                  particular buyer or on L/C opening bank for a
                                  set of buyers. <br />
                                  <b>Percentage Of Cover: </b> 90%
                                  <br /> <b> Period Of Policy: </b>12 months
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="p3"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="atlas">
                        {/* <!-- permet d'appliquer les styles sur v5 --> */}

                        <h2 className="mt-3">What is an Incoterm®?</h2>
                        <dl className="informations">
                          <dt>The Incoterms® 2020</dt>
                          <dd>
                            Before considering shipping merchandise
                            internationally, an important question must be
                            answered: At which point are the risks and charges
                            transferred to the buyer?
                            <br />
                            <br />
                            In 1936, for the first time, the International
                            Chamber of Commerce (ICC), published under the name
                            of Incoterms® 1936 (INternational COmmercial TERMS),{" "}
                            <strong>
                              a series of international rules
                            </strong>{" "}
                            that answers this question.
                            <br />
                            <br />
                            In order to adapt these rules into the most recent
                            international trade practices, many amendments have
                            been added to the rules of 1936 accomplishing what
                            today is called "Incoterms® 2020" which has replaced
                            Incoterms® 2010.
                            <p>
                              The main changes made by Incoterms® 2020 to
                              Incoterms® 2010 concern the following points:
                            </p>
                            <ul>
                              <li>
                                Evolution of the Incoterm® FCA (bills of lading
                                with an on-board notation)
                              </li>
                              <li>
                                Appearance of a new Incoterm®: DPU (Delivered at
                                Place Unloaded) to replace the Incoterm® DAT
                              </li>
                              <li>
                                Differentiated levels of insurance coverage
                                between CIF and CIP
                              </li>
                              <li>
                                Organisation of transport with the seller's or
                                buyer's own means of transport in FCA, DAP, DPU
                                and DDP
                              </li>
                            </ul>
                          </dd>
                        </dl>
                        <dl className="informations">
                          <dt>Managing Risk Control</dt>
                          <dd>
                            By making references in their contracts, using one
                            of the Incoterms® of the ICC, the buyer and the
                            seller reduce the uncertain risks inherent in all
                            international transactions: commercial practices and
                            different interpretations from one country to the
                            other. They specify their own respective
                            responsibilities and obligations during the process
                            of delivering the merchandise and the mandatory
                            documentation that the vendor must supply. Also the
                            Incoterms®, even if they are optional, they are
                            recognized as standardized clauses which will
                            prevent any litigation by clearly distributing
                            between the buyer and the vendor: obligations,
                            risks, costs. In addition, they{" "}
                            <strong>
                              dissociate the question of transferring risks from
                              those of transferring ownership
                            </strong>
                            , this last issue remains under the control of the{" "}
                            <a href="#law">law that rules the contract</a>.
                            Concretely, Incoterms® will clarify the following
                            points:
                            <br />
                            <ol>
                              <li>
                                Place the critical point of transferring the
                                risks from the vendor to the buyer during the
                                process of shipping the goods (loss, damage or
                                theft of the merchandise) allowing the one who
                                is liable for these risks to make his own
                                dispositions, notably in terms of insurance;
                              </li>
                              <li>
                                Indicate which one, either the seller or the
                                buyer, must underwrite the shipping contract;
                              </li>
                              <li>
                                Distribute among the two parties the logistic
                                and administrative charges during the different
                                stages of the process;
                              </li>
                              <li>
                                Specify who takes care of the packaging,
                                labeling, handling operations, loading and
                                unloading of goods or stuffing and stripping
                                containers as well as inspection procedures;
                              </li>
                              <li>
                                Set up the individual obligations of each party
                                in the process of accomplishing export and/or
                                import formalities, legal regulations and duty
                                taxes as well as providing all the documents
                                required. There are <strong>11</strong>{" "}
                                Incoterms® being kept by the ICC, (original
                                English acronym made up of three letters, ex:
                                FOB) plus one specific location ex: "FOB Le
                                Havre".
                              </li>
                            </ol>
                          </dd>
                        </dl>
                        <p className="retour">
                          <a name="exhaustive" id="exhaustive"></a>
                        </p>
                        <h2>How to use the Incoterms® 2020?</h2>
                        <dl className="informations">
                          <dt>Clarify this concept in the contract of sale</dt>
                          <dd>
                            In order to use Incoterms®, this must be clearly
                            stated in the contract of sale by indicating: the
                            Incoterms® rule chosen, the port, designated place
                            or location, followed by "Incoterms® 2020".
                            <br />
                            Example: CIF Hong Kong Incoterms® 2020
                          </dd>
                        </dl>
                        <dl className="informations">
                          <dt>Choose the appropriate Incoterms® rule</dt>
                          <dd>
                            The choice of the Incoterm® is an integral part of a
                            commercial transaction. It has to be done in
                            function with the organizational capacities of the
                            enterprise, the type of transportation used, the
                            level of service that the enterprise wishes to
                            provide to the client or the resources of its
                            supplier, or it could be in function to the common
                            practices of the market, or the practices used by
                            the competitors, etc.
                            <br />
                            <br />
                            The Incoterm® selected must also be well-adapted to
                            the type of goods that will be shipped and the type
                            of transportation that will be used.
                          </dd>
                        </dl>
                        <dl className="informations">
                          <dt>Specify the place and port with precision</dt>
                          <dd>
                            For an optimal application of Incoterms®, the
                            contract's parties are required to assign a place or
                            a port with maximum exactitude: ex FCA 25 rue Saint
                            Charles, Bordeaux, France, Incoterms® 2020.
                            <br />
                            <br />
                            It must be stressed in this part that for certain
                            Incoterms® such as CPT, CIP, CFR, CIF, the place
                            designated is not the same as the place of delivery:
                            it designates the place of destination paid for. In
                            order to specify the final destination of the goods,
                            it is advised to mention the specific address in
                            order to avoid any ambiguity.
                            <br />
                            <br />
                            The same applies for the "out of the factory": Is it
                            a factory in France or a factory established abroad
                            by a French company?
                          </dd>
                        </dl>
                        <dl className="informations">
                          <dt>Other precautions to be taken</dt>
                          <dd>
                            Some precautions must be taken when using
                            Incoterms®, such as:
                            <ul>
                              <li>
                                A good knowledge of the meaning of each
                                Incoterm® and its acronym;
                              </li>
                              <li>
                                The usage of the variants of Incoterms® with
                                exactitude in order to prevent confusions that
                                could result from a misinterpretation (ex: FOB
                                USA).
                              </li>
                            </ul>
                            The Incoterms® are standards accepted worldwide. In
                            that capacity, like all standards (industry,
                            quality, pollution), their names do not cause any
                            divergence. Use only the standardized abbreviations.
                            Any other code will be prohibited! As any standard,
                            they are an explicit reference. As the horses DIN or
                            the ISO 9002, the three letters of the Incoterm must
                            be followed by the specific names of the designated
                            places and the mention "Incoterm", see "Incoterm
                            ICC".
                            <br />
                            <br />
                            Do not hesitate to consult an international law
                            firm.
                            <br />
                            <br />
                            Today's tendency in international business is based
                            on the fact that the buyer is released from all
                            logistics concerns. This valorizes the position of
                            the exporter. It is essential to negotiate the terms
                            of the contract for the first shipment and, most of
                            all, in the case of dealing with countries at risk,
                            obtaining a document of credit as a form of payment
                            will be advised.
                          </dd>
                        </dl>
                        <p className="retour">
                          <a name="resume" id="resume"></a>
                        </p>
                        <h2>Getting to Know Incoterms® 2020</h2>
                        <h3>
                          Incoterms® 2020 applicable to all modes of transport
                        </h3>
                        <table className="table">
                          <thead>
                            <tr>
                              <td>Code</td>
                              <td className="double">Name in English</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a href="#EXW">EXW</a>
                              </td>
                              <td>EX Works</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#FCA">FCA</a>
                                <br />
                                <em>
                                  *Possibility to add the on-board notation.
                                </em>
                              </td>
                              <td>Free CArrier</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#CPT">CPT</a>
                              </td>
                              <td>Carriage Paid To</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#CIP">CIP</a>
                                <br />
                                <em>
                                  *Integration of Institute Cargo Clause A of
                                  the Institute Cargo Clauses, including "All
                                  Risks" insurance coverage.
                                </em>
                              </td>
                              <td>Carriage and Insurance Paid to</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#DAP">DAP</a>
                              </td>
                              <td>Delivered at Place</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#DPU">DPU*</a>
                              </td>
                              <td>Delivered at Place Unloaded</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#DDP">DDP</a>
                              </td>
                              <td>Delivered Duty Paid</td>
                            </tr>
                          </tbody>
                        </table>
                        <p>
                          <em>* New for Incoterms® 2020</em>
                        </p>
                        <h3>
                          Incoterms® 2020 applicable to maritime and inland
                          waterway transport
                        </h3>
                        <table>
                          <thead>
                            <tr>
                              <td>Code</td>
                              <td className="double">Name in English</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a href="#FAS">FAS</a>
                              </td>
                              <td>Free AlongSide ship</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#FOB">FOB</a>
                              </td>
                              <td>Free On Board</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#CFR">CFR</a>
                              </td>
                              <td>Cost and Freight</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="#CIF">CIF</a>
                                <br />
                                <em>
                                  *Incorporation of Institute Cargo Clause C,
                                  including "Minimum" insurance coverage.
                                </em>
                              </td>
                              <td>Cost, Insurance, Freight</td>
                            </tr>
                          </tbody>
                        </table>
                        <p>
                          <em>* New for Incoterms® 2020</em>
                        </p>
                        <div className="marge-table"> </div>
                        <p className="retour">
                          <a href="#haut">
                            <img
                              src="/ressources/images/ancre.gif"
                              alt="Return to top"
                              title="Return to top"
                            />
                          </a>
                        </p>
                        <h3>
                          Sale on Departure, Sale on Arrival: a fundamental
                          difference
                        </h3>
                        <dl className="informations">
                          <dt>Sale on Departure</dt>
                          <dd>
                            A sale on departure means that the merchandise will
                            be shipped at the risk and hazard of{" "}
                            <strong>the buyer</strong>, which means:
                            <br />
                            <br />
                            <ul>
                              <li>
                                {" "}
                                from the moment that the goods are placed at
                                disposal at the vendor's premises (EXW) ;
                              </li>
                              <li>
                                {" "}
                                from the moment that the goods are handed to the
                                carrier in order to be shipped (FCA, FAS, FOB,
                                CFR, CIF, CPT et CIP) ;
                              </li>
                            </ul>
                            <br />
                            The Incoterms® for a sale on departure assign to the
                            buyer (in a more or less large amount) the costs and
                            the risks linked to the shipping of the merchandise.
                          </dd>
                        </dl>
                        <dl className="informations">
                          <dt>Sale on Arrival</dt>
                          <dd>
                            A sale on arrival means that the merchandise will be
                            shipped at the risk and hazard of the seller until
                            it reaches the designated destination point or port.
                            Three Incoterms® are provided:
                            <br />
                            <ul>
                              <li>
                                {" "}
                                until the end of its maritime transportation and
                                its disembarkation (DAP);
                              </li>
                              <li> until its destination point (DPU, DDP).</li>
                            </ul>
                          </dd>
                        </dl>
                        <p className="retour">
                          <a href="#haut">
                            <img
                              src="/ressources/images/ancre.gif"
                              alt="Return to top"
                              title="Return to top"
                            />
                          </a>
                        </p>
                        <a name="logistics" id="logistics"></a>
                        <h2>Who bears the various costs and risks?</h2>
                        <h3>
                          Distribution of costs between seller and buyer
                          according to the Incoterm® negotiated in the contract
                        </h3>
                        <table className="table">
                          <thead>
                            <tr>
                              <td rowspan="2"></td>
                              <td colspan="7">
                                Incoterms® for any mode or modes of transport
                              </td>
                              <td colspan="4">
                                Incoterms® for sea and inland waterway transport
                              </td>
                            </tr>
                            <tr>
                              <td className="simple">EXW</td>
                              <td className="simple">FCB</td>
                              <td className="simple">CPT</td>
                              <td className="simple">CIP</td>
                              <td className="simple">DAP</td>
                              <td className="simple">DPU</td>
                              <td className="simple">DDP</td>
                              <td className="simple">FAS</td>
                              <td className="simple">FOB</td>
                              <td className="simple">CFR</td>
                              <td className="simple">CIF</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="agauche gras">Packaging</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S**</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">
                                Loading from warehouse
                              </td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S*</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S**</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">Pre-carriage</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S***</td>
                              <td className="simple">S</td>
                              <td className="simple">S*</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S**</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">
                                Export customs clearance
                              </td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S*</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S**</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">
                                Handling at departure
                              </td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="simple">S*</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S**</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">Main transport</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="simple">S*</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="simple">S**</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">Handling on arrival</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="simple">S</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">
                                Import customs clearance
                              </td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">Post-carriage</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="simple">S</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                            </tr>
                            <tr>
                              <td className="agauche gras">
                                Unloading into warehouse
                              </td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                              <td className="incoterm-acheteur">B</td>
                            </tr>
                          </tbody>
                          <table className="table"></table>
                          <p className="sources">
                            * "All-risk" insurance for the benefit of the buyer
                            <br />
                            ** "Minimum" insurance for the benefit of the buyer
                            <br />
                            *** According to agreed location. Optional bill of
                            lading.
                          </p>
                          <p>
                            <strong>S :</strong> Costs to be borne by the seller
                            <br />
                            <strong>B :</strong> Costs to be borne by the buyer
                          </p>
                          <h3>
                            Distribution of risks between seller and buyer
                            according to the Incoterm® negotiated in the
                            contract
                          </h3>
                          <table className="table">
                            <thead>
                              <tr>
                                <td rowspan="2"></td>
                                <td colspan="7">
                                  Incoterms® for any mode or modes of transport
                                </td>
                                <td colspan="4">
                                  Incoterms® for sea and inland waterway
                                  transport
                                </td>
                              </tr>
                              <tr>
                                <td className="simple">EXW</td>
                                <td className="simple">FCB</td>
                                <td className="simple">CPT</td>
                                <td className="simple">CIP</td>
                                <td className="simple">DAP</td>
                                <td className="simple">DPU</td>
                                <td className="simple">DDP</td>
                                <td className="simple">FAS</td>
                                <td className="simple">FOB</td>
                                <td className="simple">CFR</td>
                                <td className="simple">CIF</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading from warehouse
                                </td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S*</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Export customs clearance
                                </td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Handling at departure
                                </td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Main transport</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Handling on arrival
                                </td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Import customs clearance
                                </td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="simple">S</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading into warehouse
                                </td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                                <td className="incoterm-acheteur">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="sources">* According to agreed location</p>
                          <p>
                            <strong>S :</strong> Risks to be borne by the seller
                            <br />
                            <strong>B :</strong> Risks to be borne by the buyer
                          </p>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <a name="us" id="us"></a>
                          <h2>What do the different Incoterms® mean?</h2>
                          <a name="EXW" id="EXW"></a>
                          <h3>EXW (Ex Works)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              The only responsibility of the seller is to
                              prepare the merchandise for the buyer, at his own
                              premises, suitably packed for export shipping
                              purposes (in general, the price includes loading
                              the merchandise in the pallet).
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              The buyer is responsible for all the charges and
                              risks involved in the shipment of the merchandise
                              from the moment it leaves the seller's warehouse
                              until it reaches its destination place.
                              <br />
                              <br />
                              The term EXW represents a minimum obligation for
                              the seller. However, if the parties agree that the
                              vendor insures the loading of the merchandise at
                              the point of departure "EXW Loaded", and make the
                              vendor responsible of these risks and charges,
                              they have to precise this issue very clearly on an
                              explicit clause included in the sales contract
                              (ex: EXW Paris loaded, ICC 2020).
                              <br />
                              <br />
                              The seller is expected to provide for the buyer,
                              at his request and at his charge and risks, all
                              the assistance required to obtain an export
                              license, insurance and provide the buyer with all
                              the useful information in his possession which
                              will allow the buyer to insure the export of his
                              merchandise in full security.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Variant</dt>
                            <dd>
                              « EXW Loaded ». <br />
                              <br />
                              The revised version of Incoterms® 2000 introduced
                              this concept of "EXW Loaded" which recognizes a
                              frequently used practice: the seller takes care
                              and responsibility of loading the merchandise into
                              the buyer's vehicle.
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications EXW</td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <a name="FCA" id="FCA"></a>
                          <h3>FCA (Free Carrier)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              If the delivery takes place at the seller’s
                              premises, it is the seller, who handles the
                              loading of the suitably packaged goods into the
                              vehicle provided by the buyer, (specify “FCA
                              seller’s premises”). Export customs clearance is
                              the responsibility of the seller.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              The buyer has chosen the type of transportation
                              and the carrier with whom he has signed a
                              transportation contract and pays for the main
                              transportation (if applicable). The transfer of
                              charges and risks takes place at the moment when
                              the carrier picks up the merchandise. The parties
                              must agree upon naming a place where to hand over
                              the merchandise (the carrier’s terminal or the
                              vendor’s premises).
                              <br />
                              <br />
                              The seller must, should the case arise, provide
                              for the buyer, at the right time, all the
                              assistance needed to obtain all the documents and
                              information regarding the security requirements
                              for the export and/or import of the merchandise
                              and/or for its transportation to its final
                              destination. The cost of the documents furnished
                              and/or the assistance given are costs and risks
                              paid by the buyer.
                              <br />
                              The Incoterms® 2020 rules explicitly allow for the
                              necessary transport to be performed under a
                              contract of carriage or to be arranged by own
                              means (without the involvement of a carrier acting
                              as a third party).
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Variant</dt>
                            <dd>
                              "FCA seller's premises".
                              <br />
                              This Incoterm® was officially added to the revised
                              version of Incoterms® 2000: it is the
                              responsibility of the seller to load the
                              merchandise.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Geographical precision</dt>
                            <dd>
                              More than in any of the other Incoterms®, in FCA,
                              the "named place" agreed upon must be precise and
                              indicated with care. FCA (Le Havre) is not enough
                              if the buyer is located in Le Havre. Is it FCA
                              (warehouse Le Havre) or FCA (in-transit bulking
                              warehouse X Le Havre) or even FCA (dock No. X at
                              the port of Le Havre)?
                              <br />
                              <br />
                              If the delivery is going to be done at a place
                              other than the vendor's premises, for example:
                              handing it over at a transportation terminal
                              -truck, rail, air, maritime - the vendor will be
                              in charge of transporting the merchandise up to
                              this named terminal but he will not be responsible
                              for unloading the vehicle. The unloading will be
                              handled by the one in charge of receiving the
                              merchandise at the transportation terminal. Prefer
                              FCA instead of FOB if the transportation is done
                              in containers or by roll-on roll-off ship.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>
                              Bill of lading with an on-board notation in FCA
                              sales
                            </dt>
                            <dd>
                              When the goods are sold FCA, sellers or buyers (or
                              their bank if a letter of credit is involved) may
                              wish to obtain a bill of lading with an on-board
                              notation.
                              <br />
                              However, delivery under the Incoterm® FCA is
                              effective prior to the loading of the goods on
                              board a vessel. It is by no means certain that the
                              seller can obtain an on-board bill of lading from
                              the carrier. According to the transport contract,
                              this carrier is only required and entitled to
                              produce a bill of lading when the goods are
                              properly loaded.
                              <br />
                              To remedy this situation, the Incoterms® 2020 have
                              provided an additional option. The buyer and
                              seller can agree that the buyer should instruct
                              its carrier to provide the seller with the bill of
                              lading with the on-board notation after the goods
                              have been loaded, and the seller is then obliged
                              to deposit this bill of lading with the buyer,
                              typically via banks. The seller The seller will
                              not be liable to the buyer in respect of the terms
                              of the contract of carriage.
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications FCA</td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <a name="FAS" id="FAS"></a>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <h3>FAS (Free Alongside Ship)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              The obligations of the seller are henceforth
                              fulfilled when the merchandise is placed,{" "}
                              <strong>after customs clearance</strong>,
                              alongside the ship at the dock or at the lading of
                              the designated port of shipment.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              From this moment on, the buyer is responsible for
                              all charges and risks of loss or damages, from the
                              moment that the merchandise is delivered alongside
                              the ship, especially in the case of a ship's
                              schedule delay or the cancellation of a port of
                              call. The buyer designates the carrier, arranges
                              the transportation contract and pays for the
                              freight.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Obligations of place and moment</dt>
                            <dd>
                              The seller does not deliver FAS if the vessel is
                              not at the dock. It is a responsibility of time
                              and moment (From Marseilles to Anvers, where every
                              company offers at least one weekly departure,
                              bringing the delivery eight days before the date
                              of the departure of the ship chosen by the buyer
                              is too premature).
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>License acquisition</dt>
                            <dd>
                              The acquisition of an export license or any other
                              official authorization is at the charge and risk
                              of the seller. In the same way, the buyer is
                              responsible for the import license. The buyer must
                              provide the vendor with all the information
                              regarding the name of the vessel, the loading
                              place and the time chosen to deliver the
                              merchandise within the period accorded.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Documents fees</dt>
                            <dd>
                              The seller must, should the case arise, provide
                              for the buyer, at the right time, all the
                              assistance needed to obtain all the documents and
                              information regarding the security requirements
                              for the export and/or import of the merchandise
                              and/or for its transportation to its final
                              destination. The cost of the documents furnished
                              and/or the assistance given are costs and risks
                              paid by the buyer.
                            </dd>
                          </dl>
                          <table>
                            <thead>
                              <tr>
                                <td>Specifications FAS </td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <a name="FOB" id="FOB"></a>
                          <h3>FOB (Free on Board)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              He has to deliver the merchandise at the
                              designated loading port, on board of the vessel
                              chosen by the buyer and fulfill all the
                              formalities of export customs clearance, if there
                              are any.
                              <br />
                              <br />
                              Under a contract type FOB, the seller fulfills his
                              delivery obligation when the merchandise is on
                              board of the vessel at the designated loading
                              port, or in the case of successive sales, the
                              vendor obtains the merchandise and delivers it, as
                              well, in order to have it all transported up to
                              the designated destination place indicated in the
                              sales contract.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              He selects the vessel, pays the maritime freight,
                              the insurance and he takes care of the formalities
                              at the arrival. He is also responsible for all the
                              charges and risks of loss and damage that could
                              arise to the merchandise from the moment it was
                              delivered.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Variant</dt>
                            <dd>
                              For information, the "ARRANGING FOB" is the term
                              used by the freight brokers to indicate that the
                              operations that take place prior to placing the
                              merchandise aboard have been done and
                              accomplished, as well as the export customs
                              clearance operations, if needed. All these
                              operations represent an extra cost, to be paid by
                              the seller, which is sometimes called "fee of
                              placing into FOB".
                              <br />
                              <br />
                              The "FOB STOWED" and/or "FOB STOWED and TRIMMED"
                              are variations. The seller is responsible for the
                              total charges incurred by the merchandise at the
                              loading port. However, it has to be stipulated in
                              the contract at which point the transfer of risks
                              takes place.
                              <br />
                              <br />
                              The seller must, should the case arise, provide
                              for the buyer, at the right time, all the
                              assistance needed to obtain all the documents and
                              information regarding the security requirements
                              for the export and/or import of the merchandise
                              and/or for its transportation to its final
                              destination. The cost of the documents furnished
                              and/or the assistance given are costs and risks
                              paid by the buyer.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>The American FOB</dt>
                            <dd>
                              The American FOB is different. In the United
                              States, the Incoterm® FOB (Free on Board) does not
                              refer to a shipment in a boat or to a port but to
                              an American destination, at the border. In the
                              United States there could be, mainly, four types
                              of FOB:
                              <ul>
                                <li>
                                  <strong>FOB/Point of departure</strong>: The
                                  buyer pays for everything;
                                </li>
                                <li>
                                  <strong>FOB/Border</strong>: The manufacturer
                                  pays for the charges up to the border without
                                  clearing the merchandise through customs;
                                </li>
                                <li>
                                  <strong>FOB/Point of Sale</strong>: The
                                  merchandise arrives to a designated American
                                  city. It is then, the supplier, who pays for
                                  customs clearance. The chosen free port must
                                  always be marked, in general, the city;
                                </li>
                                <li>
                                  <strong>
                                    FOB/Destination Customs Clearance
                                  </strong>
                                  : In this case, the manufacturer takes care of
                                  everything, without the cooperation of the
                                  buyer. It is also called DDP/Delivery duty
                                  paid. Most of the sales into the United States
                                  are done on this basis.
                                </li>
                              </ul>
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications FOB </td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <a name="CFR" id="CFR"></a>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <h3>CFR (Cost and Freight)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              He chooses the transportation, contracts and pays
                              for the freight up to the named port of
                              destination; the unloading of the merchandise is
                              not included. The loading of the merchandise after
                              customs clearance into the vessel is his
                              responsibility as well as the shipping
                              formalities. However, the transfer of risk is the
                              same as in FOB.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              He is responsible for the risk of transportation
                              from the moment that the merchandise is delivered
                              alongside the ship at the loading port; he
                              receives the carrier and picks up the merchandise
                              delivered at the designated destination port.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Documents fees</dt>
                            <dd>
                              The seller must, at his own expense, furnish the
                              buyer with a customary transportation document to
                              be used until the merchandise reaches the
                              designated port of destination, covering the
                              contractual merchandise which serves him as a
                              guarantee (ex: claims of merchandise to the
                              carrier, sale of merchandise while in transit,
                              etc.). He also has to provide all the information
                              required in order to take proper measures in
                              receiving the merchandise.
                              <br />
                              The information and documents related to the
                              security that the buyer needs in order to export
                              and/or import and/or for the transportation of the
                              merchandise until its final destination must be
                              furnished by the seller, following the buyer's
                              request, and at his own expense and risks.
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications CFR</td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <a name="CIF" id="CIF"></a>
                          <h3>CIF (Cost Insurance and Freight)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              It is a term identical to CFR, but with the
                              supplementary obligation for the seller to provide
                              maritime insurance against the risk of loss or
                              damage caused to the merchandise. The vendor pays
                              the insurance premium. Under the CIF rule of
                              Incoterms® 2020, the seller is required to obtain
                              limited insurance coverage in accordance with
                              Clause C of the Institute Cargo Clauses or any
                              other similar set of clauses. However, the parties
                              are free to agree on a higher level of cover.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              He is responsible for the cost and risk of
                              transportation from the moment that the
                              merchandise is delivered alongside the ship at the
                              loading port. He receives and takes the
                              merchandise from the carrier at the named
                              destination port.
                              <br />
                              <br />
                              The buyers appreciate this Incoterm because they
                              are released from logistics formalities.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Documents fees</dt>
                            <dd>
                              The information and documents related to the
                              security that the buyer needs in order to export
                              and/or import and/or for the transportation of the
                              merchandise up to its final destination must be
                              furnished by the seller following the buyer's
                              request and at his own expense and risks.
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications CIF </td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td>S/B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <a name="CPT" id="CPT"></a>
                          <h3>CPT (Carriage Paid To)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              The seller controls the logistic chain. After
                              having taken care of export customs clearance, he
                              chooses the cargo carrier and pays the charges up
                              to the designated place.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              The risk of damage or loss is borne by the buyer
                              from the moment that the merchandise is loaded
                              into the first carrier. After that, the buyer
                              takes care of the import customs clearance and the
                              unloading expenses.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Unloading fees</dt>
                            <dd>
                              It is important to clarify the concept of who is
                              responsible for the unloading charges into the
                              frame of the transportation contract. Normally,
                              the buyer must be responsible for these charges
                              unless they are included in the transportation
                              fee. In this case, they are charged to the vendor.
                              The vendor must clarify this question with the
                              buyer in order to prevent finding himself in a
                              situation where the receiver refuses to pay and
                              the cargo carrier turns back to the provider (the
                              seller) to demand his part of the payment for the
                              unloading charges as well as the eventual fees for
                              the vehicle's immobilization while waiting for the
                              problem to be solved.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Geographical precisions</dt>
                            <dd>
                              Under the rule CPT, there are transfers of risks
                              and charges in different places. It is recommended
                              that the parties involved specify clearly in their
                              contract the delivery place where the risk is
                              transferred to the buyer and the named destination
                              up to which the seller is required to arrange a
                              transportation contract.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Documents fees</dt>
                            <dd>
                              The information and documents related to security,
                              that the buyer needs for the export/import of
                              merchandise and/or for the transportation up to
                              its final destination must be provided by the
                              seller at the request of the buyer and at its own
                              charge and risks.
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications CPT </td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <a name="CIP" id="CIP"></a>
                          <h3>CIP (Carriage and Insurance Paid To)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              CIP is identical to CPT, but the seller must
                              supply, in additional, a transportation insurance.
                              The seller settles the transportation contract,
                              pays the freight and the insurance premium. "Under
                              the CIP rule of Incoterms® 2020, the seller is
                              required to obtain limited insurance coverage in
                              accordance with Clause A of the Institute Cargo
                              Clauses or any other similar set of clauses.
                              However, the parties are free to agree on a lower
                              level of cover.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              The risk of damage or loss is borne by the buyer
                              from the moment that the merchandise is loaded
                              into the first carrier. After that, the buyer
                              takes care of the import customs clearance and the
                              unloading expenses.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Insurance Coverage</dt>
                            <dd>
                              According to the term CIP, the seller is not
                              obliged to apply for insurance but for a minimum
                              coverage. If the buyer wishes to protect himself
                              by a superior coverage, under these circumstances,
                              he would need to obtain the agreement of the
                              seller or apply on his own for a complementary
                              insurance.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Documents fees</dt>
                            <dd>
                              The information and documents related to security,
                              that the buyer needs for the export/import of
                              merchandise and/or for the transportation up to
                              its final destination must be provided by the
                              seller at the request of the buyer and at his own
                              charge and risks.
                            </dd>
                          </dl>
                          <table>
                            <thead>
                              <tr>
                                <td>Specifications CIP </td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <a name="DAP" id="DAP"></a>
                          <h3>DAP (Delivered at place)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              The seller has to deliver the merchandise and
                              place it at the buyer's disposal into the inland
                              freight transportation carrier ready to be
                              unloaded at the designated place of destination.
                              He has to take care of the export customs
                              clearance; however, he is under no obligation of
                              performing the import customs clearance. The
                              seller must bear a contract for the transportation
                              of the merchandise up to the named destination and
                              unload it from the transportation carrier at its
                              arrival. The seller has no obligation towards the
                              buyer of obtaining an insurance contract.
                              Nevertheless, he must provide the buyer, at his
                              own expense, the documents that will allow him to
                              pick up the merchandise delivered. The Incoterms®
                              2020 rules explicitly allow for the necessary
                              transport to be performed under a contract of
                              carriage or to be arranged by own means (without
                              the involvement of a carrier acting as a third
                              party).
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              He has to pay the price of the merchandise as
                              stipulated in the sales contract and he has to
                              pick up the merchandise once it has been
                              delivered.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Security</dt>
                            <dd>
                              The buyer must request from the seller to furnish
                              him with all the information required in relation
                              to the security which he will need for the export,
                              import and transportation of the merchandise until
                              its final destination. This new rule replaces the
                              DDU. It is advised to use it only in the countries
                              where the means of transportation to a destination
                              are under good control.
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications DAP</td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <a name="DPU" id="DPU"></a>
                          <h3>DPU (Delivered at Place Unloaded)</h3>
                          <p>
                            The Incoterm® DPU replaces DAT (Delivered At
                            Terminal) to underline the fact that the place of
                            destination is not necessarily a "terminal".
                            However, if the place of destination is not a
                            terminal, the seller must ensure that he is able to
                            unload the goods at the place where he intends to
                            deliver them.
                          </p>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              He must deliver the goods by making them available
                              to the buyer at the agreed place of destination,
                              on the agreed date or within the agreed period.
                              The seller must conclude a contract for the
                              transport of goods to that place at his own
                              expense and unload the goods from the arriving
                              means of transport. The seller is not obliged
                              vis-à-vis the buyer to conclude an insurance
                              contract. However, he must provide the buyer, at
                              his own expense, with the document enabling him to
                              take delivery of the goods. The Incoterm® DPU
                              obliges the seller to clear the goods for export.
                              However, he has no obligation to carry out customs
                              clearance on import.
                              <br />
                              The Incoterms® 2020 rules explicitly allow for the
                              necessary transport to be performed under a
                              contract of carriage or to be arranged by own
                              means (without the involvement of a carrier acting
                              as a third party).
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              He must take delivery of the goods as soon as they
                              have been delivered and pay the price as
                              stipulated in the sales contract. In addition, the
                              buyer must advise the seller of the need to
                              provide him with any safety information he may
                              require for the export, import and transport of
                              the goods to their final destination. This
                              Incoterms® rule was created specifically for
                              containerized transport. It is also suitable for
                              conventional maritime transport when the seller
                              wants to retain the risks of unloading the ship at
                              the port of destination. In this case, it is
                              advisable to specify the place of availability
                              (quay, under hoist, etc.).
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications DPU</td>
                                <td>Costs</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Export customs clearance
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Main Transport</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">S*</td>
                                <td className="simple">S*</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Import customs clearance
                                </td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">B</td>
                                <td className="simple">B</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="sources">* non-mandatory</p>
                          <a name="DDP" id="DDP"></a>
                          <p className="retour">
                            <a href="#haut">
                              <img
                                src="/ressources/images/ancre.gif"
                                alt="Return to top"
                                title="Return to top"
                              />
                            </a>
                          </p>
                          <h3>DDP (Delivered Duty Paid)</h3>
                          <dl className="informations">
                            <dt>Seller</dt>
                            <dd>
                              The seller has, in this case, the maximum
                              obligation; he is responsible for all transfer
                              charges and risks until the merchandise is
                              delivered to the buyer. The import customs
                              clearance is also under his charge.
                              <br />
                              The Incoterms® 2020 rules explicitly allow for the
                              necessary transport to be performed under a
                              contract of carriage or to be arranged by own
                              means (without the involvement of a carrier acting
                              as a third party).
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>Buyer</dt>
                            <dd>
                              The buyer picks up the delivery at the designated
                              destination place and pays the unloading fees. He
                              must request from the seller to furnish him with
                              all the information required in relation to the
                              security which he will need for the export, import
                              and transportation of the merchandise until its
                              final destination.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>DDP versus EXW</dt>
                            <dd>
                              The term DDP is exactly the opposite of EXW.
                            </dd>
                          </dl>
                          <dl className="informations">
                            <dt>
                              Charges relating to the importation of merchandise
                            </dt>
                            <dd>
                              If the parties wish to exclude from the seller's
                              obligations the payment of particular fees
                              payable, by reason of imports of the merchandise,
                              it must specify. For example: "Delivered Duty
                              Paid, VAT unpaid (DDP, VAT unpaid)".
                            </dd>
                          </dl>
                          <table className="table">
                            <thead>
                              <tr>
                                <td>Specifications DAP</td>
                                <td>Charges</td>
                                <td>Risks</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="agauche gras">Packaging</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Pre-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Export customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Loading into main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Main transportation
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Transportation insurance
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">
                                  Unloading from main carriage (handling)
                                </td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Import customs</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                              <tr>
                                <td className="agauche gras">Post-carriage</td>
                                <td className="simple">S</td>
                                <td className="simple">S</td>
                              </tr>
                            </tbody>
                          </table>
                        </table>
                        <p className="retour">
                          <a href="#haut">
                            <img
                              src="/ressources/images/ancre.gif"
                              alt="Return to top"
                              title="Return to top"
                            />
                          </a>
                        </p>
                        <a name="law" id="law"></a>
                        <h2>Which law governs the contracts?</h2>
                        <dl className="informations">
                          <dt>The three possibilities</dt>
                          <dd>
                            The two parties are placed in front of three
                            possibilities:
                            <ul>
                              <li>
                                <strong>
                                  To keep the law of the exporting country
                                </strong>
                                : That would be very often the wish of the
                                seller who would prefer to apply his own law
                                considering that it is the one that he knows
                                well. However, it is not always the best
                                solution. As a matter of fact, some laws, such
                                as the French and Belgian laws, protect much
                                more the buyer;
                              </li>
                              <li>
                                <strong>
                                  To keep the law of the importing country
                                </strong>
                                : This law can be more interesting for the
                                exporter since it is less constraining; however,
                                it is important to know it and master it well
                                because it could be very dangerous to be subject
                                to regulations that are totally or partially
                                unknown;
                              </li>
                              <li>
                                <strong>
                                  To keep the law of a third country
                                </strong>
                                : This choice allows neutralizing the legal
                                nationalism. It is often used in commercial
                                interests for compromising or for convenient
                                reasons (in the case where the court of
                                competent jurisdiction belongs to this third
                                country).
                              </li>
                            </ul>
                          </dd>
                        </dl>
                        <dl className="informations">
                          <dt>Swiss law</dt>
                          <dd>
                            In this respect, the Swiss law is often recommended
                            because it favors much more the exporter and, most
                            of all, it has the benefit of belonging to a neutral
                            state, which is an advantage for the parties who are
                            conducting commercial trade.
                          </dd>
                        </dl>
                        <p className="retour">
                          <a href="#haut">
                            <img
                              src="/ressources/images/ancre.gif"
                              alt="Return to top"
                              title="Return to top"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeFinance;
