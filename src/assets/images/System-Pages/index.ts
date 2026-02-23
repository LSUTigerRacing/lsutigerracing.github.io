// Chassis
import ChassisLanding from "./Chassis/Landing.jpg"

import CarryingFrame from "./Chassis/Frame/CarryingFrame.jpg"
import Frame from "./Chassis/Frame/Frame.jpg"
import Sanding from "./Chassis/Frame/Sanding.jpg"

import Caliper from "./Chassis/Brakes/brakes.jpg"

import Airshock from "./Chassis/Suspension/Airshock.jpg"
import WorkingOnAirshock from "./Chassis/Suspension/WorkingOnShock.jpg"

import HoldingWing from "./Chassis/Aerodynamics/HoldingWing.jpg"
import Backwing from "./Chassis/Aerodynamics/backwing.jpg"

import SandingErgo from "./Chassis/Ergonomics/sanding.jpg"
import Jig from "./Chassis/Ergonomics/Jig.jpg"


// Powertrain
import PowertrainLanding from "./Powertrain/Landing.jpg"

import PCB from "./Powertrain/Electronics/PCB.jpg"
import Soldering from "./Powertrain/Electronics/GuysWorking.jpg"

import VCU from "./Powertrain/LowVoltage/VCU.jpg"
import Wiring from "./Powertrain/LowVoltage/Wires.jpg"

import Modules from "./Powertrain/Battery/Modules.jpg"
import Yianni from "./Powertrain/Battery/Yianni.jpg"

import VoltageTaps from "./Powertrain/TractiveSystem/VoltageTaps.jpg"
import BatteryTopBuild from "./Powertrain/TractiveSystem/BatteryTopBuild.jpg"
import Battery from "./Powertrain/TractiveSystem/BatteryTop.jpg"

// Business
import Financial from "./Business/Financial.jpg"
import BASF from "./Business/BASFCheck.jpg"

// Public Relations
import PublicRelationsLanding from "./PublicRelations/mckenzie.jpg"
import Recording from "./PublicRelations/big-camera.jpg"
import Camera from "./PublicRelations/mckenzie.jpg"
import Concessions from "./PublicRelations/Concessions.jpg"
import Merch from "./PublicRelations/Merch.jpg"

// Software
import SoftwareLanding from "./Software/Landing.jpg"

import Cardin from "./Software/AppDev/cardin.jpg"

import SoftwareAurafarm from "./Software/Embedded/Aurafarm.jpg"
import DrakeLilYachty from "./Software/Embedded/drakelilyachty.jpg"

import Kyle from "./Software/DAQ/kyle.jpg"



export const ChassisImages = {
    Landing: ChassisLanding,
    Frame: {
        Frame,
        CarryingFrame,
        Sanding
    },
    Brakes: {
        Caliper
    },
    Suspension: { 
        Airshock,
        WorkingOnAirshock
    },
    Aerodynamics: {
        HoldingWing,
        Backwing
    },
    Ergonomics: {
        Jig,
        Sanding: SandingErgo
    }
};

export const PowertrainImages = {
    Landing: PowertrainLanding,
    Electronics: {
        PCB,
        Soldering,
    },

    Battery: {
        Modules,
        Yianni
    },
    TractiveSystem: {
        VoltageTaps,
        BatteryTopBuild,
        Battery
    },
    LowVoltage: {
        VCU,
        Wiring,
    }
}

export const BusinessImages = {
    Landing: Financial,
    Finance: {
        Financial
    },
    SponsorRelations: {
        BASF
    }
};

export const PublicRelationsImages = {
    Landing: PublicRelationsLanding,
    Marketing: {
        Recording,
        Camera
    },
    Fundraising: {
        Concessions,
        Merch
    }
};

export const SoftwareImages = {
    Landing: SoftwareLanding,
    AppDev: {
        Cardin
    },
    Embedded: {
        Aurafarm: SoftwareAurafarm,
        Drake: DrakeLilYachty
    },
    DAQ: {
        Kyle
    }
};