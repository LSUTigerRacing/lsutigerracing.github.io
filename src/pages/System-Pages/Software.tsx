import { SoftwareImages } from "../../assets/images/System-Pages";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";

const Software = () => {
  return (
 <div className="w-full background">
        <LandingComponent 
			name="Software"
			blurb="Our software system develops the digital tools and intelligence that power both our race car and team operations, where embedded firmware, custom applications, and data analysis transform raw information into competitive advantages.

            As a software team member, you'll write real-time code for microcontrollers managing critical vehicle functions, build applications that streamline team workflows and pit operations, and develop analysis tools that turn thousands of data points per lap into actionable performance improvements.
"
			image={SoftwareImages.Landing} 
		/>

        <TableOfContents
            sections={[
                { index: "01", title: "App Development" },
                { index: "02", title: "Embedded Controls" },
                { index: "03", title: "Data Analysis" },
            ]}
        />

        <SubsystemComponent
            index="01"
            title="App Development"
            description="Modern race teams need software tools that make information accessible and operations efficient. Our app development team builds applications that serve the team's needs, from pit crew timing systems and parts inventory management to driver telemetry displays and sponsor engagement platforms. Members gain experience with mobile and web development frameworks, user interface design, database management, and the full software development lifecycle from requirements gathering to deployment."
            images={[SoftwareImages.AppDev.Cardin]} 
            layout={7}
        />
        <SubsystemComponent
            index="02"
            title="Embedded Controls"
            description="The race car's onboard computers need reliable code that runs in real-time under harsh conditions. Our embedded systems team develops firmware for microcontrollers that manage critical vehicle functions, from motor control and battery management to sensor data collection and driver display updates. Members work with C/C++ programming, real-time operating systems, communication protocols like CAN bus, and debugging techniques for hardware-software integration."
            images={[SoftwareImages.Embedded.Aurafarm, SoftwareImages.Embedded.Drake]} 
            layout={4}
        />
        <SubsystemComponent
            index="03"
            title="Data Analysis"
            description="Every lap generates thousands of data points, and turning that information into faster lap times requires systematic analysis. Our data acquisition team develops the systems that log vehicle performance data and creates the analysis tools that reveal what's actually happening on track. Members gain experience with sensor integration, data logging systems, signal processing, visualization techniques, and statistical analysis methods that identify trends and anomalies."
            images={[SoftwareImages.DAQ.Kyle]} 
            layout={7}
        />
    </div>
  );
};

export default Software;