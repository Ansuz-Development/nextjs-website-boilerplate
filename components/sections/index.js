import React from "react";
import dynamic from "next/dynamic";

const ServiceSection = dynamic(() => import("./ServiceSection"));
const CompanySection = dynamic(() => import("./CompanySection"));
const ProjectSection = dynamic(() => import("./ProjectSection"));

const renderSection = (section) => {
  switch (section.__typename) {
    case "ComponentSectionsServiceSection":
      return <ServiceSection data={section} />;
    case "ComponentSectionsCompanySection":
      return <CompanySection data={section} />;
    case "ComponentSectionsProjectSection":
      return <ProjectSection data={section} />;
    default:
      return null;
  }
};

export default renderSection;
