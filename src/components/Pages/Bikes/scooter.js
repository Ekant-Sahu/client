import React from 'react';
import '../../Pages/pages.css';

const ScooterInsurance = () => {
    return (
        <div>
            <header>
                <h1>What is Scooter Insurance?</h1>
            </header>
            <section className="content">
                <p>Scooter insurance is basically a two-wheeler insurance plan that can cover third-party liabilities and damages to the scooter, depending on the terms and conditions of the chosen policy. For instance, a Third-party Scooter Insurance Plan (Liability-only Policy) will only cover damages to the third-party property and injury/death of a third party, while a Comprehensive Scooter Insurance Plan will offer all the benefits of the Third-party Liability Policy and cover damages to the scooter.</p>
            </section>
            <section className="features">
                <h2>Key Features and Importance of FinSure’s Scooter Insurance</h2>
                <ul>
                    <li>
                        <strong>Low Premium</strong> <br />
                        FinSure offers one of the lowest-priced bike insurance policies in the market thanks to the no-commission model and reduced operational costs. These benefits are passed on to you as discounts on bike insurance premium.
                    </li>
                    <li>
                        <strong>Super Fast and Easy</strong> <br />
                        The purchase process at ACKO is super fast as we don't inspect your scooter when you buy or renew the insurance policy. Just answer a few questions related to the scooter and go through the available plans. Make the payment, and get the policy instantly!
                    </li>
                    <li>
                        <strong>Instant Claim Settlement</strong> <br />
                        FinSure's policyholder does not have to go through the entire claim process if the scooter has suffered minor damages. Simply tell us a few details about the damage and we will try to settle the claim within a few hours.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ScooterInsurance;