import React, { useState } from "react";

// Placeholder for Header and Footer components
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

import SideMenu from '../../For-Mp-Exporters-Pages/EstablishOverseas/SideMenu.jsx';
import OperatingBusinessChina from '../../../For-Mp-Exporters-Pages/EstablishOverseas/sections/OperatingBusinessChina.jsx';  
import OperatingBusinessUSA from '../../../For-Mp-Exporters-Pages/EstablishOverseas/sections/OperatingBusinessUSA.jsx';

const OperatingBusiness = () => {
  // Remove authentication logic
  const [activeTab, setActiveTab] = useState("china");

  return (
<>
  <div className="container-fluid" id="innerpage">
    <div className="row" id="dashboard">
      <div className="col-md-12 pt-3">
        <div className="row">
          <div className="col-md-3" id="sidemenu">
          
            <a
              href="<?=base_url();?>Client/Dashboard"
              className="btn btn-default"
            >
              <i
                className="fa fa-chevron-circle-left fa-2x"
                aria-hidden="true"
              />{" "}
            </a>
            <SideMenuUSA />
            
            {/*?php include('overseaseMenu.php'); ?*/}
          </div>
          <div className="col-md-9 mb-5">
            <div className="card">
              <div className="card-header">
                <h3>Operating a Business</h3>
              </div>
              <div className="card-body">
                <a
                  href="/OperatingBusiness"
                  className="btn btn-primary"
                  style={{ color: "white" }}
                > 
                 CHINA
                </a>{" "}
                <a
                  href="/OperatingBusinessUsa"
                  className="btn btn-primary"
                  style={{ color: "white" }}
                >


                  USA
                </a>
                <div className="col-md-12 mt-4 china">
                  <p>
                    <strong>Wholly foreign-owned enterprise (WFOE)</strong> 
                  </p>
                  <p>
                    <strong>Number of partners: </strong>One juridical person or
                    one or more shareholders. Entity owned 100% by foreign
                    interests that have the same rights as a local company.
                  </p>
                  <p>
                    <b>Capital (max/min):</b>Minimum varies according to the
                    sector of activity
                  </p>
                  <p>
                    <b>Shareholders and liability:</b> Limited to the amount of
                    contributions. Equity Joint Venture (EJV)
                  </p>
                  <p>
                    <b>Number of partners:</b> Minimum of one Chinese entity and
                    minimum one foreign entity
                  </p>
                  <p>
                    <b>Capital (max/min):</b> No minimum capital required, but
                    at least 25% must originate from foreign investors.
                  </p>
                  <p>
                    <b>Shareholders and liability:</b> Limited to the amount of
                    contributions. Co-operative Joint Ventures (CJV)
                  </p>
                  <p>
                    <b>Number of partners:</b> Minimum of two partners: one
                    Chinese entity and one foreign entity.
                  </p>
                  <p>
                    <b>Number of partners:</b> Minimum of two partners: one
                    Chinese entity and one foreign entity.
                  </p>
                  <p>
                    <b>Capital (max/min):</b> No minimum capital required.
                  </p>
                  <p>
                    <b>Shareholders and liability:</b> : Limited to the amount
                    of contributions
                  </p>
                  <p>Foreign Investment Joint Stock Company (JSC)</p>
                  <p>
                    <b>Number of partners:</b> : Minimum two partners.
                  </p>
                  <p>
                    <b>Capital (max/min):</b>Minimum capital needed: CNY 5
                    million if domestic capital, CNY 30 million if foreign
                    capital.
                  </p>
                  <p>
                    <b>Shareholders and liability: </b> Each shareholder
                    contributes the same amount to the share capital and is
                    linked to the company by its share of the share capital.
                  </p>
                  <p>Holding</p>
                  <p>
                    <b>Number of partners: </b>Minimum one partner.
                  </p>
                  <p>
                    <b>Capital (max/min):</b> : Minimum capital USD 30 million.
                  </p>
                  <p>
                    <b>Shareholders and liability: </b> Each shareholder
                    contributes the same amount to the share capital and is
                    linked to the company by its share of the share capital.
                  </p>
                  <p>Enterprises Federation</p>
                  <a
                    href="https://www.chinasme.org.cn/"
                    target="_blank"
                    style={{ color: "red !important" }}
                  >
                    Chinese Association of International SME Cooperation
                  </a>
                  <p className="mt-3">Find a Company or a Financial Report</p>
                  <a
                    href="http://english.mofcom.gov.cn/"
                    target="_blank"
                    style={{ color: "red !important" }}
                  >
                    Ministry of Commerce,
                  </a>{" "}
                  find an enterprise
                  <h4 className="mt-3 font-weight-bold">
                    Business Setup Procedures
                  </h4>
                  <table className="table table-bordered">
                    <tbody>
                      <tr className="text-white bg-dark">
                        <th>Setting Up a Company </th>
                        <th>China </th>
                        <th>East Asia &amp; Pacific</th>
                      </tr>
                      <tr>
                        <td>Procedures (number)</td>
                        <td>4.00</td>
                        <td>7.00</td>
                      </tr>
                      <tr>
                        <td>Time (days)</td>
                        <td>8.60</td>
                        <td>23.90</td>
                      </tr>
                    </tbody>
                  </table>
                  <small>Source: Doing Business.</small>
                  <p>For Further Information</p>
                  <p>
                    <a
                      href="https://www.doingbusiness.org/en/data/exploreeconomies/china/starting-a-business"
                      target="_blank"
                      style={{ color: "red !important" }}
                    >
                      Doing Business: China,
                    </a>{" "}
                    to learn about procedures to start a business in China
                  </p>
                  <p>The Competent Organisation</p>
                  <a
                    href="http://english.mofcom.gov.cn/"
                    target="_blank"
                    style={{ color: "red !important" }}
                  >
                    Ministry of Commerce
                  </a>
                  <p>
                    <strong>Recovery Procedures</strong>
                  </p>
                  <p>
                    <strong>Principle </strong> <br /> Minimum Debt-to-Capital
                    Ratio Triggering Liquidation Bankruptcy LawsCompany <br />{" "}
                    bankruptcy laws
                  </p>
                  <p>
                    The law on bankruptcy is being reshaped in China. It is
                    difficult to be declared as bankrupt. To be declared as
                    bankrupt, equities must be negative. Reorganization and
                    Rehabilitation Laws{" "}
                    <a
                      href="http://www.npc.gov.cn/zgrdw/englishnpc/Law/2011-02/15/content_1620615.htm"
                      target="_blank"
                      style={{ color: "red !important" }}
                    >
                      Company bankruptcy laws
                    </a>
                  </p>
                  <h4 className="mt-3 font-weight-bold">
                    The Active Population in Figures
                  </h4>
                  <table className="table table-bordered">
                    <tbody>
                      <tr className="text-white bg-dark">
                        <th />
                        <th>2011 </th>
                        <th>2013</th>
                        <th>2015</th>
                      </tr>
                      <tr>
                        <td>Labour Force</td>
                        <td>795,500,000</td>
                        <td>797,600,000</td>
                        <td>804,000,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <small>Source: CIA – The World Factbook</small>
                  <table className="table table-bordered">
                    <tbody>
                      <tr className="text-white bg-dark">
                        <th />
                        <th>2015</th>
                        <th>2016 </th>
                        <th>2017</th>
                      </tr>
                      <tr>
                        <td>Total activity rate</td>
                        <td>70.91%</td>
                        <td>70.77%</td>
                        <td>70.54%</td>
                      </tr>
                      <tr>
                        <td>Men activity rate</td>
                        <td>62.15%</td>
                        <td>62.21%</td>
                        <td>62.27%</td>
                      </tr>
                      <tr>
                        <td>Women activity rate</td>
                        <td>63.58%</td>
                        <td>63.35%</td>
                        <td>63.03%</td>
                      </tr>
                    </tbody>
                  </table>
                  <small>Source: ILO, Laborstat - Yearly Statistics</small>
                  <p>For Further Statistics</p>
                  <a
                    href="https://www.allcountries.org/china_statistics/"
                    target="_blank"
                    style={{ color: "red !important" }}
                  >
                    China Statistics
                  </a>
                  <br />
                  <a
                    href="http://www.stats.gov.cn/english/"
                    target="_blank"
                    style={{ color: "red !important" }}
                  >
                    China National Bureau of Statistics
                  </a>
                  <p>For Further Information About the Labour Market</p>
                  <a
                    href="http://www.ilo.org/beijing/lang--en/index.htm"
                    target="_blank"
                    style={{ color: "red !important" }}
                  >
                    ILO, International Labour Organisation
                  </a>
                  <h3 className="mt-3 font-weight-bold">Working Conditions</h3>
                  <p>Opening Hours</p>
                  <ul>
                    <li>Legal Weekly Duration</li>
                  </ul>
                  <p style={{ textIndent: 80 }}>40 hours</p>
                  <ul>
                    <li>Maximum Duration</li>
                  </ul>
                  <p style={{ textIndent: 80 }}>
                    8 hours per day with a maximum of 44 hours per week on an
                    average. Not more than additional 36 hours per month.
                  </p>
                  <ul>
                    <li>Night Hours</li>
                  </ul>
                  <p>
                    <strong>Working Rest Day</strong>
                  </p>
                  <p>One day per week.</p>
                  <p>
                    <strong>Paid Annual Vacation</strong>
                  </p>
                  <p>
                    <strong>Retirement Age</strong>
                  </p>
                  <p>The retirement age is 55 for women and 60 for men.</p>
                  <p>
                    <strong>Child Labour and Minimum Age For Employment</strong>
                  </p>
                  <p>
                    More than 15 years for the industry. For other sectors,
                    children can work at 13-14 years under certain conditions.
                  </p>
                  <p>
                    <strong>Informal Labour Market</strong>
                  </p>
                  <p>
                    Moonlighting is estimated at 18.5% of national workers and
                    72.5% of foreign workers.
                  </p>
                  <h3 className="mt-3 font-weight-bold">The Cost of Labour</h3>
                  <p>Pay</p>
                  <p>
                    <strong>Minimum Wage</strong>
                  </p>
                  <p className="ml-3">
                    The minimum wage varies across the provinces. Currently, the
                    highest monthly minimum wages are in parts of Guangdong,
                    Jiangsu, and Zhejiang provinces, which have all surpassed
                    the RMB 2,000 (US$289) mark. Shanghai continues to have the
                    highest minimum wage in China, at RMB 2,480 (US$358) per
                    month, followed by Shenzhen and Beijing, both at RMB 2,200
                    (US$318) per month. Among the lowest minimum wages are those
                    in some rural areas: Liaoning (1,120 RMB/US$162), Hunan
                    (1,130 RMB/US$163) and Anhui (1,150 RMB/US$166).
                    <br /> <br /> Consult&nbsp;
                    <a
                      href="https://www.china-briefing.com/news/wp-content/uploads/2020/01/Minimum-Wages-in-China-2020-Updated-April-29-2020.jpg"
                      target="_blank"
                      style={{ color: "red !important" }}
                    >
                      China Briefing's 2020 minimum wage guide
                    </a>
                    &nbsp;for more information.
                  </p>
                  <p>
                    <strong>Average Wage</strong>
                  </p>
                  <p className="ml-3">
                    The average monthly salary was 8,452 yuan ($1,228.38) in 37
                    major cities during the second quarter of 2019, with
                    Beijing, Shanghai and Shenzhen all topping 10,000 yuan.
                    <br /> NB: the average wage varies according to the
                    provinces.
                  </p>
                  <p>
                    <strong>Other Forms of Pay</strong>
                  </p>
                  <ul>
                    <li>Pay For Overtime</li>
                  </ul>
                  <p>
                    Increase of 150% if the worker is requested to work more
                    <br /> Increase of 200% if an additional rest day cannot be
                    granted
                  </p>
                  <ul>
                    <li>Pay For Rest Days Worked</li>
                    <li>Pay For Night Hours</li>
                  </ul>
                  <ul>
                    <li>Pay For Overtime at Night</li>
                  </ul>
                  <h3 className="mt-3 font-weight-bold">
                    Social Security Costs
                  </h3>
                  <p>
                    <strong>The Areas Covered</strong>
                  </p>
                  <p>
                    Pension, medical, maternity, unemployment and work-related
                    injury insurance schemes are provided.
                  </p>
                  <p>
                    <strong>Contributions</strong>
                  </p>
                  <p>Contributions Paid By the Employer:</p>
                  <p>
                    Contributions vary across the country and for different
                    schemes. China’s Social Security System consists of 5
                    mandatory insurance schemes (pension fund, medical
                    insurance, industrial injury insurance, unemployment
                    insurance, and maternity insurance) and a housing fund (only
                    applicable to Chinese employees). In Beijing, the employer's
                    share of social insurance contributions amounts
                    approximately to 27.8% to 29.5%:
                  </p>
                  <ul>
                    <li>Pension 16%</li>
                    <li>Medical expenses 10%</li>
                    <li>Unemployment 0.8%</li>
                    <li>Maternity 0.8%</li>
                    <li>Work-related injury 0.2% to 1.9%</li>
                  </ul>
                  <p> Contributions Paid By the Employee:</p>
                  <p className="ml-3">
                    Contributions vary across the country and for different
                    schemes. China’s Social Security System consists of 5
                    mandatory insurance schemes (pension fund, medical
                    insurance, industrial injury insurance, unemployment
                    insurance, and maternity insurance) and&nbsp; a housing fund
                    (only applicable to Chinese employees). In Beijing, the
                    employee's share of social insurance contributions amounts
                    approximately to 10.2%:
                  </p>
                  <ul>
                    <li>Pension 8%</li>
                    <li>Medical expenses 2%</li>
                    <li>Unemployment 0.2%</li>
                    <li>Maternity 0%</li>
                    <li>Work-related injury 0%</li>
                  </ul>
                  <p>Competent Organization</p>
                  <p>
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="http://english.gov.cn/state_council/2014/09/09/content_281474986284102.htm"
                    >
                      Ministry of Human Resources and Social Security (MOHRSS)
                      <br />{" "}
                    </a>
                  </p>
                  <p>Management of Human Resources</p>
                  <p>&nbsp;</p>
                  <p>Recruitment</p>
                  <p>
                    <strong>Method of Recruitment</strong>
                  </p>
                  <p>
                    Recruitment is done more and more through Internet. But
                    announcements in the newspapers are the most used means for
                    the job offers. Numerous trade fairs are also organized and
                    are a good means to recruit. Recruitment campaigns in the
                    universities are also organized. The most prevalent method
                    of recruitment is the interview. Certain companies must also
                    pass technical or English tests. The psychological tests are
                    not used in China, however role playing, simulations or
                    group interviews are becoming more and more common.
                  </p>
                  <p>
                    <strong>Recruitment Agencies</strong>
                  </p>
                  <p>
                    Many recruitment agencies are found in China.&nbsp;
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="https://www.hudson.cn/en-gb/careers-at-hudson"
                    >
                      Hudson
                    </a>
                    ,&nbsp;
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="http://www.wang-li.com/"
                    >
                      Wang-li
                    </a>
                    ,&nbsp;
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="http://www.michaelpage.com.cn/"
                    >
                      Michael Page
                    </a>
                    .
                  </p>
                  <p>Recruitment Websites</p>
                  <p>
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="http://www.chinahr.com/"
                    >
                      ChinaHR.com
                      <br />{" "}
                    </a>
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="http://www.zhaopin.com/"
                    >
                      Zhaopin.com
                      <br />
                    </a>
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="http://www.51job.com/default-e.php"
                    >
                      51job.com
                      <br />{" "}
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>The Contract</p>
                  <p>
                    <strong>Type of Contract</strong>
                  </p>
                  <p>
                    Legal provisions govern work contracts and collective
                    agreements, but may be supplemented by individual
                    negotiations. Formalities regarding employment contracts and
                    recruiting conditions are strict, while dismissal
                    constraints are rather flexible. There are 3 types of
                    contracts: permanent contracts, fixed term contracts and
                    project-specific contracts.
                  </p>
                  <p>
                    <strong>Breach of Contracts</strong>
                  </p>
                  <ul>
                    <li>Retirement</li>
                  </ul>
                  <p>At the age envisaged, not before.</p>
                  <p>
                    Necessity for all the projects to submit a business plan
                    subject to approval by the competent authorities.
                  </p>
                  <ul>
                    <li>Dismissals</li>
                  </ul>
                  <p>
                    An employee can be dismissed if he has demonstrated during
                    his trial period that he was not qualified for the post,
                    when he violates the company rules, when he causes great
                    loss to the company because of professional misconduct. A
                    dismissal is also accepted when the employee after a long
                    illness cannot resume his job again or another job in the
                    company, if the employee is inefficient even after training,
                    or if no arrangement is possible between the parties on a
                    change of contract.
                  </p>
                  <ul>
                    <li>Other Possible Methods</li>
                  </ul>
                  <p>Dismissals.</p>
                  <p>Labour Laws</p>
                  <p>
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="http://www.sigma.sk/index_en.php"
                    >
                      Employment law
                      <br />{" "}
                    </a>
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="http://www.doingbusiness.org/data/exploreeconomies/China/employing-workers#_blank"
                    >
                      Doing Business: China
                    </a>
                    , to obtain a summary of labour regulations that apply to
                    local entreprises
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
                    Conflicts between employer and employee on the non respect
                    of the labor law.
                  </p>
                  <ul>
                    <li>Legal Framework</li>
                  </ul>
                  <p>
                    In the event of dispute between the employer and employee,
                    the parties can have recourse to mediation or arbitration,
                    present the case before the Court or come to a mutual
                    arrangement. During a mediation or an arbitration if one of
                    the parties has an objection to the resolution, it can
                    proceed to the Court for a lawsuit. Many contracts prescribe
                    arbitration by the China International Economic and Trade
                    Arbitration Commission (CIETAC). For contracts involving at
                    least one foreign party, offshore arbitration may be
                    adopted.
                  </p>
                  <ul>
                    <li>Procedure</li>
                  </ul>
                  <p>
                    <a
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="https://iclg.com/practice-areas/employment-and-labour-laws-and-regulations/china"
                    >
                      Employment law
                    </a>
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
                      target="_blank"
                      style={{ color: "red !important" }}
                      href="https://iclg.com/practice-areas/employment-and-labour-laws-and-regulations/china"
                    >
                      Employment Law
                    </a>
                  </p>
                  <ul>
                    <li>
                      <strong>Competent Legal Body</strong>
                    </li>
                  </ul>
                  <p>People's court</p>
                  <p>&nbsp;</p>
                  <p>Social Partners</p>
                  <p>
                    <strong>
                      Social Dialogue and Involvement of Social Partners
                    </strong>
                  </p>
                  <p>
                    While worker protests and work stoppages occur regularly,
                    the right to strike is not protected by law. China has not
                    ratified core International Labour Organisation conventions
                    on freedom of association and collective bargaining. The
                    enforcement of existing labour regulations is reportedly
                    poor. The only trade union recognised by the Chinese
                    Communist Party is the All China Federation of Trade Unions
                    (ACFTU). As independent trade unions are illegal, some
                    dispute that the ACFTU can be an effective voice for
                    workers.
                  </p>
                  <p>Unions</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://en.acftu.org/"
                    >
                      All China Federation of Trade Unions (ACFTU)
                      <br />{" "}
                    </a>
                  </p>
                  <p>Regulation Bodies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.gov.cn/state_council/2014/09/09/content_281474986284102.htm"
                    >
                      Ministry of Employment
                      <br />{" "}
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <h3 className="font-weight-bold" id="tax_system_china">
                    <strong>TAX SYSTEM</strong>
                  </h3>
                  <p> Corporate Taxes</p>
                  <p>Tax Base For Resident and Foreign Companies</p>
                  <p>
                    An enterprise is resident in China if it is established in
                    or if its place of effective management is in China.
                    Effective management is defined as substantial and overall
                    management and control over manufacturing and business
                    operations, human resources, financial and property aspects
                    of the entity. A foreign company will also be subject to tax
                    in China if it has an "establishment" in China or if it
                    derives income from China. The definition of an
                    establishment is broad and includes also independent agents.
                    When a foreign company has an establishment in China, it
                    will be subject to China tax on all income effectively
                    connected with that establishment.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Tax Rate</strong>
                  </p>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>Standard rate</p>
                        </td>
                        <td width={401}>
                          <p>25%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Small-scale enterprises (annual turnover below CYN 3
                            million)
                            <br />
                            (from 1 January 2019 to 31 December 2021)
                          </p>
                        </td>
                        <td width={401}>
                          <p>
                            5% for annual taxable income of less than CNY 1
                            million (effective tax rate of 2.5% in 2021
                            following the COVID-19 crisis)
                            <br /> 10% annual taxable income between CNY 1 and 3
                            million
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>High-technology enterprises (HNTE)</p>
                        </td>
                        <td width={401}>
                          <p>15%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Technology-advanced service enterprises</p>
                        </td>
                        <td width={401}>
                          <p>15%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Companies engaged in encouraged industries in
                            certain regions (e.g. Western Regions, Hainan Free
                            Trade Port, Lingang New Area of Shanghai Pilot Free
                            Trade Zone, etc.)
                          </p>
                        </td>
                        <td width={401}>
                          <p>15%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Key software production enterprises and IC design
                            enterprises
                          </p>
                        </td>
                        <td width={401}>
                          <p>10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Companies engaged in pollution prevention and
                            control
                            <br /> (from 1 January 2019 to 31 December 2021)
                          </p>
                        </td>
                        <td width={401}>
                          <p>15%</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>Tax Rate For Foreign Companies</p>
                  <p>
                    A non-resident enterprise that has no establishment or place
                    in China is taxed only on its China-source income. A non-tax
                    resident enterprise with an establishment or place in China
                    is subject to corporate taxes on income derived by such
                    establishment or place from sources in China as well as
                    income derived from outside the country that is effectively
                    connected with such establishment or place.
                  </p>
                  <p>Capital Gains Taxation</p>
                  <p>
                    There is no separate capital gains tax in China; capital
                    gains (and losses) of companies generally are combined with
                    other operating income and taxed at the corporate income
                    rate (25%).
                  </p>
                  <p>
                    The sale of real estate and net development costs are
                    subject to the land appreciation tax at four bands ranging
                    from 30 to 60% (depending on the percentage of gain
                    realised).
                  </p>
                  <p>Main Allowable Deductions and Tax Credits</p>
                  <p>
                    Generally, all documented expenses, costs and losses in
                    generating taxable income are deductible up to a limit:
                    entertainment expenses are 60% deductible up to 0.5% of
                    total income, advertising (up to 15% of total income, 30% in
                    some cases) and donations (up to 12% of total income;
                    although donations for poverty alleviation in certain areas
                    can be fully deducted - donations made via charitable
                    organisations or governments to counter the COVID-19
                    epidemic are fully deductible for CIT purpose).
                    Non-deductible items include dividends, management fees,
                    Enterprise Income Tax (EIT) paid and late tax payment
                    surcharge fees.
                  </p>
                  <p>
                    A deduction is allowed for amortisation of intangible
                    assets, such as, but not limited to, patents, trademarks,
                    copyrights, and&nbsp;land use rights. Intangible assets have
                    to be amortised over a period of at least ten years.
                    Organisational and start-up expenses are tax-deductible
                    fully in the first year of activity. Interest on loans is
                    also tax-deductible (subject to conditions). 200% of the
                    salary expenses paid to handicapped staff are deductible.
                  </p>
                  <p>
                    Tax losses can normally be carried forward for a maximum of
                    five years starting from the year subsequent to the year in
                    which the loss was incurred, while carryback of losses is
                    not permitted.
                  </p>
                  <p>
                    Preferential tax treatment in the form of incentives are
                    further granted to new high-technology enterprises (HNTE),
                    companies in special economic zones (SEZ) and pilot free
                    trade zones (FTZ), while exemptions may apply to
                    agriculture, forestry, fishery, software, infrastructure and
                    other specified environment and technology developments.
                  </p>
                  <p>Other Corporate Taxes</p>
                  <p>
                    A real estate tax based on the value of the property or
                    rental received is levied annually on land and buildings
                    used for business purpose or leased. The tax rate is 1.2% of
                    the original value of buildings. A tax reduction of 10% to
                    30% is commonly offered by local governments. Alternatively,
                    tax may be assessed at 12% of the rental value (may be
                    reduced to 4% for the leasing of residential property by
                    individuals).
                  </p>
                  <p>
                    A deed tax, generally at rates between 3% and 5%, may be
                    levied on the purchase, sale, gift, or exchange of ownership
                    of land use rights or real properties and paid by the
                    transferee/assignee.
                  </p>
                  <p>
                    An urban and township land-use tax is levied on taxpayers
                    who use land within the area of city, country, township, and
                    mining districts. The due amount depends on the area of
                    lands actually occupied multiplied by a fixed amount per
                    square metre determined by the local authorities. The same
                    principle applies to the arable land occupation tax, which
                    is levied on companies and individuals who build houses or
                    carry out non-agricultural construction on arable lands.
                  </p>
                  <p>
                    The sale of real estate and net development costs (or land
                    use rights) are subject to the Land Appreciation tax at 30
                    to 60% (depending on the percentage of gain realised).
                  </p>
                  <p>
                    Stamp duty (0.005% - 0.1%) is levied on specific legal
                    documents.
                  </p>
                  <p>
                    The employer contributes around 16% of basic payroll to the
                    state-administered retirement scheme, as well as to medical
                    insurance, maternity insurance, unemployment insurance, and
                    work-related injury insurance funds (bringing the total to
                    approx. 40% of base monthly salary, with actual rates
                    varying across the country).
                  </p>
                  <p>
                    An urban construction and maintenance tax is levied on the
                    amount of indirect tax (VAT, consumption tax), at a rate of
                    7% for urban areas, 5% for county areas, and 1% for other
                    areas. The same calculation base is used for the national
                    (3%) and local educational surcharge taxes (2%) paid on the
                    amount of VAT and consumption tax.
                  </p>
                  <p>
                    A motor vehicle acquisition tax is levied at 10% of
                    consideration on automobiles, tramcars, trailers, and
                    motorcycle. A vehicle and vessel tax also applies (generally
                    at fixed amounts).
                  </p>
                  <p>
                    Companies and individuals active in the entertainment and
                    advertising businesses are subject to a cultural business
                    development levy at 3% on the relevant income.
                    <br />
                    <br /> Local authorities levy a resources tax on natural
                    resources, including crude oil, natural gas, coal, salt, raw
                    metallic metals, and non-metallic metals, mineral water,
                    carbon dioxide gas, and water (in 10 provinces). This tax is
                    applied on a sales turnover or tonnage/volume basis.
                  </p>
                  <p>
                    An environmental protection tax (EPT) is levied on
                    enterprises that directly discharge taxable pollutants
                    within the Chinese territory. It is calculated based on the
                    volume of pollutants discharged multiplied by a specific EPT
                    coefficient.
                  </p>
                  <p>
                    For further information, consult the portal of the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.chinatax.gov.cn/eng/c101270/c101272/c5157954/content.html"
                    >
                      State Tax Administration
                    </a>
                    .
                  </p>
                  <p>Other Domestic Resources</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.chinatax.gov.cn/eng/home.html#_blank"
                    >
                      State Administration of Taxation of the PRC
                    </a>
                  </p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.doingbusiness.org/en/data/exploreeconomies/china/paying-taxes#_blank"
                    >
                      Doing Business: China
                    </a>
                    , to obtain a summary of taxes and mandatory contributions
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Country Comparison For Corporate Taxation</strong>
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={492}>
                          <p>
                            <strong>&nbsp;</strong>
                          </p>
                        </td>
                        <td width={67}>
                          <p>
                            <strong>China</strong>
                          </p>
                        </td>
                        <td width={73}>
                          <p>
                            <strong>East Asia &amp; Pacific</strong>
                          </p>
                        </td>
                        <td width={73}>
                          <p>
                            <strong>United States</strong>
                          </p>
                        </td>
                        <td width={98}>
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
                          <p>7.0</p>
                        </td>
                        <td>
                          <p>22.9</p>
                        </td>
                        <td>
                          <p>10.6</p>
                        </td>
                        <td>
                          <p>9.0</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>
                              Time Taken For Administrative Formalities (Hours)
                            </strong>
                          </p>
                        </td>
                        <td>
                          <p>142.0</p>
                        </td>
                        <td>
                          <p>198.0</p>
                        </td>
                        <td>
                          <p>175.0</p>
                        </td>
                        <td>
                          <p>218.0</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Total Share of Taxes (% of Profit)</strong>
                          </p>
                        </td>
                        <td>
                          <p>64.9</p>
                        </td>
                        <td>
                          <p>33.9</p>
                        </td>
                        <td>
                          <p>43.8</p>
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
                      Conditions of Transactions. **The Greater the Index, the
                      More the Manager is Personally Responsible. *** The
                      Greater the Index, the Easier it Will Be For Shareholders
                      to Take Legal Action. **** The Greater the Index, the
                      Higher the Level of Investor Protection.
                    </em>
                  </p>
                  <p>Accounting Rules</p>
                  <p>&nbsp;</p>
                  <p>Accounting System</p>
                  <p>Accounting Standards</p>
                  <p>
                    The accountancy standards for companies were put into effect
                    by the Ministry of Finances (MOF).&nbsp;China established
                    its first complete standards specific to accountancy in 1997
                    and the MOF promulgated an additional 13 standards more
                    specific to accountancy since then.
                    <br /> <br /> Chinese Accounting Standards for Business
                    Enterprises (ASBEs) are mandatory for listed Chinese
                    enterprises. Other Chinese enterprises are encouraged to
                    apply the ASBEs, which are substantially in line with IFRS,
                    except for certain modifications that reflect China’s
                    circumstances and environment. China is committed to
                    converge with IFRS.
                  </p>
                  <p>
                    Foreign Invested Enterprises (FIE) may prepare financial
                    statements in accordance with other accounting standards or
                    in other languages for global consolidation purposes.
                    However, the Chinese authorities will only recognise and
                    accept accounts in Chinese that are prepared based on
                    Chinese accounting standards.
                    <br />{" "}
                  </p>
                  <p>Accounting Regulation Bodies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.mof.gov.cn/#_blank"
                    >
                      Ministry of Finance
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.casc.org.cn/english.shtml#_blank"
                    >
                      CASC
                    </a>
                    , Chinese Committee of Accounting Standards
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cicpa.org.cn/BNIE/#_blank"
                    >
                      CICPA
                    </a>
                    , Chinese Institute of Chartered Accountants
                  </p>
                  <p>Accounting Law</p>
                  <p>
                    Initially promulgated in 1985, the Accounting Law of
                    December 1993 was updated in 1999. It includes the legal
                    standards governing accountancy and forms the base for the
                    formulation of administrative rules and regulations for
                    accounting.
                  </p>
                  <p>
                    Difference Between National and International Standards
                    (IAS/IFRS)
                  </p>
                  <p>
                    China adopted Accounting Standards for Business Enterprises
                    (ASBEs) that are substantially converged with IFRS
                    standards. ASBEs are imposed on all Chinese companies whose
                    securities trade in a public market in China. Additionally,
                    Chinese companies whose securities trade on the Stock
                    Exchange of Hong Kong have the option to choose among IFRS
                    Standards, Hong Kong Financial Reporting Standards (HKFRS),
                    and Chinese Accounting Standards (ASBEs). Acccording to
                    latest&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.ifrs.org/use-around-the-world/use-of-ifrs-standards-by-jurisdiction/china/#extent"
                    >
                      reports
                    </a>
                    &nbsp;(IFRS Foundation, 2017), 30% of Chinese companies that
                    capitalise 69% of the market in Mainland China already use
                    IFRS standards.
                  </p>
                  <p>Accounting News</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://world.einnews.com/news/china-accounting#_blank"
                    >
                      China Accounting News (EIN)
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>Accounting Practices</p>
                  <p>Tax Year</p>
                  <p>From 1 January to 31 December</p>
                  <p>Accounting Reports</p>
                  <p>
                    Audit reports normally contain a paragraph defining the
                    'task' or 'scope' and a paragraph of opinion. The paragraph
                    of opinion aims to establish if the accounts were prepared
                    according to the appropriate rules/regulations and any
                    reservations in opinion must be elaborated above.
                    <br /> <br /> Statements of financial accounts or reports
                    should comprise a balance sheet, profit and loss accounts, a
                    report of gross self-financing margin, notes on the accounts
                    and an account for appropriation of profits and losses.
                    <br /> <br /> For more information consult the website
                    of&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.chinaaccountingblog.com/"
                    >
                      China Accounting
                    </a>
                    &nbsp;operating under the Ministry of Finance.
                  </p>
                  <p>Publication Requirements</p>
                  <p>Annual publication</p>
                  <p>&nbsp;</p>
                  <p>Accountancy Profession</p>
                  <p>Accountants</p>
                  <p>
                    The Chinese Institute of Chartered Accountants oversees
                    accountants in China.
                  </p>
                  <p>Professional Accountancy Bodies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cicpa.org.cn/BNIE/#_blank"
                    >
                      CICPA
                    </a>
                    , Chinese Institute of Chartered Accountants website
                  </p>
                  <p>
                    Member of the International Federation of Accountants (IFAC)
                  </p>
                  <p>Yes</p>
                  <p>Member of Other Federation of Accountants</p>
                  <p>
                    Member of&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.ifac.org/about-ifac/membership/members/confederation-asian-and-pacific-accountants-capa"
                    >
                      the Confederation of Asian and Pacific Accountants (CAPA)
                    </a>
                    &nbsp;which represents national accountancy organisations in
                    the Asia-Pacific region.
                  </p>
                  <p>Audit Bodies</p>
                  <p>
                    Chinese law requires representative offices and
                    foreign-invested enterprises to utilise the services of
                    accountants registered in China to prepare official
                    submissions of annual financial statements and other
                    specified financial documents. Only Chinese accountants and
                    joint venture accounting firms may provide these services.
                    Companies must seek a statutory auditor to conduct an annual
                    audit of the financial health of their organisation. To find
                    an auditor, contact the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.audit.gov.cn/en/"
                    >
                      National Audit Office of China (CNAO).
                      <br />
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>Consumption Taxes</p>
                  <p>Nature of the Tax</p>
                  <p>Value added tax (VAT) and Consumption tax</p>
                  <p>Standard Rate</p>
                  <p>
                    While the standard rate is 13%, it varies depending on the
                    taxpayer status, type of product and service and type of
                    sector.
                  </p>
                  <p>Reduced Tax Rate</p>
                  <p>
                    Goods and services taxable at 3% include: certain taxable
                    used goods; consignment goods sold by consignment agencies;
                    certain goods sold by pawnbrokers; specific duty-free items
                    sold by duty-free shops; certain electricity produced by
                    qualified hydroelectric-generating businesses; certain
                    construction materials; certain biological products; tap
                    water (rate applies if the taxpayer chooses simplified
                    computation method with no input tax recovery);&nbsp;
                    certain concrete cement goods sold by general VAT taxpayers;
                    non-academic education services; interest income from
                    agricultural loans provided by Agricultural Development Bank
                    of China and its affiliates; certain rare disease drugs
                    (orphan drugs).
                    <br /> <br /> Goods and services taxable at 5% include
                    labour dispatching service and human resource outsourcing
                    service.
                  </p>
                  <p>
                    Goods and services taxable at 6% include: R&amp;D and
                    technology services; information and technology services;
                    culture and creative services; logistics supporting
                    services; authentication and consulting services; radio,
                    film and television services; business supporting services;
                    other modern services; value-added telecommunication
                    services; loan services; direct financial services;
                    insurance services; financial product trading; cultural and
                    sports services; education and medical services; tourism and
                    entertainment services; catering and accommodation services;
                    daily services; other lifestyle services; sales of
                    intangible assets.
                  </p>
                  <p>
                    Goods and services taxable at 9% include: agricultural
                    products (including grains); tap water; heating; liquefied
                    petroleum gas; natural gas; edible vegetable oil; air
                    conditioning; hot water; coal gas; coal products for
                    household use; food-grade salt; farm machinery; fodder,
                    pesticides; agricultural film; fertilizers; methane gas;
                    dimethyl ether; books; newspapers; magazines; audio-visual
                    products; transportation services; postal services; basic
                    telecommunication services; construction services; sales of
                    immovable properties acquired or developed after 1 May 2016;
                    leasing of immovable properties; transfer of land use
                    rights.
                  </p>
                  <p>
                    Zero-rated (exempt-with-credit) goods and services include:
                    exports of goods (excluding prohibited or restricted
                    exports) and&nbsp; services rendered by domestic entities or
                    individuals to overseas entities and consumed entirely
                    outside the country, including international transportation
                    services, including transportation services for Hong Kong,
                    Macau and Taiwan; space transportation services; research
                    and development services; contractual energy performance
                    services; design services; radio, film and television
                    programs (works) production and distribution services;
                    software services; circuit design and test service;
                    information systems services; business process management
                    services; offshore outsourcing services, including
                    information technology outsourcing (ITO), business process
                    outsourcing (BPO) and knowledge process outsourcing (KPO);
                    technology transfer.
                  </p>
                  <p>
                    Taxpayers that supply items eligible for VAT reduction must
                    book these sales separately. Otherwise, no reduction
                    applies.
                  </p>
                  <p>Exclusion From Taxation</p>
                  <p>
                    Exempt goods include: agricultural products produced and
                    sold by primary agricultural producers; contraceptive
                    medicines and appliances; antique books; imported equipment
                    and apparatus used directly for scientific education,
                    scientific research, development and experiments; imported
                    products and equipment in the form of free economic
                    assistance from foreign governments and international
                    organizations; products imported by organizations for the
                    handicapped for their exclusive use; sale of second hand
                    goods by individuals.
                    <br /> Several cross-border services are also exempt,
                    including construction service for the construction project
                    outside China; warehousing services for storage locations;
                    radio, film and television programs broadcast services;
                    cultural and sports services, education and medical
                    services, tourism and certain postal services; etc.
                    <br /> Taxpayers that supply items eligible for tax
                    exemption must book these sales separately. Otherwise, no
                    tax exemption applies.
                  </p>
                  <p>Method of Calculation, Declaration and Settlement</p>
                  <p>
                    The sales or importation of goods, the provision of
                    services, and the sales of intangible properties and
                    immovable properties are subject to VAT, whose rate is
                    applicable on volume (taxation by volume) or on the value of
                    the goods (ad valorem taxation).&nbsp;In general, VAT
                    returns must be filed on a monthly basis and submitted
                    before the 15th day of the following month. Those importing
                    goods must pay VAT within 15 days after the issuance of the
                    tax payment certificate by the customs authorities.
                    <br /> There are two classes of taxpayers: general
                    taxpayers, which are taxpayers with an annual turnover of
                    CNY 5 million or more; and small-scale taxpayers, which are
                    taxpayers with an annual turnover below this threshold.
                    <br />
                    <br /> For more information, consult the official website of
                    the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.chinatax.gov.cn/eng/home.html"
                    >
                      State Taxation Administration
                    </a>
                    .<br />
                  </p>
                  <p>Other Consumption Taxes</p>
                  <p>
                    Consumption tax applies to prescribed nonessential and
                    luxury or resource-intensive goods (including alcohol,
                    luxury cosmetics, fuel oil, jewellery, motorcycles, motor
                    vehicles, petrol, yachts, golf products, luxury watches,
                    disposable wood chopsticks, tobacco, certain cell and
                    coating products), and it mainly affects companies involved
                    in producing or importing these goods. The tax is calculated
                    based on the sales value of the goods, the sales volume or a
                    combination of the two. Exports are exempt.
                  </p>
                  <p>
                    A tobacco tax is levied on the purchase of tobacco leaves
                    within the country's territory, at the rate of 20% on the
                    purchasing value.
                  </p>
                  <p>
                    Stamp duties may be levied on specific legal documents
                    (rates between 0.005%-0.1%).
                  </p>
                  <p>
                    China levies a motor vehicle acquisition tax&nbsp;on the
                    purchase and importation of cars, motorcycles, trams,
                    trailers, carts, and certain types of trucks.&nbsp;The rate
                    is equal to 10% of the taxable consideration. A&nbsp;vehicle
                    and vessel tax is also levied at fixed
                    amounts&nbsp;according to the weight.
                  </p>
                  <p>
                    A&nbsp;vessel tonnage tax is levied on any vessel entering
                    into a port inside the territory of China from overseas,
                    calculated according to the tonnage multiplied by the
                    applicable tax rate that is determined based on the net
                    tonnage and the term of the tonnage tax license.
                  </p>
                  <p>Individual Taxes</p>
                  <p>Tax Base For Residents and Non-Residents</p>
                  <p>
                    Individuals who reside in China for 183 days or more in a
                    tax year are considered residents for taxation purposes.
                    <br /> Are considered China-domiciled the individuals who
                    maintain residence in China because of their legal residency
                    status, family, or economic ties and who habitually reside
                    in China.
                    <br /> Residents are taxed on their national and
                    international incomes. Non-residents are taxed on the
                    incomes earned in China.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Tax Rate</strong>
                  </p>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>Income from Wages/Salaries</p>
                        </td>
                        <td width={401}>
                          <p>Progressive rates</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Annual taxable income (after deducting the standard
                            basic deduction, specific deductions, specific
                            additional deductions, and other allowable
                            deductions)
                          </p>
                        </td>
                        <td width={401}>&nbsp;</td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 0 - 36,000</p>
                        </td>
                        <td width={401}>
                          <p>3%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 36,000 - 144,000</p>
                        </td>
                        <td width={401}>
                          <p>10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 144,000 - 300,000</p>
                        </td>
                        <td width={401}>
                          <p>20%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 300,000 - 420,000</p>
                        </td>
                        <td width={401}>
                          <p>25%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 420,000 - 660,000</p>
                        </td>
                        <td width={401}>
                          <p>30%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 660,000 - 960,000</p>
                        </td>
                        <td width={401}>
                          <p>35%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 960,001 and above</p>
                        </td>
                        <td width={401}>
                          <p>45%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Income from Private Businesses</p>
                        </td>
                        <td width={401}>
                          <p>
                            Progressive rates (Taxable income = Total Revenue -
                            Costs - Expenses - Losses)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 0 - 30,000</p>
                        </td>
                        <td width={401}>
                          <p>5%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 30,000 - 90,000</p>
                        </td>
                        <td width={401}>
                          <p>10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 90,000 - 300,000</p>
                        </td>
                        <td width={401}>
                          <p>20%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 300,000 - 500,000</p>
                        </td>
                        <td width={401}>
                          <p>30%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 500,001 and above</p>
                        </td>
                        <td width={401}>
                          <p>35%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Non-resident (employment income, remuneration for
                            labour services, author’s remuneration,royalties -
                            calculated&nbsp;by each category on a monthly or
                            transaction basis)
                          </p>
                        </td>
                        <td width={401}>
                          <p>Progressive rates (3-45%)</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 0 - 3,000</p>
                        </td>
                        <td width={401}>
                          <p>3%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 3,000 - 12,000</p>
                        </td>
                        <td width={401}>
                          <p>10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 12,000 - 25,000</p>
                        </td>
                        <td width={401}>
                          <p>20%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 25,000 - 35,000</p>
                        </td>
                        <td width={401}>
                          <p>25%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 35,000 - 55,000</p>
                        </td>
                        <td width={401}>
                          <p>30%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 55,000 - 80,000</p>
                        </td>
                        <td width={401}>
                          <p>35%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>CNY 80,001 and above</p>
                        </td>
                        <td width={401}>
                          <p>45%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Incidental income,&nbsp;rental income, interest
                            income, dividends, and capital gains
                          </p>
                        </td>
                        <td width={401}>
                          <p>Flat rate at 20%</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>Allowable Deductions and Tax Credits</p>
                  <p>
                    Deductions and allowances are available, depending on the
                    category of income. For wages and salaries received in
                    China, individuals also receive a flat monthly deduction of
                    CNY 5,000.
                  </p>
                  <p>
                    Personal basic contributions are deductible. These include
                    payments to housing funds and certain medical insurance,
                    pension and unemployment insurance payments. Taxable income
                    from personal services, royalties and remuneration from
                    manuscripts and the leasing of property is net of a standard
                    deduction for expenses that is equal to 20% of total income.
                    Reasonable business expenses incurred in earning income from
                    a business are deductible. Rental income is also subject to
                    deduction (according to the monthly amount received). For
                    sales of property, the original cost of the property and
                    reasonable expenses incurred are deductible from the sales
                    proceeds to determine the taxable income.
                  </p>
                  <p>
                    Certain specific deductions also apply, including: child
                    education (CNY 1,000 per child per month); continued
                    education (CNY 400 per month or 3,600 per year depending on
                    the type of qualified continued education); mortgage
                    interest (CNY 1,000 per month); rental expense (CNY 800,
                    1,100, or 1,500 per month depending on the location);
                    elderly care (up to CNY 2,000 per month depending on the
                    status of the taxpayer); major medical expense (qualified
                    self-paid portion above CNY 15,000 and capped at CNY 80,000
                    per year for each eligible individual).
                  </p>
                  <p>
                    Charitable contributions to qualified domestic non-profit
                    organisations are deductible up to 30% of taxable income.
                  </p>
                  <p>
                    Losses from privately-owned business and sole proprietorship
                    enterprise can be carried forward for five years.
                  </p>
                  <p>Special Expatriate Tax Regime</p>
                  <p>
                    Residents&nbsp;are subject to individual income tax on their
                    worldwide income. Non-residents&nbsp;are
                    generally&nbsp;taxed only on their China-sourced income.
                    <br /> For the rates applied on non-residents' income
                    derived from employment, remuneration for labour services,
                    author’s remuneration, royalties, see the table above.
                  </p>
                  <p>
                    Certain categories of income are considered China-sourced
                    income regardless of whether the payments are made within
                    China or not, including:
                  </p>
                  <ul>
                    <li>
                      Income derived from employment or contracted labour
                      services performed within the territory of China
                    </li>
                    <li>
                      Rental income in relation to property used within the
                      territory of China
                    </li>
                    <li>
                      Income derived from the transfer of real property located
                      within China&nbsp;or other property transfer transactions
                      incurred within the territory of China
                    </li>
                    <li>
                      Income derived through the grant of various franchises to
                      be used within the territory of China
                    </li>
                    <li>
                      Interest and dividend income paid by companies,
                      enterprises, other&nbsp;organisations, or resident
                      individuals within the territory of China.
                    </li>
                  </ul>
                  <p>
                    When calculating taxable employment income for
                    non-residents, IIT law only allows the standard basic
                    deduction of CNY 5,000 per month.
                  </p>
                  <p>Capital Tax Rate</p>
                  <p>
                    A fixed income tax rate of 20% is applicable to income from
                    rental income, interest income, dividends, and capital
                    gains, unless specifically reduced.
                    <br /> Social security contributions vary according to the
                    region (consult a list&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://taxsummaries.pwc.com/ID/Peoples-Republic-of-China-Individual-Other-taxes"
                    >
                      here
                    </a>
                    ).
                  </p>
                  <p>
                    Consumption tax applies to prescribed nonessential and
                    luxury or resource-intensive goods (including alcohol,
                    luxury cosmetics, fuel oil, jewellery, motorcycles, motor
                    vehicles, petrol, yachts, golf products, luxury watches,
                    disposable wood chopsticks, tobacco, certain cell and
                    coating products), and it mainly affects companies involved
                    in producing or importing these goods. The tax is calculated
                    based on the sales value of the goods, the sales volume or a
                    combination of the two. Exports are exempt.
                  </p>
                  <p>
                    A real estate tax based on the value of the property or
                    rental received is levied annually on land and buildings
                    used for business purpose or leased. The tax rate is 1.2% of
                    the original value of buildings. A tax reduction of 10% to
                    30% is commonly offered by local governments. Alternatively,
                    tax may be assessed at 12% of the rental value.
                  </p>
                  <p>
                    A land appreciation tax is levied on the gain from the
                    disposal of properties at progressive rates ranging from 30%
                    to 60%. A deed tax, with rates generally ranging between 3%
                    and 5%, may be levied on the purchase, sale, gift, or
                    exchange of ownership of land use rights or real properties
                    and paid by the transferee/assignee.
                  </p>
                  <p>
                    No inheritance, estate, or gift taxes are currently levied
                    in China.
                  </p>
                  <p>Double Taxation Treaties</p>
                  <p>
                    Countries With Whom a Double Taxation Treaty Have Been
                    Signed
                  </p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://taxsummaries.pwc.com/peoples-republic-of-china/corporate/withholding-taxes#_blank"
                    >
                      International tax treaties signed by China
                    </a>
                  </p>
                  <p>Withholding Taxes</p>
                  <p>
                    Withholding tax rates in China are 10% for dividends,
                    interest and royalties paid to non-resident companies. When
                    paid to resident and non-resident individuals, the rate is
                    20%.
                    <br /> A 6% VAT generally applies to interests and royalties
                    (which could be waived in case of royalties paid for
                    technology transfer).
                  </p>
                  <p>Bilateral Agreement</p>
                  <p>
                    The United Kingdom and China are bound by a&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/729869/consol-china-ukDTA.pdf"
                    >
                      double taxation treaty
                    </a>
                    .
                  </p>
                  <p>Sources of Fiscal Information</p>
                  <p>Tax Authorities</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.pwc.com/gx/en/services/tax/navigate-the-tax-measures-in-response-to-Covid-19.html?c=China&tax-trade-regulatory=corporate-income-tax%3Bvat-gst%3Bcustoms-duties%3Bother-indirect-taxes-excise-other%3Bproperty-tax%3Bgeneral-tax-administration-measure%3Bother-taxes&workforce=personal-income-tax%3Bsocial-security-contribution%3Bother-employment-labour-tax%3Bretirement-and-pensions%3Breward-and-benefits%3Blabour-law%3Bimmigration-travel-restrictions-and-entry-bans%3Bimmigration-quarantine-measures&finance-and-liquidity=general%3Bindividuals%3Bsmes%3Bcorporates%3Binsolvency-law%3Bfurther-information%3Bother&operations=contract-law%3Bcyber-privacy-law%3Bcorporate-law#_blank"
                    >
                      Overview of China's tax measures in response to Covid-19
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.chinatax.gov.cn/eng/home.html#_blank"
                    >
                      State Taxation Administration
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.gov.cn/#_blank"
                    >
                      State Council of the PRC
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.fmprc.gov.cn/mfa_eng/wjb_663304/zzjg_663340/cws_665320/#_blank"
                    >
                      Department of Finance
                    </a>
                  </p>
                  <p>Other Domestic Resources</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.customs.gov.cn/#_blank"
                    >
                      China Customs
                    </a>
                  </p>
                  <p>Country Guides</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://taxsummaries.pwc.com/peoples-republic-of-china#_blank"
                    >
                      PWC Tax Guide - China
                    </a>
                  </p>
                  <h3 className="mt-5" id="china_legal_enviornment">
                    <strong>LEGAL ENVIRONMENT</strong>
                  </h3>
                  <br />
                  <h6> Business Contract</h6>
                  <p>General Observation</p>
                  <p>
                    You must specifically define the obligations of each party.
                  </p>
                  <p>Law Applicable to the Contract</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.wipo.int/edocs/lexdocs/laws/en/cn/cn137en.pdf"
                    >
                      Law on contracts
                    </a>
                  </p>
                  <p>Advisable Incoterms</p>
                  <p>
                    Preferably an&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.iccwbo.org/incoterms/preambles/pdf/FOB.pdf"
                    >
                      FOB
                    </a>
                    &nbsp;or&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://iccwbo.org/resources-for-business/incoterms-rules/incoterms-rules-2010/"
                    >
                      CIF
                    </a>
                    &nbsp;incoterm should be chosen.
                  </p>
                  <p>Language of Domestic Contract</p>
                  <p>
                    The contracts can be written in English and Chinese. But in
                    the event of conflict, Chinese contract will prevail, it is
                    thus necessary to pay great attention to the translation.
                  </p>
                  <p>Other Laws Which Can Be Used in Domestic Contracts</p>
                  <p>Possible, if the two parties agree.</p>
                  <h2>Intellectual Property</h2>
                  <p>National Organisations</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.cnipa.gov.cn/"
                    >
                      China National Intellectual Property Administration
                    </a>
                    &nbsp;(CNIPA)
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.chinatrademarkoffice.com/index.php?"
                    >
                      Trademark Office
                    </a>
                    &nbsp;(SAIC)
                  </p>
                  <p>Regional Organisations</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.apec.org/Groups/Committee-on-Trade-and-Investment/Intellectual-Property-Rights-Experts-Group"
                    >
                      Expert Group on Intellectual Property Rights (IPEG)
                    </a>
                  </p>
                  <p>International Membership</p>
                  <p>
                    Member of the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.wipo.int/portal/index.html.en"
                    >
                      WIPO
                    </a>
                    &nbsp;(World Intellectual Property Organization)
                    <br /> Signatory to the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.wipo.int/treaties/en/ip/paris/trtdocs_wo020.html"
                    >
                      Paris Convention
                    </a>
                    &nbsp;For the Protection of Intellectual Property
                    <br /> Membership to the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.wto.org/english/tratop_e/trips_e/trips_e.htm"
                    >
                      TRIPS agreement
                    </a>
                    &nbsp;- Trade-Related Aspects of Intellectual Property
                    Rights (TRIPS)
                  </p>
                  <p>&nbsp;</p>
                  <h4>National Regulation and International Agreements</h4>
                  <p>&nbsp;</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={267}>
                          <p>
                            <strong>Type of property and law</strong>
                          </p>
                        </td>
                        <td width={267}>
                          <p>
                            <strong>Validity</strong>
                          </p>
                        </td>
                        <td width={267}>
                          <p>
                            <strong>International Agreements Signed</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width={267}>
                          <p>
                            Patent
                            <br /> &nbsp;
                            <br /> Patent Law 1992
                          </p>
                        </td>
                        <td width={267}>
                          <p>20 years, non renewable</p>
                        </td>
                        <td width={267}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/pct/en/"
                            >
                              Patent Cooperation Treaty (PCT)
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={267}>
                          <p>
                            Trademark
                            <br /> &nbsp;
                            <br /> Law on Marks
                          </p>
                        </td>
                        <td width={267}>
                          <p>10 years, renewable indefinitely</p>
                        </td>
                        <td width={267}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/treaties/en/ip/tlt/"
                            >
                              Trademark Law Treaty
                            </a>
                            <br />{" "}
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/treaties/en/registration/madrid_protocol/"
                            >
                              Protocol Relating to the Madrid Agreement
                            </a>
                            &nbsp;Concerning the International Registration of
                            Marks
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={267}>
                          <p>
                            Design
                            <br /> &nbsp;
                            <br /> Patent Law
                          </p>
                        </td>
                        <td width={267}>
                          <p>10 years</p>
                        </td>
                        <td width={267}>
                          <p>&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={267}>
                          <p>
                            Copyright
                            <br /> &nbsp;
                            <br /> Copyright Law
                          </p>
                        </td>
                        <td width={267}>
                          <p>
                            During the lifetime of the author and 50 years after
                            his or her death
                          </p>
                        </td>
                        <td width={267}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/treaties/en/ip/berne/trtdocs_wo001.html"
                            >
                              Berne convention
                            </a>
                            &nbsp;For the Protection of Literary and Artistic
                            Works
                            <br />{" "}
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/treaties/en/ip/phonograms/"
                            >
                              Convention for the Protection of Producers of
                              Phonograms
                            </a>
                            &nbsp;Against Unauthorized Duplication of Their
                            Phonograms
                            <br />{" "}
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/treaties/en/ip/rome/"
                            >
                              Rome Convention
                            </a>
                            For the Protection of Performers, Producers of
                            Phonograms and Broadcasting Organizations
                            <br />{" "}
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/treaties/en/ip/wct/"
                            >
                              WIPO Copyright Treaty
                            </a>
                            <br />{" "}
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/treaties/en/text.jsp?file_id=295578"
                            >
                              WIPO Performances and Phonograms Treaty
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td width={267}>
                          <p>
                            Industrial Models
                            <br /> &nbsp;
                            <br /> Patent Law
                          </p>
                        </td>
                        <td width={267}>
                          <p>10 years</p>
                        </td>
                        <td width={267}>
                          <p>&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h2>Legal Framework of Business</h2>
                  <h3>Equity of Judgments</h3>
                  <p>Equal Treatment of Nationals and Foreigners</p>
                  <p>
                    The judiciary does not guarantee an impartial trial to a
                    foreign national. A high degree of corruption has been
                    reported in the country and within the CCP.
                  </p>
                  <p>The Language of Justice</p>
                  <p>Mandarin-Chinese</p>
                  <p>Recourse to an Interpreter</p>
                  <p>Possible</p>
                  <p>Legal Similarities</p>
                  <p>
                    The legal system is based on the Confucian philosophy of the
                    social order by moral education.&nbsp;After the 1911
                    revolution, the Republic of China mainly adopted a legal
                    code of Western type inspired by the German law. The
                    establishment of the People's Republic of China in 1949
                    brought a Soviet system influenced by socialism.&nbsp;There
                    does not exist a tradition of constructive law in China and
                    the first civil code dates from the beginning of the year
                    1980. As compared to the Western laws, it is written in a
                    rather incomplete fashion, which leaves an important place
                    for arbitrary judgements.&nbsp;The law is subject currently
                    to a progressive reform encouraged by external and internal
                    pressures. The constitution in force currently was
                    promulgated in December 1982.
                  </p>
                  <p>&nbsp;</p>
                  <h3>The Different Legal Codes</h3>
                  <p>&nbsp;</p>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>
                            Base of the state, individuals rights, and private
                            property&nbsp;returned in constitution in 2004
                          </p>
                        </td>
                        <td width={401}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.hrichina.org/en/2004-amended-constitution"
                            >
                              Constitution of 1982
                            </a>
                            &nbsp;(after 2004 amendments)
                            <br />{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Regulations on the litigations on environmental
                            protection, taxation and customs, the quality of
                            products, and opposition to&nbsp;administrative
                            decisions
                          </p>
                        </td>
                        <td width={401}>
                          <p>
                            Administrative Law and&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.wipo.int/edocs/lexdocs/laws/en/cn/cn156en.pdf"
                            >
                              Administrative Procedure Law
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Civil Law (Property law and the General Law on
                            Registered Trademarks)
                          </p>
                        </td>
                        <td width={401}>
                          <p>
                            Civil law,&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.wipo.int/edocs/lexdocs/laws/en/cn/cn012en.pdf"
                            >
                              Civil Law Procedure
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Criminal Law
                            <br />{" "}
                          </p>
                        </td>
                        <td width={401}>
                          <p>
                            Criminal law and&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.fmprc.gov.cn/ce/cgvienna/eng/dbtyw/jdwt/crimelaw/t209043.htm"
                            >
                              Criminal Procedure Law
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Labor Law</p>
                        </td>
                        <td width={401}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.npc.gov.cn/zgrdw/englishnpc/Law/2007-12/12/content_1383754.htm"
                            >
                              Labour Law
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Commercial Law</p>
                        </td>
                        <td width={401}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/edocs/lexdocs/laws/en/cn/cn137en.pdf"
                            >
                              Law on Contracts
                            </a>
                            ,&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://english.mofcom.gov.cn/article/policyrelease/Businessregulations/201303/20130300046121.shtml"
                            >
                              Law on Prices
                            </a>
                            ,&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/edocs/lexdocs/laws/en/cn/cn124en.pdf"
                            >
                              Foreign Trade Law
                            </a>
                            ,&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/edocs/lexdocs/laws/en/cn/cn174en.pdf"
                            >
                              Law of Protection of Consumers
                            </a>
                            , and&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.wipo.int/edocs/lexdocs/laws/en/cn/cn011en.pdf"
                            >
                              Law against Unfair Competition
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Company Law</p>
                        </td>
                        <td width={401}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.ilo.org/dyn/natlex/docs/ELECTRONIC/92643/108008/F-186401967/CHN92643%20Eng.pdf"
                            >
                              Companies Law,
                            </a>
                            &nbsp;Law on Foreign Company Venture Capital,
                            and&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://english.mofcom.gov.cn/aarticle/lawsdata/chineselaw/200301/20030100062858.html"
                            >
                              WFOE Law.
                              <br />{" "}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>Checking National Laws Online</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.loc.gov/law/help/legal-research-guide/china.php"
                    >
                      China Legislative Network System
                    </a>
                  </p>
                  <p>Other Useful Resources</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.chinalawblog.com/"
                    >
                      China Law Blog
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.llrx.com/2003/01/features-a-complete-research-guide-to-the-laws-of-the-peoples-republic-of-china-prc/"
                    >
                      LLRX.com
                    </a>
                    , research guide to the Laws of China
                  </p>
                  <p>
                    Learn more about&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://globaltrade.net/international-trade-import-exports/expert-service-provider/China/Legal.html#_blank"
                    >
                      Lawyers and Legal in China&nbsp;
                    </a>
                    on Globaltrade.net, the Directory for&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.globaltrade.net/"
                    >
                      International Trade Service Providers.
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <h3>The Jurisdictions</h3>
                  <p>&nbsp;</p>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>Supreme People's Court</p>
                        </td>
                        <td width={401}>
                          <p>
                            Highest Court in the legal system of China. Hong
                            Kong and Macao are out of the jurisdiction of
                            supreme people's court.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Intermediate People's Court</p>
                        </td>
                        <td width={401}>
                          <p>
                            The trial courts are responsible for criminal and
                            civil cases.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Special Courts</p>
                        </td>
                        <td width={401}>
                          <p>
                            Military court, Court of railway transport and
                            Maritime Court of China.
                            <br />{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Supreme People's Procuratorate</p>
                        </td>
                        <td width={401}>
                          <p>
                            They exert their authority in cases endangering the
                            safety of the State and public safety, damaging the
                            economic order and violating the personal and
                            democratic rights of the citizens and other
                            important criminal causes.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <h3>Court Officials</h3>
                  <p>
                    The judge
                    <br />{" "}
                  </p>
                  <p>
                    The Judge exerts the legal authority of the Government
                    according to the law, he must judge a case according to the
                    law.
                    <br /> The judges are also cross-examiners who examine the
                    witnesses.
                    <br /> Differing from traditional courts, only evidence
                    presented in the court is considered.
                    <br />{" "}
                  </p>
                  <p>The prosecutor</p>
                  <p>Law minister</p>
                  <p>
                    Justice and prison administration,&nbsp;governs the lawyer's
                    profession&nbsp;and&nbsp;supervises the examinations of
                    admission to the law profession.
                  </p>
                  <p>Lawyers</p>
                  <p>
                    The lawyer has an advisory role towards his client and must
                    defend him.
                  </p>
                  <p>Ministry of public safety</p>
                  <p>
                    It is the authority of the police force. The police is
                    responsible for maintenance of law and order,&nbsp;conduct
                    investigations and arrest suspects in criminal cases.
                    <br /> May intervene in settling disagreements between
                    private individuals.
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    Learn more about&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.globaltrade.net/international-trade-import-exports/f/business/China/Legal-and-Compliance.html#_blank"
                    >
                      Legal and Compliance in China&nbsp;
                    </a>
                    on Globaltrade.net, the Directory for&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.globaltrade.net/"
                    >
                      International Trade Service Providers.
                    </a>
                  </p>
                  <h2>International Dispute Resolution</h2>
                  <p>Arbitration</p>
                  <p>
                    China has several institutions for arbitration such as China
                    International Economic and Trade Arbitration Commission (
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cietac.org/?l=en"
                    >
                      CIETAC
                    </a>
                    ). Only litigations containing an "external element" can be
                    arbitrated outside China.
                  </p>
                  <p>Arbitration Law</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cietac.org/index.cms"
                    >
                      Arbitration law inspired from the&nbsp;CNUDCI&nbsp;model
                    </a>
                  </p>
                  <p>
                    Conformity to International Commercial Arbitration Rules
                  </p>
                  <p>
                    Party to the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.uncitral.org/uncitral/en/uncitral_texts/arbitration/NYConvention.html"
                    >
                      New York Convention
                    </a>
                    &nbsp;on the Recognition and Enforcement of Foreign Arbitral
                    Awards.
                  </p>
                  <p>Appointment of Arbitrators</p>
                  <p>
                    The arbitration court comprises three arbitrators except for
                    claims for an amount lower than 500000 RMB or if the parties
                    can settle it otherwise. Each party can appoint an
                    arbitrator or authorize the president of the CIETAC to name
                    an arbitrator.
                  </p>
                  <p>Arbitration Procedure</p>
                  <p>
                    The official language is Chinese (except decision expressed
                    by the parties). Arbitration can begin only after the
                    plaintiff has lodged a request with the secretariat of the
                    arbitration committee. The opposing party will have to
                    present its written defense and evidence. An attempt at
                    conciliation will be initially made. The court of
                    arbitration will have to deliver its sentence in the 6
                    months following the date of constitution of the arbitration
                    court. The final decision made by the court of arbitration
                    is final, obligatory for the 2 parties and
                    irrevocable.&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cietac.org/index.cms"
                    >
                      For more information, see the CIETAC site.
                    </a>
                  </p>
                  <p>Permanent Arbitration Bodies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.ipr.gov.cn/ipr/en/info/Article.jsp?a_no=71403&col_no=934&dir=200704"
                    >
                      Center of Intellectual Property arbitration
                    </a>
                    &nbsp;(Sectors Covered: Intellectual Property)
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cietac.org.cn/index_english.shtml"
                    >
                      International Economic and Commercial Arbitration
                      Commission (CIETAC)
                    </a>
                    &nbsp;(Sectors Covered: Economic and commercial)
                  </p>
                  <p>
                    Learn more about&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://globaltrade.net/international-trade-import-exports/expert-service-provider/China/Legal.html#_blank"
                    >
                      Lawyers and Legal in China&nbsp;
                    </a>
                    on Globaltrade.net, the Directory for&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.globaltrade.net/"
                    >
                      International Trade Service Providers.
                    </a>
                  </p>
                  <h3
                    className="font-weight-bold"
                    id="china_foreign_investment"
                  >
                    FOREIGN INVESTMENT
                  </h3>
                  <p> FDI in Figures</p>
                  <p>
                    According to the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://unctad.org/system/files/official-document/wir2021_en.pdf"
                    >
                      2021 World Investment Report
                    </a>
                    &nbsp;published by UNCTAD, FDI inflows into China actually
                    increased by 6% in 2020, to USD 149 billion, up from USD 141
                    billion in 2019. This was also the result of successful
                    pandemic containment measures and rapid recovery. The stock
                    of FDI in 2020 reached USD 1 918 billion, an exponential
                    growth when compared to 2010 when the stock was USD 587
                    billion. The faster return to positive GDP growth in the
                    second quarter of 2020 and the lifting of investment
                    restrictions helped support investment. The service sector
                    led growth, accounting for more than 70% of inflows; FDI
                    accelerated especially in technology-related industries.
                    With the aim of boosting investment, the government expanded
                    the number of industries open to FDI, lifted restrictions on
                    foreign investment in key industries and amended the
                    negative list for foreign investment in pilot free trade
                    zones, which increased by 11%. M&amp;A sales increased by 97
                    % (to USD 19 billion), mainly in the ICT and pharmaceutical
                    industries. The value of new greenfield investments
                    announced in 2020 contracted substantially in sectors such
                    as transport and automotive. In 2020, China was ranked the
                    world's second largest FDI recipient after the United States
                    and before Hong Kong. The country is the largest recipient
                    in Asia and the leading investing country in terms of FDI
                    outflows. China's main investors have remained broadly
                    stable. Inflows from the US and Europe have dropped, but
                    regional investment has continued to increase as flows from
                    ASEAN countries grow. Hong Kong, Singapore, the Virgin
                    Islands, South Korea, the Cayman Islands, Japan, Germany and
                    the United States are major investors. Investments are
                    mainly oriented towards manufacturing, real estate, leasing
                    business and services, computer services, wholesale and
                    retail trade, financial intermediation, scientific research,
                    transport, energy, and construction.
                  </p>
                  <p>
                    China was ranked 31st out of 190 countries in the World
                    Bank's&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.doingbusiness.org/content/dam/doingBusiness/country/c/china/CHN.pdf"
                    >
                      2020 Doing Business report
                    </a>
                    , a major improvement from 2019, when it was
                    ranked&nbsp;46th&nbsp;out of 190.&nbsp;China was one of the
                    top 10 economies to improve the most between the 2019 and
                    the 2020 reports.&nbsp;This progress reflects improvement in
                    a wide array of subcomponents ranging from procedures for
                    starting a business to measures to improve electricity
                    access and get construction permits.&nbsp;The country
                    demonstrated reform agendas that aim to improve the business
                    regulatory environment in the country over the course of
                    several years. The reforms mainly focus on increasing the
                    efficiency of business processes, such as tax cuts, trade
                    with tariff cuts, and reduced barriers to foreign
                    investors.&nbsp;In order to attract further foreign
                    investment, the country has introduced mechanisms to improve
                    the delivery of major foreign investment projects, reduce
                    import tariffs, streamline customs clearance, and establish
                    an online filing system to regulate FDI.&nbsp;With a wealth
                    of employees and potential partners eager to learn and
                    evolve, the country is a base for low cost production, which
                    makes it an attractive market for investors. Nevertheless,
                    certain factors can hinder investments, such as China’s lack
                    of transparency, legal uncertainty, low level of protection
                    of intellectual property rights, corruption or protectionist
                    measures which favour local businesses. FDI inflows to the
                    high-tech sector have been rising significantly and
                    currently account for almost a third of total inflows.
                  </p>
                  <p>&nbsp;</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={434}>
                          <p>
                            <strong>Foreign Direct Investment</strong>
                          </p>
                        </td>
                        <td width={123}>
                          <p>
                            <strong>2017</strong>
                          </p>
                        </td>
                        <td width={123}>
                          <p>
                            <strong>2018</strong>
                          </p>
                        </td>
                        <td width={123}>
                          <p>
                            <strong>2019</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <strong>FDI Inward Flow&nbsp;</strong>
                            <em>(million USD)</em>
                          </p>
                        </td>
                        <td>
                          <p>136,315</p>
                        </td>
                        <td>
                          <p>138,305</p>
                        </td>
                        <td>
                          <p>141,225</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>FDI Stock&nbsp;</strong>
                            <em>(million USD)</em>
                          </p>
                        </td>
                        <td>
                          <p>1,489,956</p>
                        </td>
                        <td>
                          <p>1,628,261</p>
                        </td>
                        <td>
                          <p>1,769,486</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Number of Greenfield Investments*</strong>
                          </p>
                        </td>
                        <td>
                          <p>765</p>
                        </td>
                        <td>
                          <p>871</p>
                        </td>
                        <td>
                          <p>835</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={434}>
                          <p>
                            <strong>
                              Value of Greenfield Investments (million USD)
                            </strong>
                          </p>
                        </td>
                        <td>
                          <p>54,180</p>
                        </td>
                        <td>
                          <p>111,464</p>
                        </td>
                        <td>
                          <p>61,999</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <em>Source: UNCTAD, Latest available data.</em>
                  </p>
                  <p>
                    <em>
                      Note: * Greenfield Investments are a form of Foreign
                      Direct Investment where a parent company starts a new
                      venture in a foreign country by constructing new
                      operational facilities from the ground up.
                    </em>
                  </p>
                  <p>&nbsp;</p>
                  <p>FDI STOCKS BY COUNTRY AND BY INDUSTRY</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>Main Investing Countries</strong>
                          </p>
                        </td>
                        <td width={144}>
                          <p>
                            <strong>2019, in %</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>Hong Kong</strong>
                          </p>
                        </td>
                        <td>
                          <p>69.7</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>Singapore</strong>
                          </p>
                        </td>
                        <td>
                          <p>5.5</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>South Korea</strong>
                          </p>
                        </td>
                        <td>
                          <p>4.0</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>Virgin Islands</strong>
                          </p>
                        </td>
                        <td>
                          <p>3.6</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>Japan</strong>
                          </p>
                        </td>
                        <td>
                          <p>2.7</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>USA</strong>
                          </p>
                        </td>
                        <td>
                          <p>1.9</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>Cayman Islands</strong>
                          </p>
                        </td>
                        <td>
                          <p>1.8</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={253}>
                          <p>
                            <strong>Germany</strong>
                          </p>
                        </td>
                        <td>
                          <p>1.2</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>Main Invested Sectors</strong>
                          </p>
                        </td>
                        <td width={112}>
                          <p>
                            <strong>2019, in %</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>Manufacturing</strong>
                          </p>
                        </td>
                        <td>
                          <p>25.5</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>Real estate</strong>
                          </p>
                        </td>
                        <td>
                          <p>17.0</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>Leasing and business services</strong>
                          </p>
                        </td>
                        <td>
                          <p>16.0</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>
                              Information transmission, computer services and
                              software
                            </strong>
                          </p>
                        </td>
                        <td>
                          <p>10.6</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>
                              Scientific research, technical service and
                              geologic prospecting
                            </strong>
                          </p>
                        </td>
                        <td>
                          <p>8.0</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>Wholesale and retail trade</strong>
                          </p>
                        </td>
                        <td>
                          <p>6.5</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>Financial intermediation</strong>
                          </p>
                        </td>
                        <td>
                          <p>5.1</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>Transport, storage and post</strong>
                          </p>
                        </td>
                        <td>
                          <p>3.3</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>
                              Production and supply of electricity, gas and
                              water
                            </strong>
                          </p>
                        </td>
                        <td>
                          <p>2.5</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={285}>
                          <p>
                            <strong>Construction</strong>
                          </p>
                        </td>
                        <td>
                          <p>0.8</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <em>Source:&nbsp;</em>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.stats.gov.cn/tjsj/ndsj/2019/indexeh.htm"
                    >
                      <em>China Statistical Yearbook, 2020</em>
                    </a>
                    <em>&nbsp;- Latest available data.</em>
                  </p>
                  <p>&nbsp;</p>
                  <p>Form of Company Preferred By Foreign Investors</p>
                  <p>WFOE</p>
                  <p>Form of Establishment Preferred By Foreign Investors</p>
                  <p>Holding</p>
                  <p>Main Foreign Companies</p>
                  <p>
                    A substantial number of foreign multinationals operate in
                    China: GM, KFC, Cummins (CMI), Starbucks, Apple, Intel
                    (INTC), Dell Computer (DELL), Texas Instruments (TXN),
                    Walmart, Nike (NKE), Gucci, Abercrombie &amp; Fitch, Toyota
                    and Samsung.
                  </p>
                  <p>Sources of Statistics</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.fdi.gov.cn/"
                    >
                      Invest in China
                    </a>
                  </p>
                  <p>What to consider if you invest in China</p>
                  <p>Strong Points</p>
                  <p>Strong points for FDI in China include:</p>
                  <ul>
                    <li>
                      The largest internal market in the world, with 1.44
                      billion potential customers
                    </li>
                    <li>
                      Sovereign risk contained as public debt remains mainly
                      domestic and denominated in local currency
                    </li>
                    <li>
                      Importance of foreign currency reserves and public debt
                      owned by Chinese government and individuals
                    </li>
                    <li>
                      A well-developed production sector (manufacturing sector
                      and heavy industry)
                    </li>
                    <li>
                      A favourable geographic location (close to emerging Asian
                      markets, to Japan, maritime frontage)
                    </li>
                    <li>
                      Top economy in terms of purchasing power parity (PPP)
                      thanks to rapid growth of the economy
                    </li>
                    <li>
                      Labour costs remain comparatively low, although the
                      situation is changing in certain areas
                    </li>
                    <li>
                      New opportunities with the development of the western
                      provinces (particularly Sichuan province)
                    </li>
                    <li>
                      Development of a new export network (Silk Road network)
                    </li>
                  </ul>
                  <p>Weak Points</p>
                  <p>Some of the disadvantages for FDI in China include:</p>
                  <ul>
                    <li>An ever-changing legal environment</li>
                    <li>Bureaucratic and administrative complexities</li>
                    <li>
                      A lack of transparency and weak intellectual property
                      rights protection
                    </li>
                    <li>Ageing population</li>
                    <li>High level of corporate indebtedness</li>
                    <li>Production overcapacity in several sectors</li>
                    <li>
                      A strongly degraded environmental situation in several big
                      cities
                    </li>
                    <li>
                      Cultural differences in business practices that may be
                      difficult for foreigners to learn and apply in new
                      business situations
                    </li>
                    <li>
                      Underdeveloped middle management and low rate of qualified
                      workers
                    </li>
                  </ul>
                  <p>Government Measures to Motivate or Restrict FDI</p>
                  <p>
                    Generally speaking, the Chinese government is more
                    restrictive than other big economies in regard to foreign
                    investment, with numerous sectors closed to FDI. State
                    companies and "national flagships" are protected
                    (discriminatory practises, non-independent judicial power,
                    selective application of regulations). Until a few months
                    ago, the Chinese state required forced technology transfer
                    and its system of intellectual property protection was among
                    the weakest in most industrialised countries.
                  </p>
                  <p>
                    The Chinese government encourages investment in the
                    following industries or sectors: high technology, production
                    of equipment or new materials, service sector, recycling,
                    use of renewable energies and protection of the environment.
                    In addition, the country appears to discourage foreign
                    investment in key sectors, for which China seeks to
                    transform domestic firms into globally competitive
                    multinational corporations and sectors that have
                    historically benefited from state monopolies or
                    traditionally of State. The government also discourages
                    investments intended to profit from speculation (money, real
                    estate, or assets). In addition, the government plans to
                    limit foreign investment in resource-intensive and highly
                    polluting industries.
                    <br /> <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://mg2.mofcom.gov.cn/article/policy/China/201909/20190902898870.shtml"
                    >
                      The Law on Foreign Investments of the People's Republic of
                      China
                    </a>
                    , adopted at the second session of the 13th National
                    People's Congress on 15 March 2019, has been in force since
                    1 January 2020. The new Foreign Investment Law seeks to
                    address common complaints from foreign businesses and
                    governments. The Law specifically prohibits the government
                    and government officials from forcing transfer of
                    technology, while technology cooperation on the basis of
                    free will and business rules is encouraged by the state.
                    Indeed, article 22 stats that the State shall protect the
                    intellectual property rights of foreign investors and
                    foreign-funded enterprises. The law also gives the
                    possibility to foreign investors to receive the same
                    treatment when they apply for licences (article 30) and
                    participate in public procurement (article 16). The
                    competent departments for commerce (
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.mofcom.gov.cn/"
                    >
                      Ministry of Commerce
                    </a>
                    ) and for investment (
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://en.ndrc.gov.cn/"
                    >
                      National Development and Reform Commission
                    </a>
                    ) are delegated major responsibility to promote, protect and
                    manage foreign investment.
                    <br /> <br /> On June 23, 2020, the National Development and
                    Reform Commission (NDRC) and the Ministry of Commerce (MOF)
                    jointly issued two "negative lists" (on Foreign Investment
                    and Free Trade Zone Special Administrative Measures) and a
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.china-briefing.com/news/china-foreign-investment-access-increased-draft-2020-encouraged-catalogue/"
                    >
                      &nbsp;draft edition
                    </a>
                    &nbsp;of the Catalogue of Encouraged Industries for Foreign
                    Investment. Compared with the 2019 edition (
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://images.mofcom.gov.cn/wzs/201906/20190629212356599.pdf"
                    >
                      full list in Chinese available here),
                    </a>
                    &nbsp;the proposed 2020 Foreign Investment encouraged
                    catalogue has been further lengthened, with 125 new
                    industries added and 76 previously listed industries
                    amended. There are no major changes compared to the 2019
                    catalogue; it welcomes more FDI in the following three main
                    areas of China: high-end production; production-oriented
                    service industries; China’s central, western, and
                    northeastern provinces.
                  </p>
                  <p>Protection of Foreign Investment</p>
                  <p>Bilateral Investment Conventions Signed By China</p>
                  <p>
                    China has signed bilateral agreements for investments with
                    several countries. To see the list of the countries,
                    consult&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://investmentpolicy.unctad.org/country-navigator/45/china"
                    >
                      UNCTAD website.
                    </a>
                  </p>
                  <p>International Controversies Registered By UNCTAD</p>
                  <p>
                    The ISDS Navigator contains information about known
                    international arbitration cases initiated by investors
                    against States pursuant to international investment
                    agreements.&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://investmentpolicy.unctad.org/investment-dispute-settlement/country/42/china"
                    >
                      China
                    </a>
                    &nbsp;is involved in 6 cases as Home State of claimant and
                    in 3 cases as Respondent State.
                  </p>
                  <p>
                    Organizations Offering Their Assistance in Case of
                    Disagreement
                  </p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cietac.org/index.cms"
                    >
                      CIETAC
                    </a>
                    &nbsp;, The International Commission of Economic and
                    Commercial Arbitrage
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://icsid.worldbank.org/"
                    >
                      ICSID
                    </a>
                    &nbsp;, International Center for settlement of Investment
                    Disputes
                  </p>
                  <p>Member of the Multilateral Investment Guarantee Agency</p>
                  <p>
                    China is a signatory of the Convention of
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.miga.org/"
                    >
                      &nbsp;MIGA
                    </a>
                    .
                  </p>
                  <p>&nbsp;</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={424}>
                          <p>
                            <strong>
                              Country Comparison For the Protection of Investors
                            </strong>
                          </p>
                        </td>
                        <td width={81}>
                          <p>
                            <strong>China</strong>
                          </p>
                        </td>
                        <td width={89}>
                          <p>
                            <strong>East Asia &amp; Pacific</strong>
                          </p>
                        </td>
                        <td width={89}>
                          <p>
                            <strong>United States</strong>
                          </p>
                        </td>
                        <td width={119}>
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
                            <strong>Index of Transaction Transparency*</strong>
                          </p>
                        </td>
                        <td>
                          <p>10.0</p>
                        </td>
                        <td>
                          <p>5.0</p>
                        </td>
                        <td>
                          <p>7.4</p>
                        </td>
                        <td>
                          <p>5.0</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Index of Manager’s Responsibility**</strong>
                          </p>
                        </td>
                        <td>
                          <p>1.0</p>
                        </td>
                        <td>
                          <p>5.0</p>
                        </td>
                        <td>
                          <p>8.6</p>
                        </td>
                        <td>
                          <p>5.0</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Index of Shareholders’ Power***</strong>
                          </p>
                        </td>
                        <td>
                          <p>5.0</p>
                        </td>
                        <td>
                          <p>6.0</p>
                        </td>
                        <td>
                          <p>9.0</p>
                        </td>
                        <td>
                          <p>5.0</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <em>Source: Doing Business - Latest available data.</em>
                  </p>
                  <p>
                    <em>
                      Note: *The Greater the Index, the More Transparent the
                      Conditions of Transactions. **The Greater the Index, the
                      More the Manager is Personally Responsible. *** The
                      Greater the Index, the Easier it Will Be For Shareholders
                      to Take Legal Action. **** The Greater the Index, the
                      Higher the Level of Investor Protection.
                    </em>
                  </p>
                  <p>Procedures Relative to Foreign Investment</p>
                  <p>Freedom of Establishment</p>
                  <p>
                    The Foreign Investment Law of the People's Republic of China
                    implements a “pre-establishment national treatment” plus
                    “negative list management” system for foreign investment.
                    “Pre-establishment national treatment” refers to the
                    treatment given to foreign investors and their investments
                    with regard to market access, which may not be less
                    favourable than that given to their domestic investors and
                    their investments. The “negative list” refers to the special
                    administrative measures for the access of foreign investment
                    in specific fields, which will be issued or approved for
                    issue by the State Council. The Law provides that the state
                    grant national treatment to foreign investment that are not
                    included in the negative list.
                  </p>
                  <p>Acquisition of Holdings</p>
                  <p>
                    The acquisition of majority interest in a local company is
                    authorised in China.&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://iclg.com/practice-areas/mergers-and-acquisitions-laws-and-regulations/china"
                    >
                      M&amp;A activities
                    </a>
                    &nbsp;are subject to different regulations depending on
                    whether the company is a public, a non-listed public company
                    or foreign.
                    <br />{" "}
                  </p>
                  <p>Obligation to Declare</p>
                  <p>
                    The&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.fdi.gov.cn/1800000121_10000041_8.html"
                    >
                      China International Investment Promotion Agency
                    </a>
                    &nbsp;facilitates the distribution of information on
                    necessary authorisations for establishing a business in the
                    country. All proposed foreign investment projects in China
                    must be submitted for 'verification' and approval to the
                    National Development and Reform Commission (NDRC) or to
                    provincial or local Development and Reform Commissions
                    (depending on the sector and value of the investment.
                  </p>
                  <p>Competent Organisation For the Declaration</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://en.ndrc.gov.cn/"
                    >
                      National Development and Reform Commission (NDRC)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.mofcom.gov.cn/"
                    >
                      Ministry of Commerce (MOFCOM)
                    </a>
                  </p>
                  <p>Requests For Specific Authorisations</p>
                  <p>
                    Business plans must be submitted for approval to competent
                    authorities prior to the beginning of business activity. If
                    a foreign investor intends to establish a foreign-funded
                    enterprise by merging a domestic enterprise in accordance
                    with these provisions, he/she shall be subject to the
                    approval of the “examination and approval organ” and modify
                    the registration or go through the establishment
                    registration in the “registration administrative organ”.
                    “Examination and approval organ” refers to the Ministry of
                    Commerce. The term “registration administrative organ”
                    refers to the State Administration for Industry and Commerce
                    (SAIC) or its authorized local administrations for industry
                    and commerce. Chinese State-Owned Enterprises are often the
                    targets of foreign investors. Although, it is important to
                    note that additional rules apply to the purchase of
                    State-Owned Enterprises by foreign investors in China.
                    Greenfield investment projects must also seek approval from
                    China's Environmental Protection Ministry and its Ministry
                    of Land Resources.
                  </p>
                  <p>
                    Learn more about&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.globaltrade.net/international-trade-import-exports/expert-service-provider/China/Investment.html#_blank"
                    >
                      Foreign Investment in China&nbsp;
                    </a>
                    on Globaltrade.net, the Directory for&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.globaltrade.net/"
                    >
                      International Trade Service Providers.
                    </a>
                  </p>
                  <p>Office Real Estate and Land Ownership</p>
                  <p>Possible Temporary Solutions</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.alibaba.com/countrysearch/CN/temporary-site-office.html"
                    >
                      Rental and Business center.&nbsp;
                    </a>
                  </p>
                  <p>
                    The Possibility of Buying Land and Industrial and Commercial
                    Buildings
                  </p>
                  <p>
                    Foreigners are allowed to buy their property only after
                    having worked or studied in China for at least one
                    year.&nbsp; They are only entitled to own one property in
                    China and it must only be used for residential
                    purposes.&nbsp; Commercial or industrial property can only
                    be purchased after a company has been incorporated in China.
                  </p>
                  <p>Risk of Expropriation</p>
                  <p>
                    The risk of expropriation is high. Article 20 of the Foreign
                    Investment Law of the People's Republic of China stipulates
                    that the government shall not expropriate investments made
                    by foreign investors. Only in special circumstances
                    (national security and obstacles to large civil engineering
                    projects), the State may expropriate or requisition an
                    investment made by foreign investors for public interest in
                    accordance with the law. Such expropriation or requisition
                    shall be carried out in accordance with the procedures of
                    law and fair and reasonable compensation shall be given in a
                    timely manner.
                  </p>
                  <p>Investment Aid</p>
                  <p>Forms of Aid</p>
                  <p>
                    Foreign investors enjoy corporate tax reductions, exemptions
                    of tax on dividends repatriated during a certain period and
                    other tax advantages. Moreover, foreign direct investment
                    incentives include packages of reduced income taxes,
                    resource and land use fees, and import/export duties, as
                    well as priority treatment in obtaining basic infrastructure
                    services, streamlined Government approvals, and funding
                    support for start-ups. The Ministry of Commerce&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.mofcom.gov.cn/"
                    >
                      (MOFCOM)
                    </a>
                    &nbsp;can be contacted for any information concerning
                    opportunities in China.
                  </p>
                  <p>
                    According to the Notice on Implementing the Policy of
                    Inclusive Tax Relief for Small and Micro Enterprises,
                    published by the Ministry of Finance in January 2019, China
                    expanded existing preferential policies for small and
                    low-profit enterprises. Companies with annual taxable income
                    below RMB 1 million (US$147,290) per year can benefit from a
                    preferential corporate income tax (CIT) rate of 20 per cent,
                    they are only taxed on 25 per cent of their income, while
                    the remaining 75 per cent is tax-free.
                  </p>
                  <p>Privileged Domains</p>
                  <p>
                    China encourages foreign investment primarily in high
                    technology, clean energy and export-oriented sectors.
                  </p>
                  <p>Privileged Geographical Zones</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.china-briefing.com/news/chinas-economic-development-zones-types-incentives/"
                    >
                      China's Economic Development Zones (EDZs)
                    </a>
                    &nbsp;are areas with preferential trade policies which
                    differ from those governing the country as a whole. EDZs
                    provide a wide range of incentives for FDI, which vary
                    according to the EDZ specification. Companies operating in
                    EDZs can expect, among other incentives, a higher level of
                    autonomy over their operations, a variety of tax exemptions,
                    subsidies for land and buildings and preferential employment
                    policies.
                  </p>
                  <p>Free Zones</p>
                  <p>
                    In China there are many special trade zones. These special
                    zones provide exceptions to the standard customs procedures
                    and allow tax exemptions or tax incentives to attract
                    overseas investments. They are primarily the 5 special
                    economic zones and the 14 coastal cities. The special zones
                    are Shenzhen (at the border of Hong-Kong), Zhuhaï (close to
                    Macau), Shantou, Xiamen (vis-à-vis Taiwan) and the island of
                    Hainan. They were selected because they were completely
                    under-developed.
                  </p>
                  <p>
                    The 14 coastal cities are Dalian (in the province of
                    Liaonong), Shanghai, Ningbo, Wenzhou (in the province of
                    Zhejiang), Fuzhou (in the province of Fujian), Guangzhou,
                    Zhanjiang (in the province of Guangdong), Beihai (in the
                    autonomous region of Guangxi Zhuang), Tianjin, Yantai,
                    Qingdao (in the province of Shandong) and Lianyungang,
                    Nantong (in the province of Jiangsu). For the past few
                    years, other cities have also been regarded as coastal towns
                    profiting from the same status. Unlike the 5 special zones,
                    these cities were not underdeveloped, but key industrial
                    centres in China. Overseas investment has facilitated
                    improvements to the infrastructure and the creation of new,
                    more advanced ones.
                    <br /> <br /> In August 2019, China announced that it will
                    expand the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.china-briefing.com/news/china-free-trade-zones-six-provinces/"
                    >
                      Pilot Free Trade Zones (FTZs)
                    </a>
                    &nbsp;to six new provinces across the country. These are
                    Jiangsu, Shandong, Hebei, Heilongjiang, Guanxi and Yunnan,
                    bringing the total number of Chinese FTZs from 12 to 18.
                  </p>
                  <p>Organizations Which Finance</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.fdi.gov.cn/"
                    >
                      Invest in China&nbsp;
                    </a>
                    - Investment Promotion Agency of Ministry of Commerce (CIPA)
                    is engaged in Chinese investment promotion process and in
                    charge of “Inviting in” (FDI in China) and “Going global”
                    (outbound investment) two-way investment promotion work.
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>Investment Opportunities</p>
                  <p>The Key Sectors of the National Economy</p>
                  <p>
                    Manufacturing sector, automobile industry, information and
                    communication technology, aeronautics, energy (including
                    nuclear energy), services, finance, building, tourism,
                    health, agriculture, mining extraction, health, online sales
                    (largest world market), transport infrastructure
                  </p>
                  <p>High Potential Sectors</p>
                  <p>
                    Chemical industry, insurance and bank, high technology,
                    renewable energy, environment, waste treatment, franchises,
                    medical devices.&nbsp;
                  </p>
                  <p>Privatization Programmes</p>
                  <p>
                    China, whose economy is mixed, has a high number of
                    state-owned corporations. Many of these firms suffer from
                    disadvantages such as over-indebtedness and low efficiency,
                    among others. The Chinese state wants to open these firms to
                    private capital. Partial privatisation of numerous Chinese
                    state-owned enterprises has been discussed since 1993,
                    without having led to deep changes in the Chinese economic
                    landscape. Under the government of President Xi Jinping, the
                    mixed-ownership reform, which injects private capital into
                    state-owned enterprises, is being promoted. One example of a
                    privatisation effort is that at the end of 2016, the state
                    announced the end of its monopoly on salt production. To
                    date the effort is progressing but is still subject to
                    resistance.
                  </p>
                  <p>Tenders, Projects and Public Procurement</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.tendertiger.co.in/quicksearch.aspx?st=qs&SerCat=10&SerText=China&tt=&si=&ct=1"
                    >
                      Tenders Tiger
                    </a>
                    , Tenders in China
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.tendersinfo.com/global-china-tenders.php"
                    >
                      Tenders Info: Global Procurement Facilitator
                    </a>
                    , Tenders in China
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.adb.org/site/business-opportunities/main"
                    >
                      Asian Development Bank
                    </a>
                    , Procurement Plans in Asia
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.dgmarket.com/tenders/"
                    >
                      DgMarket
                    </a>
                    , Tenders Worldwide
                  </p>
                  <p>Sectors Where Investment Opportunities Are Fewer</p>
                  <p>Monopolistic Sectors</p>
                  <p>
                    The Negative List for Market Access (
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.ndrc.gov.cn/xxgk/zcfb/fzggwl/202006/P020200624549035288187.pdf"
                    >
                      2020 chinese edition
                    </a>
                    ) refers to a list of prohibited or restricted industries
                    for foreign investment.&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.dezshira.com/library/legal/special-administrative-measures-access-foreign-investment-2020-edition-national-negative-list.html?1593598930"
                    >
                      The new 2020 National Negative List
                    </a>
                    &nbsp;aims to accelerate the process of further opening key
                    areas in service industries. It has further relaxed foreign
                    investment’s access to the manufacturing and agriculture
                    sectors compared to the 2019 Negative List. The main
                    restrictions are on the following sectors: Production and
                    supply of electricity, heat, gas and water; Transportation,
                    warehousing and postal industries; Information transmission,
                    software and information technology services; leasing and
                    business service; Scientific research and technical
                    services.
                  </p>
                  <p>Finding Assistance For Further Information</p>
                  <p>Investment Aid Agency</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.fdi.gov.cn/1800000121_10000041_8.html"
                    >
                      Invest in China (Ministry of Commerce of the People's
                      Republic of China)
                    </a>
                  </p>
                  <p>Other Useful Resources</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.mofcom.gov.cn/"
                    >
                      Ministry of Commerce (People's Republic of China)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.china.org.cn/index.htm"
                    >
                      China Internet Information Center (The authorized
                      government portal on China)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cciip.org.cn/"
                    >
                      Chinese Council for International Investment Promotion (in
                      Chinese)
                    </a>
                  </p>
                  <p>Doing Business Guides</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www2.deloitte.com/us/en/pages/mergers-and-acquisitions/articles/china-investment-guide.html"
                    >
                      China Investment Guide (Deloitte)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.export.gov/article?series=a0pt0000000PAtVAAW&type=Country_Commercial__kav"
                    >
                      Exporting to China (U.S. Department of Commerce)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.hawksford.com/our-global-reach/china/business-guides"
                    >
                      Guides to doing business in mainland China (Hawksford
                      China)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.pinsentmasons.com/out-law/guides/doing-business-in-china-part-1---overview"
                    >
                      Doing business in China (Pinsent Masons)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.mayerbrown.com/en/perspectives-events/publications/brochures/2019/09/guide-to-doing-business-in-china"
                    >
                      Guide to Doing Business in China (Mayer Brown)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://uk.practicallaw.thomsonreuters.com/8-501-1377?transitionType=Default&contextData=(sc.Default)&firstPage=true&bhcp=1"
                    >
                      Doing business in China (Thomson Reuters Practical Law)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://nhglobalpartners.com/doing-business-in-china/"
                    >
                      Extensive Guide on Doing Business in China (New Horizons
                      Global Partners)
                    </a>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <h3
                    className="font-weight-bold"
                    id="china_business_practices"
                  >
                    BUSINESS PRACTICES
                  </h3>
                  <h6>Business culture</h6>
                  <p>The Fundamental Principles of Business Culture</p>
                  <p>
                    Chinese business culture is largely influenced by
                    Confucianism. Thus, primarily, the Confucian concept
                    of&nbsp;<em>Guanxi</em>&nbsp;means that a relationship
                    network is crucial and based on the values of solidarity,
                    loyalty, modesty and courtesy. Second, hierarchy in China,
                    both in business and privacy, is purely vertical and highly
                    respected. Third, Chinese people will be careful to save
                    face in order to protect individual reputations, influence
                    and dignity. Some of these values have slowed down over the
                    last decade and modern Western business approaches are
                    gaining ground.
                  </p>
                  <p>
                    Because they don’t want to lose face, Chinese are often risk
                    averse. Strict procedures exist for the decision-making
                    process. Decisions are made by all the relevant people after
                    several meetings and subordinates are not expected to
                    express their opinion. Decision-makers will consider
                    problems, alternatives and solutions on a long-term social
                    perspective, as a result of which the process may be
                    perceived as slow-moving. Deciding too quickly will be
                    frowned upon by your Chinese partners. Hierarchical
                    differences must be respected, and trying to circumvent them
                    will almost always retard decision-making.
                  </p>
                  <p>
                    Chinese people often seek long-term relationships and create
                    relations rather than negotiate contracts. Negligence to
                    cultivate a personal basis of a business relationship might
                    provoke a failure to meet business objectives. Establishing
                    the relationship can last from several days to several
                    months. It includes formal meetings as well as home visits,
                    invitations to sport events, long dinners and drinks.
                  </p>
                  <p>First Contact</p>
                  <p>
                    In China, distrust and suspicion often characterise
                    interactions with strangers. The most effective way to
                    develop your relationship is to include an intermediary in
                    the process. Your business associate must be a trusted
                    business associate of your potential partner. The
                    intermediary will help you to be accepted quicker
                    (“Guanxi”); obtain better information on your potential
                    partners and avoid a misstep on local customs.
                  </p>
                  <p>Time Management</p>
                  <p>
                    Chinese people value punctuality, so arrive on time for
                    meetings. If you are late, you should call your partner to
                    inform about your delay and be sure to offer an apology for
                    your tardiness. Sticking to a strict meeting schedule is not
                    common, as Chinese prefer meetings where the end of the
                    appointment is rarely timed in advance.
                  </p>
                  <p>Greetings and Titles</p>
                  <p>
                    When meeting someone for the first time, the use of some
                    Chinese words will impress. You should give a light and
                    lingering handshake, initiated by your Chinese counterpart.
                    It is customary to look down and physical proximity must be
                    avoided. Nodding and smiling are also very common greetings.
                    It is advised to address your business partners with a
                    professional title and their name. If a person does not have
                    a professional title, use "Mr.", "Madam", "Miss" plus the
                    name. Note that most Chinese names use the surname first
                    (for example a&nbsp; Mr. Lee Hong would be addressed as Mr.
                    Lee).
                  </p>
                  <p>Gift Policy</p>
                  <p>
                    Giving and receiving gifts symbolise the beginning of a
                    relationship. The gift should not be too expensive and
                    always wrapped. Gifts are often refused two or three times
                    before being accepted and are rarely opened in front of the
                    gift giver. The gift must be given and/or received with both
                    hands.&nbsp;&nbsp;
                  </p>
                  <p>Dress Code</p>
                  <p>
                    The dress code is formal and discreet (a suit). However, the
                    dress code is expected to reflect success, without being
                    ostentatious: you should wear good quality clothes, watches,
                    shoes etc.
                  </p>
                  <p>Business Cards</p>
                  <p>
                    Business cards are exchanged upon meeting a new person and
                    follow a strict protocol. The card must be printed in
                    Chinese and English. Present your business card with both
                    hands and ensure that the side printed in Chinese is turned
                    towards your contact. Receive the card of your Chinese
                    associate with both hands (never with just the left hand),
                    read it with attention, and put it away carefully. And do
                    not write on the card in the presence of your business
                    partner.
                  </p>
                  <p>Meetings Management</p>
                  <p>
                    Business meetings are often long and will be needed several
                    times to establish a sustainable relationship. It is advised
                    to have recourse to interpretation services to avoid the
                    language barrier. During discussions, it is common to have
                    small talk to break the ice.
                  </p>
                  <p>
                    Most of the time, Chinese are indirect communicators.
                    Disagreement will not be clearly expressed. Phrases such as
                    ‘Yes but it might be difficult’ and ‘Yes, probably’ are
                    preferred. To deliver bad news while preserving a good
                    relationship, it is common to use an intermediary who can
                    soften the blow. Periods of silence are an integral part of
                    the reflection and should not be interrupted.&nbsp; It is
                    highly recommended not to interrupt the speaker.
                  </p>
                  <p>
                    Chinese use a very limited amount of body language. The
                    first person of your team to enter in the room must be the
                    highest-ranked and will seat at the place of honour directly
                    in front of the host. He/she will handle negotiations with
                    the Chinese team leader. The rest of the team will support
                    the leader if asked for it. Bargaining is an integral part
                    of Chinese culture, and one should avoid accepting a
                    proposition without bargaining, as it can be viewed as a
                    sign of weakness. During negotiations, do not use
                    psychological pressure tactics, as you could be seen as a
                    manipulator. Only a person of a higher rank will speak, so
                    make sure to appoint a superior of your group. Keep in mind
                    that the objective is to determine if it is possible to
                    establish a harmonious relationship to make a deal.
                  </p>
                  <p>
                    &nbsp;It is common that you are offered food and drinks
                    during a meeting. Business meals are an important part of
                    business relations and people must sit down and eat in order
                    of importance. Do not finish all your food because your
                    Chinese partners will think you are still hungry. If you
                    invite someone to an activity or have a meal, you are
                    expected to pay for it. However, try not to show your money
                    in front of your guests.
                  </p>
                  <p>Sources for Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.commisceo-global.com/resources/country-guides/south-africa-guide"
                    >
                      Commisceo Global
                    </a>
                  </p>
                  <p>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.worldbusinessculture.com/country-profiles/south-africa/#_blank"
                    >
                      World Business Culture&nbsp;
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://culturalatlas.sbs.com.au/south-african-culture/south-african-culture-core-concepts#_blank"
                    >
                      Culture Atlas
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.expatcapetown.com/business-etiquette.html#_blank"
                    >
                      Expat Cape Town
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://afktravel.com/57094/business-etiquette-in-south-africa/#_blank"
                    >
                      AFK travel
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <h2>Opening Hours</h2>
                  <p>Opening Hours and Days</p>
                  <p>Monday to Friday: 8:30 a.m. to 5:00 p.m.</p>
                  <p>Saturday: 8:00 a.m. to 1:00 p.m.</p>
                  <p>&nbsp;</p>
                  <h4>Public Holidays</h4>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>New Year</p>
                        </td>
                        <td width={401}>
                          <p>1 January</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Lunar New Year</p>
                        </td>
                        <td width={401}>
                          <p>February</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Women's Day</p>
                        </td>
                        <td width={401}>
                          <p>8 March</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Qing Ming Festival</p>
                        </td>
                        <td width={401}>
                          <p>April</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Labour Day</p>
                        </td>
                        <td width={401}>
                          <p>1 May</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Youth Day</p>
                        </td>
                        <td width={401}>
                          <p>4 May</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Children's Day</p>
                        </td>
                        <td width={401}>
                          <p>1 June</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Dragon Boat Festival</p>
                        </td>
                        <td width={401}>
                          <p>June</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Army Day</p>
                        </td>
                        <td width={401}>
                          <p>1 August</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Teachers' Day</p>
                        </td>
                        <td width={401}>
                          <p>9 September</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>National Day</p>
                        </td>
                        <td width={401}>
                          <p>1 October</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <h4>Periods When Companies Usually Close</h4>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>Labour Day</p>
                        </td>
                        <td width={401}>
                          <p>1 May</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Spring Festival</p>
                        </td>
                        <td width={401}>
                          <p>One week off</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.gov.cn/"
                    >
                      Site of the Chinese government
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <h3
                    className="font-weight-bold"
                    id="china_entry_requirements"
                  >
                    ENTRY REQUIREMENTS
                  </h3>
                  <h6> Passport and Visa Requirements</h6>
                  <p>Passport and Visa Service</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.chinese-embassy.org.uk/eng/visa/#_blank"
                    >
                      Visa information provided by the Chinese Embassy in the UK
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://lawandborder.com/wp-content/uploads/2012/07/Exit-Entry-Administration-Law-2012-07-05.pdf#_blank"
                    >
                      Consult the Exit Entry Administration Law (PRC)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.fmprc.gov.cn/mfa_eng/wjb_663304/zwjg_665342/2490_665344/#_blank"
                    >
                      Addresses of Consulates or Embassies of the People's
                      Republic of China
                    </a>
                  </p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.iatatravelcentre.com/international-travel-document-news/1580226297.htm#_blank"
                    >
                      Latest Travel News in connection with the Coronavirus
                      (COVID-19) outbreak (International Air Transport
                      Association)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/#_blank"
                    >
                      Coronavirus disease (COVID-2019) daily situation reports
                      (World Health Organisation)
                    </a>
                  </p>
                  <p>Contact the Embassy</p>
                  <p>
                    Contact the Embassy of&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.chinese-embassy.org.uk/"
                    >
                      China&nbsp;
                    </a>
                    in the United Kingdom.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Check&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.iatatravelcentre.com/CN-China-passport-visa-health-travel-document-requirements.htm"
                    >
                      IATA Travel Website
                    </a>
                    &nbsp;for visa requirements and health advices.
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <h2>
                    Taxes and Restrictions On Persons When Going Through Customs
                  </h2>
                  <p>Taxation On Persons</p>
                  <p>None</p>
                  <p>Tobacco</p>
                  <p>
                    400 cigarettes (600 cigarettes for stays longer than 6
                    months).
                  </p>
                  <p>Alcohol</p>
                  <p>
                    Two bottles (not exceeding 750 ml each) of alcoholic drinks
                    (4 bottles for stays longer than 6 months).
                  </p>
                  <p>Perfume</p>
                  <p>A reasonable quantity of perfume for personal use.</p>
                  <p>Foreign Currency</p>
                  <p>Not exceeding 1000 USD (5000 USD for non-residents).</p>
                  <p>Obligatory Declaration of Foreign Currency</p>
                  <p>From 10,000 EUR.</p>
                  <p>Local Currency</p>
                  <p>Limited to 20,000 CNY.</p>
                  <p>Obligatory Declaration of Local Currency</p>
                  <p>Yes</p>
                  <p>How to Refund Consumption Tax</p>
                  <p>Other Requirements</p>
                  <p>
                    Weapons, ammunition, pornographic material (some photographs
                    from standard western magazines can fall in this category),
                    radio transmitters/receivers, exposed but undeveloped film
                    rolls, fruits, some vegetables, political and religious
                    brochures (a certain number of religious documents for
                    personal use is tolerated) are prohibited.
                  </p>
                  <h2>Health Precautions</h2>
                  <p>Obligatory Vaccination and Other Recommendations</p>
                  <p>
                    It is recommended that everyone 16 years of age and older
                    should get fully vaccinated for COVID-19 before travel and
                    present, if necessary, evidence of&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines"
                    >
                      COVID-19 vaccination
                    </a>
                    &nbsp;at the border. The updated information on all health
                    entry requirements as well as on routine and recommended
                    vaccines for China are provided on the dedicated pages
                    on&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://travelhealthpro.org.uk/country/49/china#Vaccine_recommendations"
                    >
                      TravelHealthPro
                    </a>
                    &nbsp;and&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/china?s_cid=ncezid-dgmq-travel-single-001"
                    >
                      CDC
                    </a>
                    &nbsp;websites.
                    <br />
                    While there are no official requirements for vaccination,
                    the following are strongly recommended: tetanus, diphtheria,
                    typhoid fever, chickenpox, influenza, measles, rabies,
                    hepatitis A and B, meningococcal disease and poliomyelitis.
                    In Yunnan and the island of Hainan, as well as in the
                    provinces of Guangxi and Guizhou, vaccination against
                    Japanese encephalitis is advised if staying in the
                    countryside.
                  </p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://en.nhc.gov.cn/#_blank"
                    >
                      National Health Commission
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.who.int/countries/chn/en/index.html#_blank"
                    >
                      World Health Organisation: China
                    </a>
                  </p>
                  <p>Travel Health Advice</p>
                  <p>
                    The UK government up-to-date travel health advice, including
                    routine and recommended vaccines while travelling abroad can
                    be verified at&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.gov.uk/foreign-travel-advice"
                    >
                      Foreign travel advice
                    </a>
                    &nbsp;website (The UK Government official source of
                    destination-specific travel information).
                  </p>
                  <h2>Safety Conditions</h2>
                  <p>Crime</p>
                  <p>
                    Low. Violent crime most often occurs in the bars and clubs
                    of Beijing’s nightlife districts. Pickpockets are
                    particularly active in crowded markets and thefts from taxis
                    have also become more common.
                  </p>
                  <p>Terrorist Risk</p>
                  <p>Low</p>
                  <p>Risk of Natural Disaster</p>
                  <p>
                    Every year, the southern coastline of China is affected,
                    between the months' of May and October, by about ten
                    typhoons on average, characterized by violent winds and
                    heavy rains. This phenomenon affects the city of Shanghai a
                    little but mostly concerns the Zhejiang province's coast.
                  </p>
                  <p>Traveling Women Conditions</p>
                  <p>None</p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.voyage.gc.ca/countries_pays/report_rapport-eng.asp?id=55000#_blank"
                    >
                      Travel advice provided by the Ministry of Foreign Affairs
                      and International Trade of Canada
                    </a>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <h3
                    className="font-weight-bold"
                    id="china_practical_information"
                  >
                    PRACTICAL INFORMATION
                  </h3>
                  <p> Accommodation</p>
                  <p>Youth hostels</p>
                  <p>
                    The most economical option; clean and generally in a good
                    location.
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.hostelworld.com/countries/chinahostels.html"
                    >
                      Hostels
                    </a>
                  </p>
                  <p>Medium Range</p>
                  <p>
                    Reputable hotels.
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.tripadvisor.com/Hotels-g294212-zfc3-Beijing-Hotels.html"
                    >
                      3 star hotels
                    </a>
                  </p>
                  <p>Top of the range</p>
                  <p>
                    All major chains (Hilton, Marriott, Shangri La) have a
                    presence in China and offer rooms meeting international
                    standards.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Price Indications</strong>
                  </p>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>Economy Room</p>
                        </td>
                        <td width={401}>
                          <p>25-35 USD</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Medium Price Room</p>
                        </td>
                        <td width={401}>
                          <p>35-100 USD</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Good Quality Room</p>
                        </td>
                        <td width={401}>
                          <p>100-300 USD</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <em>Source: Lonely Planet</em>
                  </p>
                  <p>Eating Out</p>
                  <p>Categories of Restaurant</p>
                  <p>&nbsp;</p>
                  <ul>
                    <li>Fast food</li>
                  </ul>
                  <p>Sandwich, Hamburger</p>
                  <ul>
                    <li>Western restaurants</li>
                  </ul>
                  <p>European, Asian, American cuisine</p>
                  <ul>
                    <li>Chinese restaurant</li>
                  </ul>
                  <p>Chinese, regional cuisine</p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Price Indications</strong>
                  </p>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>Economy Meal</p>
                        </td>
                        <td width={401}>
                          <p>1-5 USD</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Medium Price Meal</p>
                        </td>
                        <td width={401}>
                          <p>5-10 USD</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Good Quality Meal</p>
                        </td>
                        <td width={401}>
                          <p>10-25 USD</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>Food Specialties</p>
                  <p>
                    Chinese cuisine is rich and refined, with several regional
                    varieties:
                    <br /> <br /> - Beijing and Shandong cuisine gives a lot of
                    importance to steamed noodles and the specialities are
                    Peking duck and Beggar's chicken (wrapped in lotus leaves
                    and cooked over the embers for a whole day).
                    <br /> - Cantonese and Chaozhou cuisine is the most famous
                    variety of Chinese cuisine abroad. It favours steam cooking,
                    boiled or sauteed preparations. Among its specialities are
                    dim-sum (small, steamed or fried dishes), snake soup, dog,
                    rat or owl stew.
                    <br /> - Eastern Chinese cuisine specialises in spare ribs,
                    seafood and soups.
                    <br /> - Sichuan cuisine is said to have 4,000 dishes,
                    including gonbao jiding (chicken fried with peanuts and
                    chili peppers), mapo doufu (pork with tofu and onions),
                    guoba roupian (puffed rice served with pork in its gravy).
                    <br /> - Cuisine from Shanghai (where Northern and Southern
                    culinary styles meet) is quite sweet. One of the most
                    popular dishes is xiaolongbao.
                  </p>
                  <p>Drinks</p>
                  <p>
                    Beer (<em>píjiÇ”</em>) is very common in China and is served
                    everywhere. The most popular label is Tsingtao. Chinese
                    beers are light and generally have an alcohol content of
                    3%-4%. Their price is from CNY 2.5 to 4&nbsp;in stores, CNY
                    6 to 20 in restaurants, about CNY 20 in a regular bar and
                    CNY 30 to 60 in the trendiest bars.&nbsp;Red wine is common
                    and reasonably priced at CNY 15 in stores and about CNY
                    100-150 in trendy bars.&nbsp;Great Wall,&nbsp;Chang
                    Yu&nbsp;and Dynasty are some of the major labels, each with
                    wines at different prices.&nbsp;The Chinese people often
                    translate baijiu (white alcohol) as 'white wine,' but this
                    sorghum spirit has 40-60% alcohol.
                  </p>
                  <p>Dietary Restrictions</p>
                  <p>
                    Culinary restrictions vary from one religion to another.
                  </p>
                  <p>Table Manners</p>
                  <p>
                    The guest is always seated facing the door, never with his
                    back to the door. Allow the Chinese to seat you since they
                    will show you where to sit.
                    <br /> It is a usual practice to serve you local specialties
                    and to flood the table with a variety of dishes. In return,
                    they will appreciate it if you taste all the dishes, show
                    interest and above all appreciate the dishes.
                    <br /> It is common to talk about one's travel in China and
                    abroad and also about family before starting to talk
                    business. A meal offers a friendly atmosphere to not only
                    talk business but to build a good relationship.
                  </p>
                  <p>Getting Around</p>
                  <p>Means of Transport Recommended in Town</p>
                  <p>Recommendation</p>
                  <p>
                    Moving about in the city is done primarily by taxis- there
                    are a lot of them (60,000 in Beijing) and they are quite
                    inexpensive. Unregistered 'black' taxis are to be avoided.
                    The size of the cities makes walking around difficult. The
                    cities are very congested, so plan ahead and leave early for
                    an appointment.
                  </p>
                  <p>
                    Beijing has five metro lines while Shanghai has nine of
                    them. Magnetic charge cards for the metro are very useful
                    since they can also be used to pay taxis. They can be
                    charged at all the metro station ticket counters and at the
                    local grocery stores.
                  </p>
                  <p>
                    Buses are plenty and cheap, thought may be uncomfortable
                    because they are often jam-packed.
                  </p>
                  <p>
                    You should always travel with addresses of places where you
                    want to go written in Chinese since the pronunciation does
                    not often correspond to the transcription in Pinyin.
                  </p>
                  <p>Maps of Urban Networks</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.lib.utexas.edu/maps/china.html#_blank"
                    >
                      Maps of China: University of Texas Library Online
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.mapblast.com/#_blank"
                    >
                      Mapblast
                    </a>
                  </p>
                  <p>Urban Transport Agencies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.explorebj.com/subway/#_blank"
                    >
                      Beijing Metro
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://service.shmetro.com/en/#_blank"
                    >
                      Shanghai Metro
                    </a>
                  </p>
                  <p>Taxi Companies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.bloomberg.com/research/stocks/private/snapshot.asp?privcapid=54136472#_blank"
                    >
                      Haibo Taxi
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.emis.com/php/company-profile/CN/Shanghai_Jinling_Taxi_Service_Co_Ltd__%E4%B8%8A%E6%B5%B7%E9%87%91%E9%99%B5%E5%87%BA%E7%A7%9F%E6%B1%BD%E8%BD%A6%E6%9C%8D%E5%8A%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8__en_5073552.html#_blank"
                    >
                      Shanghai JinLing Taxi Service Co Ltd
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>Transportation From Airport to City Centre:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={204}>
                          <p>
                            <strong>
                              <br /> Airport
                            </strong>
                          </p>
                        </td>
                        <td width={129}>
                          <p>
                            <strong>
                              <br /> Distance
                            </strong>
                          </p>
                        </td>
                        <td width={181}>
                          <p>
                            <strong>
                              <br /> Taxi
                            </strong>
                          </p>
                        </td>
                        <td width={148}>
                          <p>
                            <strong>
                              <br /> Bus
                            </strong>
                          </p>
                        </td>
                        <td width={61}>
                          <p>
                            <strong>
                              <br /> Train
                            </strong>
                          </p>
                        </td>
                        <td width={79}>
                          <p>
                            <strong>
                              <br /> Car Rental
                            </strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.shanghai-airport.com/"
                            >
                              Shanghai-Honggiao (SHA)
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>16 km / 10 miles</p>
                        </td>
                        <td>
                          <p>CNY 60-100/25-40 min</p>
                        </td>
                        <td>
                          <p>CNY 3 / 35-40 min</p>
                        </td>
                        <td>
                          <p>-</p>
                        </td>
                        <td>
                          <p>Available</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.beijing-airport.com/"
                            >
                              Beijing-Capital (PEK)
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>28 km / 17 miles</p>
                        </td>
                        <td>
                          <p>CNY 135 / 30-40 min</p>
                        </td>
                        <td>
                          <p>CNY 16 / 45 min</p>
                        </td>
                        <td>
                          <p>-</p>
                        </td>
                        <td>
                          <p>Available</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>
                    Means of Transport Recommended in the Rest of the Country
                  </p>
                  <p>Recommendation</p>
                  <p>
                    Bus is the primary means of transport between cities. Trains
                    are generally in good condition, but the links are usually
                    slow (Canton-Beijing can take 36 hours). Air travel is often
                    utilised for longer distances, with travels generally
                    adhered to (although many airports have reached their
                    saturation levels). Domestic airlines have a low rate of
                    accidents.
                  </p>
                  <p>
                    For more information on the means of transportation, visit
                    the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://travel.chinavista.com/index.php"
                    >
                      China Vista website
                    </a>
                    .
                  </p>
                  <p>Rail Companies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.china-mor.gov.cn/#_blank"
                    >
                      Ministry of Railways
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Airlines</strong>
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={201}>
                          <p>
                            <strong>Name</strong>
                          </p>
                        </td>
                        <td width={200}>
                          <p>
                            <strong>Type</strong>
                          </p>
                        </td>
                        <td width={200}>
                          <p>
                            <strong>Domestic Flights</strong>
                          </p>
                        </td>
                        <td width={201}>
                          <p>
                            <strong>International Flights</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width={201}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.airchina.com.cn/#_blank"
                            >
                              Air China
                            </a>
                          </p>
                        </td>
                        <td width={200}>
                          <p>Major</p>
                        </td>
                        <td width={200}>
                          <p>Yes</p>
                        </td>
                        <td width={201}>
                          <p>Yes</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={201}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.csair.com/en/#_blank"
                            >
                              China Southern Airlines
                            </a>
                          </p>
                        </td>
                        <td width={200}>
                          <p>Major</p>
                        </td>
                        <td width={200}>
                          <p>Yes</p>
                        </td>
                        <td width={201}>
                          <p>Yes</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={201}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.whichbudget.com/?lang=en#_blank"
                            >
                              Jetstar/Jetstar Asia/Valuair
                            </a>
                          </p>
                        </td>
                        <td width={200}>
                          <p>Low Cost</p>
                        </td>
                        <td width={200}>
                          <p>No</p>
                        </td>
                        <td width={201}>
                          <p>Yes</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={201}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.shanghai-air.com/salnewweb/index.aspx#_blank"
                            >
                              Shanghai Airlines
                            </a>
                          </p>
                        </td>
                        <td width={200}>
                          <p>Major</p>
                        </td>
                        <td width={200}>
                          <p>Yes</p>
                        </td>
                        <td width={201}>
                          <p>Yes</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={201}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.ce-air.com/#_blank"
                            >
                              China Eastern Airlines
                            </a>
                          </p>
                        </td>
                        <td width={200}>
                          <p>Major</p>
                        </td>
                        <td width={200}>
                          <p>Yes</p>
                        </td>
                        <td width={201}>
                          <p>Yes</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={201}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.air-spring.com/#_blank"
                            >
                              Spring Airlines
                            </a>
                          </p>
                        </td>
                        <td width={200}>
                          <p>Low Cost</p>
                        </td>
                        <td width={200}>
                          <p>Yes</p>
                        </td>
                        <td width={201}>
                          <p>No</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={201}>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.elong.net/#_blank"
                            >
                              eLong
                            </a>
                          </p>
                        </td>
                        <td width={200}>
                          <p>Major</p>
                        </td>
                        <td width={200}>
                          <p>Yes</p>
                        </td>
                        <td width={201}>
                          <p>Yes</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <em>You Can Consult</em>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://ec.europa.eu/transport/modes/air/safety/air-ban_en"
                    >
                      <em>&nbsp;The EU Air Safety List</em>
                    </a>
                    <em>. Look Also at&nbsp;</em>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.faa.gov/about/initiatives/iasa/"
                    >
                      <em>the rating</em>
                    </a>
                    <em>&nbsp;of the</em>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.faa.gov/"
                    >
                      <em>
                        &nbsp;United States Federal Aviation Administration
                        (FAA)
                      </em>
                    </a>
                    <em>.</em>
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>Travelling By Yourself</p>
                  <p>Recommendation</p>
                  <p>
                    The state of the rapidly developing road network is
                    satisfactory on the major roads, although they are poorly
                    marked.&nbsp;Driving in China may be risky for those
                    unfamiliar with the roadways and driving customs. It is
                    better to rent a car with a driver or to hire a driver if
                    you buy a car.
                  </p>
                  <p>Driver's License</p>
                  <p>
                    It is possible for foreigners living in China to obtain a
                    Chinese driver's license.
                    <br /> If you have a driving license of a foreign country,
                    you have to just take the written part of the driver's test
                    (the equivalent of the rules of the road) to obtain the
                    Chinese driver's license.
                  </p>
                  <p>Conditions For Renting a Vehicle</p>
                  <p>
                    Foreigners not holding a Chinese driver's license cannot
                    rent a car. It is however possible to rent a car with a
                    driver. Rental agencies and travel agencies provide this
                    type of service.
                  </p>
                  <p>Rental Agencies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.alibabuy.com/voiture/location-voiture-chine.html#_blank"
                    >
                      Alibabuy.com World
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.avis.fr/AProposdAvis/Avis-en-Chine#_blank"
                    >
                      Website of the Avis car rental agency in China
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.shanghaicarrentalservice.com/#_blank"
                    >
                      Shanghai car rental ,Shanghai car services
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://china.shcarleasing.com/#_blank"
                    >
                      Shanghai car leasing
                    </a>
                  </p>
                  <p>Find an Itinerary</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://maps.google.com/#_blank"
                    >
                      Google Maps
                    </a>
                  </p>
                  <p>Traffic Conditions Online</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.webcamworld.com/directory/Asia/China/#_blank"
                    >
                      Webcam China
                    </a>
                  </p>
                  <p>Parking Facilities</p>
                  <p>
                    The country has limited space to build parking lots. This
                    problem will grow with the increase in the number of cars as
                    the standard of living improves.
                  </p>
                  <p>&nbsp;</p>
                  <p>Rules of the Road</p>
                  <p>Minimum Driving Age</p>
                  <p>18 years</p>
                  <p>Side of the Road For Driving</p>
                  <p>Right</p>
                  <p>Speed Limits</p>
                  <p>
                    30 km/h (19 mph) in single-lane city roads
                    <br /> 100 km/h (62 mph) in express streets of the city
                    <br /> 120 km/h (75 mph) on expressways
                  </p>
                  <p>Safety Belts</p>
                  <p>Compulsory</p>
                  <p>Permitted Amount of Alcohol in the Blood</p>
                  <p>0</p>
                  <p>Time and Time Difference</p>
                  <p>Current Local Time</p>
                  <p>It is&nbsp;03:22 PM&nbsp;In Beijing</p>
                  <p>Summer Time</p>
                  <p>No time change in China.</p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Map of the Time Zone</strong>
                  </p>
                  <p>Climate</p>
                  <p>&nbsp;</p>
                  <p>Type of Climate</p>
                  <p>
                    Owing to its large size, there is great diversity of climate
                    in China.&nbsp;The climate ranges from hot and very humid
                    (in the southern part of the country) to continental (in the
                    north of the country).
                  </p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cma.gov.cn/en/#_blank"
                    >
                      China Meteorological Administration
                    </a>
                    &nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.wmo.ch/pages/index_en.html#_blank"
                    >
                      World Meteorological Organisation
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Average Annual Temperatures and Rainfall</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>Electrical Standards and Measurement Systems</p>
                  <p>System of Measurement Used</p>
                  <p>
                    The metric system, but some traditional Chinese units are
                    still in use.
                  </p>
                  <p>Unit of Measurement of Temperature</p>
                  <p>Degree Celsius (°C)</p>
                  <p>&nbsp;</p>
                  <p>
                    Use our service&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://santandertrade.com/en/portal/international-shipments/measurement-converter"
                    >
                      Measurement Converter
                    </a>
                    .
                  </p>
                  <p>&nbsp;</p>
                  <p>Electricity</p>
                  <p>&nbsp;</p>
                  <ul>
                    <li>Voltage</li>
                  </ul>
                  <p>220 V</p>
                  <ul>
                    <li>Frequency</li>
                  </ul>
                  <p>50 HZ</p>
                  <p>Type of Electric Socket</p>
                  <p>CL</p>
                  <p>Type of Telephone Socket</p>
                  <p>US RJ-11</p>
                  <p>DVD Zoning</p>
                  <p>Zone 6</p>
                  <p>Paying</p>
                  <p>Domestic Currency</p>
                  <p>Chinese Yuan (Renminbi)</p>
                  <p>ISO Code</p>
                  <p>CNY</p>
                  <p>To Obtain Domestic Currency</p>
                  <p>
                    As the exchange rate is regulated, where you exchange your
                    money is less important than it may be in other countries.
                    Currency exchanges at Chinese airports tend to be good and
                    may offer a more favourable exchange rate than a bank or
                    company abroad. If you prefer, it is fairly simple to
                    withdraw cash with an international card at a local ATM.
                  </p>
                  <p>Possible Means of Payment</p>
                  <p>
                    Cash is the primary method of payment, although American
                    Express, Diners Club, Eurocard/MasterCard and Visa are
                    accepted in authorised establishments in the main cities.
                    The availability of ATMs is often limited outside of cities.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <em>
                      To Find a Cash Machine Where You Need, Use the&nbsp;
                    </em>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://visa.via.infonow.net/locator/global/"
                    >
                      <em>ATM locator</em>
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>Speaking</p>
                  <p>Official Language</p>
                  <p>
                    The national language is Mandarin; however, there are many
                    different dialects and variants of it.
                  </p>
                  <p>Other Languages Spoken</p>
                  <p>
                    There are more than a hundred dialects, with Mandarin in the
                    north and Cantonese in the south of the country. The
                    official language coexists with the other languages
                    (Mongolian, Uyghur, Korean, Tibetan) of the autonomous
                    regions.
                  </p>
                  <p>Business Language</p>
                  <p>
                    When the foreign party does not speak Chinese, business
                    discussions will generally be held in English.
                  </p>
                  <p>Free Translation Tools</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.babelfish.com/#_blank"
                    >
                      Babel Fish Translation
                    </a>
                    &nbsp;: Text Translation
                  </p>
                  <p>&nbsp;</p>
                  <p>Emergency Numbers</p>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>Police</p>
                        </td>
                        <td width={401}>
                          <p>110</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Fire Brigade</p>
                        </td>
                        <td width={401}>
                          <p>119</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Ambulance</p>
                        </td>
                        <td width={401}>
                          <p>120 (or 999 in some places)</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Road Accident</p>
                        </td>
                        <td width={401}>
                          <p>122</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Directory Enquiries</p>
                        </td>
                        <td width={401}>
                          <p>114</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>Communications</p>
                  <p>Quality of Communications</p>
                  <p>Good</p>
                  <p>Telephone Codes</p>
                  <p>
                    To Make a Call From China, Dial&nbsp;00
                    <br /> To Make a Call to in China, Dial&nbsp;+86
                  </p>
                  <p>Number of Digits of National Telephone Numbers</p>
                  <p>10</p>
                  <p>Mobile Telephone Standards</p>
                  <p>GSM; CDMA</p>
                  <p>National Mobile Phone Operators</p>
                  <p>China Unicom; China Mobile</p>
                  <p>&nbsp;</p>
                  <p>Availability of Internet</p>
                  <p>Internet Suffix</p>
                  <p>.cn</p>
                  <p>Access in Public Places</p>
                  <p>Easily accessible in big cities and small towns.</p>
                  <p>Access in Hotels</p>
                  <p>Almost all hotels have internet access.</p>
                  <p>&nbsp;</p>
                  <h3 className="font-weight-bold" id="china_living">
                    LIVING
                  </h3>
                  <h2>Communities of Expatriates</h2>
                  <p>The Number of Expatriates</p>
                  <p>
                    The sixth national census revealed that a total of 593,832
                    foreigners are living on the Chinese mainland (2011).
                    <br /> Press for expatriates:&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.thatsshanghai.com/"
                    >
                      That’s
                    </a>
                    ,&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.globaltimes.cn/"
                    >
                      Global Times
                    </a>
                    ,&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.asiaxpat.com/"
                    >
                      Asiaxpat
                    </a>
                    ,&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.geoexpat.com/forum/thread24773.html"
                    >
                      Geoexpat
                    </a>
                  </p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.net-on-line.net/infos_pays/asie/chine/index.html"
                    >
                      All you need to understand China and to have a better life
                      there
                    </a>
                  </p>
                  <p>Contact the Embassy</p>
                  <p>
                    Contact the Embassy of&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.chinese-embassy.org.uk/"
                    >
                      China&nbsp;
                    </a>
                    in the United Kingdom.
                  </p>
                  <p>Contact Your Embassy</p>
                  <p>
                    Contact the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.gov.uk/government/world/organisations/british-embassy-beijing"
                    >
                      British Embassy
                    </a>
                    &nbsp;in China.
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <h2>Ranking of Cities</h2>
                  <p>Cost of Living</p>
                  <p>
                    Major Chinese cities are now considered among the most
                    expensive in the world.&nbsp; Shanghai and Beijing are
                    respectively ranked 7th and 10th most expensive cities in
                    the world according to the Mercer Index 2016.
                  </p>
                  <p>Quality of Life</p>
                  <p>
                    Despite steep costs of living, the quality of living in
                    China is significantly lower than in the West. Mercer's 2017
                    Quality of Living Survey ranks Shanghai 108th and Beijing
                    119th out of 231.
                  </p>
                  <p>Sanitary Conditions</p>
                  <p>
                    Close to&nbsp;international standards in the main
                    cities.&nbsp;Can be more delicate in secondary cities.
                  </p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.imercer.com/content/mobility/rankings/c789654/index.html"
                    >
                      2017 Quality of Living Worldwide City Rankings –Survey -
                      Mercer
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.imercer.com/content/mobility/rankings/col2016-rankings.html?mkt_tok=eyJpIjoiT0ROallqWmpNR1ZrWW1JMiIsInQiOiJ2Y3ZCbjA1Sk9rUWN0NkYxN3pvOXhna0FHUFZIMUw1OEw5WUJJaFN1bEZwVEhKZWU2MmIzQVJkb0lqTmdWT21MKytKSDNnakIyOG9jTW5DQktrOVl4Y0NlcWNcL24xeVFHWXJ2bWFHc2I5T2FYK3B5MXpDMUdyTnMwcW5kSHQ5T1IifQ%3D%3D"
                    >
                      2016 Cost of Living Worldwide City Rankings –Survey -
                      Mercer
                    </a>
                  </p>
                  <h2>Renting an Apartment</h2>
                  <p>Description of apartments</p>
                  <p>
                    Real estate can be expensive in China and everything depends
                    on the environment you want (local or more international).
                    <br /> An 80m² apartment costs 500 EUR/month. A similar
                    sized apartment in a residential space for foreigners can
                    cost 1000 to 3000 EUR/month.
                  </p>
                  <p>Normal Lease Term</p>
                  <p>Usually, one year contract</p>
                  <p>Rental Costs</p>
                  <p>
                    It is standard practice to collect guarantee of one or two
                    months rent and the agency fees is 1/2 to 1 month's rent
                  </p>
                  <p>Agencies or Private Rentals</p>
                  <p>
                    You are recommended to go through an agency to ensure that
                    you have a contract in the correct form (generally in
                    Chinese).
                  </p>
                  <p>Rental Agency Websites</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.century21cn.com/english/"
                    >
                      Century 21
                    </a>
                  </p>
                  <p>Private Rentals Announcements Online</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://shanghai.asiaxpat.com/"
                    >
                      Shanghai Serviced Apartments
                    </a>
                  </p>
                  <p>Other Possibilities For Accommodation</p>
                  <p>
                    Villa within compounds cost from 2000 to 10000 EUR/month
                  </p>
                  <h2>School System</h2>
                  <p>School Level</p>
                  <p>
                    The Chinese school system includes day care centers, nursery
                    schools, special schools for the deaf and dumb, "key
                    schools", primary schools, secondary schools (including
                    agricultural and professional schools), schools for
                    teachers, technical schools and several institutions for
                    higher education (general or specialized colleges and
                    universities).
                    <br /> Since 1986, 9 years of schooling is
                    compulsory.&nbsp;The medium of instruction in Chinese
                    schools is Mandarin.
                  </p>
                  <p>International Schools</p>
                  <p>
                    There are many international schools in the big cities like
                    Beijing, Shanghai, Shenzhen and Canton.&nbsp;The most common
                    schools are English, American, French and German.
                  </p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.international-schools-database.com/in/beijing?filter=on"
                    >
                      View the list of international schools in China
                    </a>
                  </p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.moe.edu.cn/"
                    >
                      Ministry of Education, People's Republic of China
                    </a>
                  </p>
                  <h2>Health System</h2>
                  <p>Quality of Healthcare</p>
                  <p>
                    The healthcare system in China is inadequate. Today, the
                    press estimates that 20% of the people benefit from 80% of
                    medical spending by the government. They are essentially
                    civil servants and employees of state-owned companies.
                    Re-use or poor sterilisation practices are problems in
                    China, contributing to transmission of diseases.
                  </p>
                  <p>International Hospitals</p>
                  <p>
                    Western-style medical facilities with international staff
                    are available in Beijing, Shanghai, Guangzhou and a few
                    other large cities. Many other hospitals in major Chinese
                    cities have so-called VIP wards (gaogan bingfang) with good
                    equipment and English-speaking staff. However, in case of
                    serious problems, you are recommended to avoid hospitals in
                    China and get transferred to Hong Kong or Thailand
                    (Bangkok). More information is available at the following
                    websites:&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.worldclinic.com/"
                    >
                      World Clinic
                    </a>
                    &nbsp; and&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://chinaexpathealth.com/"
                    >
                      China Expat Health.
                      <br />{" "}
                    </a>
                  </p>
                  <p>Health Insurance</p>
                  <p>Yes</p>
                  <p>
                    Accessibility of the Health Insurance Network to Foreigners
                  </p>
                  <p>
                    Yes, but only in government hospitals. In Shenzhen, all the
                    employing entities hiring foreign individuals should
                    register the foreign individuals for the local social
                    insurance scheme.
                  </p>
                  <p>Health Ministry</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.moh.gov.cn/"
                    >
                      Ministry of Health
                    </a>
                  </p>
                  <h2>Tourism and Culture</h2>
                  <h3>Different Forms of Tourism</h3>
                  <p>Historical</p>
                  <p>
                    While Modern China has grown and expanded exponentially,
                    there are still many sites dating back to ancient China.
                  </p>
                  <p>
                    Some examples of well-preserved ancient cities include
                    Pingyao (in central Shanxi) and Lijiang (in Yunnan). Built
                    in the Song Dynasty, Pingyao has many stone bridges, arches
                    and homes dating back centuries, making it a great location
                    for visitors wishing to study China’s architectural history.
                  </p>
                  <p>Cultural</p>
                  <p>
                    China offers many museums and temples for those interested
                    in cultural tourism.
                  </p>
                  <p>
                    Notable examples include: Tienanmen Square, the Forbidden
                    City and the Great Wall.
                  </p>
                  <p>Nature</p>
                  <p>
                    Options abound for natural tourism in China, ranging from
                    rugged mountains to serene valleys.
                  </p>
                  <p>
                    China’s Five Sacred Mountains: Tài Shān, Huà Shān, Héng Shān
                    (Shanxi), Héng Shān (Hunan) and Sōng Shān.
                  </p>
                  <p>
                    Gorgeous valleys can be found in southwestern China,
                    including Jiuzhaigou which runs over 40km through mountains,
                    lakes, waterfalls and forest.
                    <br /> <br /> Three Gorges of the Yangtze River (Qutang, Wu
                    and Xiling).
                  </p>
                  <p>Religious</p>
                  <p>
                    Many Buddhist, Taoist and Confucian temples.&nbsp;Notable
                    examples include the Shaolin Temple in Henan (the birthplace
                    of Chinese Zen Buddhism and known for its Shaolin Kung Fu
                    martial arts) and Mount Emei (dotted with numerous ancient
                    Buddhist temples and structures).
                  </p>
                  <p>Thermal</p>
                  <p>There are few European-style spas in China.</p>
                  <p>Beach</p>
                  <p>
                    Hainan island, Sanya and the&nbsp;city of Qingdao in the
                    Shandong province all offer spectacular beaches.
                  </p>
                  <p>Winter Sports</p>
                  <p>Winter sports are not yet very well developed in China.</p>
                  <p>Outdoor Activities</p>
                  <p>Few</p>
                  <p>Shopping</p>
                  <p>
                    Big department stores and shopping malls are being built all
                    over the country. Western brands are established in the main
                    Chinese cities. Markets such as Xiushui street and the
                    antique market Panjiayuan in Beijing are good places to buy
                    souvenirs.
                  </p>
                  <p>&nbsp;</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={397}>
                          <p>
                            <strong>Top Highlights in the Main Cities</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.travelchinaguide.com/cityguides/beijing/forbidden.htm"
                            >
                              The Forbidden City
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.chinavista.com/travel/13tomb/main.html"
                            >
                              The Thirteen Ming Tombs
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.travelchinaguide.com/attraction/beijing/tianan.htm"
                            >
                              Tiananmen Square
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.travelchinaguide.com/cityguides/beijing/summer.htm"
                            >
                              The Summer Palace and the Old Summer Palace
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.travelchinaguide.com/attraction/beijing/yonghe.htm"
                            >
                              Lamasery
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.travelchinaguide.com/attraction/beijing/"
                            >
                              The Lakes of Beijing (Beihai, Hou Hai)
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.travelchinaguide.com/china_great_wall/scene/beijing/"
                            >
                              The Great Wall
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://whc.unesco.org/en/list/881/"
                            >
                              The Temple of Heaven
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.beijing-visitor.com/index.php?cID=416&pID=984"
                            >
                              A Walk in the Hutongs
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.thechinaguide.com/jingshan_park/index.html"
                            >
                              Jingshan Park
                            </a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={397}>
                          <p>
                            <strong>Top Highlights of the Country</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.travelchinaguide.com/cityguides/beijing/forbidden.htm"
                            >
                              Beijing's Forbidden City
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.travelchinaguide.com/attraction/shanghai/bund.htm"
                            >
                              The Bund in Shanghai
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.travelchinaguide.com/cityguides/guangxi/yangshuo/"
                            >
                              Yangshuo
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.travelchinaguide.com/cityguides/hangzhou.htm"
                            >
                              Hangzhou
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.travelchinaguide.com/cityguides/heilongjiang/harbin/"
                            >
                              Harbin
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.discoverhongkong.com/eng/index.jsp"
                            >
                              Hong Kong
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.travelchinaguide.com/cityguides/tibet/lhasa/"
                            >
                              Lhasa
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.travelchinaguide.com/cityguides/liaoning/dalian/"
                            >
                              Dalian
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.travelchinaguide.com/cityguides/guilin.htm"
                            >
                              Guilin
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="http://www.travelchinaguide.com/cityguides/xian.htm"
                            >
                              Xi'an
                            </a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>Tourism Organisations</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.cnto.org/"
                    >
                      China National Tourist Office (CNTO)
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.travelchinaguide.com/"
                    >
                      Travel China Guide
                    </a>
                  </p>
                  <p>Cultural Organizations</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.sach.gov.cn/"
                    >
                      State cultural heritage administration
                    </a>
                    <br />
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://english.ccnt.com.cn/"
                    >
                      Ministry of Culture
                    </a>
                  </p>
                  <h2>Individual and Civic Freedoms</h2>
                  <p>Political Freedom</p>
                  <p>
                    Restricted political freedoms. The country's administrative
                    climate is less restrictive compared to the past since its
                    economic liberalisation.
                  </p>
                  <p>Civil Liberty</p>
                  <p>6/7</p>
                  <p>
                    World Ranking of Freedom of the Press According to
                    "Reporters sans Frontières", 2019 report : 177/180
                  </p>
                  <p>
                    For Further Information, Consult&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://rsf.org/en/ranking_table"
                    >
                      2019 World Press Freedom Index, Reporters Without Borders
                    </a>
                  </p>
                  <p>Free Access to the Internet</p>
                  <p>
                    The content and access to certain websites commenting the
                    situation in Taiwan, Tibet and Hong Kong remain under the
                    central government's control.
                  </p>
                  <p>Rule of Law</p>
                  <p>Yes</p>
                  <p>Personal Autonomy and Individual Rights</p>
                  <p>Restricted</p>
                  <p>Women's Condition</p>
                  <p>
                    Women enjoy the same status of equality as men, but
                    discrimination in recruitment is widespread.
                  </p>
                  <p>For Further Information</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://rsf.org/en/china"
                    >
                      Refer to the webpage on Internet and press freedom in
                      China from Reporters without Borders
                    </a>
                  </p>
                  <h2>Religion</h2>
                  <p>Degree of Freedom</p>
                  <p>Quite considerable</p>
                  <p>Beliefs</p>
                  <p>
                    The Chinese are generally atheists. That being said,
                    Buddhism, Taoism and Confucianism are relatively widespread
                    amongst senior citizens and attract a part of the well-to-do
                    class today. There are also Christian and Muslim minorities.
                  </p>
                  <p>Role of Religion in Society</p>
                  <p>
                    The present government continues to profess atheism: only
                    atheists can become members of the Party. But, to make the
                    people accept the regime, and have it recognized by the
                    international community, the leaders have had to show a
                    certain amount of tolerance towards religious practices.
                  </p>
                  <p>&nbsp;</p>
                </div>
                <div className="col-md-12 mt-4 usa">
                  <p>ESTABLISH OVERSEAS</p>
                  <p>
                    <strong>OPERATING A BUSINESS</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>Legal Forms of Companies</p>
                  <p>Sole proprietorship</p>
                  <p>
                    <strong>Number of partners:</strong>&nbsp;One person only.
                    <br /> <strong>Capital (max/min):</strong>&nbsp;No minimum
                    legal capital required.
                    <br />
                    <strong>Shareholders and liability:</strong>&nbsp;The owner
                    is liable for the company's debt.
                  </p>
                  <p>General Partnership</p>
                  <p>
                    <strong>Number of partners:</strong>&nbsp;No limit on the
                    number of partners.
                    <br />
                    <strong>Capital (max/min):</strong>&nbsp;No minimum legal
                    capital required.
                    <br />
                    <strong>Shareholders and liability:</strong>&nbsp;The
                    General Partner is personally liable, with no limitation,
                    for the company's debts and obligations.
                  </p>
                  <p>Limited Partnership</p>
                  <p>
                    <strong>Number of partners:</strong>&nbsp;In addition of
                    general partners there is one or more limited partners.
                    <br /> <strong>Capital (max/min):</strong>&nbsp;No minimum
                    legal capital required.
                    <br /> <strong>Shareholders and liability:</strong>&nbsp;The
                    general partner has unlimited liability for the debt,
                    whereas any limited partners have limited liability up to
                    the amount of their investment.
                  </p>
                  <p>Public Company</p>
                  <p>
                    <strong>Number of partners:</strong>&nbsp;No limit on the
                    number of partners.
                    <br />
                    <strong>Capital (max/min):</strong>&nbsp;No minimum legal
                    capital required.
                    <br />
                    <strong>Shareholders and liability:</strong>&nbsp;Liability
                    is limited to the value of the capital contributed.
                  </p>
                  <p>Limited Liability Corporation or LLC</p>
                  <p>
                    <strong>Number of partners:</strong>&nbsp;No limit on the
                    number of partners.
                    <br />
                    <strong>Capital (max/min):</strong>&nbsp;No minimum legal
                    capital required.
                    <br />
                    <strong>Shareholders and liability:</strong>&nbsp;Liability
                    is limited to the value of the capital contributed.
                  </p>
                  <p>Enterprises Federation</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.sba.gov/"
                    >
                      U.S. Small Business Administration
                      <br />{" "}
                    </a>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.nam.org/"
                    >
                      National Association of Manufacturers
                      <br />{" "}
                    </a>
                  </p>
                  <p>Find a Company or a Financial Report</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
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
                        <td width={267}>
                          <p>
                            <strong>Setting Up a Company</strong>
                          </p>
                        </td>
                        <td width={267}>
                          <p>
                            <strong>United States</strong>
                          </p>
                        </td>
                        <td width={267}>
                          <p>
                            <strong>OECD</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width={267}>
                          <p>Procedures (number)</p>
                        </td>
                        <td width={267}>
                          <p>6.00</p>
                        </td>
                        <td width={267}>
                          <p>4.80</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={267}>
                          <p>Time (days)</p>
                        </td>
                        <td width={267}>
                          <p>5.60</p>
                        </td>
                        <td width={267}>
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
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.doingbusiness.org/data/exploreeconomies/United-States/starting-a-business/"
                    >
                      Doing Business- U.S.
                    </a>
                    , for more information on procedures to start a business in
                    the U.S.
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://libguides.rutgers.edu/content.php?pid=136604&sid=1171890"
                    >
                      U.S. State Corporations Databases
                    </a>
                  </p>
                  <p>The Competent Organisation</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.sec.gov/"
                    >
                      The U.S. Securities and Exchange Commission
                    </a>
                    . The certificate of incorporation, also called Doing
                    Business As (DBA) must be registered with the Trade Register
                    of the State where the company is located. General
                    Partnerships do not need to be registered.
                  </p>
                  <p>&nbsp;</p>
                  <p>Recovery Procedures</p>
                  <p>Principle</p>
                  <p>
                    See&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.law.cornell.edu/uscode/text/11"
                    >
                      U.S Code Chapter 11 - Bankruptcy
                    </a>
                  </p>
                  <p>Minimum Debt-to-Capital Ratio Triggering Liquidation</p>
                  <p>
                    See&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.law.cornell.edu/uscode/text/11"
                    >
                      U.S Code Chapter 11 - Bankruptcy
                    </a>
                  </p>
                  <p>Bankruptcy Laws</p>
                  <p>
                    See&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.law.cornell.edu/uscode/text/11"
                    >
                      U.S Code Chapter 11 - Bankruptcy
                    </a>
                  </p>
                  <p>Reorganization and Rehabilitation Laws</p>
                  <p>
                    See&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.law.cornell.edu/uscode/text/11"
                    >
                      U.S Code Chapter 11 - Bankruptcy
                    </a>
                  </p>
                  <p>The Active Population in Figures</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={225}>&nbsp;</td>
                        <td width={192}>
                          <p>
                            <strong>2011</strong>
                          </p>
                        </td>
                        <td width={192}>
                          <p>
                            <strong>2013</strong>
                          </p>
                        </td>
                        <td width={192}>
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
                        <td width={371}>&nbsp;</td>
                        <td width={144}>
                          <p>
                            <strong>2015</strong>
                          </p>
                        </td>
                        <td width={144}>
                          <p>
                            <strong>2016</strong>
                          </p>
                        </td>
                        <td width={144}>
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
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.bls.gov/"
                    >
                      U.S. Bureau of Labour Statistics
                      <br />{" "}
                    </a>
                  </p>
                  <p>For Further Information About the Labour Market</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
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
                    salaried positions (held by workers who are paid weekly or
                    monthly, not by the hour) entail standard workweeks in
                    excess of 40 hours. For hourly employees who work more than
                    40 hours, overtime pay equal to one and one-half times
                    regular salary is standard.
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
                    <strong>Child Labour and Minimum Age For Employment</strong>
                  </p>
                  <p>16 years.</p>
                  <p>
                    <strong>Informal Labour Market</strong>
                  </p>
                  <p>
                    Informal labor market is developed due to the high level of
                    illegal immigration.
                  </p>
                  <p>The Cost of Labour</p>
                  <p>Pay</p>
                  <p>
                    <strong>Minimum Wage</strong>
                  </p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.dol.gov/agencies/whd/minimum-wage/state"
                    >
                      The minimum wage
                    </a>
                    &nbsp;varies depending on the States and activity sectors.
                    The federal minimum wage provisions are contained in the
                    Fair Labor Standards Act (FLSA). The federal minimum wage is
                    $7.25 per hour effective July 24, 2009.
                  </p>
                  <p>
                    <strong>Average Wage</strong>
                  </p>
                  <p>
                    According to the Bureau of Labor Statistics (BLS), the
                    median wage for workers in the United States in the first
                    quarter of 2020 was $957 per week or $49,764 per year.
                  </p>
                  <p>
                    <strong>Other Forms of Pay</strong>
                  </p>
                  <ul>
                    <li>Pay For Overtime</li>
                  </ul>
                  <p>
                    Overtime pay one-half their regular rates of pay. Almost all
                    employees who make less than USD 455 a week (USD 23,660 a
                    year) are eligible for overtime
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
                    equally. OASDI taxes are levied on the first USD 118,500 of
                    wages at a combined rate of 12.4%. Medicare taxes are levied
                    on total wages at a combined rate of 2.9% (plus 0.9% for
                    wages above USD 200,000 annually).
                  </p>
                  <p>
                    Employers must also pay State and Federal Unemployment Taxes
                    (
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.toolkit.com/small_business_guide/sbg.aspx?nid=P07_1294"
                    >
                      SUTA
                    </a>
                    &nbsp;and&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/individuals/international-taxpayers/federal-unemployment-tax"
                    >
                      FUTA
                    </a>
                    ). FUTA is 6% on the first USD 7,000. SUTA varies aross the
                    states. Employers receive tax credit up to 5.4% against
                    federal tax for amounts paid as SUTA.
                  </p>
                  <p>
                    <strong>Contributions</strong>
                  </p>
                  <p>
                    Contributions Paid By the Employer: OASDI (handicap,
                    disability, old age; 6.2%, maximum annual earnings used to
                    calculate contributions are $132,900) + Medicare (1.45%) +
                    FUTA (unemployment at the federal level; 6% on first USD
                    7,000 and applicable for tax credit) + SUTA (unemployment at
                    each state level; varies across states)
                    <br /> Contributions Paid By the Employee: OASDI (6.2%,
                    maximum annual earnings used to calculate contributions are
                    $132,900) + Medicare (1.45% + 0.9% if total wages above USD
                    200,000 annually)
                  </p>
                  <p>Competent Organization</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.ssa.gov/"
                    >
                      Social Security
                      <br />{" "}
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
                    Internet. Selection is made on the basis of a job interview.
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
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.americanstaffing.net/"
                    >
                      American Staffing Association
                      <br />
                    </a>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.monster.com/"
                    >
                      Monster
                      <br />{" "}
                    </a>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.careerbuilder.com/"
                    >
                      Career Builder
                      <br />{" "}
                    </a>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://fr.linkedin.com/"
                    >
                      LinkedIn
                      <br />{" "}
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p>The Contract</p>
                  <p>
                    <strong>Type of Contract</strong>
                  </p>
                  <p>
                    Employment contracts determine if the employee forms part of
                    the regular or non-regular staff. Full time employees form
                    the regular staff. Among the non-regular staff, there are
                    different types of contract: part-time workers, temporary
                    workers and interns.
                  </p>
                  <p>
                    <strong>Breach of Contracts</strong>
                  </p>
                  <ul>
                    <li>Retirement</li>
                  </ul>
                  <p>
                    It can take several forms: general resignation, resignation
                    for one’s own convenience, resignation by agreement,
                    resignation by employee’s request, voluntary retirement.
                  </p>
                  <ul>
                    <li>Dismissals</li>
                  </ul>
                  <p>
                    In a wrongful dismissal context, this can justify an
                    employer in summarily dismissing an employee.
                    <br /> A serious breach allows the other party to repudiate.
                    In a statutory dismissal context, it can make it more
                    difficult to determine who terminates the employment
                    contract (and hence whether there is a dismissal at all).
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
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.socialaw.com/"
                    >
                      The Social Law Library
                      <br />{" "}
                    </a>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.dol.gov/"
                    >
                      US Department of Labor
                      <br />{" "}
                    </a>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.doingbusiness.org/data/exploreeconomies/United-States/employing-workers#_blank"
                    >
                      Doing Business: U.S.
                    </a>
                    , to obtain a summary of labour regulations that apply to
                    local entreprises
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
                      style={{ color: "red !important" }}
                      target="_blank"
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
                      style={{ color: "red !important" }}
                      target="_blank"
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
                      style={{ color: "red !important" }}
                      target="_blank"
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
                      style={{ color: "red !important" }}
                      target="_blank"
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
                      style={{ color: "red !important" }}
                      target="_blank"
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
                    Today most labour unions in the United States are members of
                    one of two larger umbrella organisations: the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.aflcio.org/"
                    >
                      American Federation of Labour-Congress of Industrial
                      Organisations
                    </a>
                    &nbsp;(AFL-CIO) or the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
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
                    since 1983. In 2007, the Department of Labour reported the
                    first increase in union memberships in 25 years and the
                    largest increase since 1979. Most of the recent gains in
                    union membership have been in the service sector, while the
                    number of unionised employees in the manufacturing sector
                    has declined. Most of the gains in the service sector have
                    come in West Coast states, such as California, where union
                    membership is now at 16.7% compared with a national average
                    of about 12.1%.
                  </p>
                  <p>Unions</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.unions.org/home/"
                    >
                      Unions.org
                      <br />{" "}
                    </a>
                  </p>
                  <p>Regulation Bodies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.dol.gov/"
                    >
                      Department of Labour
                      <br />{" "}
                    </a>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.bls.gov/"
                    >
                      U.S. Bureau of Labour Statistics
                    </a>
                  </p>
                  <p>
                    <strong>TAX SYSTEM</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <h2>
                    <br /> Corporate Taxes
                  </h2>
                  <p>Tax Base For Resident and Foreign Companies</p>
                  <p>
                    A corporation organised or created in the United States
                    under US law or under the law of any state is considered to
                    any extent a domestic corporation, even in the case that it
                    does no business or owns no property in the United States.
                    For US law, a fixed place of business is considered as a
                    permanent establishment in the country.
                  </p>
                  <p>&nbsp;</p>
                  <h4>Tax Rate</h4>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>Corporate Income Tax</p>
                        </td>
                        <td width={401}>
                          <p>
                            Federal corporate income tax is applied with a flat
                            rate of 21% to the effectively connected income
                            (ECI). State and local governments may also impose
                            income taxes (generally ranging between 1% and 12%),
                            thus the effective tax rate in each state.
                            Click&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://statetaxindex.org/tax/corporate/"
                            >
                              here
                            </a>
                            &nbsp;for more information about corporate tax
                            rates.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>S Corporations Tax</p>
                        </td>
                        <td width={401}>
                          <p>
                            Corporations with up to 100 eligible shareholders
                            (none of whom may be corporations) that meet certain
                            specific requirements are generally not subject to
                            US federal income tax.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>Tax Rate For Foreign Companies</p>
                  <p>
                    With the tax reform legislation enacted on 22 December 2017
                    (P.L. 115-97), the US adopted a system of taxation based on
                    territoriality (from the previously used worldwide system).
                    Foreign companies are generally subject to the same
                    corporate tax as domestic companies. However, taxable income
                    is calculated on&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci"
                    >
                      Effectively Connected Income
                    </a>
                    &nbsp;(ECI) only, which is considered as all U.S.-source
                    income derived from trade or business in the U.S. or sale of
                    U.S. real property or inventory by a foreign entity. ECI tax
                    exemption can also be applied through a tax treaty.
                    <br /> US taxation of income earned by non-US entities
                    depends on whether the income has a nexus with the United
                    States.
                  </p>
                  <p>
                    Foreign companies are however subject to a branch profits
                    tax at 30% of ECI that is not invested in U.S. trade or
                    business and a 30% withholding tax on non-ECI U.S.-source
                    income (e.g. dividends, interests, rents and royalties).
                    Other arrangements can be made through tax treaties.
                  </p>
                  <p>Capital Gains Taxation</p>
                  <p>
                    A corporation’s capital gains are taxed at the same rates as
                    ordinary income if shares are held for short-term (less than
                    a year). Otherwise (shares held longer than a year), capital
                    gains are taxed at a rate of 15% (20% for the highest tax
                    bracket).
                  </p>
                  <p>
                    Capital losses can only be used to offset capital gains. An
                    excess of capital losses over capital gains in a tax year
                    may be carried back three years and carried forward five
                    years.
                  </p>
                  <p>
                    Foreign companies are generally exempt from capital gains
                    tax unless the gain is U.S.-sourced (from U.S. real property
                    or through U.S. trade or business).
                  </p>
                  <p>Main Allowable Deductions and Tax Credits</p>
                  <p>
                    Deductions are available for specific domestic production
                    activities, qualifying&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/Deducting-Business-Expenses"
                    >
                      business expenses
                    </a>
                    &nbsp;and depreciation, amortisation and losses. Normally,
                    start-up expenditures can be amortised over a 15-year
                    period. The cost of goodwill generally is capitalised and
                    amortised over 15 years. Bad debt resulting from a trade or
                    business may be deducted in the year the debt becomes
                    worthless. Certain charitable contributions may be deducted,
                    up to a limit of 10% of taxable income, and may be carried
                    over to the fifteen succeeding years. State and municipal
                    taxes imposed on businesses are deductible expenses. Fines
                    and penalties are not deductible, unless they are paid for
                    restitution or to come into compliance with the law. Special
                    rules limit or deny deductions for interest, rents, or
                    royalties paid on certain transactions.
                    <br /> Generally, net operating losses generated in tax
                    years ending before 1 January 2018 may be carried back two
                    years and, if not fully used, carried forward 20 years.
                    Under the COVID-related CARES Act, losses arising in tax
                    years beginning after December 31, 2017, and before January
                    1, 2021 may be carried back to each of the five tax years
                    preceding the tax year of such loss.
                    <br /> Incentives are granted in the form of tax credits
                    for&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/Businesses/Research-Credit"
                    >
                      R&amp;D
                    </a>
                    , energy-efficient appliances and&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/Businesses/Plug-In-Electric-Vehicle-Credit-IRC-30-and-IRC-30D"
                    >
                      electric motor vehicles
                    </a>
                    .<br /> Visit the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/Credits-&-Deductions/Businesses"
                    >
                      IRS site
                    </a>
                    &nbsp;for detailed information about available deductions in
                    the U.S.
                  </p>
                  <p>Other Corporate Taxes</p>
                  <p>
                    Employers are liable for social security tax of 6.2% on the
                    first USD 142,800 of wages paid to employees and for
                    Medicare tax of 1.45% on all wages. The different States can
                    impose further contributions.
                    <br /> Certain companies are subject to an accumulated
                    earnings tax equal to 20% of "accumulated taxable income" if
                    they are deemed to be accumulating earnings and profits for
                    the purpose of avoiding shareholder personal income tax.
                  </p>
                  <p>
                    Importers, manufacturers, and sellers of ozone-depleting
                    chemicals, or imported products manufactured using such
                    chemicals, are subject to environmental taxes calculated per
                    weight of the ODC.
                  </p>
                  <p>
                    In addition to federal taxes, state and municipal taxes vary
                    from one state or community to another, including property
                    taxes on real property, stamp duties, franchise taxes and
                    taxes on the capital of a corporation.
                  </p>
                  <p>
                    For more details, consult the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://taxfoundation.org/state-corporate-tax-rates-2021/"
                    >
                      Tax Foundation
                    </a>
                    &nbsp;website.
                  </p>
                  <p>Other Domestic Resources</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.irs.gov/#_blank"
                    >
                      Internal Revenue Service (IRS)
                    </a>
                  </p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.doingbusiness.org/en/data/exploreeconomies/united-states/paying-taxes#_blank"
                    >
                      Doing Business: U.S.
                    </a>
                    , to obtain a summary of taxes and mandatory contributions
                  </p>
                  <p>&nbsp;</p>
                  <h4>Country Comparison For Corporate Taxation</h4>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width={539}>
                          <p>
                            <strong>&nbsp;</strong>
                          </p>
                        </td>
                        <td width={84}>
                          <p>
                            <strong>United States</strong>
                          </p>
                        </td>
                        <td width={71}>
                          <p>
                            <strong>OECD</strong>
                          </p>
                        </td>
                        <td width={109}>
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
                              Time Taken For Administrative Formalities (Hours)
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
                            <strong>Total Share of Taxes (% of Profit)</strong>
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
                      Conditions of Transactions. **The Greater the Index, the
                      More the Manager is Personally Responsible. *** The
                      Greater the Index, the Easier it Will Be For Shareholders
                      to Take Legal Action. **** The Greater the Index, the
                      Higher the Level of Investor Protection.
                    </em>
                  </p>
                  <h2>Accounting Rules</h2>
                  <p>&nbsp;</p>
                  <h3>Accounting System</h3>
                  <p>Accounting Standards</p>
                  <p>
                    Accounting in the U.S. is based on domestic standards
                    defined by:
                    <br /> -&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.sec.gov/"
                    >
                      The United States Securities and Exchange Commission (SEC)
                    </a>
                    <br /> -&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.fasb.org/"
                    >
                      The Financial Accounting Standards Board (FASB)
                    </a>
                    <br /> -&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.gasb.org/"
                    >
                      The Governmental Accounting Standards Board (GASB)
                    </a>
                    <br /> -&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.fasab.gov/"
                    >
                      The Federal Accounting Standards Advisory Board (FASAB)
                      <br />{" "}
                    </a>
                  </p>
                  <p>Accounting Regulation Bodies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.aicpa.org/#_blank"
                    >
                      AICPA
                    </a>
                    , The American Institute of Certified Public Accountants
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.gasb.org/#_blank"
                    >
                      GASB
                    </a>
                    , The Governmental Accounting Standards Board
                  </p>
                  <p>Accounting Law</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.sec.gov/about/laws/soa2002.pdf"
                    >
                      The Sarbanes-Oxley Act of 2002
                    </a>
                    &nbsp;(Public Company Accounting Reform and Investor
                    Protection Act of 2002).
                  </p>
                  <p>
                    Difference Between National and International Standards
                    (IAS/IFRS)
                  </p>
                  <p>
                    Domestic public companies must use US GAAP. Foreign
                    companies whose debt or equity securities trade in a public
                    market in the U.S. can use IFRS Standards in their U.S.
                    filings. SMEs have to option to file either by using US
                    GAAP, IFRS Standard or other bases of accounting such as the
                    US income tax basis of accounting.
                  </p>
                  <p>Accounting News</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.accountingzone.com/#_blank"
                    >
                      Accounting Zone
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://topics.nytimes.com/top/reference/timestopics/organizations/f/financial_accounting_standards_board/index.html#_blank"
                    >
                      New York Times Accounting
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.accountingweb.com/#_blank"
                    >
                      Accounting Web
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <h3>Accounting Practices</h3>
                  <p>Tax Year</p>
                  <p>
                    Corporations may adopt any 12 month fiscal year ending on
                    the last day of the month. Individuals use the calendar
                    year, unless a fiscal year is elected.
                  </p>
                  <p>Accounting Reports</p>
                  <p>
                    Annual report, including the income statement and the
                    balance sheet, along with supporting CPA notes. The report
                    must be filed on a quarterly basis (10 K) with the SEC.
                  </p>
                  <p>Publication Requirements</p>
                  <p>
                    According to the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.sec.gov/rules/final/33-8568.pdf"
                    >
                      S-X rule of the SEC
                    </a>
                    &nbsp;(Securities and Exchange Commission), all companies
                    which make an initial public offering have to present an
                    information file (called '10 K' for American companies and
                    '20 F' for foreign companies) annually to the SEC. Companies
                    quoted on the stock-exchange must publish their accounts.
                  </p>
                  <p>&nbsp;</p>
                  <h3>Accountancy Profession</h3>
                  <p>Accountants</p>
                  <p>
                    Certified public accountants (CPA) and tax accountants are
                    specialists providing accounting and tax support to
                    companies operating in USA. CPA licenses are awarded by each
                    of the 50 states for practice in that state.
                  </p>
                  <p>Professional Accountancy Bodies</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.aicpa.org/#_blank"
                    >
                      The American Institute of Certified Public Accountants
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.imanet.org/#_blank"
                    >
                      Institute of Management Accountants
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.nasba.org/#_blank"
                    >
                      National Association of State Boards of Accountancy
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://aaahq.org/index.cfm#_blank"
                    >
                      American Accounting Association
                    </a>
                  </p>
                  <p>
                    Member of the International Federation of Accountants (IFAC)
                  </p>
                  <p>
                    The US is a member of&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.ifac.org/about-ifac"
                    >
                      the International Federation of Accountants (IFAC).
                    </a>
                  </p>
                  <p>Member of Other Federation of Accountants</p>
                  <p>
                    Member of the Confederation of Asian and Pacific Accountants
                    (
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.ifac.org/about-ifac/membership/members/confederation-asian-and-pacific-accountants-capa"
                    >
                      CAPA
                    </a>
                    ), the national accountancy organisation in the Asia-Pacific
                    region.
                  </p>
                  <p>Audit Bodies</p>
                  <p>
                    Companies are required to seek a statutory auditor to
                    conduct an annual audit of the financial health of their
                    organisation. You can contact:&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://pcaobus.org/"
                    >
                      Public Company Accounting Oversight Board
                    </a>
                    ,&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.deloitte.com/view/en_GX/global/services/Audit/index.htm"
                    >
                      Deloitte &amp; Touche
                    </a>
                    ,&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.ey.com/Home"
                    >
                      Ernst &amp; Young
                    </a>
                    ,&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://home.kpmg.com/us/en/home.html"
                    >
                      KPMG
                    </a>
                    &nbsp;or&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
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
                    Sales Tax is levied by individual states at various rates.
                    Forty-five states and the District of Columbia collect
                    statewide sales taxes, while only 38 states collect local
                    sales taxes and in some cases may rival or even exceed state
                    rates. Consult the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://taxfoundation.org/2021-sales-taxes/"
                    >
                      Tax Foundation
                    </a>
                    &nbsp;website for more information.
                  </p>
                  <p>Standard Rate</p>
                  <p>
                    Sales and use tax rates vary from state to state and
                    generally range from 2.9% to 7.25% at the state level. Most
                    states also allow a "local option" that permits local
                    jurisdictions, such as cities and counties, to impose an
                    additional percentage on top of the state-level tax and to
                    keep the related revenues. Such system may induce consumers
                    to make cross-border purchases (for example through
                    e-commerce).
                  </p>
                  <p>
                    The five states with the highest average combined state and
                    local sales tax rates are Tennessee (9.53%), Louisiana
                    (9.52%), Arkansas (9.51%), Washington (9.23%), and Alabama
                    (9.22%). For the full list of applicable rates, click&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://taxfoundation.org/2021-sales-taxes/"
                    >
                      here
                    </a>
                    .
                  </p>
                  <p>Reduced Tax Rate</p>
                  <p>
                    Varies by state and city (generally ranging from 2.9% to
                    7.25% at the state level). Click&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://taxfoundation.org/publications/state-and-local-sales-tax-rates/"
                    >
                      here
                    </a>
                    &nbsp;for more information.
                  </p>
                  <p>Exclusion From Taxation</p>
                  <p>
                    Varies from state to state. Generally, groceries, energy
                    utilities, prescription drugs and medical supplies as well
                    as certain alternative energy devices and supplies are
                    exempt from sales tax.
                  </p>
                  <p>Method of Calculation, Declaration and Settlement</p>
                  <p>
                    There is no federal VAT or sales tax across the US. Sales
                    tax is calculated differently across states. 45 states and
                    the District of Columbia apply a sales and use taxes
                    (generally between 2.9% and 7.25%). Only Alaska, Delaware,
                    Montana, New Hampshire and Oregon do not impose such taxes.
                    Local sales taxes are collected in 38 states.
                  </p>
                  <p>Other Consumption Taxes</p>
                  <p>
                    Various consumption taxes may be levied at the local level.
                    Click&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://taxfoundation.org/publications/state-and-local-sales-tax-rates/"
                    >
                      here
                    </a>
                    &nbsp;for more information about other consumption taxes by
                    states.
                  </p>
                  <p>
                    Excise duties are levied at federal and state level on a
                    wide range of goods and activities, including gasoline and
                    diesel fuel used for transportation, air transportation,
                    wagering, foreign insurance, certain sporting goods,
                    firearms and ammunition, alcohol, and tobacco.
                  </p>
                  <h2>Individual Taxes</h2>
                  <p>Tax Base For Residents and Non-Residents</p>
                  <p>
                    Resident taxpayers incur federal tax on worldwide income,
                    with credits for foreign income taxes. Non-resident
                    taxpayers are subject to federal tax on Effectively
                    Connected Income (
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci"
                    >
                      ECI
                    </a>
                    ) and US-source non-ECI. Most state taxes apply across
                    resident and non-resident individuals who reside in their
                    territory.
                  </p>
                  <p>
                    Individuals who meet a “substantial presence test” are
                    considered residents for taxation purposes. Such test
                    requires either physical presence in the country for 183
                    days or more during a calendar year, or presence of at least
                    31 days during a calendar year and a cumulative presence of
                    183 days or more based on a weighted number of days during
                    the calendar year (taken at whole value) and the two
                    immediately preceding calendar years (taken at one-third
                    value for the first preceding calendar year and at one-sixth
                    for the second). A "COVID-19 Medical Exception" has been
                    introduced, according to which eligible individuals can
                    exclude from the above computation the "COVID-19 Emergency
                    Period", consisting of a single period of days the
                    individual was physically present in the United States, up
                    to 60 consecutive calendar days that start on or after 1
                    February 2020 and on or before 1 April 2020.
                  </p>
                  <p>&nbsp;</p>
                  <h4>Tax Rate</h4>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width={401}>
                          <p>
                            Different scales depending on the family status
                            (married couples under a joint system, married
                            couples under a separate assets system, single and
                            head of the family), limited to seven rates.
                          </p>
                        </td>
                        <td width={401}>
                          <p>
                            2021 Federal Income Tax Rates: 10%, 15%, 25%, 28%,
                            33%, 35% and 37%
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Single payers (USD)</p>
                        </td>
                        <td width={401}>
                          <p>Tax Rate</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>0 to 9,950</p>
                        </td>
                        <td width={401}>
                          <p>10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>9,951 to 40,525</p>
                        </td>
                        <td width={401}>
                          <p>12%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>40,526 to 86,375</p>
                        </td>
                        <td width={401}>
                          <p>22%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>86,376 to 164,925</p>
                        </td>
                        <td width={401}>
                          <p>24%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>164,926 to 209,425</p>
                        </td>
                        <td width={401}>
                          <p>32%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>209,406 to 523,600</p>
                        </td>
                        <td width={401}>
                          <p>35%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>523,601 or more</p>
                        </td>
                        <td width={401}>
                          <p>37%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Married Filing Jointly (USD)</p>
                        </td>
                        <td width={401}>
                          <p>Tax Rate</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>0 to 19,900</p>
                        </td>
                        <td width={401}>
                          <p>10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>19,901 to 81,050</p>
                        </td>
                        <td width={401}>
                          <p>12%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>81,051 to 172,750</p>
                        </td>
                        <td width={401}>
                          <p>22%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>172,751 to 329,850</p>
                        </td>
                        <td width={401}>
                          <p>24%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>329,850 to 418,850</p>
                        </td>
                        <td width={401}>
                          <p>32%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>418,851 to 628,300</p>
                        </td>
                        <td width={401}>
                          <p>35%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Above 628,301</p>
                        </td>
                        <td width={401}>
                          <p>37%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Married filling separately (USD)</p>
                        </td>
                        <td width={401}>
                          <p>Tax Rate</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>0 to 9,950</p>
                        </td>
                        <td width={401}>
                          <p>10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>9,951 to 40,525</p>
                        </td>
                        <td width={401}>
                          <p>12%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>40,526 to 86,375</p>
                        </td>
                        <td width={401}>
                          <p>22%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>86,376 to 164,925</p>
                        </td>
                        <td width={401}>
                          <p>24%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>164,926 to 209,425</p>
                        </td>
                        <td width={401}>
                          <p>32%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>209,426 to 314,150</p>
                        </td>
                        <td width={401}>
                          <p>35%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>314,151 or more</p>
                        </td>
                        <td width={401}>
                          <p>37%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>Head of Household (USD)</p>
                        </td>
                        <td width={401}>
                          <p>Tax Rate</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>0 to 14,200</p>
                        </td>
                        <td width={401}>
                          <p>10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>14,201 to 54,200</p>
                        </td>
                        <td width={401}>
                          <p>12%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>54,201 to 86,350</p>
                        </td>
                        <td width={401}>
                          <p>22%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>86,351 to 164,900</p>
                        </td>
                        <td width={401}>
                          <p>24%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>164,901 to 209,400</p>
                        </td>
                        <td width={401}>
                          <p>32%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>209,401 to 523,600</p>
                        </td>
                        <td width={401}>
                          <p>35%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>523,601 or more</p>
                        </td>
                        <td width={401}>
                          <p>37%</p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>
                            Alternative Minimum Tax (AMT)
                            <br /> (applies if an individual’s tentative AMT
                            liability exceeds that individual’s regular income
                            tax liability.)
                          </p>
                        </td>
                        <td width={401}>
                          <p>
                            26% up to a taxable income of USD 199,900
                            <br /> 28% on the amount in excess
                          </p>
                          <p>
                            The AMT exemption amount for 2021 is USD 73,600 for
                            singles and USD 114,600 for married couples filing
                            jointly
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={401}>
                          <p>State and local income taxes</p>
                        </td>
                        <td width={401}>
                          <p>
                            Most states, and a number of municipal authorities,
                            impose income taxes on individuals working or
                            residing within their jurisdictions. For more
                            information, visit the&nbsp;
                            <a
                              style={{ color: "red !important" }}
                              target="_blank"
                              href="https://www.irs.gov/advocate/local-taxpayer-advocate"
                            >
                              IRS website
                            </a>
                            .
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>Allowable Deductions and Tax Credits</p>
                  <p>
                    Allowable deductions depend on the state of residence. They
                    may include credits for families and dependencies (e.g.
                    child tax credit, elderly and disabled tax credit, adoption
                    credit), healthcare, education, homeowners (e.g. mortgage
                    interest credit, low-income housing credit), income and
                    savings (e.g. foreign tax credit) and electrical vehicle
                    credit, as well as deductions for work-related consumption
                    (e.g. deductible business expenses, bad debt), healthcare,
                    itemised deduction (e.g. real estate tax, gambling loss,
                    charitable contributions), investments, education and others
                    such as alimony and losses.
                  </p>
                  <p>
                    Citizens and resident aliens may also claim a standard
                    deduction (instead of itemising deductions). The basic
                    standard deduction for 2021 is USD 12,550 for individuals,
                    USD 25,100 for married couples filing a joint return, and
                    USD 18,800 for heads of household.
                  </p>
                  <p>
                    Visit the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/credits-deductions-for-individuals"
                    >
                      IRS site
                    </a>
                    &nbsp;for more detailed information.
                  </p>
                  <p>Special Expatriate Tax Regime</p>
                  <p>
                    The United States levies tax on its citizens and residents
                    on their worldwide income. Non-resident aliens are taxed on
                    their US-ECI-source income and&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci"
                    >
                      income effectively connected
                    </a>
                    &nbsp;with a US trade or business.
                    <br /> According to US laws, a resident alien is an
                    individual that is not a citizen or national of the United
                    States and who meets either the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/individuals/international-taxpayers/alien-residency-green-card-test"
                    >
                      green card test
                    </a>
                    &nbsp;or the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test"
                    >
                      substantial presence test
                    </a>
                    &nbsp;for the calendar year. The resident alien status often
                    results in lower US tax than non-resident alien status, as
                    it provides more allowable deductions and lower tax rates
                    for certain married taxpayers.
                    <br /> If there is a tax treaty in effect between the United
                    States and an individual's country of residence, the
                    provisions of the treaty may override the US resident alien
                    rules.
                    <br /> Expatriation tax applies differently depending on the
                    date of expatriation. Individuals face a penalty of USD
                    10,000 if they fail to file the expatriation Form 8854.
                    Visit the&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/Individuals/International-Taxpayers/Expatriation-Tax"
                    >
                      IRS website
                    </a>
                    &nbsp;for more details.
                  </p>
                  <p>Capital Tax Rate</p>
                  <p>
                    Capital gains are taxed as ordinary income. The graduated
                    rates of tax apply to capital gains from assets held for 12
                    months or less. The maximum federal tax rate on capital
                    gains is 20% for assets held for more than 12 months.
                  </p>
                  <p>
                    For employees, in 2021 social security tax (old-age,
                    survivors, and disability) are levied at a rate of 6.2% on
                    the first USD 142,800 of wages paid, whereas the Medicare
                    hospital insurance tax is levied at 1.45%.
                  </p>
                  <p>
                    A federal estate tax is levied on the fair market value of
                    assets that an individual owns at death. For non-resident
                    non-citizens, estate taxes are imposed only on property
                    situated in the US in excess of USD 60,000. Furthermore, for
                    US citizens and residents, a gift tax is imposed on gifts
                    made during a person’s life, and it is unified with the
                    estate tax. The top estate, gift, and generation-skipping
                    transfer tax rate is 40%.
                  </p>
                  <p>
                    Individuals must pay a 3.8% tax on net investment income
                    over a threshold amount and a 0.9% tax on wages,
                    compensation, or self-employment income that exceeds a
                    threshold amount (varying according to the taxpayer's
                    status: single, married filing separately/jointly, etc.).
                  </p>
                  <p>
                    Documentary stamp taxes may be imposed at the state level,
                    but there are no stamp duties at the federal level.
                  </p>
                  <h2>Double Taxation Treaties</h2>
                  <p>
                    Countries With Whom a Double Taxation Treaty Have Been
                    Signed
                  </p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z#_blank"
                    >
                      Double taxation treaty signed by the U.S.
                    </a>
                  </p>
                  <p>Withholding Taxes</p>
                  <p>
                    Dividends: 30% (paid to a non-resident), Interest: 30% (paid
                    to a non-resident), Royalties: 30% (paid to a non-resident)
                    <br /> Different rates apply based on the treaties signed by
                    the U.S with other countries to avoid double taxation.
                  </p>
                  <p>Bilateral Agreement</p>
                  <p>
                    The United Kingdom and the United States are bound by
                    a&nbsp;
                    <a
                      style={{ color: "red" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.hmrc.gov.uk/taxtreaties/in-force/usa.pdf"
                    >
                      Open PDF
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
                      href="https://www.pwc.com/gx/en/services/tax/navigate-the-tax-measures-in-response-to-Covid-19.html?c=USA&tax-trade-regulatory=corporate-income-tax%3Bvat-gst%3Bcustoms-duties%3Bother-indirect-taxes-excise-other%3Bproperty-tax%3Bgeneral-tax-administration-measure%3Bother-taxes&workforce=personal-income-tax%3Bsocial-security-contribution%3Bother-employment-labour-tax%3Bretirement-and-pensions%3Breward-and-benefits%3Blabour-law%3Bimmigration-travel-restrictions-and-entry-bans%3Bimmigration-quarantine-measures&finance-and-liquidity=general%3Bindividuals%3Bsmes%3Bcorporates%3Binsolvency-law%3Bfurther-information%3Bother&operations=contract-law%3Bcyber-privacy-law%3Bcorporate-law"
                    >
                      Overview of the USA's tax measures in response to Covid-19
                    </a>
                    <br />
                    <a
                      style={{ color: "red" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.irs.gov/"
                    >
                      Internal Revenue Service (IRS)
                    </a>
                    <br />
                    <a
                      style={{ color: "red" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://home.treasury.gov/"
                    >
                      US Department of Treasury
                    </a>

                  </p>
                  <p>Other Domestic Resources</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.ustaxcourt.gov/#_blank"
                    >
                      U.S. Tax Court
                    </a>
                    <br />{" "}
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://www.ifausa.org/default.aspx#_blank"
                    >
                      International Fiscal Association - USA Branch
                    </a>
                  </p>
                  <p>Country Guides</p>
                  <p>
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="https://taxsummaries.pwc.com/united-states#_blank"
                    >
                      
                    </a>
                  </p>
                  <p>
                    Learn more about&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
                      href="http://www.globaltrade.net/international-trade-import-exports/expert-service-provider/United-States/.html#_blank"
                    >
                      Service Providers in the United States&nbsp;
                    </a>
                    on Globaltrade.net, the Directory for&nbsp;
                    <a
                      style={{ color: "red !important" }}
                      target="_blank"
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
  {/*?php include('footer.php'); ?*/}
</>

      );
 };

export default OperatingBusiness;