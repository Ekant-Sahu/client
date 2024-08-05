import React from 'react';
import '../../Pages/pages.css';

const ElectricCar = () => {
    return (
        <div>
            <header>
                <h1>What is Electric Car Insurance?</h1>
            </header>
            <section className="content">
                <p>To cope with the growing demand, auto manufacturers are developing different types of EVs to cater to the different needs of private buyers. With the wider adoption of EV vehicles, new-age insurance companies such as FinSure are providing vehicle insurance for electric cars.</p>
                <p>Similar to the motor insurance policy for petrol and diesel vehicles, the EV car insurance policy offers financial protection to your vehicle against liabilities such as accidental damage, fire, natural calamities, riots, theft of the insured vehicle, and third-party injuries or damages to their property. By choosing the right cover for your electric vehicle, you can avoid out-of-pocket expenses.</p>
            </section>
            <section className="content">
                <h2>Why Insurance for Electric Cars?</h2>
                <p>Here are the advantages of insuring your electric car with a Comprehensive Insurance Policy.</p>
                <ul>
                    <li>
                        <strong>Protect Against Third-Party Liabilities</strong>
                        <p>In case of an unfortunate situation where you have caused an injury to a third-party or damaged third-party property, then your insurance policy will cover such liabilities.</p>
                    </li>
                    <li>
                        <strong>Avoid Expensive Repair Bills</strong>
                        <p>As the Comprehensive Cover offers Own Damage (OD) cover, it provides coverage for a major part of the repair bill in case of accidents, fire, natural calamities, riots, and losses due to theft. This means you do not have to pay an expensive repair bill in case of damages covered by the plan.</p>
                    </li>
                    <li>
                        <strong>Get Personal Accident Cover</strong>
                        <p>With the law-mandated Personal Accident cover (PA), you get complete financial compensation against uncertainties such as accidental death, bodily injuries, or partial/total disabilities due to an accident. Please note, this has to be bought separately with the Third-Party Insurance Plan or the Comprehensive Plan.</p>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ElectricCar;
