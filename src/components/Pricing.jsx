import React, {useState} from "react";

function Pricing() {
    const [yearly, setYearly] = useState(false);

    function toggleBilling() {
        setYearly((current) => !current);
    }
  return (
    <div>
      <section className="pricing-section">
        <div className="masthead">
            <div>
                <h1>Plans & Pricing</h1>
            </div>

            {/* <div className="toggle-block">
                <span id="label-monthly" class="active"></span>
                <div className="switch" id="switch" onclick="toggleBilling()"></div>
                <span id="label-yearly">Yearly</span>
                <span className="save-tag">saves 2 months</span>
            </div> */}
            
             {/* BILLING TOOGLE */}
            <div className="toggle-block">
                <span className={!yearly ? "active" : ""}>Monthly</span>

                <button 
                    type="button" 
                    className={`switch ${yearly ? "on" : ""}`} 
                    onClick={toggleBilling}>
                </button>

                <span className={yearly ? "active" : ""}>Yearly</span>
                {/* grouped so they can be positioned together, floating above the row */}
                <div className="free-callout">
                    <span className="month-free">2 months free</span>
                    <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 2C40 20 26 32 6 36" stroke="#17a673" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" fill="none" />
                        <path d="M6 36L13 33.5M6 36L8.5 28.5" stroke="#17a673" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </div>

                {/* <span className="save-tag">save 2 months</span> */}
            </div>
        </div>

        <div className="cards">
            <div className="card">
                <p className="plan-name">Starter</p>
                <p className="plan-desc">Ideal for freelancers and contractors just starting out.</p>
                <div className="price-row">
                    <span className="currency">$</span>
                    {/* <span className="amount" data-monthly="19" data-yearly="16">19</span> */}
                    <span className="amount">
                        {yearly ? "17" : "24"}
                    </span>
                    <span className="period">/ month</span>
                </div>
                <ul className="features">
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> All Templates</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Unlimited Clients & Projects</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Invoicing & Payments</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Proposals & Contracts</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Tasks & Time Tracking</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Client CRM</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Expense Tracking</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Up to 5 Project Collaborators</li>  
                </ul>
                <button className="cta">Start Free</button>
            </div>

            <div className="card featured">
                {/* <div className="stamp">preferred</div> */}
                <div className="ribbon"><span>Most Popular</span></div>
                <p className="plan-name">Professional</p>
                <p className="plan-desc">Everything a growing independent business needs to thrive.</p>
                <div className="price-row">
                    <span className="currency">$</span>
                    {/* <span className="amount" data-monthly="42" data-yearly="35">42</span> */}
                    <span className="amount">
                        {yearly ? "32" : "39"}
                    </span>
                    <span className="period">/ month</span>
                </div>
                <ul className="features">
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Everything is Starter plus...</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Custom Branding</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Forms & Questionnaires</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Workflow Automations</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Client Portal</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> QuickBooks Integration</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Calendly Integration</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Zapier Integration</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Up to 15 Project Collaborators</li>
                </ul>
                <button className="cta">Start Free</button>
            </div>

            <div className="card">
                <p className="plan-name">Business</p>
                <p className="plan-desc">The perfect package for small businesses and agencies.</p>
                <div className="price-row">
                    <span className="currency">$</span>
                    {/* <span className="amount" data-monthly="89" data-yearly="74">89</span> */}
                    <span className="amount">
                        {yearly ? "52" : "79"}
                    </span>
                    <span className="period">/ month</span>
                </div>
                <ul className="features">
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Everything in Starter and Professional plus...</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Subcontractor Management</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Hiring Agreement Templates (1099 contracts)</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Subcontractor Onboarding</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Talent Pool</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> 3 Team Seats (additional seats $9/month)</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Account Access</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Connect Multiple Bank Accounts</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Unlimited Subcontractors</li>
                    <li><span className="mark"><img className="icon-check" src="/public/Check Mark.svg" alt="Check Mark" /></span> Unlimited Project Collaborators</li>
                </ul>
                <button className="cta">Start Free</button>
            </div>
        </div>
        <p className="foot-note">All plans include a 14-day trial. Cancel anytime - no forms to fill out.</p>
      </section>
    </div>
  );
}

export default Pricing;