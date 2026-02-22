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
            description="Modern race teams need software tools that make information accessible and operations efficient. Our app development team builds applications that serve the team's needs, from documentation platforms and project management to financial operation workflows and sponsor engagement tools. Members gain experience with web development frameworks, user interface design, database management, and the full software development lifecycle from requirements gathering to deployment. The work involves identifying problems that software can solve, prototyping solutions, gathering feedback from team members, and iterating until the tools actually improve how we work."
            images={[SoftwareImages.AppDev.Cardin]} 
            layout={7}
        />
        <SubsystemComponent
            index="02"
            title="Embedded Controls"
            description="The race car's onboard computers need reliable code that runs in real-time under harsh conditions. Our embedded systems team develops firmware for microcontrollers that manage critical vehicle functions, from vehicle control unit logic to sensor data collection and driver display updates. Members work with C/C++ programming, real-time operating systems, communication protocols like CAN bus, and debugging techniques for hardware-software integration. The role involves writing efficient code that meets strict timing requirements, implementing safety-critical algorithms, and testing thoroughly because failures on track aren't an option. Success requires thinking about edge cases, managing limited computational resources, and understanding how software interacts with the physical world of sensors, actuators, and electrical systems."
            images={[SoftwareImages.Embedded.Aurafarm, SoftwareImages.Embedded.Drake]} 
            layout={4}
        />
        <SubsystemComponent
            index="03"
            title="Data Analysis"
            description="Every lap generates thousands of data points, and turning that information into faster lap times requires systematic analysis. Our data acquisition team develops the systems that log vehicle performance data and creates the analysis tools that reveal what's actually happening on track. Members gain experience with sensor integration, data logging systems, signal processing, visualization techniques, and statistical analysis methods that identify trends and anomalies. The work involves configuring data acquisition hardware, writing scripts to process and visualize telemetry, comparing driver inputs to vehicle responses, and presenting findings that help engineers make informed setup changes. Understanding what the data reveals about suspension behavior, power delivery, braking performance, and driver technique turns raw numbers into actionable improvements."
            images={[SoftwareImages.DAQ.Kyle]} 
            layout={7}
        />
    </div>
  );
};

export default Software;