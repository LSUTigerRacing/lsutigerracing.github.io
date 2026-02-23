import Landing from "../../assets/images/System-Pages/Chassis/Landing.jpg";

import { ChassisImages } from "../../assets/images/System-Pages/index"

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";



const Chassis = () => {
  return (
 <div className="w-full background">
        <LandingComponent 
        name="Chassis"
        blurb="Our chassis system forms the mechanical foundation of our race car, where frame design, suspension geometry, and aerodynamic surfaces combine to create a platform that translates driver inputs into fast, predictable lap times.
        
As a chassis team member, you'll weld tubular space frames that balance rigidity with weight savings, tune suspension systems that keep tires glued to the pavement through high-speed corners, and fabricate composite aerodynamic components that generate hundreds of pounds of downforce."
        image={Landing} />
        <TableOfContents
            sections={[
                { index: "01", title: "Frame" },
                { index: "02", title: "Suspension" },
                { index: "03", title: "Brakes" },
                { index: "04", title: "Aerodynamics" },
                { index: "05", title: "Ergonomics" },
            ]}
        />
        <SubsystemComponent
            index="01"
            title="Frame"
            description="The frame is the foundation that holds everything together and determines how the car responds to driver inputs and track conditions. Our frame team designs and fabricates the tubular space frame structure using steel tubing, welding techniques, and structural analysis to create a chassis that is both lightweight and incredibly stiff. Members develop skills in CAD modeling, finite element analysis, TIG welding, fixture design, and the manufacturing processes that turn hundreds of individual tubes into a precise rolling chassis."
            images={[ChassisImages.Frame.Sanding, ChassisImages.Frame.Frame]} 
            layout={6}
        />
        <SubsystemComponent
            index="02"
            title="Suspension"
            description="A race car is only as fast as its tires can grip, and the suspension is what keeps those tires planted. Our suspension team designs the geometry, components, and damping systems that control how the car handles through corners, over bumps, and under braking. Members work with kinematic analysis software, finite element modeling, and on-track data acquisition to optimize parameters like camber curves, roll centers, and spring rates."
            images={[ChassisImages.Suspension.Airshock, ChassisImages.Suspension.WorkingOnAirshock]} 
            layout={4}
        />
        <SubsystemComponent
            index="03"
            title="Brakes"
            description="Stopping a race car from high speeds repeatedly requires more than just strong brakes. The system needs thermal management, precise modulation, and consistent performance lap after lap. Our brakes team designs the complete braking system, from caliper selection and rotor sizing to pedal box geometry and brake bias adjustment mechanisms. Members gain experience with thermal analysis, hydraulic system design, and performance testing that pushes components to their limits while the driver depends on them for confidence and control at every corner entry."
            images={[ChassisImages.Brakes.Caliper]} 
            layout={7}
        />
        <SubsystemComponent
            index="04"
            title="Aerodynamics"
            description="Making a car stick to the track without adding weight is where aerodynamics becomes crucial. Our aerodynamics team designs and manufactures the wings, undertray, and bodywork that generate downforce and manage airflow around the vehicle. Members gain experience with computational fluid dynamics software, wind tunnel testing, composite manufacturing techniques, and the iterative design process that balances downforce generation with drag reduction."
            images={[ChassisImages.Aerodynamics.HoldingWing, ChassisImages.Aerodynamics.Backwing]} 
            layout={4}
        />
        <SubsystemComponent
            index="05"
            title="Ergonomics"
            description="The fastest car is useless if the driver can't operate it comfortably and efficiently. Our ergonomics team focuses on the human-machine interface, designing everything from seat positioning and pedal placement to steering wheel controls and driver visibility. Members conduct driver fit studies, create mockups to test different configurations, and optimize the cockpit layout to minimize driver fatigue while maximizing control and feedback."
            images={[ChassisImages.Ergonomics.Sanding, ChassisImages.Ergonomics.Jig]} 
            layout={4}
        />
    </div>
  );
};

export default Chassis;