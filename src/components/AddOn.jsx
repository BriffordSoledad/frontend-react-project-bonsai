import React from "react";

function AddOn() {
    return (
    <div>
        <section className="addon-section">
            <div className="addon-container">
                <h2 className="addons-heading">Super charge your work with add-ons</h2>
                <div className="addons-list">
                    <div className="addon-row">
                        <div className="addon-info">
                            <h3>Collaborators</h3>
                            <p>Invite other users to specifi projects for limited access and functionality.</p>
                        </div>
                        <div className="addon-price">
                            <span className="free">Free</span>
                        </div>
                    </div>

                    <div className="addon-row">
                        <div className="addon-info">
                            <h3>Partners</h3>
                            <p>Invite other users for full account access and company management.</p>
                        </div>
                        <div className="addon-price">
                            <div className="price">$9</div>
                            <div className="period">/Month</div>
                        </div>
                    </div>

                    <div className="addon-row">
                        <div className="addon-info">
                            <h3>Bonsai Tax</h3>
                            <p>Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
                            <a href="" className="learn-more">Learn more &gt;</a>
                        </div>
                        <div className="addon-price">
                            <div className="price">$10</div>
                            <div className="period">/Month</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default AddOn;