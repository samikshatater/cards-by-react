import React from 'react'
import Card from './components/card'

const App = () => {


 const jobListings = [
  {
    id: 1,
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    companyName: "Google",
    post: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    price: "$180/hour",
    location: "Mountain View, USA",
  },
  {
    id: 2,
    logo: "https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg",
    companyName: "Apple",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    price: "$95/hour",
    location: "Cupertino, USA",
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    price: "$210/hour",
    location: "Seattle, USA",
  },
  {
    id: 4,
    logo: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",
    companyName: "Netflix",
    post: "Frontend Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    price: "$140/hour",
    location: "Los Gatos, USA",
  },
  {
    id: 5,
    logo: "https://about.meta.com/images/meta-logo.png",
    companyName: "Meta",
    post: "ML Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    price: "$230/hour",
    location: "Menlo Park, USA",
  },
  {
    id: 6,
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    companyName: "Microsoft",
    post: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    price: "$85/hour",
    location: "Redmond, USA",
  },
  {
    id: 7,
    logo: "https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png",
    companyName: "X (Twitter)",
    post: "Backend Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    price: "$110/hour",
    location: "San Francisco, USA",
  },
  {
    id: 8,
    logo: "https://static.licdn.com/aero-v1/sc/h/al2o9zrvru7aqj8e1x2rzsrca",
    companyName: "LinkedIn",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    price: "$155/hour",
    location: "Sunnyvale, USA",
  },
  {
    id: 9,
    logo: "https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg",
    companyName: "Salesforce",
    post: "Product Manager",
    tag1: "Part Time",
    tag2: "Senior Level",
    price: "$175/hour",
    location: "San Francisco, USA",
  },
  {
    id: 10,
    logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
    companyName: "Adobe",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    price: "$120/hour",
    location: "San Jose, USA",
  },
];

  return (
    <div className='super-container'>

      {jobListings.map(function(elem) {
        return <Card image={elem.logo} company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} 
        price={elem.price} lecation={elem.location}  />
      })}

     
      
    </div>
  )
}

export default App
