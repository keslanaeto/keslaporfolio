import React from 'react';
import './Awscloud.css';

const Awscloud = () => {
  return (
    <div className="cloud-page">
      <h2>AWS Cloud Learning Journey</h2>

      <section className="cloud-section">
        <h3>Why Cloud?</h3>
        <p>
          As a full-stack web developer, I have always wanted to build and deploy smarter, scalable apps. 
          AWS Cloud is the next step in that journey.
        </p>
      </section>

      <section className="cloud-section">
        <h3>Where Am I Learning</h3>
        <ul>
          <li><strong>ALX AWS CloudComputing Track</strong> hands-on weekly learning with projects and peer reviews</li>
          <li><strong>Udemy AWS Bootcamp</strong> structured lessons on EC2, S3, IAM, Lambda, VPC, and more</li>
        </ul>
      </section>

      <section className="cloud-section">
        <h3>Skills I am  Building</h3>
        <ul>
          <li> AWS Cloud basics: regions, availability zones, billing</li>
          <li> EC2: Launching and configuring virtual servers</li>
          <li> S3: Storing and managing data securely</li>
          <li> IAM: Users, roles, and permission control</li>
          <li> Lambda & serverless concepts (in progress)</li>
        </ul>
      </section>

      <section className="cloud-section">
        <h3> Projects & Next Steps</h3>
        <p>
          I am currently working on a <strong>Cloud Resume Challenge</strong> and plan to build a <strong>serverless contact form</strong> using AWS Lambda and SES.
        </p>
        <p>
          My goal is to complete both tracks, get certified, Also Write my certification and start contributing to real-world cloud projects.
        </p>
      </section>
    </div>
  );
};

export default Awscloud;
