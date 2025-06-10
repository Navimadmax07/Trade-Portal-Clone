
import React, { useState } from "react";

const OperatingBusiness = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication logic
  const [selectedCountry, setSelectedCountry] = useState("china");
  return (
    <div>
      <div>
      {isLoggedIn ? (
        <p>Welcome! You can access this feature.</p>
      ) : (
        <p className="text-center py-5">
          <i className="fa fa-lock"></i> This feature can't be accessed without login.
        </p>
      )}
      </div>
    

    <div>
      <button onClick={() => setSelectedCountry("china")}>China</button>
      <button onClick={() => setSelectedCountry("usa")}>USA</button>

      <div style={{ display: selectedCountry === "china" ? "block" : "none" }}>
        <p>Content for China</p>
      </div>
      <div style={{ display: selectedCountry === "usa" ? "block" : "none" }}>
        <p>Content for USA</p>
      </div>
    </div>
   
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12 pt-3">
          <div className="row">
            <div className="col-md-3" id="sidemenu">
              <a href="/Client/Dashboard" className="btn btn-default">
                <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>
              </a>
              {/* Include overseasMenu component if needed */}
            </div>
            <div className="col-md-9 mb-5">
              <div className="card">
                <div className="card-header">
                  <h3>Operating a Business</h3>
                </div>
                <div className="card-body">
                  <a href="/Client/OperatingBusiness" className="btn btn-primary">
                    CHINA
                  </a>
                  <a href="/Client/OperatingBusinessUsa" className="btn btn-primary">
                    USA
                  </a>

                  <div className="col-md-12 mt-4 china">
                    <p>
                      <strong>Wholly foreign-owned enterprise (WFOE)</strong>
                    </p>
                    <p>
                      <strong>Number of partners:</strong> One juridical person or one or more shareholders. Entity
                      owned 100% by foreign interests that have the same rights as a local company.
                    </p>
                    <p>
                      <b>Capital (max/min):</b> Minimum varies according to the sector of activity
                    </p>
                    <p>
                      <b>Shareholders and liability:</b> Limited to the amount of contributions.
                    </p>

                    {/* You can continue formatting other sections similarly */}

                    <p>
                      <a href="https://www.chinasme.org.cn/" target="_blank" rel="noopener noreferrer">
                        Chinese Association of International SME Cooperation
                      </a>
                    </p>
                    <p>
                      Find a Company or a Financial Report:{" "}
                      <a href="http://english.mofcom.gov.cn/" target="_blank" rel="noopener noreferrer">
                        Ministry of Commerce
                      </a>
                    </p>
                    <h4 className="mt-3 font-weight-bold">Business Setup Procedures</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Setting Up a Company</th>
            <th>China</th>
            <th>East Asia & Pacific</th>
          </tr>
        </thead>
        <tbody>
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
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          Doing Business: China
        </a>
      </p>

      <p>The Competent Organisation</p>
      <a
        href="http://english.mofcom.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "red" }}
      >
        Ministry of Commerce
      </a>

      <h4 className="mt-3 font-weight-bold">Recovery Procedures</h4>
      <p><strong>Principle:</strong> Minimum Debt-to-Capital Ratio Triggering Liquidation Bankruptcy Laws.</p>
      <p>
        The law on bankruptcy is being reshaped in China. It is difficult to be declared as bankrupt. To be declared as
        bankrupt, equities must be negative. 
        <a
          href="http://www.npc.gov.cn/zgrdw/englishnpc/Law/2011-02/15/content_1620615.htm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          Company bankruptcy laws
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">The Active Population in Figures</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th></th>
            <th>2011</th>
            <th>2013</th>
            <th>2015</th>
          </tr>
        </thead>
        <tbody>
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
        <thead className="bg-dark text-white">
          <tr>
            <th></th>
            <th>2015</th>
            <th>2016</th>
            <th>2017</th>
          </tr>
        </thead>
        <tbody>
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
        rel="noopener noreferrer"
        style={{ color: "red" }}
      >
        China Statistics
      </a>
      <br />
      <a
        href="http://www.stats.gov.cn/english/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "red" }}
      >
        China National Bureau of Statistics
      </a>

      <p>For Further Information About the Labour Market</p>
      <a
        href="http://www.ilo.org/beijing/lang--en/index.htm"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "red" }}
      >
        ILO, International Labour Organisation
      </a>

      <h3 className="mt-3 font-weight-bold">Working Conditions</h3>
      <p>Opening Hours</p>
      <ul>
        <li>Legal Weekly Duration</li>
      </ul>
      <p style={{ textIndent: "80px" }}>40 hours</p>

      <ul>
        <li>Maximum Duration</li>
      </ul>
      <p style={{ textIndent: "80px" }}>
        8 hours per day with a maximum of 44 hours per week on an average. Not more than additional 36 hours per month.
      </p>

      <ul>
        <li>Night Hours</li>
      </ul>

      <p>
        <strong>Working Rest Day:</strong> One day per week.
      </p>

      <p>
        <strong>Paid Annual Vacation:</strong> Varies based on employment terms.
      </p>

      <p>
        <strong>Retirement Age:</strong> The retirement age is 55 for women and 60 for men.
      </p>

      <p>
        <strong>Child Labour and Minimum Age For Employment:</strong> More than 15 years for the industry. For other
        sectors, children can work at 13-14 years under certain conditions.
      </p>

      <p>
        <strong>Informal Labour Market:</strong> Moonlighting is estimated at 18.5% of national workers and 72.5% of
        foreign workers.
      </p>

      <h3 className="mt-3 font-weight-bold">The Cost of Labour</h3>

      <p>
        <strong>Minimum Wage:</strong> The minimum wage varies across the provinces. The highest monthly minimum wages
        are in parts of Guangdong, Jiangsu, and Zhejiang provinces, all surpassing the RMB 2,000 (US$289) mark.
        Shanghai has the highest minimum wage in China, at RMB 2,480 (US$358) per month. Some rural areas, such as
        Liaoning (1,120 RMB/US$162), Hunan (1,130 RMB/US$163), and Anhui (1,150 RMB/US$166), have lower minimum wages.
        <br />
        <a
          href="https://www.china-briefing.com/news/wp-content/uploads/2020/01/Minimum-Wages-in-China-2020-Updated-April-29-2020.jpg"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          China Briefing's 2020 minimum wage guide
        </a>
      </p>

      <p>
        <strong>Average Wage:</strong> The average monthly salary was 8,452 yuan ($1,228.38) in 37 major cities during
        the second quarter of 2019, with Beijing, Shanghai, and Shenzhen all exceeding 10,000 yuan.
      </p>

      <h3 className="mt-3 font-weight-bold">Other Forms of Pay</h3>

      <ul>
        <li>Pay For Overtime: Increase of 150% if the worker is required to work extra.</li>
        <li>Increase of 200% if an additional rest day cannot be granted.</li>
        <li>Pay For Rest Days Worked.</li>
        <li>Pay For Night Hours.</li>
        <li>Pay For Overtime at Night.</li>
      </ul>

      <h3 className="mt-3 font-weight-bold">Social Security Costs</h3>

      <p>
        <strong>The Areas Covered:</strong> Pension, medical, maternity, unemployment, and work-related injury
        insurance schemes are provided.
      </p>

      <p>
        <strong>Contributions Paid By the Employer:</strong> Contributions vary across the country and for different
        schemes. China's Social Security System consists of five mandatory insurance schemes (pension fund, medical
        insurance, industrial injury insurance, unemployment insurance, and maternity insurance) and a housing fund
        (only applicable to Chinese employees). In Beijing, the employer's share of social insurance contributions
        amounts to approximately 27.8% to 29.5%:
      </p>

      <ul>
        <li>Pension: 16%</li>
        <li>Medical expenses: 10%</li>
        <li>Unemployment: 0.8%</li>
        <li>Maternity: 0.8%</li>
        <li>Work-related injury: 0.2% to 1.9%</li>
      </ul>

      <p>
        <strong>Contributions Paid By the Employee:</strong> Employee contributions vary depending on the scheme and
        province.
      </p>
      <p className="ml-3">
        Contributions vary across the country and for different schemes. China’s Social Security System consists of 5
        mandatory insurance schemes (pension fund, medical insurance, industrial injury insurance, unemployment
        insurance, and maternity insurance) and a housing fund (only applicable to Chinese employees). In Beijing, the
        employee's share of social insurance contributions amounts approximately to 10.2%:
      </p>
      <ul>
        <li>Pension: 8%</li>
        <li>Medical expenses: 2%</li>
        <li>Unemployment: 0.2%</li>
        <li>Maternity: 0%</li>
        <li>Work-related injury: 0%</li>
      </ul>

      <p>
        <strong>Competent Organization:</strong>{" "}
        <a
          href="http://english.gov.cn/state_council/2014/09/09/content_281474986284102.htm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          Ministry of Human Resources and Social Security (MOHRSS)
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">Management of Human Resources</h4>
      <p>
        <strong>Method of Recruitment:</strong> Recruitment is increasingly done through the internet, though newspaper
        advertisements remain common. Trade fairs and university recruitment campaigns are also effective methods.
        Interviews are the most widely used recruitment method, alongside technical or English tests.
      </p>

      <p>
        <strong>Recruitment Agencies:</strong> Many recruitment agencies operate in China, such as{" "}
        <a href="https://www.hudson.cn/en-gb/careers-at-hudson" target="_blank" style={{ color: "red" }}>
          Hudson
        </a>
        ,{" "}
        <a href="http://www.wang-li.com/" target="_blank" style={{ color: "red" }}>
          Wang-li
        </a>
        ,{" "}
        <a href="http://www.michaelpage.com.cn/" target="_blank" style={{ color: "red" }}>
          Michael Page
        </a>
        .
      </p>

      <p>
        <strong>Recruitment Websites:</strong>{" "}
        <a href="http://www.chinahr.com/" target="_blank" style={{ color: "red" }}>
          ChinaHR.com
        </a>
        ,{" "}
        <a href="http://www.zhaopin.com/" target="_blank" style={{ color: "red" }}>
          Zhaopin.com
        </a>
        ,{" "}
        <a href="http://www.51job.com/default-e.php" target="_blank" style={{ color: "red" }}>
          51job.com
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">Employment Contracts</h4>
      <p>
        <strong>Type of Contract:</strong> Legal provisions govern work contracts and collective agreements but may be
        supplemented by individual negotiations. Formalities regarding employment contracts are strict, while dismissal
        regulations are relatively flexible. The main contract types include permanent contracts, fixed-term contracts,
        and project-specific contracts.
      </p>

      <h4 className="mt-3 font-weight-bold">Dismissal Regulations</h4>
      <ul>
        <li>
          <strong>Retirement:</strong> Employees can retire at the legally designated age.
        </li>
        <li>
          <strong>Dismissals:</strong> An employee can be dismissed during the trial period if deemed unqualified, for
          violating company rules, or for causing significant financial loss due to professional misconduct. Dismissals
          are also permitted if an employee cannot resume their job after a long illness, fails efficiency training, or
          cannot agree to contract modifications.
        </li>
      </ul>

      <h4 className="mt-3 font-weight-bold">Labour Laws</h4>
      <p>
        <a href="http://www.sigma.sk/index_en.php" target="_blank" style={{ color: "red" }}>
          Employment law
        </a>
        ,{" "}
        <a
          href="http://www.doingbusiness.org/data/exploreeconomies/China/employing-workers#_blank"
          target="_blank"
          style={{ color: "red" }}
        >
          Doing Business: China
        </a>{" "}
        provides a summary of labour regulations for local enterprises.
      </p>

      <h4 className="mt-3 font-weight-bold">Dispute Settlement</h4>
      <p>
        <strong>Conciliation Process:</strong> If a dispute arises between an employer and employee, parties may use
        mediation, arbitration, or pursue litigation. Many contracts require arbitration through the China International
        Economic and Trade Arbitration Commission (CIETAC).
      </p>

      <h4 className="mt-3 font-weight-bold">Judicial Structures</h4>
      <p>
        <strong>Legal Framework:</strong>{" "}
        <a
          href="https://iclg.com/practice-areas/employment-and-labour-laws-and-regulations/china"
          target="_blank"
          style={{ color: "red" }}
        >
          Employment Law
        </a>
      </p>
      <p>
        <strong>Competent Legal Body:</strong> Courts handle disputes regarding labour laws and employer-employee
        conflicts.
      </p>
      <h4 className="mt-3 font-weight-bold">People's Court</h4>
      <p>The judicial system handles disputes related to labour laws and taxation.</p>

      <h4 className="mt-3 font-weight-bold">Social Partners</h4>
      <p>
        <strong>Social Dialogue and Involvement of Social Partners:</strong> Worker protests and stoppages occur
        regularly, but the right to strike is not protected by law. China has not ratified core International Labour
        Organisation conventions on freedom of association and collective bargaining. Enforcement of labour regulations
        is reportedly poor. The All China Federation of Trade Unions (ACFTU) is the only recognized trade union, as
        independent unions are illegal.
      </p>

      <h4 className="mt-3 font-weight-bold">Unions</h4>
      <p>
        <a href="http://en.acftu.org/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          All China Federation of Trade Unions (ACFTU)
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">Regulation Bodies</h4>
      <p>
        <a
          href="http://english.gov.cn/state_council/2014/09/09/content_281474986284102.htm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          Ministry of Employment
        </a>
      </p>

      <h3 className="font-weight-bold">Tax System</h3>
      <h4 className="mt-3 font-weight-bold">Corporate Taxes</h4>
      <p>
        <strong>Tax Base for Resident and Foreign Companies:</strong> An enterprise is considered a resident if it is
        established in China or has its place of effective management there. Foreign companies are subject to taxation
        if they derive income from China or have an establishment within the country.
      </p>

      <h4 className="mt-3 font-weight-bold">Tax Rates</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Type</th>
            <th>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Rate</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Small-scale enterprises (annual turnover below CNY 3 million) <br /> (Jan 2019 - Dec 2021)</td>
            <td>5% for annual taxable income below CNY 1 million (2.5% in 2021 due to COVID-19) <br /> 10% for income between CNY 1 - 3 million</td>
          </tr>
          <tr>
            <td>High-technology enterprises (HNTE)</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>Technology-advanced service enterprises</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>Companies engaged in encouraged industries (Western Regions, Hainan Free Trade Port, etc.)</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>Key software production and IC design enterprises</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Companies engaged in pollution prevention and control <br /> (Jan 2019 - Dec 2021)</td>
            <td>15%</td>
          </tr>
        </tbody>
      </table>
      <h4 className="mt-3 font-weight-bold">Tax Rate For Foreign Companies</h4>
      <p>
        A non-resident enterprise that has no establishment or place in China is taxed only on its China-source income.
        A non-tax resident enterprise with an establishment or place in China is subject to corporate taxes on income
        derived by such establishment or place from sources in China as well as income derived from outside the country
        that is effectively connected with such establishment or place.
      </p>

      <h4 className="mt-3 font-weight-bold">Capital Gains Taxation</h4>
      <p>
        There is no separate capital gains tax in China; capital gains (and losses) of companies generally are combined
        with other operating income and taxed at the corporate income rate (25%).
      </p>
      <p>
        The sale of real estate and net development costs are subject to the land appreciation tax at four bands ranging
        from 30% to 60% (depending on the percentage of gain realized).
      </p>

      <h4 className="mt-3 font-weight-bold">Main Allowable Deductions and Tax Credits</h4>
      <p>
        Generally, all documented expenses, costs, and losses in generating taxable income are deductible up to a limit:
        entertainment expenses are 60% deductible up to 0.5% of total income, advertising (up to 15% of total income,
        30% in some cases), and donations (up to 12% of total income). Donations for poverty alleviation in certain
        areas can be fully deducted, and those made via charitable organizations or governments to counter the COVID-19
        epidemic are also fully deductible for CIT purposes.
      </p>
      <p>
        Intangible assets such as patents, trademarks, copyrights, and land use rights must be amortized over at least
        ten years. Organizational and start-up expenses are fully tax-deductible in the first year. Interest on loans is
        tax-deductible (subject to conditions). Additionally, 200% of salary expenses paid to handicapped staff are
        deductible.
      </p>
      <p>
        Tax losses can typically be carried forward for up to five years starting from the year subsequent to the loss,
        but carryback is not permitted. Preferential tax treatment includes incentives for high-technology enterprises
        (HNTE), companies in special economic zones (SEZ), pilot free trade zones (FTZ), and exemptions for certain
        industries such as agriculture, forestry, fishery, and infrastructure.
      </p>

      <h4 className="mt-3 font-weight-bold">Other Corporate Taxes</h4>
      <p>
        A real estate tax is levied annually at 1.2% on the original value of business-use land and buildings. Rental
        value may be taxed at 12%, though local governments often reduce this to 4% for leasing residential property.
      </p>
      <p>
        A deed tax (typically 3% to 5%) is levied on transfers of land use rights and real properties. Additionally, an
        urban and township land-use tax applies based on occupied land area.
      </p>
      <p>
        The land appreciation tax applies at rates between 30% and 60%. Stamp duty (0.005% - 0.1%) applies to certain
        legal documents.
      </p>
      <p>
        Employers contribute around 16% of basic payroll to retirement schemes and approximately 40% of base monthly
        salary (varies across regions) to medical, maternity, unemployment, and work-related injury insurance funds.
      </p>
      <p>
        Urban construction and maintenance tax rates range from 7% in urban areas, 5% in county areas, and 1% elsewhere.
        Educational surcharge taxes apply at 3% nationally and 2% locally.
      </p>
      <p>
        A motor vehicle acquisition tax (10%) applies to automobiles, tramcars, trailers, and motorcycles. There is also
        a fixed-rate vehicle and vessel tax.
      </p>
      <p>
        A 3% cultural business development levy applies to entertainment and advertising businesses. Natural resources,
        such as crude oil, coal, minerals, and water, are subject to a local resources tax, either on turnover or volume.
      </p>
      <p>
        Enterprises emitting taxable pollutants must pay an environmental protection tax (EPT), calculated based on the
        volume of pollutants discharged.
      </p>

      <h4 className="mt-3 font-weight-bold">Further Information</h4>
      <p>
        Consult the{" "}
        <a
          href="http://www.chinatax.gov.cn/eng/c101270/c101272/c5157954/content.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          State Tax Administration
        </a>{" "}
        for more details.
      </p>

      <h4 className="mt-3 font-weight-bold">Other Domestic Resources</h4>
      <p>
        <a href="http://www.chinatax.gov.cn/eng/home.html#_blank" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          State Administration of Taxation of the PRC
        </a>
      </p>
      <p>
        <a
          href="http://www.doingbusiness.org/en/data/exploreeconomies/china/paying-taxes#_blank"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          Doing Business: China
        </a>{" "}
        for a summary of taxes and mandatory contributions.
      </p>
      <h4 className="mt-3 font-weight-bold">Country Comparison For Corporate Taxation</h4>
      <table className="table table-bordered">
        <thead>
          <tr className="bg-dark text-white">
            <th></th>
            <th>China</th>
            <th>East Asia & Pacific</th>
            <th>United States</th>
            <th>Germany</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of Payments of Taxes per Year</td>
            <td>7.0</td>
            <td>22.9</td>
            <td>10.6</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>Time Taken For Administrative Formalities (Hours)</td>
            <td>142.0</td>
            <td>198.0</td>
            <td>175.0</td>
            <td>218.0</td>
          </tr>
          <tr>
            <td>Total Share of Taxes (% of Profit)</td>
            <td>64.9%</td>
            <td>33.9%</td>
            <td>43.8%</td>
            <td>49.0%</td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>Source: Doing Business - 2017.</em>
      </p>
      <p>
        <em>
          * The greater the index, the more transparent the conditions of transactions.
          ** The greater the index, the more the manager is personally responsible.
          *** The greater the index, the easier it will be for shareholders to take legal action.
          **** The greater the index, the higher the level of investor protection.
        </em>
      </p>

      <h4 className="mt-3 font-weight-bold">Accounting Rules</h4>
      <h4 className="mt-3 font-weight-bold">Accounting System</h4>
      <h4 className="mt-3 font-weight-bold">Accounting Standards</h4>
      <p>
        The accountancy standards for companies were put into effect by the Ministry of Finance (MOF). China
        established its first complete standards specific to accountancy in 1997 and the MOF promulgated an additional
        13 standards since then.
      </p>
      <p>
        Chinese Accounting Standards for Business Enterprises (ASBEs) are mandatory for listed Chinese enterprises.
        Other Chinese enterprises are encouraged to apply the ASBEs, which are substantially in line with IFRS, except
        for certain modifications reflecting China's circumstances.
      </p>

      <h4 className="mt-3 font-weight-bold">Accounting Regulation Bodies</h4>
      <p>
        <a href="http://www.mof.gov.cn/#_blank" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          Ministry of Finance
        </a>
        <br />
        <a href="http://www.casc.org.cn/english.shtml#_blank" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          CASC - Chinese Committee of Accounting Standards
        </a>
        <br />
        <a href="http://www.cicpa.org.cn/BNIE/#_blank" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          CICPA - Chinese Institute of Chartered Accountants
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">Accounting Law</h4>
      <p>
        Initially promulgated in 1985, the Accounting Law of December 1993 was updated in 1999. It includes legal
        standards governing accountancy and serves as the foundation for administrative rules and regulations.
      </p>

      <h4 className="mt-3 font-weight-bold">Difference Between National and International Standards (IAS/IFRS)</h4>
      <p>
        China adopted Accounting Standards for Business Enterprises (ASBEs) that are substantially converged with IFRS.
        ASBEs are mandatory for all Chinese companies whose securities trade in a public market. Additionally, Chinese
        companies listed on the Hong Kong Stock Exchange have the option to choose among IFRS Standards, Hong Kong
        Financial Reporting Standards (HKFRS), and Chinese Accounting Standards (ASBEs).
      </p>
      <p>
        According to a{" "}
        <a href="http://www.ifrs.org/use-around-the-world/use-of-ifrs-standards-by-jurisdiction/china/#extent" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          2017 IFRS report
        </a>
        , 30% of Chinese companies that represent 69% of the market capitalization in Mainland China already use IFRS
        standards.
      </p>
    <h4 className="mt-3 font-weight-bold">Accounting News</h4>
      <p>
        <a href="http://world.einnews.com/news/china-accounting#_blank" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          China Accounting News (EIN)
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">Accounting Practices</h4>
      <p>
        <strong>Tax Year:</strong> From 1 January to 31 December.
      </p>

      <h4 className="mt-3 font-weight-bold">Accounting Reports</h4>
      <p>
        Audit reports normally contain a paragraph defining the 'task' or 'scope' and a paragraph of opinion. The
        paragraph of opinion aims to establish if the accounts were prepared according to the appropriate regulations.
      </p>
      <p>
        Financial statements should comprise a balance sheet, profit and loss accounts, a report of gross self-financing
        margin, notes on the accounts, and an account for appropriation of profits and losses.
      </p>
      <p>
        For more details, visit{" "}
        <a href="https://www.chinaaccountingblog.com/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          China Accounting Blog
        </a>
        .
      </p>

      <h4 className="mt-3 font-weight-bold">Accountancy Profession</h4>
      <p>
        <strong>Accountants:</strong> The Chinese Institute of Chartered Accountants oversees accountants in China.
      </p>
      <p>
        <strong>Professional Accountancy Bodies:</strong>{" "}
        <a href="http://www.cicpa.org.cn/BNIE/#_blank" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          CICPA - Chinese Institute of Chartered Accountants
        </a>
      </p>
      <p>
        <strong>Member of International Federation of Accountants (IFAC):</strong> Yes.
      </p>
      <p>
        <strong>Member of Other Federations:</strong>{" "}
        <a
          href="https://www.ifac.org/about-ifac/membership/members/confederation-asian-and-pacific-accountants-capa"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          Confederation of Asian and Pacific Accountants (CAPA)
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">Audit Bodies</h4>
      <p>
        Chinese law requires representative offices and foreign-invested enterprises to utilize registered accountants
        in China for official financial submissions. To find an auditor, contact the{" "}
        <a href="http://www.audit.gov.cn/en/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          National Audit Office of China (CNAO)
        </a>
        .
      </p>

      <h4 className="mt-3 font-weight-bold">Consumption Taxes</h4>
      <p>
        <strong>Nature of the Tax:</strong> Value Added Tax (VAT) and Consumption Tax.
      </p>
      <p>
        <strong>Standard Rate:</strong> 13%, varying by taxpayer status, product type, and sector.
      </p>

      <h4 className="mt-3 font-weight-bold">Reduced Tax Rates</h4>
      <p>Goods and services taxable at different rates:</p>
      <ul>
        <li>3%: Certain used goods, consignment sales, pawned goods, duty-free items, hydroelectric electricity.</li>
        <li>5%: Labour dispatching and human resource outsourcing services.</li>
        <li>
          6%: R&D and technology services, financial product trading, value-added telecommunication services, education.
        </li>
        <li>
          9%: Agricultural products, heating, gas, transportation services, basic telecommunication, construction services.
        </li>
        <li>
          Zero-rated (exempt-with-credit): Exported goods, international transportation, software services, technology
          transfer.
        </li>
      </ul>

      <p>
        Taxpayers supplying VAT-reduced items must document them separately, or the reduction won't apply.
      </p>

      <h4 className="mt-3 font-weight-bold">Exclusion From Taxation</h4>
      <p>Certain exemptions apply based on business activity and compliance.</p>
      <p>
        Exempt goods include agricultural products sold by primary agricultural producers, contraceptive medicines and
        appliances, antique books, imported equipment for scientific research and education, free economic assistance
        imports, products for handicapped individuals, and second-hand goods sold by individuals.
      </p>
      <p>
        Several cross-border services are also exempt, including construction services for projects outside China,
        warehousing, radio/film/tv broadcast services, education, medical services, tourism, and postal services.
      </p>
      <p>
        Taxpayers supplying exempt goods must book these sales separately; otherwise, no exemption applies.
      </p>

      <h4 className="mt-3 font-weight-bold">Method of Calculation, Declaration, and Settlement</h4>
      <p>
        Sales/importation of goods, provision of services, and sales of intangible or immovable properties are subject
        to VAT, applied either on volume (taxation by volume) or on value (ad valorem taxation).
      </p>
      <p>
        VAT returns must be filed monthly by the 15th of the following month. Import VAT must be paid within 15 days
        after customs issue the tax payment certificate.
      </p>
      <p>
        Taxpayer categories:
        <ul>
          <li>General taxpayers: Annual turnover of CNY 5 million or more.</li>
          <li>Small-scale taxpayers: Annual turnover below CNY 5 million.</li>
        </ul>
        More details can be found on the{" "}
        <a href="http://www.chinatax.gov.cn/eng/home.html" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          State Taxation Administration
        </a>{" "}
        website.
      </p>

      <h4 className="mt-3 font-weight-bold">Other Consumption Taxes</h4>
      <p>
        Consumption tax applies to nonessential, luxury, or resource-intensive goods, such as alcohol, luxury
        cosmetics, jewelry, motorcycles, yachts, golf products, and tobacco. The tax is calculated based on the sales
        value or volume.
      </p>
      <p>
        <strong>Additional taxes:</strong>
        <ul>
          <li>Tobacco tax: 20% on purchase value.</li>
          <li>Stamp duties: 0.005%-0.1% on legal documents.</li>
          <li>Motor vehicle acquisition tax: 10% on purchase/import.</li>
          <li>Vehicle and vessel tax: Fixed amounts based on weight.</li>
          <li>Vessel tonnage tax: Applied to overseas vessels entering China.</li>
        </ul>
      </p>

      <h4 className="mt-3 font-weight-bold">Individual Taxes</h4>
      <p>
        <strong>Tax Base for Residents and Non-Residents:</strong> Individuals residing in China for 183+ days per year
        are considered residents. Residents are taxed on worldwide income, while non-residents are taxed only on
        China-source income.
      </p>

      <h4 className="mt-3 font-weight-bold">Income Tax Rates</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Annual Taxable Income ((after deducting the standard basic deduction,
                                                    specific deductions, specific additional deductions, and other
                                                    allowable deductions))</th>
            <th>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0 - 36,000</td>
            <td>3%</td>
          </tr>
          <tr>
            <td>36,000 - 144,000</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>144,000 - 300,000</td>
            <td>20%</td>

          </tr>
          <tr>
            <td>300,000 - 420,000</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>420,000 - 660,000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>660,000 - 960,000</td>
            <td>35%</td>
          </tr>
          <tr>
            <td>960,001 and above</td>
            <td>45%</td>
          </tr>
       
        </tbody>
      </table>
      <h4 className="mt-3 font-weight-bold">Income Tax Rates for Private Businesses</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Annual Taxable Income (CNY)</th>
            <th>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0 - 30,000</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>30,000 - 90,000</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>90,000 - 300,000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>300,000 - 500,000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>500,001 and above</td>
            <td>35%</td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-3 font-weight-bold">Income Tax Rates for Non-Residents</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Income Range (CNY)</th>
            <th>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0 - 3,000</td>
            <td>3%</td>
          </tr>
          <tr>
            <td>3,000 - 12,000</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>12,000 - 25,000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>25,000 - 35,000</td>
            <td>25%</td>
          </tr>
       
      <tr>
            <td>144,000 - 300,000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>300,000 - 420,000</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>420,000 - 660,000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>660,000 - 960,000</td>
            <td>35%</td>
          </tr>
          <tr>
            <td>960,001 and above</td>
            <td>45%</td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-3 font-weight-bold">Income Tax Rates for Private Businesses</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Annual Taxable Income (CNY)</th>
            <th>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0 - 30,000</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>30,000 - 90,000</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>90,000 - 300,000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>300,000 - 500,000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>500,001 and above</td>
            <td>35%</td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-3 font-weight-bold">Income Tax Rates for Non-Residents</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Income Range (CNY)</th>
            <th>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0 - 3,000</td>
            <td>3%</td>
          </tr>
          <tr>
            <td>3,000 - 12,000</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>12,000 - 25,000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>25,000 - 35,000</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>35,000 - 55,000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>55,000 - 80,000</td>
            <td>35%</td>
          </tr>
          <tr>
            <td>80,001 and above</td>
            <td>45%</td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-3 font-weight-bold">Flat Tax Rate for Other Income Types</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Income Type</th>
            <th>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Incidental income, rental income, interest income, dividends, and capital gains</td>
            <td>20%</td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-3 font-weight-bold">Allowable Deductions and Tax Credits</h4>
      <p>
        Deductions are available depending on income category. For wages and salaries in China, individuals receive a
        flat monthly deduction of CNY 5,000.
      </p>
      <p>Other deductible personal contributions include payments to housing funds, medical insurance, pensions, and unemployment insurance.</p>
      <p>
        Special deductions apply:
        <ul>
          <li>Child education: CNY 1,000 per child/month</li>
          <li>Continued education: CNY 400 per month or 3,600 per year</li>
          <li>Mortgage interest: CNY 1,000 per month</li>
          <li>Rental expense: CNY 800-1,500 per month (based on location)</li>
          <li>Elderly care: Up to CNY 2,000 per month</li>
          <li>Major medical expenses: Qualified self-paid portion above CNY 15,000, capped at CNY 80,000/year</li>
        </ul>
      </p>
      <p>
        Charitable contributions to qualified domestic organizations are deductible up to 30% of taxable income.
        Losses from privately-owned businesses can be carried forward for five years.
      </p>

      <h4 className="mt-3 font-weight-bold">Capital Tax Rate</h4>
      <p>Capital gains, rental income, interest, and dividends are taxed at a flat 20% unless specified otherwise.</p>
      
      <h4 className="mt-3 font-weight-bold">Other Taxes</h4>
      <p>
        <strong>Consumption Tax:</strong> Applies to luxury and resource-intensive goods such as alcohol, cosmetics, fuel oil, jewelry, motorcycles, yachts, golf products, luxury watches, and tobacco.
      </p>
      <p>
        <strong>Real Estate Tax:</strong> Levied annually on business-use land and buildings at 1.2% of the property's original value. Local governments may offer tax reductions between 10% and 30%.
      </p>
      <p>
        <strong>Land Appreciation Tax:</strong> Levied on the gain from property disposal at progressive rates ranging from 30% to 60%.
      </p>
      <p>
        <strong>Deed Tax:</strong> Applied to the purchase, sale, gift, or exchange of land use rights and real properties at rates between 3% and 5%.
      </p>
      <p>No inheritance, estate, or gift taxes are currently levied in China.</p>

      <h4 className="mt-3 font-weight-bold">Double Taxation Treaties</h4>
      <p>
        Countries With Whom a Double Taxation Treaty Has Been Signed:{" "}
        <a
          href="https://taxsummaries.pwc.com/peoples-republic-of-china/corporate/withholding-taxes#_blank"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          International tax treaties signed by China
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">Withholding Taxes</h4>
      <p>
        Withholding tax rates in China:
        <ul>
          <li>10% for dividends, interest, and royalties paid to non-resident companies.</li>
          <li>20% for dividends, interest, and royalties paid to resident and non-resident individuals.</li>
          <li>6% VAT generally applies to interest and royalties (waived for royalties related to technology transfer).</li>
        </ul>
      </p>

      <h4 className="mt-3 font-weight-bold">Bilateral Agreements</h4>
      <p>
        The United Kingdom and China are bound by a{" "}
        <a
          href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/729869/consol-china-ukDTA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          double taxation treaty
        </a>
        .
      </p>

      <h4 className="mt-3 font-weight-bold">Sources of Fiscal Information</h4>
      <ul>
        <li>
          <a
            href="https://www.pwc.com/gx/en/services/tax/navigate-the-tax-measures-in-response-to-Covid-19.html?c=China"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red" }}
          >
            Overview of China's tax measures in response to Covid-19
          </a>
        </li>
        <li>
          <a
            href="http://www.chinatax.gov.cn/eng/home.html#_blank"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red" }}
          >
            State Taxation Administration
          </a>
        </li>
        <li>
          <a
            href="http://english.gov.cn/#_blank"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red" }}
          >
            State Council of the PRC
          </a>
        </li>
        <li>
          <a
            href="https://www.fmprc.gov.cn/mfa_eng/wjb_663304/zzjg_663340/cws_665320/#_blank"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red" }}
          >
            Department of Finance
          </a>
        </li>
      </ul>

      <h4 className="mt-3 font-weight-bold">Other Domestic Resources</h4>
      <p>
        <a href="http://english.customs.gov.cn/#_blank" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          China Customs
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">Country Guides</h4>
      <p>
        <a href="https://taxsummaries.pwc.com/peoples-republic-of-china#_blank" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          PWC Tax Guide - China
        </a>
      </p>

      <h3 className="mt-5 font-weight-bold">Legal Environment</h3>
      <h4 className="mt-3 font-weight-bold">Business Contract</h4>
      <p>
        <strong>General Observation:</strong> Contracts should explicitly define obligations of each party.
      </p>
      <p>
        <strong>Law Applicable to Contracts:</strong>{" "}
        <a href="https://www.wipo.int/edocs/lexdocs/laws/en/cn/cn137en.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          Law on contracts
        </a>
      </p>
      <p>
        <strong>Advisable Incoterms:</strong>{" "}
        <a href="http://www.iccwbo.org/incoterms/preambles/pdf/FOB.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          FOB
        </a>
        {" "}
        or{" "}
        <a href="https://iccwbo.org/resources-for-business/incoterms-rules/incoterms-rules-2010/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          CIF
        </a>
        .
      </p>
      <p>
        <strong>Language of Domestic Contracts:</strong> Contracts may be written in English and Chinese; however, the Chinese version prevails in case of conflict.
      </p>

      <h3 className="mt-5 font-weight-bold">Intellectual Property</h3>
      <h4 className="mt-3 font-weight-bold">National Organisations</h4>
      <p>
        <a href="http://english.cnipa.gov.cn/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          China National Intellectual Property Administration
        </a>{" "}
        (CNIPA)
      </p>
      <p>
        <a href="https://www.chinatrademarkoffice.com/index.php?" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          Trademark Office
        </a>{" "}
        (SAIC)
      </p>

      <h4 className="mt-3 font-weight-bold">Regional Organisations</h4>
      <p>
        <a href="https://www.apec.org/Groups/Committee-on-Trade-and-Investment/Intellectual-Property-Rights-Experts-Group" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
          Expert Group on Intellectual Property Rights (IPEG)
        </a>
      </p>

      <h4 className="mt-3 font-weight-bold">International Membership</h4>
      <ul>
        <li>
          Member of{" "}
          <a href="http://www.wipo.int/portal/index.html.en" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
            WIPO
          </a>{" "}
          (World Intellectual Property Organization)
        </li>
        <li>
          Signatory to the{" "}
          <a href="http://www.wipo.int/treaties/en/ip/paris/trtdocs_wo020.html" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
            Paris Convention
          </a>{" "}
          for the Protection of Intellectual Property
        </li>
        <li>
          Member of the{" "}
          <a href="http://www.wto.org/english/tratop_e/trips_e/trips_e.htm" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
            TRIPS agreement
          </a>{" "}
          (Trade-Related Aspects of Intellectual Property Rights)
        </li>
      </ul>
      <h4 className="mt-3 font-weight-bold">National Regulation and International Agreements</h4>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>Type of Property and Law</th>
            <th>Validity</th>
            <th>International Agreements Signed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Patent</strong>
              <br /> Patent Law 1992
            </td>
            <td>20 years, non-renewable</td>
            <td>
              <a href="http://www.wipo.int/pct/en/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
                Patent Cooperation Treaty (PCT)
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Trademark</strong>
              <br /> Law on Marks
            </td>
            <td>10 years, renewable indefinitely</td>
            <td>
              <a href="http://www.wipo.int/treaties/en/ip/tlt/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
                Trademark Law Treaty
              </a>
              <br />
              <a href="http://www.wipo.int/treaties/en/registration/madrid_protocol/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
                Madrid Protocol - International Registration of Marks
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Design</strong>
              <br /> Patent Law
            </td>
            <td>10 years</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <strong>Copyright</strong>
              <br /> Copyright Law
            </td>
            <td>During the lifetime of the author and 50 years after death</td>
            <td>
              <a href="http://www.wipo.int/treaties/en/ip/berne/trtdocs_wo001.html" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
                Berne Convention - Protection of Literary and Artistic Works
              </a>
              <br />
              <a href="http://www.wipo.int/treaties/en/ip/phonograms/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
                Convention for the Protection of Producers of Phonograms
              </a>
              <br />
              <a href="http://www.wipo.int/treaties/en/ip/rome/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
                Rome Convention - Protection of Performers and Broadcasting Organizations
              </a>
              <br />
              <a href="http://www.wipo.int/treaties/en/ip/wct/" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
                WIPO Copyright Treaty
              </a>
              <br />
              <a href="http://www.wipo.int/treaties/en/text.jsp?file_id=295578" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
                WIPO Performances and Phonograms Treaty
              </a>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td width="267">
              <p>Industrial Models<br /> &nbsp;<br /> Patent Law</p>
            </td>
            <td width="267">
              <p>10 years</p>
            </td>
            <td width="267">
              <p>&nbsp;</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Legal Framework of Business</h2>

      <h3>Equity of Judgments</h3>
      <p>Equal Treatment of Nationals and Foreigners</p>
      <p>
        The judiciary does not guarantee an impartial trial to a foreign national. A high degree of corruption has been 
        reported in the country and within the CCP.
      </p>

      <h3>The Language of Justice</h3>
      <p>Mandarin-Chinese</p>
      <p>Recourse to an Interpreter: Possible</p>

      <h3>Legal Similarities</h3>
      <p>
        The legal system is based on the Confucian philosophy of the social order by moral education.&nbsp;After the 
        1911 revolution, the Republic of China mainly adopted a legal code of Western type inspired by German law. The 
        establishment of the People's Republic of China in 1949 brought a Soviet system influenced by socialism.
      </p>
      <p>
        There does not exist a tradition of constructive law in China, and the first civil code dates from the beginning of 
        the year 1980. Compared to Western laws, it is written in a rather incomplete fashion, which leaves an important 
        place for arbitrary judgments.&nbsp;The law is currently undergoing a progressive reform encouraged by external 
        and internal pressures. The constitution currently in force was promulgated in December 1982.
      </p>

      <h3>The Different Legal Codes</h3>

      <table className="table table-bordered">
        <tbody>
          <tr>
            <td width="401">
              <p>Base of the state, individuals' rights, and private property returned in constitution in 2004</p>
            </td>
            <td width="401">
              <p>
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer" 
                   href="https://www.hrichina.org/en/2004-amended-constitution">
                  Constitution of 1982 (after 2004 amendments)
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Regulations on litigations concerning environmental protection, taxation, customs, product quality, 
                 and opposition to administrative decisions</p>
            </td>
            <td width="401">
              <p>
                Administrative Law and&nbsp;
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer" 
                   href="https://www.wipo.int/edocs/lexdocs/laws/en/cn/cn156en.pdf">
                  Administrative Procedure Law
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Civil Law (Property law and the General Law on Registered Trademarks)</p>
            </td>
            <td width="401">
              <p>
                Civil law,&nbsp;
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer" 
                   href="https://www.wipo.int/edocs/lexdocs/laws/en/cn/cn012en.pdf">
                  Civil Law Procedure
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Criminal Law</p>
            </td>
            <td width="401">
              <p>
                Criminal law and&nbsp;
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer" 
                   href="http://www.fmprc.gov.cn/ce/cgvienna/eng/dbtyw/jdwt/crimelaw/t209043.htm">
                  Criminal Procedure Law
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Labor Law</p>
            </td>
            <td width="401">
              <p>
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer" 
                   href="http://www.npc.gov.cn/zgrdw/englishnpc/Law/2007-12/12/content_1383754.htm">
                  Labour Law
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Commercial Law</p>
            </td>
            <td width="401">
              <p>
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                  href="http://www.wipo.int/edocs/lexdocs/laws/en/cn/cn137en.pdf">
                  Law on Contracts
                </a>,&nbsp;
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                  href="http://english.mofcom.gov.cn/article/policyrelease/Businessregulations/201303/20130300046121.shtml">
                  Law on Prices
                </a>,&nbsp;
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                  href="http://www.wipo.int/edocs/lexdocs/laws/en/cn/cn124en.pdf">
                  Foreign Trade Law
                </a>,&nbsp;
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                  href="http://www.wipo.int/edocs/lexdocs/laws/en/cn/cn174en.pdf">
                  Law of Protection of Consumers
                </a>, and&nbsp;
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                  href="http://www.wipo.int/edocs/lexdocs/laws/en/cn/cn011en.pdf">
                  Law against Unfair Competition
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Company Law</p>
            </td>
            <td width="401">
              <p>
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                  href="https://www.ilo.org/dyn/natlex/docs/ELECTRONIC/92643/108008/F-186401967/CHN92643%20Eng.pdf">
                  Companies Law
                </a>,&nbsp;
                Law on Foreign Company Venture Capital, and&nbsp;
                <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                  href="http://english.mofcom.gov.cn/aarticle/lawsdata/chineselaw/200301/20030100062858.html">
                  WFOE Law
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Checking National Laws Online</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.loc.gov/law/help/legal-research-guide/china.php">
          China Legislative Network System
        </a>
      </p>

      <h3>Other Useful Resources</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.chinalawblog.com/">
          China Law Blog
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.llrx.com/2003/01/features-a-complete-research-guide-to-the-laws-of-the-peoples-republic-of-china-prc/">
          LLRX.com, research guide to the Laws of China
        </a>
      </p>

      <h3>The Jurisdictions</h3>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td width="401">
              <p>Supreme People's Court</p>
            </td>
            <td width="401">
              <p>Highest Court in the legal system of China. Hong Kong and Macao are out of the jurisdiction of the Supreme People's Court.</p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Intermediate People's Court</p>
            </td>
            <td width="401">
              <p>The trial courts are responsible for criminal and civil cases.</p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Special Courts</p>
            </td>
            <td width="401">
              <p>Military court, Court of railway transport, and Maritime Court of China.</p>
            </td>
          </tr>
          <tr>
            <td width="401">
              <p>Supreme People's Procuratorate</p>
            </td>
            <td width="401">
              <p>They exert authority in cases endangering state and public safety, damaging the economic order, and violating citizens' personal and democratic rights.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h3>Court Officials</h3>
      <p>The Judge</p>
      <p>
        The Judge exerts the legal authority of the Government according to the law, he must
        judge a case according to the law. The judges are also cross-examiners who examine the witnesses.
        Differing from traditional courts, only evidence presented in the court is considered.
      </p>

      <p>The Prosecutor</p>
      <p>Law minister</p>
      <p>
        Justice and prison administration governs the lawyer's profession and supervises the examinations of admission to the law
        profession.
      </p>

      <p>Lawyers</p>
      <p>The lawyer has an advisory role towards his client and must defend him.</p>

      <p>Ministry of Public Safety</p>
      <p>
        It is the authority of the police force. The police is responsible for maintenance of
        law and order, conducting investigations, and arresting suspects in criminal cases. 
        May intervene in settling disagreements between private individuals.
      </p>

      <p>
        Learn more about&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.globaltrade.net/international-trade-import-exports/f/business/China/Legal-and-Compliance.html#_blank">
          Legal and Compliance in China
        </a>
        &nbsp;on Globaltrade.net, the Directory for&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.globaltrade.net/">
          International Trade Service Providers.
        </a>
      </p>

      <h2>International Dispute Resolution</h2>

      <p>Arbitration</p>
      <p>
        China has several institutions for arbitration such as the China International Economic
        and Trade Arbitration Commission (
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.cietac.org/?l=en">
          CIETAC
        </a>
        ). Only litigations containing an "external element" can be arbitrated outside China.
      </p>

      <p>Arbitration Law</p>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.cietac.org/index.cms">
          Arbitration law inspired from the CNUDCI model
        </a>
      </p>

      <p>Conformity to International Commercial Arbitration Rules</p>
      <p>
        Party to the&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.uncitral.org/uncitral/en/uncitral_texts/arbitration/NYConvention.html">
          New York Convention
        </a>
        &nbsp;on the Recognition and Enforcement of Foreign Arbitral Awards.
      </p>

      <p>Appointment of Arbitrators</p>
      <p>
        The arbitration court comprises three arbitrators except for claims for an amount
        lower than 500,000 RMB or if the parties can settle it otherwise. Each party can
        appoint an arbitrator or authorize the president of CIETAC to name an arbitrator.
      </p>

      <p>Arbitration Procedure</p>
      <p>
        The official language is Chinese (except when a decision is expressed by the parties).
        Arbitration can begin only after the plaintiff has lodged a request with the
        secretariat of the arbitration committee. The opposing party will have to present
        its written defense and evidence. An attempt at conciliation will be initially made.
        The court of arbitration will have to deliver its sentence within 6 months following
        the date of constitution of the arbitration court. The final decision made by the
        court of arbitration is final, obligatory for the two parties, and irrevocable.
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.cietac.org/index.cms">
          For more information, see the CIETAC site.
        </a>
      </p>

      <p>Permanent Arbitration Bodies</p>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://english.ipr.gov.cn/ipr/en/info/Article.jsp?a_no=71403&amp;col_no=934&amp;dir=200704">
          Center of Intellectual Property arbitration
        </a>
        &nbsp;(Sectors Covered: Intellectual Property)
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.cietac.org.cn/index_english.shtml">
          International Economic and Commercial Arbitration Commission (CIETAC)
        </a>
        &nbsp;(Sectors Covered: Economic and commercial)
      </p>

      <p>
        Learn more about&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://globaltrade.net/international-trade-import-exports/expert-service-provider/China/Legal.html#_blank">
          Lawyers and Legal in China
        </a>
        &nbsp;on Globaltrade.net, the Directory for&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.globaltrade.net/">
          International Trade Service Providers.
        </a>
      </p>
      <h3 id="china_foreign_investment" style={{ fontWeight: "bold" }}>FOREIGN INVESTMENT</h3>

      <p>FDI in Figures</p>
      <p>
        According to the&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://unctad.org/system/files/official-document/wir2021_en.pdf">
          2021 World Investment Report
        </a>
        &nbsp;published by UNCTAD, FDI inflows into China increased by 6% in 2020, reaching USD 149 billion,
        up from USD 141 billion in 2019. This growth was driven by successful pandemic containment measures and rapid recovery.
      </p>

      <p>
        The stock of FDI in 2020 reached USD 1,918 billion, a significant rise compared to 2010 when it was USD 587 billion.
        The service sector accounted for more than 70% of inflows, with FDI accelerating in technology-related industries.
      </p>

      <p>
        China was ranked 31st out of 190 countries in the World Bank's&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.doingbusiness.org/content/dam/doingBusiness/country/c/china/CHN.pdf">
          2020 Doing Business report
        </a>,
        an improvement from its 46th position in 2019.
      </p>

      <p>
        Various reforms have been implemented to improve investment conditions, including tax cuts, tariff reductions,
        and measures to streamline customs clearance.
      </p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="434"><strong>Foreign Direct Investment</strong></th>
            <th width="123"><strong>2017</strong></th>
            <th width="123"><strong>2018</strong></th>
            <th width="123"><strong>2019</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>FDI Inward Flow&nbsp;</strong><em>(million USD)</em></td>
            <td>136,315</td>
            <td>138,305</td>
            <td>141,225</td>
          </tr>
          <tr>
            <td><strong>FDI Stock&nbsp;</strong><em>(million USD)</em></td>
            <td>1,489,956</td>
            <td>1,628,261</td>
            <td>1,769,486</td>
          </tr>
          <tr>
            <td><strong>Number of Greenfield Investments*</strong></td>
            <td>765</td>
            <td>871</td>
            <td>835</td>
          </tr>
          <tr>
            <td width="434"><strong>Value of Greenfield Investments (million USD)</strong></td>
            <td>54,180</td>
            <td>111,464</td>
            <td>61,999</td>
          </tr>
        </tbody>
      </table>
      <p><em>Source: UNCTAD, Latest available data.</em></p>
      <p><em>Note: * Greenfield Investments are a form of Foreign Direct Investment where a
        parent company starts a new venture in a foreign country by constructing new
        operational facilities from the ground up.</em></p>

      <p>FDI STOCKS BY COUNTRY AND BY INDUSTRY</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td width="253">
              <p><strong>Main Investing Countries</strong></p>
            </td>
            <td width="144">
              <p><strong>2019, in %</strong></p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="253">
              <p><strong>Hong Kong</strong></p>
            </td>
            <td>
              <p>69.7</p>
            </td>
          </tr>
          <tr>
            <td width="253">
              <p><strong>Singapore</strong></p>
            </td>
            <td>
              <p>5.5</p>
            </td>
          </tr>
          <tr>
            <td width="253">
              <p><strong>South Korea</strong></p>
            </td>
            <td>
              <p>4.0</p>
            </td>
          </tr>
          <tr>
            <td width="253">
              <p><strong>Virgin Islands</strong></p>
            </td>
            <td>
              <p>3.6</p>
            </td>
          </tr>
          <tr>
            <td width="253">
              <p><strong>Japan</strong></p>
            </td>
            <td>
              <p>2.7</p>
            </td>
          </tr>
          <tr>
            <td width="253">
              <p><strong>USA</strong></p>
            </td>
            <td>
              <p>1.9</p>
            </td>
          </tr>
          <tr>
            <td width="253">
              <p><strong>Cayman Islands</strong></p>
            </td>
            <td>
              <p>1.8</p>
            </td>
          </tr>
          <tr>
            <td width="253">
              <p><strong>Germany</strong></p>
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
            <td width="285">
              <p><strong>Main Invested Sectors</strong></p>
            </td>
            <td width="112">
              <p><strong>2019, in %</strong></p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="285">
              <p><strong>Manufacturing</strong></p>
            </td>
            <td>
              <p>25.5</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Real estate</strong></p>
            </td>
            <td>
              <p>17.0</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Leasing and business services</strong></p>
            </td>
            <td>
              <p>16.0</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Information transmission, computer services and software</strong></p>
            </td>
            <td>
              <p>10.6</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Scientific research, technical service and geologic prospecting</strong></p>
            </td>
            <td>
              <p>8.0</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Wholesale and retail trade</strong></p>
            </td>
            <td>
              <p>6.5</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Financial intermediation</strong></p>
            </td>
            <td>
              <p>5.1</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Transport, storage and post</strong></p>
            </td>
            <td>
              <p>3.3</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Production and supply of electricity, gas and water</strong></p>
            </td>
            <td>
              <p>2.5</p>
            </td>
          </tr>
          <tr>
            <td width="285">
              <p><strong>Construction</strong></p>
            </td>
            <td>
              <p>0.8</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>Source:&nbsp;</em>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.stats.gov.cn/tjsj/ndsj/2019/indexeh.htm">
          <em>China Statistical Yearbook, 2020</em>
        </a>
        <em>&nbsp;- Latest available data.</em>
      </p>

      <h3>Form of Company Preferred By Foreign Investors</h3>
      <p>WFOE</p>

      <h3>Form of Establishment Preferred By Foreign Investors</h3>
      <p>Holding</p>

      <h3>Main Foreign Companies</h3>
      <p>
        A substantial number of foreign multinationals operate in China: GM, KFC, Cummins
        (CMI), Starbucks, Apple, Intel (INTC), Dell Computer (DELL), Texas Instruments
        (TXN), Walmart, Nike (NKE), Gucci, Abercrombie & Fitch, Toyota, and Samsung.
      </p>

      <h3>Sources of Statistics</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.fdi.gov.cn/">Invest in China</a>
      </p>

      <h3>What to consider if you invest in China</h3>

      <h4>Strong Points</h4>
      <ul>
        <li>The largest internal market in the world, with 1.44 billion potential customers</li>
        <li>Sovereign risk contained as public debt remains mainly domestic and denominated in local currency</li>
        <li>Importance of foreign currency reserves and public debt owned by Chinese government and individuals</li>
        <li>A well-developed production sector (manufacturing sector and heavy industry)</li>
        <li>A favourable geographic location (close to emerging Asian markets, Japan, maritime frontage)</li>
        <li>Top economy in terms of purchasing power parity (PPP) thanks to rapid growth of the economy</li>
        <li>Labour costs remain comparatively low, although the situation is changing in certain areas</li>
        <li>New opportunities with the development of the western provinces (particularly Sichuan province)</li>
        <li>Development of a new export network (Silk Road network)</li>
      </ul>

      <h4>Weak Points</h4>
      <ul>
        <li>An ever-changing legal environment</li>
        <li>Bureaucratic and administrative complexities</li>
        <li>A lack of transparency and weak intellectual property rights protection</li>
        <li>Ageing population</li>
        <li>High level of corporate indebtedness</li>
        <li>Production overcapacity in several sectors</li>
        <li>A strongly degraded environmental situation in several big cities</li>
        <li>Cultural differences in business practices that may be difficult for foreigners</li>
        <li>Underdeveloped middle management and low rate of qualified workers</li>
      </ul>

      <h3>Government Measures to Motivate or Restrict FDI</h3>
      <p>Generally speaking, the Chinese government is more restrictive than other big economies in regard to foreign investment.</p>
      
      <p>
        The Chinese government encourages investment in industries such as high technology, production of equipment or new materials, service sector,
        recycling, use of renewable energies, and environmental protection.
      </p>
      <p>More details can be found in the <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
        href="http://mg2.mofcom.gov.cn/article/policy/China/201909/20190902898870.shtml">
        Law on Foreign Investments of the People's Republic of China</a>.
      </p>
      <h3>Protection of Foreign Investment</h3>

      <h4>Bilateral Investment Conventions Signed By China</h4>
      <p>
        China has signed bilateral agreements for investments with several countries. To see
        the list of the countries, consult&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://investmentpolicy.unctad.org/country-navigator/45/china">
          UNCTAD website
        </a>.
      </p>

      <h4>International Controversies Registered By UNCTAD</h4>
      <p>
        The ISDS Navigator contains information about known international arbitration cases
        initiated by investors against states pursuant to international investment agreements.&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://investmentpolicy.unctad.org/investment-dispute-settlement/country/42/china">
          China
        </a>&nbsp;is involved in 6 cases as Home State of claimant and in 3 cases as Respondent State.
      </p>

      <h4>Organizations Offering Their Assistance in Case of Disagreement</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.cietac.org/index.cms">
          CIETAC
        </a>, The International Commission of Economic and Commercial Arbitrage<br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://icsid.worldbank.org/">
          ICSID
        </a>, International Center for Settlement of Investment Disputes
      </p>

      <h4>Member of the Multilateral Investment Guarantee Agency</h4>
      <p>
        China is a signatory of the Convention of&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.miga.org/">
          MIGA
        </a>.
      </p>

      <h4>Country Comparison for the Protection of Investors</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Country Comparison</th>
            <th>China</th>
            <th>East Asia & Pacific</th>
            <th>United States</th>
            <th>Germany</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Index of Transaction Transparency*</strong></td>
            <td>10.0</td>
            <td>5.0</td>
            <td>7.4</td>
            <td>5.0</td>
          </tr>
          <tr>
            <td><strong>Index of Manager’s Responsibility**</strong></td>
            <td>1.0</td>
            <td>5.0</td>
            <td>8.6</td>
            <td>5.0</td>
          </tr>
          <tr>
            <td><strong>Index of Shareholders’ Power***</strong></td>
            <td>5.0</td>
            <td>6.0</td>
            <td>9.0</td>
            <td>5.0</td>
          </tr>
        </tbody>
      </table>
       <p><em>Source: Doing Business - Latest available data.</em></p>
      <p>
        <em>
          * The Greater the Index, the More Transparent the Conditions of Transactions.
          ** The Greater the Index, the More the Manager is Personally Responsible.
          *** The Greater the Index, the Easier it Will Be For Shareholders to Take Legal Action.
          **** The Greater the Index, the Higher the Level of Investor Protection.
        </em>
      </p>

      <h3>Procedures Relative to Foreign Investment</h3>

      <h4>Freedom of Establishment</h4>
      <p>
        The Foreign Investment Law of the People's Republic of China implements a
        “pre-establishment national treatment” plus “negative list management” system for foreign investment.
        “Pre-establishment national treatment” refers to the treatment given to foreign investors and their
        investments with regard to market access, which may not be less favorable than that given to domestic investors.
        The “negative list” refers to special administrative measures for the access of foreign investment in specific fields,
        which will be issued or approved for issue by the State Council.
      </p>

      <h4>Acquisition of Holdings</h4>
      <p>
        The acquisition of majority interest in a local company is authorized in China.{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://iclg.com/practice-areas/mergers-and-acquisitions-laws-and-regulations/china">
          M&A activities
        </a>{" "}
        are subject to different regulations depending on the type of company (public, non-listed public, or foreign).
      </p>

      <h4>Obligation to Declare</h4>
      <p>
        The{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.fdi.gov.cn/1800000121_10000041_8.html">
          China International Investment Promotion Agency
        </a>{" "}
        facilitates the distribution of information on necessary authorizations for establishing a business in the country.
        All proposed foreign investment projects in China must be submitted for approval to the National Development and Reform Commission (NDRC)
        or local Development and Reform Commissions depending on the sector and value of the investment.
      </p>

      <h4>Competent Organizations for Declaration</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://en.ndrc.gov.cn/">
          National Development and Reform Commission (NDRC)
        </a>{" "}
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://english.mofcom.gov.cn/">
          Ministry of Commerce (MOFCOM)
        </a>
      </p>

      <h4>Requests for Specific Authorizations</h4>
      <p>
        Business plans must be submitted for approval to competent authorities before beginning business activity.
        If a foreign investor intends to establish a foreign-funded enterprise by merging a domestic enterprise,
        they must seek approval from the “examination and approval organ” (Ministry of Commerce) and modify their registration accordingly.
        Greenfield investment projects must also seek approval from China's Environmental Protection Ministry and Ministry of Land Resources.
      </p>

      <p>
        Learn more about{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.globaltrade.net/international-trade-import-exports/expert-service-provider/China/Investment.html#_blank">
          Foreign Investment in China
        </a>{" "}
        on Globaltrade.net, the Directory for{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.globaltrade.net/">
          International Trade Service Providers.
        </a>
      </p>
      <h3>Office Real Estate and Land Ownership</h3>

      <h4>Possible Temporary Solutions</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.alibaba.com/countrysearch/CN/temporary-site-office.html">
          Rental and Business center
        </a>
      </p>

      <h4>The Possibility of Buying Land and Industrial and Commercial Buildings</h4>
      <p>
        Foreigners are allowed to buy property only after having worked or studied in China for at least one year.
        They are entitled to own only one property in China, which must be used for residential purposes.
        Commercial or industrial property can only be purchased after a company has been incorporated in China.
      </p>

      <h4>Risk of Expropriation</h4>
      <p>
        The risk of expropriation is high. Article 20 of the Foreign Investment Law of the People's Republic of China
        stipulates that the government shall not expropriate investments made by foreign investors. Only in special
        circumstances (such as national security and obstacles to large civil engineering projects), the state may expropriate
        or requisition an investment for public interest in accordance with the law. Such expropriation shall follow legal procedures,
        and fair and reasonable compensation must be provided in a timely manner.
      </p>

      <h4>Investment Aid</h4>

      <h5>Forms of Aid</h5>
      <p>
        Foreign investors enjoy corporate tax reductions, exemptions of tax on dividends repatriated within a certain period, and other tax advantages.
        Additionally, foreign direct investment incentives include reduced income taxes, resource and land use fees, import/export duty benefits, 
        priority treatment in obtaining basic infrastructure services, streamlined government approvals, and funding support for startups.
        More details can be obtained from the{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://english.mofcom.gov.cn/">
          Ministry of Commerce (MOFCOM)
        </a>.
      </p>

      <p>
        According to the Notice on Implementing the Policy of Inclusive Tax Relief for Small and Micro Enterprises,
        published by the Ministry of Finance in January 2019, China expanded preferential policies for small and low-profit enterprises.
        Companies with annual taxable income below RMB 1 million (US$147,290) per year can benefit from a preferential corporate income tax (CIT) rate of 20%.
        They are taxed on only 25% of their income, while the remaining 75% is tax-free.
      </p>

      <h5>Privileged Domains</h5>
      <p>China encourages foreign investment primarily in high technology, clean energy, and export-oriented sectors.</p>

      <h5>Privileged Geographical Zones</h5>
      <p>China promotes investment in specific regions that align with national development strategies.</p>
      <h3>Privileged Geographical Zones</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.china-briefing.com/news/chinas-economic-development-zones-types-incentives/">
          China's Economic Development Zones (EDZs)
        </a>{" "}
        offer preferential trade policies, tax exemptions, subsidies, and employment benefits to attract foreign direct investment (FDI).
      </p>

      <h3>Free Zones</h3>
      <p>
        China has several special trade zones providing tax exemptions or incentives for overseas investments.
        These include five special economic zones (Shenzhen, Zhuhai, Shantou, Xiamen, and Hainan) as well as fourteen coastal cities.
        Additional free trade zones were expanded in 2019 to six new provinces, bringing the total number to 18.
      </p>
      <p>
        More details on these zones can be found{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.china-briefing.com/news/china-free-trade-zones-six-provinces/">
          here
        </a>.
      </p>

      <h3>Organizations Which Finance</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.fdi.gov.cn/">
          Invest in China
        </a>, an investment promotion agency under the Ministry of Commerce, facilitates FDI and outbound investments.
      </p>

      <h3>Investment Opportunities</h3>
      <h4>The Key Sectors of the National Economy</h4>
      <p>
        Manufacturing, automobile industry, ICT, aeronautics, energy (including nuclear),
        finance, tourism, health, agriculture, mining, online sales, and transport infrastructure.
      </p>

      <h4>High Potential Sectors</h4>
      <p>
        Chemical industry, insurance, banking, high technology, renewable energy, environmental solutions,
        waste treatment, franchises, and medical devices.
      </p>

      <h4>Privatization Programmes</h4>
      <p>
        China's state-owned enterprises face issues such as over-indebtedness and inefficiency.
        Efforts toward mixed-ownership reform have been promoted by the government to inject private capital into these corporations.
        Some sectors, such as salt production, have undergone partial privatization.
      </p>

      <h3>Tenders, Projects, and Public Procurement</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.tendertiger.co.in/quicksearch.aspx?st=qs&SerCat=10&SerText=China&tt=&si=&ct=1">
          Tenders Tiger
        </a>, Tenders in China<br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.tendersinfo.com/global-china-tenders.php">
          Tenders Info: Global Procurement Facilitator
        </a>, Tenders in China<br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.adb.org/site/business-opportunities/main">
          Asian Development Bank
        </a>, Procurement Plans in Asia<br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.dgmarket.com/tenders/">
          DgMarket
        </a>, Tenders Worldwide
      </p>
      <h3>Sectors Where Investment Opportunities Are Fewer</h3>

      <h4>Monopolistic Sectors</h4>
      <p>
        The Negative List for Market Access (
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.ndrc.gov.cn/xxgk/zcfb/fzggwl/202006/P020200624549035288187.pdf">
          2020 Chinese edition
        </a>) outlines prohibited or restricted industries for foreign investment.{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.dezshira.com/library/legal/special-administrative-measures-access-foreign-investment-2020-edition-national-negative-list.html?1593598930">
          The 2020 National Negative List
        </a> further opens key areas in service industries while relaxing access to the manufacturing and agriculture sectors.
        Main restrictions apply to:
      </p>
      <ul>
        <li>Production and supply of electricity, heat, gas, and water</li>
        <li>Transportation, warehousing, and postal industries</li>
        <li>Information transmission, software, and IT services</li>
        <li>Leasing and business services</li>
        <li>Scientific research and technical services</li>
      </ul>

      <h4>Finding Assistance For Further Information</h4>
      <h5>Investment Aid Agency</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.fdi.gov.cn/1800000121_10000041_8.html">
          Invest in China (Ministry of Commerce of the People's Republic of China)
        </a>
      </p>

      <h5>Other Useful Resources</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://english.mofcom.gov.cn/">
          Ministry of Commerce (People's Republic of China)
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.china.org.cn/index.htm">
          China Internet Information Center (Government portal on China)
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.cciip.org.cn/">
          Chinese Council for International Investment Promotion (Chinese)
        </a>
      </p>

      <h5>Doing Business Guides</h5>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www2.deloitte.com/us/en/pages/mergers-and-acquisitions/articles/china-investment-guide.html">
            China Investment Guide (Deloitte)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.export.gov/article?series=a0pt0000000PAtVAAW&type=Country_Commercial__kav">
            Exporting to China (U.S. Department of Commerce)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.hawksford.com/our-global-reach/china/business-guides">
            Guides to doing business in China (Hawksford China)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.pinsentmasons.com/out-law/guides/doing-business-in-china-part-1---overview">
            Doing business in China (Pinsent Masons)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.mayerbrown.com/en/perspectives-events/publications/brochures/2019/09/guide-to-doing-business-in-china">
            Guide to Doing Business in China (Mayer Brown)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://uk.practicallaw.thomsonreuters.com/8-501-1377?transitionType=Default&contextData=(sc.Default)&firstPage=true&bhcp=1">
            Doing business in China (Thomson Reuters Practical Law)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://nhglobalpartners.com/doing-business-in-china/">
            Extensive Guide on Doing Business in China (New Horizons Global Partners)
          </a>
        </li>
      </ul>
      <h3>Business Practices</h3>

      <h4>Business Culture</h4>
      <h5>The Fundamental Principles of Business Culture</h5>
      <p>
        Chinese business culture is largely influenced by Confucianism. The concept of{" "}
        <em>Guanxi</em> means that relationship networks are crucial, based on values of solidarity, loyalty, modesty,
        and courtesy. Hierarchy in business and personal life is strictly vertical and highly respected. Additionally,
        "saving face" is an essential part of protecting reputation, influence, and dignity.
      </p>
      <p>
        Chinese professionals are often risk-averse, adhering to strict procedures for decision-making.
        Important decisions involve multiple meetings, and subordinates are not expected to voice personal opinions.
        Since decision-makers approach problems with a long-term social perspective, the process may seem slow-moving
        to outsiders. Respecting hierarchical differences is essential for smooth business interactions.
      </p>
      <p>
        Chinese businesses seek long-term relationships rather than relying solely on contracts. Building a
        relationship may take several days to months, involving formal meetings, home visits, invitations to events,
        and long dinners.
      </p>

      <h5>First Contact</h5>
      <p>
        Due to a tendency toward caution in interactions with strangers, a trusted intermediary can be valuable in
        business introductions. Having a mutual connection helps build credibility and accelerates acceptance.
      </p>

      <h5>Time Management</h5>
      <p>
        Punctuality is highly valued in China, so arriving on time for meetings is essential.
        If delayed, a call to inform your partner is expected, along with an apology.
        Chinese meetings often lack rigid schedules, as they tend to be more fluid.
      </p>

      <h5>Greetings and Titles</h5>
      <p>
        When meeting someone for the first time, using a few Chinese phrases can be impressive.
        Handshakes are light and lingering, usually initiated by the Chinese counterpart. Avoid physical proximity,
        and looking down while greeting is common. Nodding and smiling are widely used as greetings.
        Address business partners formally with titles such as "Mr.", "Madam", or "Miss," followed by their surname.
      </p>

      <h5>Gift Policy</h5>
      <p>
        Exchanging gifts marks the beginning of a business relationship. Gifts should be modest and always wrapped.
        The receiver may initially refuse two or three times before accepting. Gifts are rarely opened in front of
        the giver. When giving or receiving a gift, use both hands as a sign of respect.
      </p>

      <h5>Dress Code</h5>
      <p>
        Formal and discreet attire (a suit) is expected in business meetings. Clothing should reflect success
        without being ostentatious—quality watches, shoes, and accessories are recommended.
      </p>

      <h5>Business Cards</h5>
      <p>
        Business card exchanges follow a strict protocol. Cards should be printed in both Chinese and English.
        Present your card with both hands, ensuring the Chinese side faces the recipient.
        Receive your counterpart’s card with both hands, read it carefully, and store it properly.
        Never write on a business card in the presence of your associate.
      </p>

      <h5>Meetings Management</h5>
      <p>
        Meetings in China involve patience and politeness, emphasizing relationship-building over direct business negotiations.
      </p>
      <p>
        Business meetings in China tend to be long and multiple sessions are often required to build a sustainable relationship.
        It is advisable to use interpretation services to overcome the language barrier. Small talk is commonly used to break the ice before discussions begin.
      </p>

      <h4>Communication Style</h4>
      <p>
        Chinese communication is typically indirect. Disagreements are not openly expressed, and phrases like
        <em>“Yes, but it might be difficult”</em> or <em>“Yes, probably”</em> are preferred. When delivering bad news,
        it is common to use an intermediary to soften the message. Periods of silence are considered part of the reflection process
        and should not be interrupted. It is highly recommended to avoid interrupting the speaker.
      </p>

      <h4>Body Language & Meeting Structure</h4>
      <p>
        Chinese professionals use limited body language. The highest-ranked member of your team should enter the meeting room first
        and sit in the place of honor, directly in front of the host. This person will lead negotiations with the Chinese team leader.
        The remaining team members will support the leader if requested.
      </p>
      <p>
        Bargaining is an essential part of Chinese business culture. Accepting a proposition without negotiation may be viewed as a sign of weakness.
        Psychological pressure tactics should be avoided as they could be seen as manipulative. Only a person of higher rank should lead discussions,
        so it is advisable to appoint a senior representative.
      </p>

      <h4>Business Meals & Hospitality</h4>
      <p>
        It is common for food and drinks to be offered during meetings. Business meals play a significant role in fostering relationships.
        Seating arrangements are based on hierarchy, and it is advised not to finish all your food, as Chinese hosts may interpret this as you still being hungry.
        If you invite someone to a meal or an activity, you are expected to pay for it. However, displaying money in front of guests is considered impolite.
      </p>

      <h4>Sources for Further Information</h4>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.commisceo-global.com/resources/country-guides/south-africa-guide">
            Commisceo Global
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.worldbusinessculture.com/country-profiles/south-africa/#_blank">
            World Business Culture
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://culturalatlas.sbs.com.au/south-african-culture/south-african-culture-core-concepts#_blank">
            Culture Atlas
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.expatcapetown.com/business-etiquette.html#_blank">
            Expat Cape Town
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://afktravel.com/57094/business-etiquette-in-south-africa/#_blank">
            AFK Travel
          </a>
        </li>
      </ul>
      <h2>Opening Hours</h2>

      <h3>Opening Hours and Days</h3>
      <p>Monday to Friday: 8:30 a.m. to 5:00 p.m.</p>
      <p>Saturday: 8:00 a.m. to 1:00 p.m.</p>

      <h3>Public Holidays</h3>
      <table border="1">
        <tbody>
          <tr>
            <td>New Year</td>
            <td>1 January</td>
          </tr>
          <tr>
            <td>Lunar New Year</td>
            <td>February</td>
          </tr>
          <tr>
            <td>Women's Day</td>
            <td>8 March</td>
          </tr>
          <tr>
            <td>Qing Ming Festival</td>
            <td>April</td>
          </tr>
          <tr>
            <td>Labour Day</td>
            <td>1 May</td>
          </tr>
          <tr>
            <td>Youth Day</td>
            <td>4 May</td>
          </tr>
          <tr>
            <td>Children's Day</td>
            <td>1 June</td>
          </tr>
          <tr>
            <td>Dragon Boat Festival</td>
            <td>June</td>
          </tr>
          <tr>
            <td>Army Day</td>
            <td>1 August</td>
          </tr>
          <tr>
            <td>Teachers' Day</td>
            <td>9 September</td>
          </tr>
          <tr>
            <td>National Day</td>
            <td>1 October</td>
          </tr>
        </tbody>
      </table>

      <h3>Periods When Companies Usually Close</h3>
      <table border="1">
        <tbody>
          <tr>
            <td>Labour Day</td>
            <td>1 May</td>
          </tr>
          <tr>
            <td>Spring Festival</td>
            <td>One week off</td>
          </tr>
        </tbody>
      </table>

      <h3>For Further Information</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://english.gov.cn/">
          Site of the Chinese government
        </a>
      </p>

      <h2>Entry Requirements</h2>

      <h3>Passport and Visa Requirements</h3>
      <h4>Passport and Visa Service</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.chinese-embassy.org.uk/eng/visa/#_blank">
          Visa information provided by the Chinese Embassy in the UK
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://lawandborder.com/wp-content/uploads/2012/07/Exit-Entry-Administration-Law-2012-07-05.pdf#_blank">
          Exit Entry Administration Law (PRC)
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.fmprc.gov.cn/mfa_eng/wjb_663304/zwjg_665342/2490_665344/#_blank">
          Addresses of Consulates or Embassies of the People's Republic of China
        </a>
      </p>

      <h3>For Further Information</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.iatatravelcentre.com/international-travel-document-news/1580226297.htm#_blank">
          Latest Travel News on COVID-19 (International Air Transport Association)
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/#_blank">
          COVID-19 Daily Situation Reports (World Health Organization)
        </a>
      </p>

      <h3>Contact the Embassy</h3>
      <p>
        Contact the Embassy of{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.chinese-embassy.org.uk/">
          China
        </a>{" "}
        in the United Kingdom.
      </p>

      <h3>Check Visa & Health Requirements</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.iatatravelcentre.com/CN-China-passport-visa-health-travel-document-requirements.htm">
          IATA Travel Website
        </a>{" "}
        for visa requirements and health advice.
      </p>
      <h2>Taxes and Restrictions On Persons When Going Through Customs</h2>

      <h3>Taxation On Persons</h3>
      <p>None</p>

      <h3>Allowed Quantities</h3>
      <ul>
        <li><strong>Tobacco:</strong> 400 cigarettes (600 cigarettes for stays longer than 6 months)</li>
        <li><strong>Alcohol:</strong> Two bottles (not exceeding 750 ml each) of alcoholic drinks (4 bottles for longer stays)</li>
        <li><strong>Perfume:</strong> A reasonable quantity for personal use</li>
      </ul>

      <h3>Currency Regulations</h3>
      <ul>
        <li><strong>Foreign Currency:</strong> Not exceeding 1000 USD (5000 USD for non-residents)</li>
        <li><strong>Obligatory Declaration of Foreign Currency:</strong> From 10,000 EUR</li>
        <li><strong>Local Currency:</strong> Limited to 20,000 CNY</li>
        <li><strong>Obligatory Declaration of Local Currency:</strong> Yes</li>
      </ul>

      <h3>Prohibited Items</h3>
      <p>
        Weapons, ammunition, pornographic material (including some images from Western magazines),
        radio transmitters/receivers, undeveloped film rolls, certain fruits and vegetables,
        political and religious brochures (a limited amount of religious documents for personal use is tolerated).
      </p>

      <h2>Health Precautions</h2>

      <h3>Obligatory Vaccination and Other Recommendations</h3>
      <p>
        It is recommended that travelers 16 years and older be fully vaccinated for COVID-19 before travel. 
        Evidence of vaccination may be required at the border. 
        Updated health entry requirements and routine vaccine recommendations for China can be found on
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://travelhealthpro.org.uk/country/49/china#Vaccine_recommendations">
          TravelHealthPro
        </a> and 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/china?s_cid=ncezid-dgmq-travel-single-001">
          CDC
        </a>.
      </p>
      <p>
        While not required, the following vaccinations are strongly recommended:
        tetanus, diphtheria, typhoid fever, chickenpox, influenza, measles, rabies, hepatitis A & B, meningococcal disease, and poliomyelitis.
        If staying in rural areas of Yunnan, Hainan, Guangxi, or Guizhou, vaccination against Japanese encephalitis is advised.
      </p>

      <h3>For Further Information</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://en.nhc.gov.cn/#_blank">
          National Health Commission
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.who.int/countries/chn/en/index.html#_blank">
          World Health Organisation: China
        </a>
      </p>

      <h3>Travel Health Advice</h3>
      <p>
        Up-to-date UK travel health advice, including routine and recommended vaccines, can be verified at the
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.gov.uk/foreign-travel-advice">
          Foreign Travel Advice
        </a> website.
      </p>

      <h2>Safety Conditions</h2>

      <h3>Crime</h3>
      <p>
        The crime rate is low. However, violent incidents most often occur in bars and clubs in Beijing’s nightlife districts.
        Pickpockets are particularly active in crowded markets, and thefts from taxis have become more common.
      </p>
      <h3>Safety Conditions</h3>

      <h4>Terrorist Risk</h4>
      <p>Low</p>

      <h4>Risk of Natural Disaster</h4>
      <p>
        Every year, China's southern coastline experiences around ten typhoons between May and October,
        characterized by violent winds and heavy rains. While Shanghai is somewhat affected, Zhejiang province's
        coastal areas face the greatest impact.
      </p>

      <h4>Traveling Women Conditions</h4>
      <p>None</p>

      <h4>For Further Information</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.voyage.gc.ca/countries_pays/report_rapport-eng.asp?id=55000#_blank">
          Travel advice provided by the Ministry of Foreign Affairs and International Trade of Canada
        </a>
      </p>

      <h3>Practical Information</h3>

      <h4>Accommodation</h4>
      <h5>Youth Hostels</h5>
      <p>The most economical option; clean and generally well-located.</p>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.hostelworld.com/countries/chinahostels.html">
          Hostels
        </a>
      </p>

      <h5>Medium Range</h5>
      <p>Reputable hotels.</p>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.tripadvisor.com/Hotels-g294212-zfc3-Beijing-Hotels.html">
          3-star hotels
        </a>
      </p>

      <h5>Top of the Range</h5>
      <p>
        Major international chains such as Hilton, Marriott, and Shangri-La operate in China,
        offering rooms that meet international standards.
      </p>

      <h4>Price Indications</h4>
      <table border="1">
        <tbody>
          <tr>
            <td>Economy Room</td>
            <td>25-35 USD</td>
          </tr>
          <tr>
            <td>Medium Price Room</td>
            <td>35-100 USD</td>
          </tr>
          <tr>
            <td>Good Quality Room</td>
            <td>100-300 USD</td>
          </tr>
        </tbody>
      </table>
      <p><em>Source: Lonely Planet</em></p>

      <h4>Eating Out</h4>
      <h5>Categories of Restaurants</h5>
      <ul>
        <li>Fast food: Sandwich, Hamburger</li>
        <li>Western restaurants: European, Asian, American cuisine</li>
        <li>Chinese restaurants: Chinese, regional cuisine</li>
      </ul>

      <h5>Price Indications</h5>
      <table border="1">
        <tbody>
          <tr>
            <td>Economy Meal</td>
            <td>1-5 USD</td>
          </tr>
          <tr>
            <td>Medium Price Meal</td>
            <td>5-10 USD</td>
          </tr>
          <tr>
            <td>Good Quality Meal</td>
            <td>10-25 USD</td>
          </tr>
        </tbody>
      </table>
      <h3>Food Specialties</h3>
      <p>
        Chinese cuisine is diverse, with several regional varieties:
        <ul>
          <li>
            <strong>Beijing & Shandong Cuisine:</strong> Focuses on steamed noodles, Peking duck, and Beggar’s chicken.
          </li>
          <li>
            <strong>Cantonese & Chaozhou Cuisine:</strong> Famous globally, featuring steamed and sautéed dishes,
            dim-sum, snake soup, and more.
          </li>
          <li>
            <strong>Eastern Cuisine:</strong> Specializes in spare ribs, seafood, and soups.
          </li>
          <li>
            <strong>Sichuan Cuisine:</strong> Known for bold flavors; includes dishes like gonbao jiding (spicy chicken with peanuts),
            mapo doufu (pork with tofu), and guoba roupian (puffed rice with pork).
          </li>
          <li>
            <strong>Shanghai Cuisine:</strong> A fusion of northern and southern styles, often sweet. Popular dish: xiaolongbao.
          </li>
        </ul>
      </p>

      <h3>Drinks</h3>
      <p>
        Beer (<em>píjiŭ</em>) is widely available, with popular brands like Tsingtao.
        Red wine is common and reasonably priced, with Great Wall, Chang Yu, and Dynasty being major labels.
        Baijiu (white alcohol) is a strong sorghum spirit with 40-60% alcohol.
      </p>

      <h3>Dietary Restrictions</h3>
      <p>Culinary restrictions vary based on religious and personal dietary preferences.</p>

      <h3>Table Manners</h3>
      <p>
        Guests are seated facing the door. Chinese hosts prefer serving a variety of local specialties, expecting guests to try everything.
        Business discussions often follow small talk about family and travel.
      </p>

      <h3>Getting Around</h3>

      <h4>Transport in Town</h4>
      <p>
        Taxis are the main mode of transport in major cities like Beijing (60,000 taxis). Avoid unregistered taxis.
        Cities are congested, so plan ahead. Metro systems in Beijing (5 lines) and Shanghai (9 lines) are convenient.
        Magnetic charge cards work for metro and taxis.
      </p>
      <p>
        Buses are plentiful and cheap but often crowded. Always carry addresses written in Chinese for navigation, as pronunciation can differ from Pinyin transcription.
      </p>

      <h4>Urban Transport Networks</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.lib.utexas.edu/maps/china.html">
          Maps of China: University of Texas Library Online
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.mapblast.com">
          Mapblast
        </a>
      </p>

      <h4>Urban Transport Agencies</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.explorebj.com/subway/">
          Beijing Metro
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://service.shmetro.com/en/">
          Shanghai Metro
        </a>
      </p>

      <h4>Taxi Companies</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.bloomberg.com/research/stocks/private/snapshot.asp?privcapid=54136472">
          Haibo Taxi
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.emis.com/php/company-profile/CN/Shanghai_Jinling_Taxi_Service_Co_Ltd">
          Shanghai JinLing Taxi Service Co Ltd
        </a>
      </p>

      <h3>Transportation From Airport to City Centre</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Airport</th>
            <th>Distance</th>
            <th>Taxi</th>
            <th>Bus</th>
            <th>Train</th>
            <th>Car Rental</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.shanghai-airport.com/">
                Shanghai-Honggiao (SHA)
              </a>
            </td>
            <td>16 km / 10 miles</td>
            <td>CNY 60-100 / 25-40 min</td>
            <td>CNY 3 / 35-40 min</td>
            <td>-</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.beijing-airport.com/">
                Beijing-Capital (PEK)
              </a>
            </td>
            <td>28 km / 17 miles</td>
            <td>CNY 135 / 30-40 min</td>
            <td>CNY 16 / 45 min</td>
            <td>-</td>
            <td>Available</td>
          </tr>
        </tbody>
      </table>

      <h3>Means of Transport Recommended in the Rest of the Country</h3>
      <h4>Recommendation</h4>
      <p>
        Buses are the primary means of transport between cities. Trains are generally in good condition,
        but routes are often slow (e.g., Canton-Beijing can take 36 hours). Air travel is frequently used
        for long distances, although some airports face saturation issues. Domestic airlines have a low
        accident rate.
      </p>

      <p>
        For more information on transportation, visit the{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://travel.chinavista.com/index.php">
          China Vista website
        </a>.
      </p>

      <h3>Rail Companies</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.china-mor.gov.cn/#_blank">
          Ministry of Railways
        </a>
      </p>
      <p>&nbsp;</p>
      <h3>Airlines</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Domestic Flights</th>
            <th>International Flights</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.airchina.com.cn/#_blank">
                Air China
              </a>
            </td>
            <td>Major</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.csair.com/en/#_blank">
                China Southern Airlines
              </a>
            </td>
            <td>Major</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.whichbudget.com/?lang=en#_blank">
                Jetstar/Jetstar Asia/Valuair
              </a>
            </td>
            <td>Low Cost</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.shanghai-air.com/salnewweb/index.aspx#_blank">
                Shanghai Airlines
              </a>
            </td>
            <td>Major</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.ce-air.com/#_blank">
                China Eastern Airlines
              </a>
            </td>
            <td>Major</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.air-spring.com/#_blank">
                Spring Airlines
              </a>
            </td>
            <td>Low Cost</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.elong.net/#_blank">
                eLong
              </a>
            </td>
            <td>Major</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <h3>Air Safety Information</h3>
      <p>
        You can consult the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://ec.europa.eu/transport/modes/air/safety/air-ban_en">
          EU Air Safety List
        </a>. 
        Also, check the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.faa.gov/about/initiatives/iasa/">
          rating
        </a> of the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.faa.gov/">
          United States Federal Aviation Administration (FAA)
        </a>.
      </p>

      <h3>Travelling By Yourself</h3>

      <h4>Recommendation</h4>
      <p>
        The road network is rapidly developing and satisfactory on major roads, though markings can be unclear.
        Driving in China can be risky for those unfamiliar with the roadways and driving customs.
        It is recommended to rent a car with a driver or hire a driver if purchasing a car.
      </p>

      <h4>Driver's License</h4>
      <p>
        Foreigners residing in China can obtain a Chinese driver's license.
        If holding a foreign driving license, you only need to take the written portion of the driver’s test.
      </p>

      <h4>Conditions For Renting a Vehicle</h4>
      <p>
        Foreigners without a Chinese driver's license cannot rent a car, but renting a car with a driver is possible.
        Rental agencies and travel agencies provide this service.
      </p>

      <h4>Rental Agencies</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.alibabuy.com/voiture/location-voiture-chine.html">
          Alibabuy.com World
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.avis.fr/AProposdAvis/Avis-en-Chine">
          Avis Car Rental in China
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.shanghaicarrentalservice.com/">
          Shanghai Car Rental
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://china.shcarleasing.com/">
          Shanghai Car Leasing
        </a>
      </p>

      <h4>Find an Itinerary</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://maps.google.com/">
          Google Maps
        </a>
      </p>

      <h4>Traffic Conditions Online</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.webcamworld.com/directory/Asia/China/">
          Webcam China
        </a>
      </p>

      <h4>Parking Facilities</h4>
      <p>
        Limited parking space is a growing concern in China due to increasing car ownership as living standards rise.
      </p>

      <h4>Rules of the Road</h4>
      <ul>
        <li><strong>Minimum Driving Age:</strong> 18 years</li>
        <li><strong>Driving Side:</strong> Right</li>
        <li><strong>Speed Limits:</strong> 
          <ul>
            <li>30 km/h (19 mph) in single-lane city roads</li>
            <li>100 km/h (62 mph) in express streets of the city</li>
            <li>120 km/h (75 mph) on expressways</li>
          </ul>
        </li>
        <li><strong>Safety Belts:</strong> Compulsory</li>
        <li><strong>Permitted Amount of Alcohol in Blood:</strong> 0</li>
      </ul>

      <h3>Time and Time Difference</h3>

      <h4>Current Local Time</h4>
      <p>It is 03:22 PM in Beijing.</p>

      <h4>Summer Time</h4>
      <p>No time change in China.</p>

      <h4>Map of the Time Zone</h4>
      <p>China follows China Standard Time (CST), UTC+8.</p>

      <h3>Climate</h3>
      <p>
        China experiences a diverse range of climates from temperate in the north to subtropical in the south.
      </p>
      <h3>Climate</h3>

      <h4>Type of Climate</h4>
      <p>
        Due to its large size, China experiences diverse climates, ranging from hot and humid in the south to continental in the north.
      </p>

      <h4>For Further Information</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.cma.gov.cn/en/#_blank">
          China Meteorological Administration
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.wmo.ch/pages/index_en.html#_blank">
          World Meteorological Organisation
        </a>
      </p>

      <h3>Electrical Standards and Measurement Systems</h3>

      <h4>System of Measurement Used</h4>
      <p>The metric system is used, though some traditional Chinese units remain in use.</p>

      <h4>Unit of Measurement of Temperature</h4>
      <p>Degree Celsius (°C)</p>

      <h4>Use Our Measurement Converter</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://santandertrade.com/en/portal/international-shipments/measurement-converter">
          Measurement Converter
        </a>
      </p>

      <h3>Electricity</h3>
      <ul>
        <li><strong>Voltage:</strong> 220 V</li>
        <li><strong>Frequency:</strong> 50 Hz</li>
        <li><strong>Type of Electric Socket:</strong> CL</li>
        <li><strong>Type of Telephone Socket:</strong> US RJ-11</li>
        <li><strong>DVD Zoning:</strong> Zone 6</li>
      </ul>

      <h3>Paying</h3>
      <h4>Domestic Currency</h4>
      <p>Chinese Yuan (Renminbi) - ISO Code: CNY</p>

      <h4>To Obtain Domestic Currency</h4>
      <p>
        Currency exchanges at airports tend to offer competitive exchange rates. ATMs in major cities support international withdrawals.
      </p>

      <h4>Possible Means of Payment</h4>
      <p>
        Cash is the primary form of payment, though American Express, Diners Club, Eurocard/MasterCard, and Visa are accepted in major cities.
        Availability of ATMs outside urban areas is limited.
      </p>

      <h4>ATM Locator</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://visa.via.infonow.net/locator/global/">
          Find an ATM
        </a>
      </p>

      <h3>Speaking</h3>

      <h4>Official Language</h4>
      <p>Mandarin is the national language, with many dialects and regional variants.</p>

      <h4>Other Languages Spoken</h4>
      <p>
        Over a hundred dialects exist, including Mandarin in the north and Cantonese in the south. 
        Autonomous regions may use Mongolian, Uyghur, Korean, and Tibetan.
      </p>

      <h4>Business Language</h4>
      <p>English is commonly used in business discussions when one party does not speak Chinese.</p>

      <h4>Free Translation Tools</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.babelfish.com/#_blank">
          Babel Fish Translation
        </a>
      </p>

      <h3>Emergency Numbers</h3>
      <table border="1">
        <tbody>
          <tr>
            <td>Police</td>
            <td>110</td>
          </tr>
          <tr>
            <td>Fire Brigade</td>
            <td>119</td>
          </tr>
          <tr>
            <td>Ambulance</td>
            <td>120 (or 999 in some places)</td>
          </tr>
          <tr>
            <td>Road Accident</td>
            <td>122</td>
          </tr>
          <tr>
            <td>Directory Enquiries</td>
            <td>114</td>
          </tr>
        </tbody>
      </table>
      <h3>Communications</h3>

      <h4>Quality of Communications</h4>
      <p>Good</p>

      <h4>Telephone Codes</h4>
      <ul>
        <li>To Make a Call From China, Dial 00</li>
        <li>To Make a Call to China, Dial +86</li>
      </ul>

      <h4>Number of Digits in National Telephone Numbers</h4>
      <p>10</p>

      <h4>Mobile Telephone Standards</h4>
      <p>GSM; CDMA</p>

      <h4>National Mobile Phone Operators</h4>
      <p>China Unicom; China Mobile</p>

      <h4>Availability of Internet</h4>
      <ul>
        <li><strong>Internet Suffix:</strong> .cn</li>
        <li><strong>Access in Public Places:</strong> Easily accessible in big cities and small towns.</li>
        <li><strong>Access in Hotels:</strong> Almost all hotels have internet access.</li>
      </ul>

      <h3>Living</h3>

      <h2>Communities of Expatriates</h2>

      <h4>Number of Expatriates</h4>
      <p>
        The sixth national census (2011) revealed that 593,832 foreigners live on the Chinese mainland.
      </p>

      <h4>Press for Expatriates</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.thatsshanghai.com/">
          That’s Shanghai
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.globaltimes.cn/">
          Global Times
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.asiaxpat.com/">
          Asiaxpat
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.geoexpat.com/forum/thread24773.html">
          Geoexpat
        </a>
      </p>

      <h4>For Further Information</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.net-on-line.net/infos_pays/asie/chine/index.html">
          Understand China and Live Better
        </a>
      </p>

      <h4>Contact the Embassy</h4>
      <p>
        Contact the Embassy of{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.chinese-embassy.org.uk/">
          China
        </a>{" "}
        in the United Kingdom.
      </p>

      <h4>Contact Your Embassy</h4>
      <p>
        Contact the{" "}
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.gov.uk/government/world/organisations/british-embassy-beijing">
          British Embassy
        </a>{" "}
        in China.
      </p>

      <h2>Ranking of Cities</h2>

      <h4>Cost of Living</h4>
      <p>
        Major Chinese cities rank among the most expensive in the world. Shanghai and Beijing are ranked 7th and 10th 
        respectively in the Mercer Index 2016.
      </p>

      <h4>Quality of Life</h4>
      <p>
        Despite high living costs, China's quality of life ranks lower than in the West. Mercer’s 2017 Quality of Living Survey 
        ranks Shanghai 108th and Beijing 119th out of 231 cities.
      </p>

      <h4>Sanitary Conditions</h4>
      <p>
        Close to international standards in major cities, but may be more delicate in secondary cities.
      </p>
      <h3>Quality of Living & Cost Rankings</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.imercer.com/content/mobility/rankings/c789654/index.html">
          2017 Quality of Living Worldwide City Rankings – Mercer Survey
        </a>
      </p>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.imercer.com/content/mobility/rankings/col2016-rankings.html">
          2016 Cost of Living Worldwide City Rankings – Mercer Survey
        </a>
      </p>

      <h2>Renting an Apartment</h2>
      <h4>Description of Apartments</h4>
      <p>
        Real estate prices vary depending on environment preferences (local or international). 
        An 80m² apartment costs approximately €500/month, while an apartment in a foreign residential space can cost 
        between €1000-3000/month.
      </p>

      <h4>Normal Lease Term</h4>
      <p>Usually, one-year contracts are standard.</p>

      <h4>Rental Costs</h4>
      <p>Standard practice includes a guarantee of one or two months' rent. Agency fees range from ½ to 1 month's rent.</p>

      <h4>Agencies or Private Rentals</h4>
      <p>It is recommended to use an agency to ensure the correct contract format (usually in Chinese).</p>

      <h4>Rental Agency Websites</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.century21cn.com/english/">
          Century 21
        </a>
      </p>

      <h4>Private Rentals Announcements Online</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://shanghai.asiaxpat.com/">
          Shanghai Serviced Apartments
        </a>
      </p>

      <h4>Other Accommodation Options</h4>
      <p>Villa within compounds ranges from €2000 to €10000/month.</p>

      <h2>School System</h2>
      <h4>Education Levels</h4>
      <p>
        The Chinese education system includes nurseries, primary schools, secondary schools, special schools, technical schools,
        teacher training institutions, and universities. Schooling is compulsory for nine years, and Mandarin is the medium of instruction.
      </p>

      <h4>International Schools</h4>
      <p>
        Many international schools exist in major cities like Beijing, Shanghai, Shenzhen, and Guangzhou.
        Common schools include English, American, French, and German.
      </p>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.international-schools-database.com/in/beijing?filter=on">
          View the list of international schools in China
        </a>
      </p>

      <h4>Further Information</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.moe.edu.cn/">
          Ministry of Education, People's Republic of China
        </a>
      </p>

      <h2>Health System</h2>
      <h4>Quality of Healthcare</h4>
      <p>
        The healthcare system faces challenges, with only 20% of the population benefiting from 80% of medical spending.
        Issues include re-use of equipment and poor sterilization.
      </p>

      <h4>International Hospitals</h4>
      <p>
        Western-style medical facilities with international staff are available in Beijing, Shanghai, Guangzhou, and other large cities.
        VIP wards in local hospitals offer better equipment and English-speaking staff.
        In severe cases, transfers to Hong Kong or Thailand are recommended.
      </p>
      <p>
        More information:
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.worldclinic.com/">
          World Clinic
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://chinaexpathealth.com/">
          China Expat Health
        </a>
      </p>

      <h4>Health Insurance</h4>
      <p>Yes, but mainly in government hospitals.</p>

      <h4>Health Ministry</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.moh.gov.cn/">
          Ministry of Health
        </a>
      </p>

      <h2>Tourism and Culture</h2>

      <h3>Types of Tourism</h3>

      <h4>Historical Tourism</h4>
      <p>
        While China has modernized rapidly, many historical sites remain well-preserved.
        Examples include Pingyao (central Shanxi) and Lijiang (Yunnan), known for their centuries-old architecture.
      </p>

      <h4>Cultural Tourism</h4>
      <p>
        Notable cultural sites include Tiananmen Square, the Forbidden City, and the Great Wall of China.
      </p>

      <h4>Nature Tourism</h4>
      <p>
        China offers diverse natural landscapes, from rugged mountains to serene valleys.
        Notable places include China's Five Sacred Mountains: Tai Shan, Hua Shan, Heng Shan (Shanxi), Heng Shan (Hunan), and Song Shan.
      </p>
      <p>
        Other scenic spots include Jiuzhaigou valley, a 40km-long area of mountains, lakes, waterfalls, and forests,
        and the Three Gorges of the Yangtze River (Qutang, Wu, and Xiling).
      </p>

      <h4>Religious Tourism</h4>
      <p>China is home to many ancient temples and sacred sites reflecting diverse religious traditions.</p>
      <h3>Tourism and Culture</h3>

      <h4>Religious Tourism</h4>
      <p>
        China is home to many Buddhist, Taoist, and Confucian temples. 
        Notable sites include the <strong>Shaolin Temple</strong> in Henan, famous for its Shaolin Kung Fu martial arts, 
        and <strong>Mount Emei</strong>, which features numerous ancient Buddhist temples.
      </p>

      <h4>Thermal Tourism</h4>
      <p>There are few European-style spas in China.</p>

      <h4>Beach Tourism</h4>
      <p>Popular beach destinations include <strong>Hainan Island</strong>, <strong>Sanya</strong>, and <strong>Qingdao</strong> in Shandong province.</p>

      <h4>Winter Sports</h4>
      <p>Winter sports are still in early development in China.</p>

      <h4>Outdoor Activities</h4>
      <p>Limited outdoor adventure opportunities compared to other destinations.</p>

      <h4>Shopping</h4>
      <p>
        Big department stores and malls are expanding across China. 
        Western brands are well established in major cities. 
        Notable markets for souvenirs include <strong>Xiushui Street</strong> and <strong>Panjiayuan Antique Market</strong> in Beijing.
      </p>

      <h4>Top Highlights in the Main Cities</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Tourist Attraction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.travelchinaguide.com/cityguides/beijing/forbidden.htm">
                The Forbidden City
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.chinavista.com/travel/13tomb/main.html">
                The Thirteen Ming Tombs
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.travelchinaguide.com/attraction/beijing/tianan.htm">
                Tiananmen Square
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.travelchinaguide.com/cityguides/beijing/summer.htm">
                The Summer Palace and the Old Summer Palace
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.travelchinaguide.com/attraction/beijing/yonghe.htm">
                Lamasery
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.travelchinaguide.com/attraction/beijing/">
                The Lakes of Beijing (Beihai, Hou Hai)
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.travelchinaguide.com/china_great_wall/scene/beijing/">
                The Great Wall
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://whc.unesco.org/en/list/881/">
                The Temple of Heaven
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.beijing-visitor.com/index.php?cID=416&pID=984">
                A Walk in the Hutongs
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.thechinaguide.com/jingshan_park/index.html">
                Jingshan Park
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Top Highlights of the Country</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Tourist Attraction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.travelchinaguide.com/cityguides/beijing/forbidden.htm">
                Beijing's Forbidden City
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.travelchinaguide.com/attraction/shanghai/bund.htm">
                The Bund in Shanghai
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.travelchinaguide.com/cityguides/guangxi/yangshuo/">
                Yangshuo
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.travelchinaguide.com/cityguides/hangzhou.htm">
                Hangzhou
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.travelchinaguide.com/cityguides/heilongjiang/harbin/">
                Harbin
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.discoverhongkong.com/eng/index.jsp">
                Hong Kong
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://www.travelchinaguide.com/cityguides/tibet/lhasa/">
                Lhasa
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.travelchinaguide.com/cityguides/liaoning/dalian/">
                Dalian
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.travelchinaguide.com/cityguides/guilin.htm">
                Guilin
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="http://www.travelchinaguide.com/cityguides/xian.htm">
                Xi'an
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Tourism Organisations</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.cnto.org/">
          China National Tourist Office (CNTO)
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.travelchinaguide.com/">
          Travel China Guide
        </a>
      </p>

      <h3>Cultural Organizations</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.sach.gov.cn/">
          State Cultural Heritage Administration
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://english.ccnt.com.cn/">
          Ministry of Culture
        </a>
      </p>
      <h2>Individual and Civic Freedoms</h2>

      <h3>Political Freedom</h3>
      <p>
        Restricted political freedoms. The country's administrative climate is less restrictive than in the past due to economic liberalization.
      </p>

      <h3>Civil Liberty</h3>
      <p>6/7</p>

      <h3>World Ranking of Freedom of the Press</h3>
      <p>
        Reporters Without Borders 2019 ranking: 177/180.
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://rsf.org/en/ranking_table">
          2019 World Press Freedom Index, Reporters Without Borders
        </a>
      </p>

      <h3>Free Access to the Internet</h3>
      <p>
        Content and access to certain websites discussing Taiwan, Tibet, and Hong Kong remain under central government control.
      </p>

      <h3>Rule of Law</h3>
      <p>Yes</p>

      <h3>Personal Autonomy and Individual Rights</h3>
      <p>Restricted</p>

      <h3>Women's Condition</h3>
      <p>
        Women have legal equality with men, but discrimination in recruitment remains widespread.
      </p>

      <h4>For Further Information</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://rsf.org/en/china">
          Internet and press freedom in China - Reporters Without Borders
        </a>
      </p>

      <h2>Religion</h2>

      <h3>Degree of Freedom</h3>
      <p>Quite considerable</p>

      <h3>Beliefs</h3>
      <p>
        Most Chinese are generally atheists. However, Buddhism, Taoism, and Confucianism are widely practiced,
        especially among senior citizens and a portion of the affluent class. Christian and Muslim minorities also exist.
      </p>

      <h3>Role of Religion in Society</h3>
      <p>
        The government continues to profess atheism, with Party membership restricted to atheists. 
        However, to gain wider acceptance, religious tolerance has increased to some extent.
      </p>
    </div>

    <div className="col-md-12 mt-4 usa">
      <h2>Establish Overseas</h2>
      <h3>Operating a Business</h3>

      <h4>Legal Forms of Companies</h4>

      <h5>Sole Proprietorship</h5>
      <ul>
        <li><strong>Number of partners:</strong> One person only.</li>
        <li><strong>Capital (max/min):</strong> No minimum legal capital required.</li>
        <li><strong>Shareholders and liability:</strong> The owner is liable for the company's debt.</li>
      </ul>

      <h5>General Partnership</h5>
      <ul>
        <li><strong>Number of partners:</strong> No limit on the number of partners.</li>
        <li><strong>Capital (max/min):</strong> No minimum legal capital required.</li>
        <li><strong>Shareholders and liability:</strong> The General Partner is personally liable for the company's debts and obligations.</li>
      </ul>

      <h5>Limited Partnership</h5>
      <ul>
        <li><strong>Number of partners:</strong> Includes general partners and one or more limited partners.</li>
        <li><strong>Capital (max/min):</strong> No minimum legal capital required.</li>
        <li><strong>Shareholders and liability:</strong> The general partner has unlimited liability, while limited partners are liable up to their investment.</li>
      </ul>

      <h5>Public Company</h5>
      <ul>
        <li><strong>Number of partners:</strong> No limit on the number of partners.</li>
        <li><strong>Capital (max/min):</strong> No minimum legal capital required.</li>
        <li><strong>Shareholders and liability:</strong> Liability is limited to the value of the capital contributed.</li>
      </ul>

      <h5>Limited Liability Corporation (LLC)</h5>
      <ul>
        <li><strong>Number of partners:</strong> No limit on the number of partners.</li>
        <li><strong>Capital (max/min):</strong> No minimum legal capital required.</li>
        <li><strong>Shareholders and liability:</strong> Liability is limited to the value of the capital contributed.</li>
      </ul>

      <h4>Enterprises Federation</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.sba.gov/">U.S. Small Business Administration</a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.nam.org/">National Association of Manufacturers</a>
      </p>

      <h4>Find a Company or a Financial Report</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.uspto.gov/trademarks/process/search/">
          United States Patent and Trademark Office (USPTO)
        </a>
      </p>

      <h4>Business Setup Procedures</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Setting Up a Company</th>
            <th>United States</th>
            <th>OECD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Procedures (number)</td>
            <td>6.00</td>
            <td>4.80</td>
          </tr>
          <tr>
            <td>Time (days)</td>
            <td>5.60</td>
            <td>8.30</td>
          </tr>
        </tbody>
      </table>
      <h3>Business Information</h3>

      <p><em>Source: Doing Business.</em></p>

      <h4>For Further Information</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.doingbusiness.org/data/exploreeconomies/United-States/starting-a-business/">
          Doing Business - U.S.
        </a>, for more information on procedures to start a business in the U.S.
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://libguides.rutgers.edu/content.php?pid=136604&amp;sid=1171890">
          U.S. State Corporations Databases
        </a>
      </p>

      <h4>The Competent Organisation</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.sec.gov/">
          The U.S. Securities and Exchange Commission
        </a>. The certificate of incorporation, also called Doing Business As (DBA), 
        must be registered with the Trade Register of the State where the company is located.
        General Partnerships do not need to be registered.
      </p>

      <h4>Recovery Procedures</h4>

      <h5>Principle</h5>
      <p>
        See 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.law.cornell.edu/uscode/text/11">
          U.S Code Chapter 11 - Bankruptcy
        </a>.
      </p>

      <h5>Minimum Debt-to-Capital Ratio Triggering Liquidation</h5>
      <p>
        See 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.law.cornell.edu/uscode/text/11">
          U.S Code Chapter 11 - Bankruptcy
        </a>.
      </p>

      <h5>Bankruptcy Laws</h5>
      <p>
        See 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.law.cornell.edu/uscode/text/11">
          U.S Code Chapter 11 - Bankruptcy
        </a>.
      </p>

      <h5>Reorganization and Rehabilitation Laws</h5>
      <p>
        See 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.law.cornell.edu/uscode/text/11">
          U.S Code Chapter 11 - Bankruptcy
        </a>.
      </p>

      <h4>The Active Population in Figures</h4>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>2011</th>
            <th>2013</th>
            <th>2015</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Labour Force</strong></td>
            <td>153,600,000</td>
            <td>155,400,000</td>
            <td>156,400,000</td>
          </tr>
        </tbody>
      </table>
      <h3>Labor Statistics</h3>
      <p><em>Source: CIA – The World Factbook</em></p>

      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>2015</th>
            <th>2016</th>
            <th>2017</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Total activity rate</strong></td>
            <td>62.12%</td>
            <td>61.98%</td>
            <td>61.82%</td>
          </tr>
          <tr>
            <td><strong>Men activity rate</strong></td>
            <td>48.82%</td>
            <td>49.22%</td>
            <td>49.62%</td>
          </tr>
          <tr>
            <td><strong>Women activity rate</strong></td>
            <td>56.01%</td>
            <td>55.87%</td>
            <td>55.71%</td>
          </tr>
        </tbody>
      </table>
      <p><em>Source: ILO, Laborstat - Yearly Statistics</em></p>

      <h4>For Further Statistics</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.bls.gov/">
          U.S. Bureau of Labour Statistics
        </a>
      </p>

      <h4>For Further Information About the Labour Market</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.census.gov/">
          U.S. Bureau of Census
        </a>
      </p>

      <h3>Working Conditions</h3>

      <h4>Opening Hours</h4>
      <ul>
        <li><strong>Legal Weekly Duration:</strong> 40 hours</li>
        <li>
          <strong>Maximum Duration:</strong> None. Many salaried positions exceed 40 hours per week.
          Hourly employees receive overtime pay at 1.5 times regular salary for hours worked beyond 40.
        </li>
        <li><strong>Night Hours:</strong> Usually from 6 p.m. to 6 a.m.</li>
      </ul>

      <h4>Working Rest Days</h4>
      <p>2 days a week.</p>

      <h4>Paid Annual Vacation</h4>
      <p>2 weeks vacation per year and 2 weeks sick leave.</p>

      <h4>Retirement Age</h4>
      <p>65 years</p>

      <h4>Child Labour and Minimum Age For Employment</h4>
      <p>16 years.</p>

      <h4>Informal Labour Market</h4>
      <p>The informal labor market is developed due to high levels of illegal immigration.</p>

      <h3>The Cost of Labour</h3>
      <h4>Pay</h4>
      <p>Varies by industry, experience, and location.</p>
      <h3>Minimum Wage</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.dol.gov/agencies/whd/minimum-wage/state">
          Minimum wage information
        </a>
        varies by state and industry. The federal minimum wage under the Fair Labor Standards Act (FLSA) 
        is $7.25 per hour, effective July 24, 2009.
      </p>

      <h3>Average Wage</h3>
      <p>
        According to the Bureau of Labor Statistics (BLS), the median wage for workers in the U.S. 
        in the first quarter of 2020 was $957 per week or $49,764 per year.
      </p>

      <h3>Other Forms of Pay</h3>
      <ul>
        <li><strong>Pay for Overtime:</strong> Time-and-a-half for employees making less than $23,660 annually.</li>
        <li><strong>Pay for Rest Days Worked:</strong> Time-and-a-half.</li>
        <li><strong>Pay for Night Hours:</strong> Extra pay for nights or weekends is determined by the employer.</li>
        <li><strong>Pay for Overtime at Night:</strong> Extra pay for nights or weekends is determined by agreement between employer and employee.</li>
      </ul>

      <h3>Social Security Costs</h3>
      <h4>The Areas Covered</h4>
      <p>
        Social Security covers old age, survivors, disability insurance (OASDI), and Medicare. 
        Employers also pay state and federal unemployment taxes. Both employers and employees contribute equally.
      </p>
      <p>
        OASDI taxes apply to wages up to $118,500 at a combined rate of 12.4%. Medicare taxes are levied at 2.9%, 
        with an additional 0.9% for wages exceeding $200,000 annually.
      </p>
      <p>
        Employers must also pay State and Federal Unemployment Taxes:
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.toolkit.com/small_business_guide/sbg.aspx?nid=P07_1294">
          SUTA
        </a>
        &nbsp;and&nbsp;
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/individuals/international-taxpayers/federal-unemployment-tax">
          FUTA
        </a>. 
        FUTA is 6% on the first $7,000 of wages; SUTA rates vary by state. Employers receive a tax credit up to 5.4% 
        against federal tax for amounts paid as SUTA.
      </p>

      <h4>Contributions</h4>
      <p>
        <strong>Employer Contributions:</strong> OASDI (6.2%, capped at $132,900) + Medicare (1.45%) + FUTA (6% on the first $7,000) + SUTA (varies by state).
      </p>
      <p>
        <strong>Employee Contributions:</strong> OASDI (6.2%, capped at $132,900) + Medicare (1.45% + 0.9% for wages above $200,000 annually).
      </p>

      <h4>Competent Organization</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.ssa.gov/">
          Social Security Administration
        </a>
      </p>

      <h3>Management of Human Resources</h3>

      <h4>Recruitment</h4>
      <h5>Method of Recruitment</h5>
      <p>
        Online recruitment is increasingly common. Selection is typically based on a job interview.
      </p>

      <h5>Recruitment Agencies</h5>
      <p>There are three types: employment agency, executive recruitment, temporary staffing firms.</p>

      <h5>Recruitment Websites</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.americanstaffing.net/">
          American Staffing Association
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.monster.com/">
          Monster
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.careerbuilder.com/">
          Career Builder
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://fr.linkedin.com/">
          LinkedIn
        </a>
      </p>

      <h4>The Contract</h4>

      <h5>Type of Contract</h5>
      <p>
        Employment contracts determine if the employee is part of regular or non-regular staff. 
        Regular staff consists of full-time employees. Non-regular staff includes part-time workers, 
        temporary workers, and interns.
      </p>

      <h5>Breach of Contracts</h5>
      <ul>
        <li><strong>Retirement:</strong> General resignation, resignation by agreement, voluntary retirement.</li>
        <li><strong>Dismissals:</strong> Wrongful dismissal may justify an employer in summarily dismissing an employee.</li>
        <li><strong>Other Possible Methods:</strong> Employee resignation on notice, expiry of fixed-term contract, completion of task-based contract.</li>
      </ul>

      <h4>Labour Laws</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.socialaw.com/">
          The Social Law Library
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.dol.gov/">
          U.S. Department of Labor
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.doingbusiness.org/data/exploreeconomies/United-States/employing-workers">
          Doing Business: U.S.
        </a>, to obtain a summary of labour regulations that apply to local enterprises.
      </p>
      <p>&nbsp;</p>
      <h3>Dispute Settlement</h3>

      <h4>Conciliation Process</h4>
      <h5>Cases of Dispute</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.gpoaccess.gov/uscode/browse.html">
          Article 1 (General Provisions) and Article 2 (Sales)
        </a>
      </p>

      <h5>Legal Framework</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.gpoaccess.gov/uscode/browse.html">
          Article 1 (General Provisions) and Article 2 (Sales)
        </a>
      </p>

      <h5>Procedure</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.govinfo.gov/app/details/USCODE-2018-title1/USCODE-2018-title1-chap3-sec201">
          Article 1 (General Provisions) and Article 2 (Sales)
        </a>
      </p>

      <h4>Judicial Structures</h4>
      <h5>Legal Framework</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.gpoaccess.gov/uscode/browse.html">
          Article 1 (General Provisions) and Article 2 (Sales)
        </a>
      </p>

      <h5>Competent Legal Body</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.gpoaccess.gov/uscode/browse.html">
          Article 1 (General Provisions) and Article 2 (Sales)
        </a>
      </p>

      <h3>Social Partners</h3>

      <h4>Social Dialogue and Involvement of Social Partners</h4>
      <p>
        Most U.S. labor unions belong to one of two umbrella organizations:
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.aflcio.org/">
          American Federation of Labour-Congress of Industrial Organisations (AFL-CIO)
        </a>
        and
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.changetowin.org/">
          Change to Win Federation
        </a>, which split from AFL-CIO in 2005.
      </p>

      <h4>Unionisation Rate</h4>
      <p>
        U.S. union membership has declined since 1983 but saw an increase in 2007.
        Gains have been concentrated in the service sector, particularly in West Coast states,
        such as California, where union membership is 16.7%, compared to the national average of 12.1%.
      </p>

      <h4>Unions</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.unions.org/home/">
          Unions.org
        </a>
      </p>

      <h4>Regulation Bodies</h4>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.dol.gov/">
          Department of Labour
        </a>
        <br />
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.bls.gov/">
          U.S. Bureau of Labour Statistics
        </a>
      </p>

      <h3>Tax System</h3>

      <h2>Corporate Taxes</h2>

      <h4>Tax Base For Resident and Foreign Companies</h4>
      <p>
        A corporation organized under U.S. law or the law of any state is considered a domestic corporation,
        regardless of whether it conducts business or owns property in the U.S.
        A fixed place of business is recognized as a permanent establishment.
      </p>

      <h4>Tax Rate</h4>
      <table border="1">
        <tbody>
          <tr>
            <td><strong>Corporate Income Tax</strong></td>
            <td>
              Federal corporate income tax is levied at a flat rate of 21% on effectively connected income (ECI).
              State and local governments may impose additional income taxes, typically ranging from 1% to 12%.
              <br />
              More details available 
              <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
                href="https://statetaxindex.org/tax/corporate/">
                here
              </a>.
            </td>
          </tr>
          <tr>
            <td><strong>S Corporations Tax</strong></td>
            <td>
              Corporations with up to 100 eligible shareholders (none of whom may be corporations)
              that meet specific requirements are generally exempt from U.S. federal income tax.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Tax Rate For Foreign Companies</h3>
      <p>
        The tax reform legislation enacted on 22 December 2017 (P.L. 115-97) shifted the U.S. tax system to a territorial-based approach. 
        Foreign companies are generally subject to the same corporate tax as domestic companies. However, taxable income is calculated based on 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci">
          Effectively Connected Income (ECI)
        </a>, 
        which includes U.S.-source income derived from trade or business activities or sales of U.S. property or inventory by a foreign entity. 
        ECI tax exemption may apply under tax treaties.
      </p>
      <p>
        Foreign companies are subject to a branch profits tax of 30% on ECI not reinvested in U.S. trade or business. 
        Additionally, a 30% withholding tax applies to non-ECI U.S.-source income (e.g., dividends, interest, rents, and royalties).
      </p>

      <h3>Capital Gains Taxation</h3>
      <p>
        Corporations pay the same tax rate on capital gains as ordinary income for shares held short-term (less than a year). 
        For shares held longer than a year, capital gains are taxed at 15% (20% for the highest tax bracket).
      </p>
      <p>
        Capital losses can only offset capital gains. Excess capital losses may be carried back three years or forward five years. 
        Foreign companies are generally exempt from capital gains tax unless the gain is U.S.-sourced (such as from U.S. real property or trade).
      </p>

      <h3>Main Allowable Deductions and Tax Credits</h3>
      <p>
        Deductions apply to domestic production activities, 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/Businesses/Small-Businesses-&amp;-Self-Employed/Deducting-Business-Expenses">
          business expenses
        </a>,
        depreciation, amortization, and losses.
      </p>
      <p>
        Start-up expenses can be amortized over 15 years. Goodwill costs are capitalized and amortized over 15 years. 
        Charitable contributions may be deducted up to 10% of taxable income and carried forward 15 years. 
        State and municipal taxes imposed on businesses are deductible. 
        Fines and penalties are deductible only when paid for restitution or legal compliance.
      </p>
      <p>
        Under the COVID-related CARES Act, net operating losses from tax years after December 31, 2017, 
        and before January 1, 2021, may be carried back five years. 
        Incentives include tax credits for 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/Businesses/Research-Credit">
          R&D
        </a>,
        energy-efficient appliances, and 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/Businesses/Plug-In-Electric-Vehicle-Credit-IRC-30-and-IRC-30D">
          electric motor vehicles
        </a>.
      </p>
      <p>
        Visit the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/Credits-&amp;-Deductions/Businesses">
          IRS site
        </a> 
        for details on available deductions.
      </p>

      <h3>Other Corporate Taxes</h3>
      <p>
        Employers pay a social security tax of 6.2% on the first USD 142,800 of wages and a Medicare tax of 1.45% on all wages. 
        Additional state contributions may apply.
      </p>
      <p>
        Companies accumulating earnings to avoid shareholder personal income tax face an accumulated earnings tax of 20%.
      </p>
      <p>
        Importers, manufacturers, and sellers of ozone-depleting chemicals, or products manufactured using such chemicals, 
        are subject to environmental taxes based on ODC weight.
      </p>
      <p>
        In addition to federal taxes, states and municipalities impose various taxes, 
        including property taxes, stamp duties, franchise taxes, and corporate capital taxes.
      </p>
      <p>
        More details can be found on the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://taxfoundation.org/state-corporate-tax-rates-2021/">
          Tax Foundation
        </a> website.
      </p>

      <h3>Other Domestic Resources</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.irs.gov/">
          Internal Revenue Service (IRS)
        </a>
      </p>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.doingbusiness.org/en/data/exploreeconomies/united-states/paying-taxes">
          Doing Business: U.S.
        </a>, for a summary of taxes and mandatory contributions.
      </p>
      <h3>Country Comparison For Corporate Taxation</h3>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>United States</th>
            <th>OECD</th>
            <th>Germany</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Number of Payments of Taxes per Year</strong></td>
            <td>10.6</td>
            <td>10.9</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td><strong>Time Taken For Administrative Formalities (Hours)</strong></td>
            <td>175.0</td>
            <td>163.4</td>
            <td>218.0</td>
          </tr>
          <tr>
            <td><strong>Total Share of Taxes (% of Profit)</strong></td>
            <td>43.8</td>
            <td>40.9</td>
            <td>49.0</td>
          </tr>
        </tbody>
      </table>
      <p><em>Source: Doing Business - 2017.</em></p>

      <h3>Accounting Rules</h3>

      <h4>Accounting System</h4>

      <h5>Accounting Standards</h5>
      <p>Accounting in the U.S. is based on domestic standards defined by:</p>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.sec.gov/">
            The United States Securities and Exchange Commission (SEC)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.fasb.org/">
            The Financial Accounting Standards Board (FASB)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.gasb.org/">
            The Governmental Accounting Standards Board (GASB)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.fasab.gov/">
            The Federal Accounting Standards Advisory Board (FASAB)
          </a>
        </li>
      </ul>

      <h5>Accounting Regulation Bodies</h5>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.aicpa.org/">
            AICPA - The American Institute of Certified Public Accountants
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.gasb.org/">
            GASB - The Governmental Accounting Standards Board
          </a>
        </li>
      </ul>

      <h5>Accounting Law</h5>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.sec.gov/about/laws/soa2002.pdf">
          The Sarbanes-Oxley Act of 2002 (Public Company Accounting Reform and Investor Protection Act)
        </a>
      </p>

      <h5>Difference Between National and International Standards (IAS/IFRS)</h5>
      <p>
        Domestic public companies must use US GAAP. Foreign companies trading in U.S. markets can use IFRS Standards.
        SMEs may opt for US GAAP, IFRS Standards, or other bases such as the US income tax basis of accounting.
      </p>

      <h5>Accounting News</h5>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.accountingzone.com/">
            Accounting Zone
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://topics.nytimes.com/top/reference/timestopics/organizations/f/financial_accounting_standards_board/index.html">
            New York Times Accounting
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.accountingweb.com/">
            Accounting Web
          </a>
        </li>
      </ul>
      <h3>Accounting Practices</h3>

      <h4>Tax Year</h4>
      <p>
        Corporations may adopt any 12-month fiscal year ending on the last day of the month.
        Individuals use the calendar year unless a fiscal year is elected.
      </p>

      <h4>Accounting Reports</h4>
      <p>
        Companies must submit an annual report, including the income statement and balance sheet with CPA notes.
        Reports must be filed quarterly (10-K) with the SEC.
      </p>

      <h4>Publication Requirements</h4>
      <p>
        Under the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.sec.gov/rules/final/33-8568.pdf">
          S-X rule of the SEC
        </a>, 
        companies making an initial public offering must submit an information file (10-K for U.S. firms, 20-F for foreign firms) annually. 
        Companies listed on the stock exchange must publish their accounts.
      </p>

      <h3>Accountancy Profession</h3>

      <h4>Accountants</h4>
      <p>
        Certified public accountants (CPA) and tax accountants provide accounting and tax services to companies in the U.S.
        CPA licenses are awarded by individual states for practice within that state.
      </p>

      <h4>Professional Accountancy Bodies</h4>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.aicpa.org/">
            The American Institute of Certified Public Accountants
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.imanet.org/">
            Institute of Management Accountants
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.nasba.org/">
            National Association of State Boards of Accountancy
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://aaahq.org/index.cfm">
            American Accounting Association
          </a>
        </li>
      </ul>

      <h4>Member of the International Federation of Accountants (IFAC)</h4>
      <p>
        The U.S. is a member of the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.ifac.org/about-ifac">
          International Federation of Accountants (IFAC)
        </a>.
      </p>

      <h4>Member of Other Federation of Accountants</h4>
      <p>
        The U.S. is a member of the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.ifac.org/about-ifac/membership/members/confederation-asian-and-pacific-accountants-capa">
          Confederation of Asian and Pacific Accountants (CAPA)
        </a>.
      </p>

      <h4>Audit Bodies</h4>
      <p>
        Companies must undergo an annual financial audit. Major auditors include:
      </p>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://pcaobus.org/">
            Public Company Accounting Oversight Board
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.deloitte.com/view/en_GX/global/services/Audit/index.htm">
            Deloitte & Touche
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.ey.com/Home">
            Ernst & Young
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://home.kpmg.com/us/en/home.html">
            KPMG
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.pwc.com/">
            PricewaterhouseCoopers
          </a>
        </li>
      </ul>

      <h2>Consumption Taxes</h2>

      <h4>Nature of the Tax</h4>
      <p>
        Sales tax is levied by individual states at various rates. 
        Forty-five states and the District of Columbia collect statewide sales taxes, while only 38 states collect local sales taxes. 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://taxfoundation.org/2021-sales-taxes/">
          Tax Foundation
        </a> provides details on state sales tax rates.
      </p>

      <h4>Standard Rate</h4>
      <p>
        Sales and use tax rates range from 2.9% to 7.25% at the state level. 
        Local jurisdictions may impose additional taxes. 
        This system may encourage cross-border purchases, especially through e-commerce.
      </p>

      <h4>Reduced Tax Rate</h4>
      <p>
        Varies by state and city, generally ranging from 2.9% to 7.25%. 
        More details available 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://taxfoundation.org/publications/state-and-local-sales-tax-rates/">
          here
        </a>.
      </p>

      <h4>Exclusion From Taxation</h4>
      <p>
        Varies by state. Common exemptions include groceries, energy utilities, prescription drugs, 
        medical supplies, and alternative energy devices.
      </p>

      <h4>Method of Calculation, Declaration, and Settlement</h4>
      <p>
        There is no federal VAT or sales tax in the U.S. 
        Sales tax varies by state, ranging from 2.9% to 7.25%. 
        Five states (Alaska, Delaware, Montana, New Hampshire, Oregon) do not impose sales taxes. 
        Local sales taxes apply in 38 states.
      </p>

      <h4>Other Consumption Taxes</h4>
      <p>
        Various local consumption taxes exist. 
        More details available 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://taxfoundation.org/publications/state-and-local-sales-tax-rates/">
          here
        </a>.
      </p>
      <p>
        Excise duties apply at federal and state levels on gasoline, air transportation, 
        wagering, foreign insurance, sporting goods, firearms, alcohol, and tobacco.
      </p>
                                      <h2>Individual Taxes</h2>
                                <p>Tax Base For Residents and Non-Residents</p>
                                <p>Resident taxpayers incur federal tax on worldwide income, with credits for foreign
                                    income taxes. Non-resident taxpayers are subject to federal tax on Effectively
                                    Connected Income (<a style={{color: red }} target="_blank"
                                        href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci">ECI</a>)
                                    and US-source non-ECI. Most state taxes apply across resident and non-resident
                                    individuals who reside in their territory.</p>
                                <p>Individuals who meet a &ldquo;substantial presence test&rdquo; are considered
                                    residents for taxation purposes. Such test requires either physical presence in the
                                    country for 183 days or more during a calendar year, or presence of at least 31 days
                                    during a calendar year and a cumulative presence of 183 days or more based on a
                                    weighted number of days during the calendar year (taken at whole value) and the two
                                    immediately preceding calendar years (taken at one-third value for the first
                                    preceding calendar year and at one-sixth for the second). A "COVID-19 Medical
                                    Exception" has been introduced, according to which eligible individuals can exclude
                                    from the above computation the "COVID-19 Emergency Period", consisting of a single
                                    period of days the individual was physically present in the United States, up to 60
                                    consecutive calendar days that start on or after 1 February 2020 and on or before 1
                                    April 2020.</p>
                                    <h4>Tax Rate</h4>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td width="401">
                                                <p>Different scales depending on the family status (married couples
                                                    under a joint system, married couples under a separate assets
                                                    system, single and head of the family), limited to seven rates.</p>
                                            </td>
                                            <td width="401">
                                                <p>2021 Federal Income Tax Rates: 10%, 15%, 25%, 28%, 33%, 35% and 37%
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>Single payers (USD)</p>
                                            </td>
                                            <td width="401">
                                                <p>Tax Rate</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>0 to 9,950</p>
                                            </td>
                                            <td width="401">
                                                <p>10%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>9,951 to 40,525</p>
                                            </td>
                                            <td width="401">
                                                <p>12%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>40,526 to 86,375</p>
                                            </td>
                                            <td width="401">
                                                <p>22%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>86,376 to 164,925</p>
                                            </td>
                                            <td width="401">
                                                <p>24%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>164,926 to 209,425</p>
                                            </td>
                                            <td width="401">
                                                <p>32%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>209,406 to 523,600</p>
                                            </td>
                                            <td width="401">
                                                <p>35%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>523,601 or more</p>
                                            </td>
                                            <td width="401">
                                                <p>37%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>Married Filing Jointly (USD)</p>
                                            </td>
                                            <td width="401">
                                                <p>Tax Rate</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>0 to 19,900</p>
                                            </td>
                                            <td width="401">
                                                <p>10%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>19,901 to 81,050</p>
                                            </td>
                                            <td width="401">
                                                <p>12%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>81,051 to 172,750</p>
                                            </td>
                                            <td width="401">
                                                <p>22%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>172,751 to 329,850</p>
                                            </td>
                                            <td width="401">
                                                <p>24%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>329,850 to 418,850</p>
                                            </td>
                                            <td width="401">
                                                <p>32%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>418,851 to 628,300</p>
                                            </td>
                                            <td width="401">
                                                <p>35%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>Above 628,301</p>
                                            </td>
                                            <td width="401">
                                                <p>37%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>Married filling separately (USD)</p>
                                            </td>
                                            <td width="401">
                                                <p>Tax Rate</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>0 to 9,950</p>
                                            </td>
                                            <td width="401">
                                                <p>10%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>9,951 to 40,525</p>
                                            </td>
                                            <td width="401">
                                                <p>12%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>40,526 to 86,375</p>
                                            </td>
                                            <td width="401">
                                                <p>22%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>86,376 to 164,925</p>
                                            </td>
                                            <td width="401">
                                                <p>24%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>164,926 to 209,425</p>
                                            </td>
                                            <td width="401">
                                                <p>32%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>209,426 to 314,150</p>
                                            </td>
                                            <td width="401">
                                                <p>35%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>314,151 or more</p>
                                            </td>
                                            <td width="401">
                                                <p>37%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>Head of Household (USD)</p>
                                            </td>
                                            <td width="401">
                                                <p>Tax Rate</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>0 to 14,200</p>
                                            </td>
                                            <td width="401">
                                                <p>10%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>14,201 to 54,200</p>
                                            </td>
                                            <td width="401">
                                                <p>12%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>54,201 to 86,350</p>
                                            </td>
                                            <td width="401">
                                                <p>22%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>86,351 to 164,900</p>
                                            </td>
                                            <td width="401">
                                                <p>24%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>164,901 to 209,400</p>
                                            </td>
                                            <td width="401">
                                                <p>32%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>209,401 to 523,600</p>
                                            </td>
                                            <td width="401">
                                                <p>35%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>523,601 or more</p>
                                            </td>
                                            <td width="401">
                                                <p>37%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                          <td width="401">
                                                <p>523,601 or more</p>
                                            </td>
                                            <td width="401">
                                                <p>37%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>Alternative Minimum Tax (AMT)<br /> (applies if an individual&rsquo;s
                                                    tentative AMT liability exceeds that individual&rsquo;s regular
                                                    income tax liability.)</p>
                                            </td>
                                            <td width="401">
                                                <p>26% up to a taxable income of USD 199,900<br /> 28% on the amount in
                                                    excess</p>
                                                <p>The AMT exemption amount for 2021 is USD 73,600 for singles and USD
                                                    114,600 for married couples filing jointly</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="401">
                                                <p>State and local income taxes</p>
                                            </td>
                                            <td width="401">
                                                <p>Most states, and a number of municipal authorities, impose income
                                                    taxes on individuals working or residing within their jurisdictions.
                                                    For more information, visit the&nbsp;<a
                                                        style="color: red !important;" target="_blank"
                                                        href="https://www.irs.gov/advocate/local-taxpayer-advocate">IRS
                                                        website</a>.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3>Allowable Deductions and Tax Credits</h3>
      <p>
        Allowable deductions depend on the state of residence and may include credits for families and dependents 
        (e.g., child tax credit, elderly and disabled tax credit, adoption credit), healthcare, education, homeowners 
        (e.g., mortgage interest credit, low-income housing credit), income and savings (e.g., foreign tax credit), 
        and electrical vehicle credit.
      </p>
      <p>
        Other deductions include work-related consumption expenses (e.g., deductible business expenses, bad debt), 
        healthcare, itemized deductions (e.g., real estate tax, gambling losses, charitable contributions), 
        investments, education, and expenses such as alimony and losses.
      </p>
      <p>
        Citizens and resident aliens may claim a standard deduction instead of itemizing deductions. 
        In 2021, the standard deduction was:
        <ul>
          <li>USD 12,550 for individuals</li>
          <li>USD 25,100 for married couples filing jointly</li>
          <li>USD 18,800 for heads of household</li>
        </ul>
        More details can be found on the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/credits-deductions-for-individuals">
          IRS website
        </a>.
      </p>

      <h3>Special Expatriate Tax Regime</h3>
      <p>
        The United States taxes its citizens and residents on worldwide income. 
        Non-resident aliens are taxed only on U.S.-source income and 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci">
          income effectively connected
        </a> with U.S. trade or business.
      </p>
      <p>
        A resident alien meets either the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/individuals/international-taxpayers/alien-residency-green-card-test">
          green card test
        </a> or the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test">
          substantial presence test
        </a>.
        Resident alien status generally results in lower U.S. tax liability compared to non-resident alien status.
      </p>
      <p>
        Tax treaties between the U.S. and foreign nations may override the standard U.S. tax rules.
        Expatriation taxes vary based on the date of expatriation, and individuals failing to file Form 8854 may face 
        a penalty of USD 10,000. More details are available on the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/Individuals/International-Taxpayers/Expatriation-Tax">
          IRS website
        </a>.
      </p>

      <h3>Capital Tax Rate</h3>
      <p>
        Capital gains are taxed as ordinary income for assets held for 12 months or less. 
        The maximum federal capital gains tax rate is 20% for assets held longer than 12 months.
      </p>
      <p>
        Social security taxes are levied at a rate of 6.2% on the first USD 142,800 of wages, while Medicare tax is levied at 1.45%.
      </p>
      <p>
        A federal estate tax applies to the fair market value of an individual’s assets upon death. 
        Non-resident non-citizens are taxed on U.S. property above USD 60,000, while residents face an estate tax rate of up to 40%.
        A 3.8% tax on net investment income and a 0.9% tax on wages exceeding threshold amounts also apply.
      </p>
      <p>
        Some states impose documentary stamp taxes, but there are no stamp duties at the federal level.
      </p>

      <h2>Double Taxation Treaties</h2>

      <h3>Countries With Whom a Double Taxation Treaty Has Been Signed</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z">
          Double taxation treaties signed by the U.S.
        </a>
      </p>

      <h3>Withholding Taxes</h3>
      <p>
        <ul>
          <li>Dividends: 30% (paid to a non-resident)</li>
          <li>Interest: 30% (paid to a non-resident)</li>
          <li>Royalties: 30% (paid to a non-resident)</li>
        </ul>
        Different rates apply based on tax treaties signed by the U.S. with various countries to avoid double taxation.
      </p>

      <h3>Bilateral Agreement</h3>
      <p>
        The United Kingdom and the United States are bound by a 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.hmrc.gov.uk/taxtreaties/in-forceimport"  ></a> </p>

      <h3>Allowable Deductions and Tax Credits</h3>
      <p>
        Allowable deductions depend on the state of residence and may include credits for families and dependents 
        (e.g., child tax credit, elderly and disabled tax credit, adoption credit), healthcare, education, homeowners 
        (e.g., mortgage interest credit, low-income housing credit), income and savings (e.g., foreign tax credit), 
        and electrical vehicle credit.
      </p>
      <p>
        Other deductions include work-related consumption expenses (e.g., deductible business expenses, bad debt), 
        healthcare, itemized deductions (e.g., real estate tax, gambling losses, charitable contributions), 
        investments, education, and expenses such as alimony and losses.
      </p>
      <p>
        Citizens and resident aliens may claim a standard deduction instead of itemizing deductions. 
        In 2021, the standard deduction was:
        <ul>
          <li>USD 12,550 for individuals</li>
          <li>USD 25,100 for married couples filing jointly</li>
          <li>USD 18,800 for heads of household</li>
        </ul>
        More details can be found on the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/credits-deductions-for-individuals">
          IRS website
        </a>.
      </p>

      <h3>Special Expatriate Tax Regime</h3>
      <p>
        The United States taxes its citizens and residents on worldwide income. 
        Non-resident aliens are taxed only on U.S.-source income and 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci">
          income effectively connected
        </a> with U.S. trade or business.
      </p>
      <p>
        A resident alien meets either the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/individuals/international-taxpayers/alien-residency-green-card-test">
          green card test
        </a> or the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test">
          substantial presence test
        </a>.
        Resident alien status generally results in lower U.S. tax liability compared to non-resident alien status.
      </p>
      <p>
        Tax treaties between the U.S. and foreign nations may override the standard U.S. tax rules.
        Expatriation taxes vary based on the date of expatriation, and individuals failing to file Form 8854 may face 
        a penalty of USD 10,000. More details are available on the 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/Individuals/International-Taxpayers/Expatriation-Tax">
          IRS website
        </a>.
      </p>

      <h3>Capital Tax Rate</h3>
      <p>
        Capital gains are taxed as ordinary income for assets held for 12 months or less. 
        The maximum federal capital gains tax rate is 20% for assets held longer than 12 months.
      </p>
      <p>
        Social security taxes are levied at a rate of 6.2% on the first USD 142,800 of wages, while Medicare tax is levied at 1.45%.
      </p>
      <p>
        A federal estate tax applies to the fair market value of an individual’s assets upon death. 
        Non-resident non-citizens are taxed on U.S. property above USD 60,000, while residents face an estate tax rate of up to 40%.
        A 3.8% tax on net investment income and a 0.9% tax on wages exceeding threshold amounts also apply.
      </p>
      <p>
        Some states impose documentary stamp taxes, but there are no stamp duties at the federal level.
      </p>

      <h2>Double Taxation Treaties</h2>

      <h3>Countries With Whom a Double Taxation Treaty Has Been Signed</h3>
      <p>
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z">
          Double taxation treaties signed by the U.S.
        </a>
      </p>

      <h3>Withholding Taxes</h3>
      <p>
        <ul>
          <li>Dividends: 30% (paid to a non-resident)</li>
          <li>Interest: 30% (paid to a non-resident)</li>
          <li>Royalties: 30% (paid to a non-resident)</li>
        </ul>
        Different rates apply based on tax treaties signed by the U.S. with various countries to avoid double taxation.
      </p>

      <h3>Bilateral Agreement</h3>
      <p>
        The United Kingdom and the United States are bound by a 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.hmrc.gov.uk/taxtreaties/in-force/usa.pdf">double taxation
                                        treaty</a>.</p>
                                <h2>Sources of Fiscal Information</h2>

        <h3>Tax Authorities</h3>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.pwc.com/gx/en/services/tax/navigate-the-tax-measures-in-response-to-Covid-19.html?c=USA&amp;tax-trade-regulatory=corporate-income-tax%3Bvat-gst%3Bcustoms-duties%3Bother-indirect-taxes-excise-other%3Bproperty-tax%3Bgeneral-tax-administration-measure%3Bother-taxes&amp;workforce=personal-income-tax%3Bsocial-security-contribution%3Bother-employment-labour-tax%3Bretirement-and-pensions%3Breward-and-benefits%3Blabour-law%3Bimmigration-travel-restrictions-and-entry-bans%3Bimmigration-quarantine-measures&amp;finance-and-liquidity=general%3Bindividuals%3Bsmes%3Bcorporates%3Binsolvency-law%3Bfurther-information%3Bother&amp;operations=contract-law%3Bcyber-privacy-law%3Bcorporate-law">
            Overview of the USA's tax measures in response to Covid-19
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="http://www.irs.gov/">
            Internal Revenue Service (IRS)
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://home.treasury.gov/">
            US Department of Treasury
          </a>
        </li>
      </ul>

      <h3>Other Domestic Resources</h3>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.ustaxcourt.gov/">
            U.S. Tax Court
          </a>
        </li>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://www.ifausa.org/default.aspx">
            International Fiscal Association - USA Branch
          </a>
        </li>
      </ul>

      <h3>Country Guides</h3>
      <ul>
        <li>
          <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
            href="https://taxsummaries.pwc.com/united-states">
            PwC International Tax Guide - USA
          </a>
        </li>
      </ul>

      <h3>Service Providers in the United States</h3>
      <p>
        Learn more about 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.globaltrade.net/international-trade-import-exports/expert-service-provider/United-States/.html">
          Service Providers in the United States
        </a> 
        on Globaltrade.net, the Directory for 
        <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer"
          href="http://www.globaltrade.net/">
          International Trade Service Providers
        </a>.
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
 
   );
};

export default OperatingBusiness;