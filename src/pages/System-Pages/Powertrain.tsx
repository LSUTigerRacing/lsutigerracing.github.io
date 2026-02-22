import Landing from "../../assets/images/System-Pages/Powertrain/Landing.jpg";
import TempPicture from "../../assets/images/System-Pages/Powertrain/PCB.png";

import { PowertrainImages } from "../../assets/images/System-Pages";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";

const Powertrain = () => {
  return (
    <div className="w-full background">
        <LandingComponent 
        name="Powertrain"
        blurb="Our powertrain system serves as the electric heart of our race car, where battery management, motor control, and embedded systems transform stored electrical energy into the instantaneous torque that launches our machine to championship speeds.

        As a powertrain team member, you'll develop battery systems that monitor thousands of cells for temperature and voltage, design motor controllers that deliver precise torque across the entire rpm range, and engineer high-voltage PCB layouts that withstand the extreme demands of competitive racing."
        image={Landing} />
        <TableOfContents
            sections={[
                { index: "01", title: "Electronics" },
                { index: "02", title: "Battery" },
                { index: "03", title: "Low Voltage" },
                { index: "04", title: "Tractive System" },
            ]}
        />
        <SubsystemComponent
            index="01"
            title="Electronics"
            description="Every sensor, controller, and system on our race car needs custom electronics to function reliably. Our electronics team takes PCB projects through the complete development cycle, from schematic capture and component selection to board layout, fabrication ordering, and assembly. Members develop skills in circuit design software, surface-mount soldering techniques, board bring-up procedures, and debugging methodologies that reveal why circuits behave the way they do."
            images={[PowertrainImages.Electronics.PCB, PowertrainImages.Electronics.Soldering]} 
            layout={4}
        />
        <SubsystemComponent
            index="02"
            title="Battery"
            description="Powering an electric race car requires more than just connecting cells together. Our battery team designs and assembles the high-voltage energy storage system from the ground up, working with cutting-edge lithium-ion cell technology to create custom battery management systems that monitor cell health, balance charge levels, and ensure safe operation under extreme racing conditions. Members gain hands-on experience with thermal management solutions, electrical protection schemes, and rigorous safety testing protocols."
            images={[PowertrainImages.Battery.Modules, PowertrainImages.Battery.Yianni]} 
            layout={4}
        />
        <SubsystemComponent
            index="03"
            title="Low Voltage"
            description="Behind every successful on-track performance is a web of carefully designed wiring that most people never see. Our GLV team designs and implements all the wiring harnesses and low-voltage systems that support vehicle operation, from the critical shutdown circuit to sensor power distribution. Members create comprehensive wiring diagrams, select appropriate wire gauges and connectors, and develop routing strategies that minimize weight while ensuring reliability and serviceability."
            images={[PowertrainImages.LowVoltage.Wiring, PowertrainImages.LowVoltage.VCU]}
            layout={5}
        />
        <SubsystemComponent
            index="04"
            title="Tractive System"
            description="Converting electrical energy into motion is where theory meets asphalt. Our tractive system team manages everything from motor selection and inverter configuration to drivetrain integration and thermal management, working with high-performance electric motors and controllers to optimize torque delivery and efficiency across the entire operating range. Members gain deep experience with power electronics, motor control algorithms, cooling system design, and performance characterization through dynamometer testing."
            images={[PowertrainImages.TractiveSystem.VoltageTaps, PowertrainImages.TractiveSystem.BatteryTopBuild, PowertrainImages.TractiveSystem.Battery]} 
            layout={1}
        />
    </div>
  );
};

export default Powertrain;