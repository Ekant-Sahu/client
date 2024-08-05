import React from 'react';
import './faq.css';

const FAQ=()=> {
  return (
    <div className="faq-page">
      <h1>Some Frequently Asked Questions</h1>
      <div className="faq-item">
        <button className="faq-question">How does FinSure work?</button>
        <div className="faq-answer">
          FinSure leverages blockchain technology to provide secure, transparent, and efficient insurance services. Policies are recorded on a decentralized ledger, which ensures transparency and reduces fraud. Claims are processed automatically through smart contracts, making the process faster and more reliable.
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">How is FinSure different from insurance websites?</button>
        <div className="faq-answer">
          FinSure uses Blockchain technology which eliminates the need for intermediaries, reducing administrative costs and increasing efficiency. It offers enhanced security through cryptographic encryption and provides transparent and immutable records of all transactions, ensuring that all parties have access to the same information.
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">What types of coverage are available for cars and bikes?</button>
        <div className="faq-answer">
          FinSure covers various aspects, including collision, comprehensive, and personal injury protection for cars and bikes. We also offer customizable policies to suit individual needs, ensuring that you get the coverage that best fits your requirements. We also provide insurance for electric vehicles.
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">How do I file a claim?</button>
        <div className="faq-answer">
          Filing a claim is simple and quick. You can submit a claim through our claims section by providing necessary details and documentation. Smart contracts automatically validate and process claims, ensuring a swift and efficient resolution.
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">Is my personal information secure with FinSure?</button>
        <div className="faq-answer">
          Yes, We use blockchain technology which ensures the highest level of security for your personal information. All data is encrypted and stored on a decentralized ledger, making it nearly impossible for unauthorized parties to access or tamper with your information.
        </div>
      </div>
    </div>
  );
}

export default FAQ;
