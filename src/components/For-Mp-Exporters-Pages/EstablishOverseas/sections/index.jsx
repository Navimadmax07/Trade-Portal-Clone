import React from "react";

export const LegalForms = () => (
  <section className="mb-4">
    <h4>Legal Forms of Companies</h4>

    <div className="company-type">
      <h5>Wholly foreign-owned enterprise (WFOE)</h5>
      <p>
        <strong>Number of partners:</strong> One juridical person or one or more
        shareholders.
      </p>
      <p>
        Entity owned 100% by foreign interests that have the same rights as a
        local company.
      </p>
      <p>
        <strong>Capital (max/min):</strong> Minimum varies according to the
        sector of activity.
      </p>
      <p>
        <strong>Shareholders and liability:</strong> Limited to the amount of
        contributions.
      </p>
    </div>

    <div className="company-type">
      <h5>Equity Joint Venture (EJV)</h5>
      <p>
        <strong>Number of partners:</strong> Minimum of one Chinese entity and
        minimum one foreign entity.
      </p>
      <p>
        <strong>Capital (max/min):</strong> No minimum capital required, but at
        least 25% must originate from foreign investors.
      </p>
      <p>
        <strong>Shareholders and liability:</strong> Limited to the amount of
        contributions.
      </p>
    </div>

    {/* Add other company types similarly */}
  </section>
);

export const BusinessSetup = () => (
  <section className="mb-4">
    <h4>Business Setup Procedures</h4>
    <div className="setup-stats">
      <div className="row">
        <div className="col-md-6">
          <h5>Setting Up a Company</h5>
          <p>China vs East Asia & Pacific</p>
          <p>Procedures: 4.00 vs 7.00</p>
          <p>Time (days): 8.60 vs 23.90</p>
        </div>
      </div>
    </div>
  </section>
);

export const WorkingConditions = () => (
  <section className="mb-4">
    <h4>Working Conditions</h4>
    <div className="working-hours">
      <p>
        <strong>Legal Weekly Duration:</strong> 40 hours
      </p>
      <p>
        <strong>Maximum Duration:</strong> 8 hours per day with a maximum of 44
        hours per week on an average. Not more than additional 36 hours per
        month.
      </p>
      <p>
        <strong>Rest Day:</strong> One day per week.
      </p>
      <p>
        <strong>Retirement Age:</strong> 55 for women and 60 for men.
      </p>
    </div>
  </section>
);

export const LaborCosts = () => (
  <section className="mb-4">
    <h4>Labor Costs</h4>
    <div className="wages">
      <h5>Minimum Wage</h5>
      <p>Varies across provinces with highest being in:</p>
      <ul>
        <li>Shanghai: RMB 2,480 (US$358)</li>
        <li>Shenzhen and Beijing: RMB 2,200 (US$318)</li>
      </ul>
    </div>
  </section>
);

export const SocialSecurity = () => (
  <section className="mb-4">
    <h4>Social Security Costs</h4>
    <div className="insurance-schemes">
      <p>
        Coverage includes: Pension, medical, maternity, unemployment and
        work-related injury insurance schemes.
      </p>
      <h5>Employer Contributions (Beijing):</h5>
      <ul>
        <li>Pension: 16%</li>
        <li>Medical expenses: 10%</li>
        <li>Unemployment: 0.8%</li>
        <li>Maternity: 0.8%</li>
        <li>Work-related injury: 0.2% to 1.9%</li>
      </ul>
    </div>
  </section>
);

export const HRManagement = () => (
  <section className="mb-4">
    <h4>Management of Human Resources</h4>
    <div className="recruitment">
      <h5>Recruitment Methods</h5>
      <p>Primary channels include:</p>
      <ul>
        <li>Internet recruitment</li>
        <li>Newspaper announcements</li>
        <li>Trade fairs</li>
        <li>University recruitment campaigns</li>
      </ul>
    </div>
  </section>
);
