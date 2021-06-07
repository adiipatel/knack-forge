import React from 'react';
import './App.css';

import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
import Platform from './Platform/Platform';
import Product from './Product/Product';
import Vision from './Vision/Vision';
import Tech from './Tech/Tech';
import Team from './Team/Team';

import { BsCloudUpload } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { RiSettings3Line } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFolderCheck } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";


function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <Product 
        no="01" 
        para1="Our success rests in the relationship between people"
        head1="Products &amp; people"
        img="product"
        h1="Constant evolution, constant adaptation"
        p1="We know what it takes to help your business prepare
        for the next generation of digital transformations. At 
        KnackForge, we provide a comprehensive suite of
        solutions and services that are technologically 
        superior and commercially viable."
      />
      
      <Vision 
        text={["Let's work ",<span className='bold'>together </span>,
        "to turn your ", <span className='bold'>company's</span>," vision into ",
        <span className='bold'>software</span>," solution with ",
        <span className='bold'>staying</span>," power."]}
      />

      <Platform />
      <Product 
        no="02" 
        para1="Choose from our service and find the tools you need"
        head1="Solution &amp; technology"
        img="technology"
        h1="Your potential, our passion"
        p1="We know what it takes to help your business prepare
        for the next generation of digital transformations. At 
        KnackForge, we provide a comprehensive suite of
        solutions and services that are technologically 
        superior and commercially viable."
      />

      <div className="techs">
          <Tech 
            icon={[<BsCloudUpload size='50px'/>]}
            head="Cloud Computing &amp; Infrastructure"
            para="KnackForge has helped many 
            clients reduce overhead and 
            improve reliability with
            Amazon Web Services." 
          />
          <Tech 
            icon={[<FiGlobe size='50px'/>]}
            head="Web Application Development"
            para="KnackForge develops responsive
            web applications that work. From
            Drupal and Wordpress to custom 
            web applications our team will
            excel in your environment." 
          />
          <Tech 
            icon={[<RiSettings3Line size='50px'/>]}
            head="Cross Platform Mobile App Development"
            para="Secure the KnackForge team
            to perform mobile development
            for Android and/or Apple iOS." 
          />
          <Tech 
            icon={[<AiOutlineMessage size='50px'/>]}
            head="Consulting Services"
            para="Secure the KnackForge team
            to perform mobile 
            development for Android
            and/or Apple iOS." 
          />
          <Tech 
            icon={[<BsFolderCheck size='50px'/>]}
            head="Enterprice Data Warehouse"
            para="As companies like yours thrive
            and grow in today's cometitive
            business environment, they
            need to access key metrics to 
            drive good decisions." 
          />
          <Tech
            icon={[<RiTeamLine size='50px'/>]} 
            head="Staff Augmentation &amp; Dedicated Teams"
            para="KnackForge serves the unique
            requirements of your company
            by either serving as your 
            complete development solution
            or to simply expand your staff." 
          />
      </div>

      <Vision 
        text={["Need a ",<span className='bold'>dependable </span>,
        "team? We're ", <span className='bold'>here for it.</span>," Bringing out ",
        <span className='bold'>the best</span>," in each other! "]}
      />

      <Product 
        no="03" 
        para1="Technology is great. The minds that created it are greater."
        head1="Team &amp; Leadership"
        img="team"
        h1="Bringing out, the best!"
        p1="We know what it takes to help your business prepare
        for the next generation of digital transformations. At 
        KnackForge, we provide a comprehensive suite of
        solutions and services that are technologically 
        superior and commercially viable."
      />
      
      <div className="people">
        <Team 
          img="peop1"
          name="Subhash Chandra"
          position="President"
        />
        <Team 
          img="peop2"
          name="John Snow"
          position="CEO"
        />
        <Team 
          img="peop3"
          name="Tony Stark"
          position="Business Development"
        />
        <Team 
          img="peop4"
          name="Eddie House"
          position="Associate Vice President"
        />
        <Team 
          img="peop5"
          name="Greygory Lawson"
          position="Customer Experience"
        />
        <Team 
          img="peop6"
          name="Rose Morrow"
          position="Human Resources"
        />
      </div>

      <Vision 
        text={["KnackForge is ",<span className='bold'>working </span>,
        "on ", <span className='bold'>software</span>," that brings all the ",
        <span className='bold'>pieces together</span>]}
      />

      <Product 
        no="03" 
        para1="Click on to see the real-life impact of our software"
        head1="News &amp; Blog"
        img="news"
        h1="Cross-platform serverless app using nativescripts and services"
        p1="I wanted to demonstrate how easy to build a native
        looking cross-platform app using AWS services without actually 
        having your server."
        />

    </>   
  );
}

export default App;
