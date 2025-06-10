import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// Replace these with your actual React components if available
const Header = () => null;
const Footer = () => null;
const OverseasMenuUsa = () => null;

const OperatingBusinessUSA = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Header /> */}
      <div className="container-fluid" id="innerpage">
        <div className="row" id="dashboard">
          <div className="col-md-12 pt-3">
            <div className="row">
              <div className="col-md-3" id="sidemenu">
                <a
                  
                  onClick={() => navigate("establishOverseas")}
                  className="btn btn-default"
                >
                  <i
                    className="fa fa-chevron-circle-left fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
                <SideMenuUSA />
              </div>
              <div className="col-md-9 mb-5">
                <div className="card">
                  <div className="card-header">
                    <h3>Operating a Business</h3>
                  </div>
                  <div className="card-body">
                    <a
                      href="/Client/OperatingBusiness"
                      className="btn btn-primary"
                      style={{ color: "white" }}
                    >
                      CHINA
                    </a>{" "}
                    <a
                      href="/Client/OperatingBusinessUsa"
                      className="btn btn-primary"
                      style={{ color: "white" }}
                    >
                      USA
                    </a>
                    <div className="col-md-12 mt-4 usa">
                      <p>ESTABLISH OVERSEAS</p>
                      <p>
                        <strong>OPERATING A BUSINESS</strong>
                      </p>
                      <p>&nbsp;</p>
                      <p>Legal Forms of Companies</p>
                      <p>Sole proprietorship</p>
                      <p>
                        <strong>Number of partners:</strong>&nbsp;One person
                        only.
                        <br /> <strong>Capital (max/min):</strong>&nbsp;No
                        minimum legal capital required.
                        <br />
                        <strong>Shareholders and liability:</strong>&nbsp;The
                        owner is liable for the company's debt.
                      </p>
                      <p>General Partnership</p>
                      <p>
                        <strong>Number of partners:</strong>&nbsp;No limit on
                        the number of partners.
                        <br />
                        <strong>Capital (max/min):</strong>&nbsp;No minimum
                        legal capital required.
                        <br />
                        <strong>Shareholders and liability:</strong>&nbsp;The
                        General Partner is personally liable, with no
                        limitation, for the company's debts and obligations.
                      </p>
                      <p>Limited Partnership</p>
                      <p>
                        <strong>Number of partners:</strong>&nbsp;In addition of
                        general partners there is one or more limited partners.
                        <br /> <strong>Capital (max/min):</strong>&nbsp;No
                        minimum legal capital required.
                        <br /> <strong>Shareholders and liability:</strong>
                        &nbsp;The general partner has unlimited liability for
                        the debt, whereas any limited partners have limited
                        liability up to the amount of their investment.
                      </p>
                      <p>Public Company</p>
                      <p>
                        <strong>Number of partners:</strong>&nbsp;No limit on
                        the number of partners.
                        <br />
                        <strong>Capital (max/min):</strong>&nbsp;No minimum
                        legal capital required.
                        <br />
                        <strong>Shareholders and liability:</strong>
                        &nbsp;Liability is limited to the value of the capital
                        contributed.
                      </p>
                      <p>Limited Liability Corporation or LLC</p>
                      <p>
                        <strong>Number of partners:</strong>&nbsp;No limit on
                        the number of partners.
                        <br />
                        <strong>Capital (max/min):</strong>&nbsp;No minimum
                        legal capital required.
                        <br />
                        <strong>Shareholders and liability:</strong>
                        &nbsp;Liability is limited to the value of the capital
                        contributed.
                      </p>
                      <p>Enterprises Federation</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.sba.gov/"
                        >
                          U.S. Small Business Administration
                          <br />
                        </a>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.nam.org/"
                        >
                          National Association of Manufacturers
                          <br />
                        </a>
                      </p>
                      <p>Find a Company or a Financial Report</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.uspto.gov/trademarks/process/search/"
                        >
                          United States Patent and Trademark Office (USPTO)
                        </a>
                      </p>
                      <p>&nbsp;</p>
                      <p>Business Setup Procedures</p>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <td width="267">
                              <p>
                                <strong>Setting Up a Company</strong>
                              </p>
                            </td>
                            <td width="267">
                              <p>
                                <strong>United States</strong>
                              </p>
                            </td>
                            <td width="267">
                              <p>
                                <strong>OECD</strong>
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td width="267">
                              <p>Procedures (number)</p>
                            </td>
                            <td width="267">
                              <p>6.00</p>
                            </td>
                            <td width="267">
                              <p>4.80</p>
                            </td>
                          </tr>
                          <tr>
                            <td width="267">
                              <p>Time (days)</p>
                            </td>
                            <td width="267">
                              <p>5.60</p>
                            </td>
                            <td width="267">
                              <p>8.30</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <em>Source: Doing Business.</em>
                      </p>
                      <p>&nbsp;</p>
                      <p>For Further Information</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.doingbusiness.org/data/exploreeconomies/United-States/starting-a-business/"
                        >
                          Doing Business- U.S.
                        </a>
                        , for more information on procedures to start a business
                        in the U.S.
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://libguides.rutgers.edu/content.php?pid=136604&amp;sid=1171890"
                        >
                          U.S. State Corporations Databases
                        </a>
                      </p>
                      <p>The Competent Organisation</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.sec.gov/"
                        >
                          The U.S. Securities and Exchange Commission
                        </a>
                        . The certificate of incorporation, also called Doing
                        Business As (DBA) must be registered with the Trade
                        Register of the State where the company is located.
                        General Partnerships do not need to be registered.
                      </p>
                      <p>&nbsp;</p>
                      <p>Recovery Procedures</p>
                      <p>Principle</p>
                      <p>
                        See{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.law.cornell.edu/uscode/text/11"
                        >
                          U.S Code Chapter 11 - Bankruptcy
                        </a>
                      </p>
                      <p>
                        Minimum Debt-to-Capital Ratio Triggering Liquidation
                      </p>
                      <p>
                        See{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.law.cornell.edu/uscode/text/11"
                        >
                          U.S Code Chapter 11 - Bankruptcy
                        </a>
                      </p>
                      <p>Bankruptcy Laws</p>
                      <p>
                        See{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.law.cornell.edu/uscode/text/11"
                        >
                          U.S Code Chapter 11 - Bankruptcy
                        </a>
                      </p>
                      <p>Reorganization and Rehabilitation Laws</p>
                      <p>
                        See{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.law.cornell.edu/uscode/text/11"
                        >
                          U.S Code Chapter 11 - Bankruptcy
                        </a>
                      </p>
                      <p>The Active Population in Figures</p>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <td width="225">&nbsp;</td>
                            <td width="192">
                              <p>
                                <strong>2011</strong>
                              </p>
                            </td>
                            <td width="192">
                              <p>
                                <strong>2013</strong>
                              </p>
                            </td>
                            <td width="192">
                              <p>
                                <strong>2015</strong>
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p>
                                <strong>Labour Force</strong>
                              </p>
                            </td>
                            <td>
                              <p>153,600,000</p>
                            </td>
                            <td>
                              <p>155,400,000</p>
                            </td>
                            <td>
                              <p>156,400,000</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <em>Source: CIA – The World Factbook</em>
                      </p>
                      <p>&nbsp;</p>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <td width="371">&nbsp;</td>
                            <td width="144">
                              <p>
                                <strong>2015</strong>
                              </p>
                            </td>
                            <td width="144">
                              <p>
                                <strong>2016</strong>
                              </p>
                            </td>
                            <td width="144">
                              <p>
                                <strong>2017</strong>
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p>
                                <strong>Total activity rate</strong>
                              </p>
                            </td>
                            <td>
                              <p>62.12%</p>
                            </td>
                            <td>
                              <p>61.98%</p>
                            </td>
                            <td>
                              <p>61.82%</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                <strong>Men activity rate</strong>
                              </p>
                            </td>
                            <td>
                              <p>48.82%</p>
                            </td>
                            <td>
                              <p>49.22%</p>
                            </td>
                            <td>
                              <p>49.62%</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                <strong>Women activity rate</strong>
                              </p>
                            </td>
                            <td>
                              <p>56.01%</p>
                            </td>
                            <td>
                              <p>55.87%</p>
                            </td>
                            <td>
                              <p>55.71%</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <em>Source: ILO, Laborstat - Yearly Statistics</em>
                      </p>
                      <p>&nbsp;</p>
                      <p>For Further Statistics</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.bls.gov/"
                        >
                          U.S. Bureau of Labour Statistics
                          <br />
                        </a>
                      </p>
                      <p>For Further Information About the Labour Market</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.census.gov/"
                        >
                          U.S Bureau of Census
                        </a>
                      </p>
                      <p>Working Conditions</p>
                      <p>Opening Hours</p>
                      <p>&nbsp;</p>
                      <ul>
                        <li>Legal Weekly Duration</li>
                      </ul>
                      <p>40 hours</p>
                      <ul>
                        <li>Maximum Duration</li>
                      </ul>
                      <p>
                        None. The standard workweek is 40 hours, although many
                        salaried positions (held by workers who are paid weekly
                        or monthly, not by the hour) entail standard workweeks
                        in excess of 40 hours. For hourly employees who work
                        more than 40 hours, overtime pay equal to one and
                        one-half times regular salary is standard.
                      </p>
                      <ul>
                        <li>Night Hours</li>
                      </ul>
                      <p>Usually from 6 p.m. to 6 a.m.</p>
                      <p>
                        <strong>Working Rest Day</strong>
                      </p>
                      <p>2 days a week.</p>
                      <p>
                        <strong>Paid Annual Vacation</strong>
                      </p>
                      <p>2 weeks vacation per year and 2 weeks sick leave.</p>
                      <p>
                        <strong>Retirement Age</strong>
                      </p>
                      <p>65 years</p>
                      <p>
                        <strong>
                          Child Labour and Minimum Age For Employment
                        </strong>
                      </p>
                      <p>16 years.</p>
                      <p>
                        <strong>Informal Labour Market</strong>
                      </p>
                      <p>
                        Informal labor market is developed due to the high level
                        of illegal immigration.
                      </p>
                      <p>The Cost of Labour</p>
                      <p>Pay</p>
                      <p>
                        <strong>Minimum Wage</strong>
                      </p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.dol.gov/agencies/whd/minimum-wage/state"
                        >
                          The minimum wage
                        </a>{" "}
                        varies depending on the States and activity sectors. The
                        federal minimum wage provisions are contained in the
                        Fair Labor Standards Act (FLSA). The federal minimum
                        wage is $7.25 per hour effective July 24, 2009.
                      </p>
                      <p>
                        <strong>Average Wage</strong>
                      </p>
                      <p>
                        According to the Bureau of Labor Statistics (BLS), the
                        median wage for workers in the United States in the
                        first quarter of 2020 was $957 per week or $49,764 per
                        year.
                      </p>
                      <p>
                        <strong>Other Forms of Pay</strong>
                      </p>
                      <ul>
                        <li>Pay For Overtime</li>
                      </ul>
                      <p>
                        Overtime pay one-half their regular rates of pay. Almost
                        all employees who make less than USD 455 a week (USD
                        23,660 a year) are eligible for overtime
                      </p>
                      <ul>
                        <li>Pay For Rest Days Worked</li>
                      </ul>
                      <p>One-half their regular rates of pay.</p>
                      <ul>
                        <li>Pay For Night Hours</li>
                      </ul>
                      <p>
                        Extra pay for working weekends or nights is a matter of
                        agreement between the employer and the employee
                      </p>
                      <ul>
                        <li>Pay For Overtime at Night</li>
                      </ul>
                      <p>
                        Extra pay for working weekends or nights is a matter of
                        agreement between the employer and the employee
                      </p>
                      <p>&nbsp;</p>
                      <p>Social Security Costs</p>
                      <p>
                        <strong>The Areas Covered</strong>
                      </p>
                      <p>
                        Social Security covers old age, survivors and disability
                        insurance (OASDI) and hospital insurance (Medicare).
                        Employers must also pay state and federal unemployment
                        taxes. In general, employers and employees bear the tax
                        equally. OASDI taxes are levied on the first USD 118,500
                        of wages at a combined rate of 12.4%. Medicare taxes are
                        levied on total wages at a combined rate of 2.9% (plus
                        0.9% for wages above USD 200,000 annually).
                      </p>
                      <p>
                        Employers must also pay State and Federal Unemployment
                        Taxes (
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.toolkit.com/small_business_guide/sbg.aspx?nid=P07_1294"
                        >
                          SUTA
                        </a>{" "}
                        and{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/individuals/international-taxpayers/federal-unemployment-tax"
                        >
                          FUTA
                        </a>
                        ). FUTA is 6% on the first USD 7,000. SUTA varies aross
                        the states. Employers receive tax credit up to 5.4%
                        against federal tax for amounts paid as SUTA.
                      </p>
                      <p>
                        <strong>Contributions</strong>
                      </p>
                      <p>
                        Contributions Paid By the Employer: OASDI (handicap,
                        disability, old age; 6.2%, maximum annual earnings used
                        to calculate contributions are $132,900) + Medicare
                        (1.45%) + FUTA (unemployment at the federal level; 6% on
                        first USD 7,000 and applicable for tax credit) + SUTA
                        (unemployment at each state level; varies across states)
                        <br /> Contributions Paid By the Employee: OASDI (6.2%,
                        maximum annual earnings used to calculate contributions
                        are $132,900) + Medicare (1.45% + 0.9% if total wages
                        above USD 200,000 annually)
                      </p>
                      <p>Competent Organization</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.ssa.gov/"
                        >
                          Social Security
                          <br />
                        </a>
                      </p>
                      <p>Management of Human Resources</p>
                      <p>&nbsp;</p>
                      <p>Recruitment</p>
                      <p>
                        <strong>Method of Recruitment</strong>
                      </p>
                      <p>
                        The recruitment process takes place more and more via
                        Internet. Selection is made on the basis of a job
                        interview.
                      </p>
                      <p>
                        <strong>Recruitment Agencies</strong>
                      </p>
                      <p>
                        There are three types: employment agency, executive
                        recruitment, temporary staffing firm.
                      </p>
                      <p>Recruitment Websites</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.americanstaffing.net/"
                        >
                          American Staffing Association
                          <br />
                        </a>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.monster.com/"
                        >
                          Monster
                          <br />
                        </a>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.careerbuilder.com/"
                        >
                          Career Builder
                          <br />
                        </a>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://fr.linkedin.com/"
                        >
                          LinkedIn
                          <br />
                        </a>
                      </p>
                      <p>&nbsp;</p>
                      <p>The Contract</p>
                      <p>
                        <strong>Type of Contract</strong>
                      </p>
                      <p>
                        Employment contracts determine if the employee forms
                        part of the regular or non-regular staff. Full time
                        employees form the regular staff. Among the non-regular
                        staff, there are different types of contract: part-time
                        workers, temporary workers and interns.
                      </p>
                      <p>
                        <strong>Breach of Contracts</strong>
                      </p>
                      <ul>
                        <li>Retirement</li>
                      </ul>
                      <p>
                        It can take several forms: general resignation,
                        resignation for one’s own convenience, resignation by
                        agreement, resignation by employee’s request, voluntary
                        retirement.
                      </p>
                      <ul>
                        <li>Dismissals</li>
                      </ul>
                      <p>
                        In a wrongful dismissal context, this can justify an
                        employer in summarily dismissing an employee.
                        <br /> A serious breach allows the other party to
                        repudiate. In a statutory dismissal context, it can make
                        it more difficult to determine who terminates the
                        employment contract (and hence whether there is a
                        dismissal at all).
                      </p>
                      <ul>
                        <li>Other Possible Methods</li>
                      </ul>
                      <ul>
                        <li>employee resignation on the appropriate notice;</li>
                        <li>employee retirement;</li>
                        <li>the expiry of a fixed-term contract; and</li>
                        <li>
                          the completion of the task for which the contract was
                          concluded.
                        </li>
                      </ul>
                      <p>Labour Laws</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.socialaw.com/"
                        >
                          The Social Law Library
                          <br />
                        </a>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.dol.gov/"
                        >
                          US Department of Labor
                          <br />
                        </a>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.doingbusiness.org/data/exploreeconomies/United-States/employing-workers#_blank"
                        >
                          Doing Business: U.S.
                        </a>
                        , to obtain a summary of labour regulations that apply
                        to local entreprises
                      </p>
                      <p>&nbsp;</p>
                      <p>Dispute Settlement</p>
                      <p>&nbsp;</p>
                      <p>
                        <strong>Conciliation Process</strong>
                      </p>
                      <p>
                        <strong>Cases of Dispute</strong>
                      </p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.gpoaccess.gov/uscode/browse.html"
                        >
                          Article 1 (General Provisions) and Article 2 (Sales)
                        </a>
                      </p>
                      <ul>
                        <li>Legal Framework</li>
                      </ul>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.gpoaccess.gov/uscode/browse.html"
                        >
                          Article 1 (General Provisions) and Article 2 (Sales)
                        </a>
                      </p>
                      <ul>
                        <li>Procedure</li>
                      </ul>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.govinfo.gov/app/details/USCODE-2018-title1/USCODE-2018-title1-chap3-sec201"
                        >
                          Article 1 (General Provisions) and Article 2 (Sales)
                        </a>
                        .
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        <strong>Judicial Structures</strong>
                      </p>
                      <ul>
                        <li>Legal Framework</li>
                      </ul>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.gpoaccess.gov/uscode/browse.html"
                        >
                          Article 1 (General Provisions) and Article 2 (Sales)
                        </a>
                      </p>
                      <ul>
                        <li>
                          <strong>Competent Legal Body</strong>
                        </li>
                      </ul>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.gpoaccess.gov/uscode/browse.html"
                        >
                          Article 1 (General Provisions) and Article 2 (Sales)
                        </a>
                      </p>
                      <p>&nbsp;</p>
                      <p>Social Partners</p>
                      <p>
                        <strong>
                          Social Dialogue and Involvement of Social Partners
                        </strong>
                      </p>
                      <p>
                        Today most labour unions in the United States are
                        members of one of two larger umbrella organisations: the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.aflcio.org/"
                        >
                          American Federation of Labour-Congress of Industrial
                          Organisations
                        </a>{" "}
                        (AFL-CIO) or the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.changetowin.org/"
                        >
                          Change to Win Federation
                        </a>
                        , which split from the AFL-CIO in 2005.
                      </p>
                      <p>
                        <strong>Unionisation Rate</strong>
                      </p>
                      <p>
                        Union Membership had been steadily declining in the U.S.
                        since 1983. In 2007, the Department of Labour reported
                        the first increase in union memberships in 25 years and
                        the largest increase since 1979. Most of the recent
                        gains in union membership have been in the service
                        sector, while the number of unionised employees in the
                        manufacturing sector has declined. Most of the gains in
                        the service sector have come in West Coast states, such
                        as California, where union membership is now at 16.7%
                        compared with a national average of about 12.1%.
                      </p>
                      <p>Unions</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.unions.org/home/"
                        >
                          Unions.org
                          <br />
                        </a>
                      </p>
                      <p>Regulation Bodies</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.dol.gov/"
                        >
                          Department of Labour
                          <br />
                        </a>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.bls.gov/"
                        >
                          U.S. Bureau of Labour Statistics
                        </a>
                      </p>
                      <h3 className="font-weight-bold" id="usa_tax_system">
                        TAX SYSTEM
                      </h3>
                      <p>
                        <strong>&nbsp;</strong>
                      </p>
                      <h2>
                        <br /> Corporate Taxes
                      </h2>
                      <p>Tax Base For Resident and Foreign Companies</p>
                      <p>
                        A corporation organised or created in the United States
                        under US law or under the law of any state is considered
                        to any extent a domestic corporation, even in the case
                        that it does no business or owns no property in the
                        United States. For US law, a fixed place of business is
                        considered as a permanent establishment in the country.
                      </p>
                      <p>&nbsp;</p>
                      <h4>Tax Rate</h4>
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td width="401">
                              <p>Corporate Income Tax</p>
                            </td>
                            <td width="401">
                              <p>
                                Federal corporate income tax is applied with a
                                flat rate of 21% to the effectively connected
                                income (ECI). State and local governments may
                                also impose income taxes (generally ranging
                                between 1% and 12%), thus the effective tax rate
                                in each state. Click{" "}
                                <a
                                  style={{ color: "red" }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://statetaxindex.org/tax/corporate/"
                                >
                                  here
                                </a>{" "}
                                for more information about corporate tax rates.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td width="401">
                              <p>S Corporations Tax</p>
                            </td>
                            <td width="401">
                              <p>
                                Corporations with up to 100 eligible
                                shareholders (none of whom may be corporations)
                                that meet certain specific requirements are
                                generally not subject to US federal income tax.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>&nbsp;</p>
                      <p>Tax Rate For Foreign Companies</p>
                      <p>
                        With the tax reform legislation enacted on 22 December
                        2017 (P.L. 115-97), the US adopted a system of taxation
                        based on territoriality (from the previously used
                        worldwide system). Foreign companies are generally
                        subject to the same corporate tax as domestic companies.
                        However, taxable income is calculated on{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci"
                        >
                          Effectively Connected Income
                        </a>{" "}
                        (ECI) only, which is considered as all U.S.-source
                        income derived from trade or business in the U.S. or
                        sale of U.S. real property or inventory by a foreign
                        entity. ECI tax exemption can also be applied through a
                        tax treaty.
                        <br /> US taxation of income earned by non-US entities
                        depends on whether the income has a nexus with the
                        United States.
                      </p>
                      <p>
                        Foreign companies are however subject to a branch
                        profits tax at 30% of ECI that is not invested in U.S.
                        trade or business and a 30% withholding tax on non-ECI
                        U.S.-source income (e.g. dividends, interests, rents and
                        royalties). Other arrangements can be made through tax
                        treaties.
                      </p>
                      <p>Capital Gains Taxation</p>
                      <p>
                        A corporation’s capital gains are taxed at the same
                        rates as ordinary income if shares are held for
                        short-term (less than a year). Otherwise (shares held
                        longer than a year), capital gains are taxed at a rate
                        of 15% (20% for the highest tax bracket).
                      </p>
                      <p>
                        Capital losses can only be used to offset capital gains.
                        An excess of capital losses over capital gains in a tax
                        year may be carried back three years and carried forward
                        five years.
                      </p>
                      <p>
                        Foreign companies are generally exempt from capital
                        gains tax unless the gain is U.S.-sourced (from U.S.
                        real property or through U.S. trade or business).
                      </p>
                      <p>Main Allowable Deductions and Tax Credits</p>
                      <p>
                        Deductions are available for specific domestic
                        production activities, qualifying{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/Businesses/Small-Businesses-&amp;-Self-Employed/Deducting-Business-Expenses"
                        >
                          business expenses
                        </a>{" "}
                        and depreciation, amortisation and losses. Normally,
                        start-up expenditures can be amortised over a 15-year
                        period. The cost of goodwill generally is capitalised
                        and amortised over 15 years. Bad debt resulting from a
                        trade or business may be deducted in the year the debt
                        becomes worthless. Certain charitable contributions may
                        be deducted, up to a limit of 10% of taxable income, and
                        may be carried over to the fifteen succeeding years.
                        State and municipal taxes imposed on businesses are
                        deductible expenses. Fines and penalties are not
                        deductible, unless they are paid for restitution or to
                        come into compliance with the law. Special rules limit
                        or deny deductions for interest, rents, or royalties
                        paid on certain transactions.
                        <br /> Generally, net operating losses generated in tax
                        years ending before 1 January 2018 may be carried back
                        two years and, if not fully used, carried forward 20
                        years. Under the COVID-related CARES Act, losses arising
                        in tax years beginning after December 31, 2017, and
                        before January 1, 2021 may be carried back to each of
                        the five tax years preceding the tax year of such loss.
                        <br /> Incentives are granted in the form of tax credits
                        for{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/Businesses/Research-Credit"
                        >
                          R&amp;D
                        </a>
                        , energy-efficient appliances and{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/Businesses/Plug-In-Electric-Vehicle-Credit-IRC-30-and-IRC-30D"
                        >
                          electric motor vehicles
                        </a>
                        .<br /> Visit the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/Credits-&amp;-Deductions/Businesses"
                        >
                          IRS site
                        </a>{" "}
                        for detailed information about available deductions in
                        the U.S.
                      </p>
                      <p>Other Corporate Taxes</p>
                      <p>
                        Employers are liable for social security tax of 6.2% on
                        the first USD 142,800 of wages paid to employees and for
                        Medicare tax of 1.45% on all wages. The different States
                        can impose further contributions.
                        <br /> Certain companies are subject to an accumulated
                        earnings tax equal to 20% of "accumulated taxable
                        income" if they are deemed to be accumulating earnings
                        and profits for the purpose of avoiding shareholder
                        personal income tax.
                      </p>
                      <p>
                        Importers, manufacturers, and sellers of ozone-depleting
                        chemicals, or imported products manufactured using such
                        chemicals, are subject to environmental taxes calculated
                        per weight of the ODC.
                      </p>
                      <p>
                        In addition to federal taxes, state and municipal taxes
                        vary from one state or community to another, including
                        property taxes on real property, stamp duties, franchise
                        taxes and taxes on the capital of a corporation.
                      </p>
                      <p>
                        For more details, consult the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://taxfoundation.org/state-corporate-tax-rates-2021/"
                        >
                          Tax Foundation
                        </a>{" "}
                        website.
                      </p>
                      <p>Other Domestic Resources</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.irs.gov/#_blank"
                        >
                          Internal Revenue Service (IRS)
                        </a>
                      </p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.doingbusiness.org/en/data/exploreeconomies/united-states/paying-taxes#_blank"
                        >
                          Doing Business: U.S.
                        </a>
                        , to obtain a summary of taxes and mandatory
                        contributions
                      </p>
                      <p>&nbsp;</p>
                      <h4>Country Comparison For Corporate Taxation</h4>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <td width="539">
                              <p>
                                <strong>&nbsp;</strong>
                              </p>
                            </td>
                            <td width="84">
                              <p>
                                <strong>United States</strong>
                              </p>
                            </td>
                            <td width="71">
                              <p>
                                <strong>OECD</strong>
                              </p>
                            </td>
                            <td width="109">
                              <p>
                                <strong>Germany</strong>
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p>
                                <strong>
                                  Number of Payments of Taxes per Year
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>10.6</p>
                            </td>
                            <td>
                              <p>10.9</p>
                            </td>
                            <td>
                              <p>9.0</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                <strong>
                                  Time Taken For Administrative Formalities
                                  (Hours)
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>175.0</p>
                            </td>
                            <td>
                              <p>163.4</p>
                            </td>
                            <td>
                              <p>218.0</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                <strong>
                                  Total Share of Taxes (% of Profit)
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>43.8</p>
                            </td>
                            <td>
                              <p>40.9</p>
                            </td>
                            <td>
                              <p>49.0</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <em>Source: Doing Business - 2017.</em>
                      </p>
                      <p>
                        <em>
                          Note: *The Greater the Index, the More Transparent the
                          Conditions of Transactions. **The Greater the Index,
                          the More the Manager is Personally Responsible. ***
                          The Greater the Index, the Easier it Will Be For
                          Shareholders to Take Legal Action. **** The Greater
                          the Index, the Higher the Level of Investor
                          Protection.
                        </em>
                      </p>
                      <h2>Accounting Rules</h2>
                      <p>&nbsp;</p>
                      <h3>Accounting System</h3>
                      <p>Accounting Standards</p>
                      <p>
                        Accounting in the U.S. is based on domestic standards
                        defined by:
                        <br /> -{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.sec.gov/"
                        >
                          The United States Securities and Exchange Commission
                          (SEC)
                        </a>
                        <br /> -{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.fasb.org/"
                        >
                          The Financial Accounting Standards Board (FASB)
                        </a>
                        <br /> -{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.gasb.org/"
                        >
                          The Governmental Accounting Standards Board (GASB)
                        </a>
                        <br /> -{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.fasab.gov/"
                        >
                          The Federal Accounting Standards Advisory Board
                          (FASAB)
                          <br />
                        </a>
                      </p>
                      <p>Accounting Regulation Bodies</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.aicpa.org/#_blank"
                        >
                          AICPA
                        </a>
                        , The American Institute of Certified Public Accountants
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.gasb.org/#_blank"
                        >
                          GASB
                        </a>
                        , The Governmental Accounting Standards Board
                      </p>
                      <p>Accounting Law</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.sec.gov/about/laws/soa2002.pdf"
                        >
                          The Sarbanes-Oxley Act of 2002
                        </a>{" "}
                        (Public Company Accounting Reform and Investor
                        Protection Act of 2002).
                      </p>
                      <p>
                        Difference Between National and International Standards
                        (IAS/IFRS)
                      </p>
                      <p>
                        Domestic public companies must use US GAAP. Foreign
                        companies whose debt or equity securities trade in a
                        public market in the U.S. can use IFRS Standards in
                        their U.S. filings. SMEs have to option to file either
                        by using US GAAP, IFRS Standard or other bases of
                        accounting such as the US income tax basis of
                        accounting.
                      </p>
                      <p>Accounting News</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.accountingzone.com/#_blank"
                        >
                          Accounting Zone
                        </a>
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://topics.nytimes.com/top/reference/timestopics/organizations/f/financial_accounting_standards_board/index.html#_blank"
                        >
                          New York Times Accounting
                        </a>
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.accountingweb.com/#_blank"
                        >
                          Accounting Web
                        </a>
                      </p>
                      <p>&nbsp;</p>
                      <h3>Accounting Practices</h3>
                      <p>Tax Year</p>
                      <p>
                        Corporations may adopt any 12 month fiscal year ending
                        on the last day of the month. Individuals use the
                        calendar year, unless a fiscal year is elected.
                      </p>
                      <p>Accounting Reports</p>
                      <p>
                        Annual report, including the income statement and the
                        balance sheet, along with supporting CPA notes. The
                        report must be filed on a quarterly basis (10 K) with
                        the SEC.
                      </p>
                      <p>Publication Requirements</p>
                      <p>
                        According to the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.sec.gov/rules/final/33-8568.pdf"
                        >
                          S-X rule of the SEC
                        </a>{" "}
                        (Securities and Exchange Commission), all companies
                        which make an initial public offering have to present an
                        information file (called '10 K' for American companies
                        and '20 F' for foreign companies) annually to the SEC.
                        Companies quoted on the stock-exchange must publish
                        their accounts.
                      </p>
                      <p>&nbsp;</p>
                      <h3>Accountancy Profession</h3>
                      <p>Accountants</p>
                      <p>
                        Certified public accountants (CPA) and tax accountants
                        are specialists providing accounting and tax support to
                        companies operating in USA. CPA licenses are awarded by
                        each of the 50 states for practice in that state.
                      </p>
                      <p>Professional Accountancy Bodies</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.aicpa.org/#_blank"
                        >
                          The American Institute of Certified Public Accountants
                        </a>
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.imanet.org/#_blank"
                        >
                          Institute of Management Accountants
                        </a>
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.nasba.org/#_blank"
                        >
                          National Association of State Boards of Accountancy
                        </a>
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://aaahq.org/index.cfm#_blank"
                        >
                          American Accounting Association
                        </a>
                      </p>
                      <p>
                        Member of the International Federation of Accountants
                        (IFAC)
                      </p>
                      <p>
                        The US is a member of{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.ifac.org/about-ifac"
                        >
                          the International Federation of Accountants (IFAC).
                        </a>
                      </p>
                      <p>Member of Other Federation of Accountants</p>
                      <p>
                        Member of the Confederation of Asian and Pacific
                        Accountants (
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.ifac.org/about-ifac/membership/members/confederation-asian-and-pacific-accountants-capa"
                        >
                          CAPA
                        </a>
                        ), the national accountancy organisation in the
                        Asia-Pacific region.
                      </p>
                      <p>Audit Bodies</p>
                      <p>
                        Companies are required to seek a statutory auditor to
                        conduct an annual audit of the financial health of their
                        organisation. You can contact:{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://pcaobus.org/"
                        >
                          Public Company Accounting Oversight Board
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.deloitte.com/view/en_GX/global/services/Audit/index.htm"
                        >
                          Deloitte &amp; Touche
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.ey.com/Home"
                        >
                          Ernst &amp; Young
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://home.kpmg.com/us/en/home.html"
                        >
                          KPMG
                        </a>{" "}
                        or{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.pwc.com/"
                        >
                          PricewaterhouseCoopers
                        </a>
                      </p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <h2>Consumption Taxes</h2>
                      <p>Nature of the Tax</p>
                      <p>
                        Sales Tax is levied by individual states at various
                        rates. Forty-five states and the District of Columbia
                        collect statewide sales taxes, while only 38 states
                        collect local sales taxes and in some cases may rival or
                        even exceed state rates. Consult the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://taxfoundation.org/2021-sales-taxes/"
                        >
                          Tax Foundation
                        </a>{" "}
                        website for more information.
                      </p>
                      <p>Standard Rate</p>
                      <p>
                        Sales and use tax rates vary from state to state and
                        generally range from 2.9% to 7.25% at the state level.
                        Most states also allow a "local option" that permits
                        local jurisdictions, such as cities and counties, to
                        impose an additional percentage on top of the
                        state-level tax and to keep the related revenues. Such
                        system may induce consumers to make cross-border
                        purchases (for example through e-commerce).
                      </p>
                      <p>
                        The five states with the highest average combined state
                        and local sales tax rates are Tennessee (9.53%),
                        Louisiana (9.52%), Arkansas (9.51%), Washington (9.23%),
                        and Alabama (9.22%). For the full list of applicable
                        rates, click{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://taxfoundation.org/2021-sales-taxes/"
                        >
                          here
                        </a>
                        .
                      </p>
                      <p>Reduced Tax Rate</p>
                      <p>
                        Varies by state and city (generally ranging from 2.9% to
                        7.25% at the state level). Click{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://taxfoundation.org/publications/state-and-local-sales-tax-rates/"
                        >
                          here
                        </a>{" "}
                        for more information.
                      </p>
                      <p>Exclusion From Taxation</p>
                      <p>
                        Varies from state to state. Generally, groceries, energy
                        utilities, prescription drugs and medical supplies as
                        well as certain alternative energy devices and supplies
                        are exempt from sales tax.
                      </p>
                      <p>Method of Calculation, Declaration and Settlement</p>
                      <p>
                        There is no federal VAT or sales tax across the US.
                        Sales tax is calculated differently across states. 45
                        states and the District of Columbia apply a sales and
                        use taxes (generally between 2.9% and 7.25%). Only
                        Alaska, Delaware, Montana, New Hampshire and Oregon do
                        not impose such taxes. Local sales taxes are collected
                        in 38 states.
                      </p>
                      <p>Other Consumption Taxes</p>
                      <p>
                        Various consumption taxes may be levied at the local
                        level. Click{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://taxfoundation.org/publications/state-and-local-sales-tax-rates/"
                        >
                          here
                        </a>{" "}
                        for more information about other consumption taxes by
                        states.
                      </p>
                      <p>
                        Excise duties are levied at federal and state level on a
                        wide range of goods and activities, including gasoline
                        and diesel fuel used for transportation, air
                        transportation, wagering, foreign insurance, certain
                        sporting goods, firearms and ammunition, alcohol, and
                        tobacco.
                      </p>
                      <h2>Individual Taxes</h2>
                      <p>Tax Base For Residents and Non-Residents</p>
                      <p>
                        Resident taxpayers incur federal tax on worldwide
                        income, with credits for foreign income taxes.
                        Non-resident taxpayers are subject to federal tax on
                        Effectively Connected Income (
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci"
                        >
                          ECI
                        </a>
                        ) and US-source non-ECI. Most state taxes apply across
                        resident and non-resident individuals who reside in
                        their territory.
                      </p>
                      <p>
                        Individuals who meet a “substantial presence test” are
                        considered residents for taxation purposes. Such test
                        requires either physical presence in the country for 183
                        days or more during a calendar year, or presence of at
                        least 31 days during a calendar year and a cumulative
                        presence of 183 days or more based on a weighted number
                        of days during the calendar year (taken at whole value)
                        and the two immediately preceding calendar years (taken
                        at one-third value for the first preceding calendar year
                        and at one-sixth for the second). A "COVID-19 Medical
                        Exception" has been introduced, according to which
                        eligible individuals can exclude from the above
                        computation the "COVID-19 Emergency Period", consisting
                        of a single period of days the individual was physically
                        present in the United States, up to 60 consecutive
                        calendar days that start on or after 1 February 2020 and
                        on or before 1 April 2020.
                      </p>
                      <p>&nbsp;</p>
                      <h4>Tax Rate</h4>
                      {/* The large tax table is omitted for brevity, but should be included in your actual file */}
                      {/* ... */}
                      <p>&nbsp;</p>
                      <p>Allowable Deductions and Tax Credits</p>
                      <p>
                        Allowable deductions depend on the state of residence.
                        They may include credits for families and dependencies
                        (e.g. child tax credit, elderly and disabled tax credit,
                        adoption credit), healthcare, education, homeowners
                        (e.g. mortgage interest credit, low-income housing
                        credit), income and savings (e.g. foreign tax credit)
                        and electrical vehicle credit, as well as deductions for
                        work-related consumption (e.g. deductible business
                        expenses, bad debt), healthcare, itemised deduction
                        (e.g. real estate tax, gambling loss, charitable
                        contributions), investments, education and others such
                        as alimony and losses.
                      </p>
                      <p>
                        Citizens and resident aliens may also claim a standard
                        deduction (instead of itemising deductions). The basic
                        standard deduction for 2021 is USD 12,550 for
                        individuals, USD 25,100 for married couples filing a
                        joint return, and USD 18,800 for heads of household.
                      </p>
                      <p>
                        Visit the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/credits-deductions-for-individuals"
                        >
                          IRS site
                        </a>{" "}
                        for more detailed information.
                      </p>
                      <p>Special Expatriate Tax Regime</p>
                      <p>
                        The United States levies tax on its citizens and
                        residents on their worldwide income. Non-resident aliens
                        are taxed on their US-ECI-source income and{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci"
                        >
                          income effectively connected
                        </a>{" "}
                        with a US trade or business.
                        <br /> According to US laws, a resident alien is an
                        individual that is not a citizen or national of the
                        United States and who meets either the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/individuals/international-taxpayers/alien-residency-green-card-test"
                        >
                          green card test
                        </a>{" "}
                        or the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test"
                        >
                          substantial presence test
                        </a>{" "}
                        for the calendar year. The resident alien status often
                        results in lower US tax than non-resident alien status,
                        as it provides more allowable deductions and lower tax
                        rates for certain married taxpayers.
                        <br /> If there is a tax treaty in effect between the
                        United States and an individual's country of residence,
                        the provisions of the treaty may override the US
                        resident alien rules.
                        <br /> Expatriation tax applies differently depending on
                        the date of expatriation. Individuals face a penalty of
                        USD 10,000 if they fail to file the expatriation Form
                        8854. Visit the{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/Individuals/International-Taxpayers/Expatriation-Tax"
                        >
                          IRS website
                        </a>{" "}
                        for more details.
                      </p>
                      <p>Capital Tax Rate</p>
                      <p>
                        Capital gains are taxed as ordinary income. The
                        graduated rates of tax apply to capital gains from
                        assets held for 12 months or less. The maximum federal
                        tax rate on capital gains is 20% for assets held for
                        more than 12 months.
                      </p>
                      <p>
                        For employees, in 2021 social security tax (old-age,
                        survivors, and disability) are levied at a rate of 6.2%
                        on the first USD 142,800 of wages paid, whereas the
                        Medicare hospital insurance tax is levied at 1.45%.
                      </p>
                      <p>
                        A federal estate tax is levied on the fair market value
                        of assets that an individual owns at death. For
                        non-resident non-citizens, estate taxes are imposed only
                        on property situated in the US in excess of USD 60,000.
                        Furthermore, for US citizens and residents, a gift tax
                        is imposed on gifts made during a person’s life, and it
                        is unified with the estate tax. The top estate, gift,
                        and generation-skipping transfer tax rate is 40%.
                      </p>
                      <p>
                        Individuals must pay a 3.8% tax on net investment income
                        over a threshold amount and a 0.9% tax on wages,
                        compensation, or self-employment income that exceeds a
                        threshold amount (varying according to the taxpayer's
                        status: single, married filing separately/jointly,
                        etc.).
                      </p>
                      <p>
                        Documentary stamp taxes may be imposed at the state
                        level, but there are no stamp duties at the federal
                        level.
                      </p>
                      <h2>Double Taxation Treaties</h2>
                      <p>
                        Countries With Whom a Double Taxation Treaty Have Been
                        Signed
                      </p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z#_blank"
                        >
                          Double taxation treaty signed by the U.S.
                        </a>
                      </p>
                      <p>Withholding Taxes</p>
                      <p>
                        Dividends: 30% (paid to a non-resident), Interest: 30%
                        (paid to a non-resident), Royalties: 30% (paid to a
                        non-resident)
                        <br /> Different rates apply based on the treaties
                        signed by the U.S with other countries to avoid double
                        taxation.
                      </p>
                      <p>Bilateral Agreement</p>
                      <p>
                        The United Kingdom and the United States are bound by a{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.hmrc.gov.uk/taxtreaties/in-force/usa.pdf"
                        >
                          double taxation treaty
                        </a>
                        .
                      </p>
                      <h2>Sources of Fiscal Information</h2>
                      <p>Tax Authorities</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.pwc.com/gx/en/services/tax/navigate-the-tax-measures-in-response-to-Covid-19.html?c=USA&amp;tax-trade-regulatory=corporate-income-tax%3Bvat-gst%3Bcustoms-duties%3Bother-indirect-taxes-excise-other%3Bproperty-tax%3Bgeneral-tax-administration-measure%3Bother-taxes&amp;workforce=personal-income-tax%3Bsocial-security-contribution%3Bother-employment-labour-tax%3Bretirement-and-pensions%3Breward-and-benefits%3Blabour-law%3Bimmigration-travel-restrictions-and-entry-bans%3Bimmigration-quarantine-measures&amp;finance-and-liquidity=general%3Bindividuals%3Bsmes%3Bcorporates%3Binsolvency-law%3Bfurther-information%3Bother&amp;operations=contract-law%3Bcyber-privacy-law%3Bcorporate-law#_blank"
                        >
                          Overview of the USA's tax measures in response to
                          Covid-19
                        </a>
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.irs.gov/#_blank"
                        >
                          Internal Revenue Service (IRS)
                        </a>
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://home.treasury.gov/#_blank"
                        >
                          US Department of Treasury
                        </a>
                      </p>
                      <p>Other Domestic Resources</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.ustaxcourt.gov/#_blank"
                        >
                          U.S. Tax Court
                        </a>
                        <br />
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.ifausa.org/default.aspx#_blank"
                        >
                          International Fiscal Association - USA Branch
                        </a>
                      </p>
                      <p>Country Guides</p>
                      <p>
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://taxsummaries.pwc.com/united-states#_blank"
                        >
                          PwC International Tax Guide - USA
                        </a>
                      </p>
                      <p>
                        Learn more about{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.globaltrade.net/international-trade-import-exports/expert-service-provider/United-States/.html#_blank"
                        >
                          Service Providers in the United States{" "}
                        </a>
                        on Globaltrade.net, the Directory for{" "}
                        <a
                          style={{ color: "red" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.globaltrade.net/"
                        >
                          International Trade Service Providers.
                        </a>
                      </p>
                      <p>
                        <strong>&nbsp;</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default OperatingBusinessUSA;
