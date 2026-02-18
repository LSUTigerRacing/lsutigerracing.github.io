// Chassis
import ChassisLanding from "./Chassis/Landing.png"

import CarryingFrame from "./Chassis/Frame/CarryingFrame.png"
import Frame from "./Chassis/Frame/Frame.png"
import Sanding from "./Chassis/Frame/Sanding.png"

import Caliper from "./Chassis/Brakes/brakes.png"

import Airshock from "./Chassis/Suspension/Airshock.png"
import WorkingOnAirshock from "./Chassis/Suspension/WorkingOnShock.png"

import HoldingWing from "./Chassis/Aerodynamics/HoldingWing.png"
import Backwing from "./Chassis/Aerodynamics/backwing.png"

// Powertrain
import PowertrainLanding from "./Powertrain/Landing.jpg"

import PCB from "./Powertrain/Electronics/PCB.png"
import Soldering from "./Powertrain/Electronics/GuysWorking.jpg"

import VCU from "./Powertrain/LowVoltage/VCU.png"
import Wiring from "./Powertrain/LowVoltage/Wires.png"

import Modules from "./Powertrain/Battery/Modules.jpg"
import Yianni from "./Powertrain/Battery/Yianni.jpg"

import VoltageTaps from "./Powertrain/TractiveSystem/VoltageTaps.jpg"
import BatteryTopBuild from "./Powertrain/TractiveSystem/BatteryTopBuild.jpg"
import Battery from "./Powertrain/TractiveSystem/BatteryTop.jpg"

// Business
import Financial from "./Business/Financial.png"
import BASF from "./Business/BASFCheck.png"

// Public Relations
import PublicRelationsLanding from "./PublicRelations/mckenzie.jpg"
import Recording from "./PublicRelations/big-camera.jpg"
import Camera from "./PublicRelations/mckenzie.jpg"
import Concessions from "./PublicRelations/Concessions.png"
import Merch from "./PublicRelations/Merch.jpg"

// Software

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

};