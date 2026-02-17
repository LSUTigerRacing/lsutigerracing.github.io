import { EVImages, ICImages, PreClubImages, LandingEVImages, LandingICImages } from "../assets/images/Cars";
import { OldTeamImages, Team2014, Team2015 } from "../assets/images/Team/OldTeamPhotos";

interface TeamLead {
    role: string;
    name: string;
    image?: any;
}

interface CarData {
    year: string;
    name: string;
    landingPhoto?: string; // car photo will be used as landing if not specified; check code in carpage.tsx if not working
    carPhoto: string;
    specs?: string[];
    performance?: string[][];
    teamPhoto?: string;
    teamLeads?: TeamLead[]; // for layout 3, use teamleads to show pictures of everyone
    teamMembers?: string[];
    layout? : number; // 1 is for lead portraits, 2 is for names only, 3 is for everyone has portraits
}

export const carsData: Record<string, CarData> = {
    "2024-2025": {
        year: "2024-2025",
        name: "Evonne",
        carPhoto: EVImages.y2025,
        specs: ["Power: 100 HP", "Motor: EMRAX 228 MV Axial Flux", "Motor Controller: DTI 500HV", "Max Voltage: 352V", "Max Current: 210A", "Tires: Hoosier R2O", "Wheels: 10 Keizer", "Data: AIM EVO5"],
        performance: [
            ["Results: Michigan", "Overall: 79th/80 (Tied)", "Endurance: DNA", "Acceleration: DNA", "Autocross: DNA", "Skidpad: DNA", "Design: 75th", "Business: 80th", "Cost: 71st"]
        ],   
        teamPhoto: OldTeamImages.y2025,
        teamLeads: [
            { role: "Team Captain", name: "David Kitching", image: null },
            { role: "President", name: "Andrew Nguyen", image: null },
            { role: "Vice President", name: "Sammy Ziegler", image: null },
            { role: "Treasurer", name: "Jack Quander", image: null },
            { role: "Chassis Lead", name: "Gareth Oram", image: null },
            { role: "Powertrain Lead", name: "Jadon Yeboah", image: null },
            { role: "Public Relations Manager", name: "Gregory Gilmore", image: null }                    
        ],
        teamMembers: [
            "Vinh Le", "Sammy Ziegler", "Mackenzie McLeod", "Thomas Au", "Mizuki Teruyama", "Tristan Thai", "Gavin Morris", "Evan Kerr", "Brady Vidrine", "Jadon Yeboah", "Andrew Nguyen", "Quentin Saba", "David Kitching", "Daniel Whitley", "Gareth Oram", "Ricky Liang", "Gregory Gilmore", "Luka Brekalo", "James Sirois", "Matthew Robert"
        ],
        layout: 2
    },
    "2023": {
        year: "2023",
        name: "Eve",
        carPhoto: EVImages.y2023,
        specs: ["Power: 100 HP", "Motor: EMRAX 228 MV Axial Flux", "Motor Controller: DTI 500HV", "Max Voltage: 352V", "Max Current: 210A", "Tires: Hoosier R2O", "Wheels: 10 Keizer", "Data: AIM EVO5"],
        performance: [
            ["Results: Michigan", "Overall: 50th/61", "Endurance: DNA", "Acceleration: DNA", "Autocross: DNA", "Skidpad: DNA", "Design: 54th (Tied)", "Business: 66th", "Cost: 17th"]
        ],
        teamPhoto: OldTeamImages.y2023,
        teamLeads: [
            { role: "Team Captain", name: "Holden David", image: null },
            { role: "President", name: "Evan Kerr", image: null },
            { role: "Vice President", name: "Jack Quander", image: null },
            { role: "Treasurer", name: "Colin Roberts", image: null },
            { role: "Chassis Lead", name: "Louis Thurmon", image: null },
            { role: "Powertrain Lead", name: "Thomas Rutter", image: null },
            { role: "Public Relations Manager", name: "Mia Arizmendi", image: null }                    
        ],
        teamMembers: [
            "Amer Algalban", "Mia Arizmendi", "Bryce Boada", "Faniw Boone", "Josh Brooks", "Victoria Byrd", "Timmy Capdeboscq", "Kevin Cruz", "Holden David", "Justin Fields"
        ],
        layout: 2
    },
    "2022": {
        year: "2022",
        name: "Justin",
        carPhoto: ICImages.y2022,
        specs: [
            "Weight: 427 lbs", "Wheelbase: 60.5 in", "Engine: Yamaha YZF-R6", "Power: 80 HP", "Torque: 43 lb/ft", "Tires: Hoosier LC0", "Wheels: 10” Keizer", "Data: AIM EVO5"
        ],
        performance: [
            ["Results: Michigan", "Overall: 7th/89", "Endurance: 13th", "Acceleration: 13th", "Autocross: 7th", "Fuel Efficiency: 20th", "Skidpad: 2nd", "Design: 27th", "Business: 36th", "Cost: 42nd"]
        ],
        teamPhoto: OldTeamImages.y2022,
        teamLeads: [
            { role: "Team Captain", name: "Josh Brooks", image: null },
            { role: "President", name: "Kevin Cruz", image: null },
            { role: "Vice President", name: "Holden David", image: null },
            { role: "Treasurer", name: "Colin Roberts", image: null },
            { role: "Chassis Lead", name: "Mason Pesson", image: null },
            { role: "Powertrain Lead", name: "Justin Fields / Thomas Rutter", image: null },
            { role: "Public Relations Manager", name: "Mia Arizmendi", image: null }                    
        ],
        teamMembers: [
            "Amer Algalban", "Mia Arizmendi", "Bryce Boada", "Faniw Boone", "Josh Brooks", "Victoria Byrd", "Timmy Capdeboscq", "Kevin Cruz", "Holden David", "Justin Fields", "Cade Giambrone", "Mikhalib Green", "Jacob Holt", "Evan Kerr", "David Kitching", "Jace Knott", "Paxton Longwell", "Nicholas Ormond", "Colin Roberts", "Thomas Rutter", "Waddih Sowma", "Louis Thurmon", "Jack Quander", "Cedric Witkowski"
        ],
        layout: 2
    },
    "2020-2021": {
        year: "2020-2021",
        name: "Chloe",
        landingPhoto: LandingICImages.Landing2021,
        carPhoto: ICImages.y2021,
        specs: [
            "Weight: 431 lbs", "Wheelbase: 60.5 in", "Engine: Yamaha YZF-R6", "Power: 84 WHP", "Torque: 43 lb/ft", "Tires: Hoosier LC0", "Wheels: 10” Keizer", "Data: AIM EVO5"
        ],
        performance: [
            ["Results: Michigan", "Overall: 10th/50", "Endurance: 11th", "Acceleration: 14th", "Autocross: 15th", "Fuel Efficiency: 9th", "Skidpad: 11th", "Design: 54th", "Business: 93rd", "Cost: 98th"]
        ],
        teamPhoto: OldTeamImages.y2021,
        teamLeads: [
            { role: "Team Captain", name: "Douglas Byrd", image: null },
            { role: "President", name: "Waddih Sowma", image: null },
            { role: "Vice President", name: "Lauren Bergeron", image: null },
            { role: "Treasurer", name: "Kevin Cruz", image: null },
            { role: "Chassis Lead", name: "Josh Brooks", image: null },
            { role: "Powertrain Lead", name: "Justin Fields", image: null },
            { role: "Public Relations Manager", name: "Jenny Deicaza", image: null }                    
        ],
        teamMembers: [
            "Amer Algalban", "Arturo Altamirano", "Mia Arizmendi", "Lauren bergeron", "Faniw Boone", "Josh Brooks", "Douglas Byrd", "Victoria Byrd", "Rafael Campos", "Kevin Cruz", "Holden David", "Jenny Deicaza", "Anna Deshotels", "Matt Ducrest", "Justin Fields", "David Kitching", "Paxton Longwell", "Nicholas Ormond", "Mason Pesson", "Trey Petitjean", "Colin Roberts", "Thomas Rutter", "Robert Sciambra", "Waddih Sowma", "Dylan Stephens", "Cedric Witkowski"
        ],
        layout: 2
    },
    "2019": {
        year: "2019",
        name: "Julia",
        landingPhoto: LandingICImages.Landing2019,
        carPhoto: ICImages.y2019,
        specs: [
            "Weight: 421 lbs", "Wheelbase: 60.5 in", "Engine: Yamaha YZF-R6", "Power: 84 WHP", "Torque: 43 lb/ft", "Tires: Hoosier LC0", "Wheels: 10” Carbon", "Data: AIM EVO5"
        ],
        performance: [
            ["Results: Michigan", "Overall: 29th/108", "Endurance: 10th", "Acceleration: 24th", "Autocross: 19th", "Skidpad: 39th", "Business: 62nd", "Design: 79th (tie)", "Cost: 74th", "Points: 520.6/1000"]
        ],
        teamPhoto: OldTeamImages.y2019,
        teamLeads: [
            { role: "Team Captain", name: "Eric Murrell", image: null },
            { role: "President", name: "Alyssa Hermesch", image: null },
            { role: "Treasurer", name: "Tyler Blank", image: null },
            { role: "Chassis Lead", name: "Branson Leonard", image: null },
            { role: "Powertrain Lead", name: "Eddie Veal", image: null },
        ],
        teamMembers: [
            "Connor Laiche", "Ryan Miller", "Zac Fontenot", "Joshua Fisher", "Collin Jenkins", "Dylan Stephens", "Beltran Urbina", "Jay Pertuit", "Gavin Sheng", "Robert Fields", "Juan Aponte", "Eddie Veal", "Curtis Zuckerman", "Sebastian Valero", "Benjamin Jahnke", "Harrison Longwell", "Branson Leonard", "Jonathon Sebold", "Jacob Veillon", "Alyssa Hermesch", "Josh Brooks", "Spencer Hollander", "Kelvin Nguyen", "Tyler Blank", "Waddih Sowma", "Jacob Pardue", "Trey Petitjean", "Douglas Byrd", "​Tyler Brasseaux", "Ryan Deshotel", "Randy Wells", "Brett Rens", "Van Le", "Aaron Zambiasi", "Matthew Schinsheck", "Eric Murell", "Finn McCarthy", "Holden David"
        ],
        layout: 2
    },
    "2018": {
        year: "2018",
        name: "Anna",
        landingPhoto: LandingICImages.Landing2018,
        carPhoto: ICImages.y2018,
        specs: [
            "Weight: 412 lbs", "Wheelbase: 63 in", "Engine: Yamaha YZF-R6", "Power: 84 WHP", "Torque: 44 lb/ft", "Tires: Hoosier R25B", "Wheels: 10” Blackwave", "Data: AIM EVO5"
        ],
        performance: [
            ["Results: Michigan", "Overall: 28th/136", "Endurance: DNF", "Fuel Efficiency: 37th", "Autocross: 20th", "Skidpad: 49th", "Acceleration: 5th", "Design: 17th", "Business: 7th", "Cost: 76th", "Points: 456.5/1000"],
            ["Results: Lincoln", "Overall: 20th/111", "Endurance: DNF", "Fuel Efficiency: DNF", "Autocross: 6th", "Skidpad: 4th", "Acceleration: 5th", "Design: 11th", "Business: 4th", "Cost: 20th", "Points: 496.1/1000"]
        ],
        teamPhoto: OldTeamImages.y2018,
        teamLeads: [
            { role: "Team Captain", name: "John Bryan", image: null },
            { role: "President", name: "Alyssa Hermesch", image: null },
            { role: "Vice President", name: "Eddie Veal", image: null },
            { role: "Treasurer", name: "Elisabeth Andries", image: null },
            { role: "Powertrain Lead", name: "Jay Pertuit", image: null },
            { role: "Chassis Lead", name: "Kevin Murrell", image: null },
            { role: "Administrative Director", name: "Van Le", image: null },
        ],
        teamMembers: [
            "Jared Aguillard", "Nasser Alhosin", "Elisabeth Andries", "Oyowoli Atakere", "Ernie Babin", "Lance Beddingfield", "Tyler Blank", "Gage Boullion", "Tyler Brasseaux", "Spencer Brewer", "Josh Brooks", "John Bryan", "Anthony Centanni", "Ryan Deshotels", "Christopher Dewey", "Christopher Foster", "Clare Hamilton", "Alyssa Hermesch", "Ben Jahnke", "Connor Laiche", "Van Le", "Forrest Lee", "Branson Leonard", "Dylan Macon", "Geza Maruschak", "Shrey Mishra", "Eric Murrell", "Kevin Murrell", "Robert Niwa", "Jay Pertuit", "Trey Petitjean", "Calvin Pham", "Kyle Pizzuto", "Timothy Poche", "Stephen Satterlee", "Charles Schaub", "Jonathan Sebold", "Waddih Sowma", "Jack Thibodeaux", "Steven Thrift", "Shane Toomey", "Sebastian Valero", "Eddie Veal"
        ],
        layout: 2
    },
    "2017": {
        year: "2017",
        name: "Sierra",
        landingPhoto: LandingICImages.Landing2017,
        carPhoto: ICImages.y2017,
        specs: [
            "Weight: 461 lbs", "Wheelbase: 63 in", "Engine: Honda CBR 600 F4i", "Power: 73 WHP", "Torque: 38 lb/ft", "Tires: Hoosier R25B", "Wheels: 13 \" OZ Magnesium", "Data: AIM EVO4"
        ],
        performance: [
            ["Results: Michigan", "Overall: 27th/128", "Endurance: 23rd", "Fuel Efficiency: 47th", "Autocross: 52nd", "Skidpad: 38th", "Acceleration: 39th", "Design: 18th", "Business: 24th", "Cost: 48th", "Points: 547.2/1000​​"],
            ["Results: Lincoln", "Overall: 12th/110", "Endurance: 12th", "Fuel Efficiency: 23rd", "Autocross: 22nd", "Skidpad: 26th", "Acceleration: 18th", "Design: 16th", "Business: 13th", "Cost: 39th", "Points: 653.0/1000​"]
        ],
        teamPhoto: OldTeamImages.y2017,
        teamLeads: [
            { role: "Team Captain", name: "Kyle Lambert", image: null },
            { role: "President", name: "Van Le", image: null },
            { role: "Vice President", name: "Eric Murrell", image: null },
            { role: "Treasurer", name: "Alyssa Hermesch", image: null },
            { role: "Powertrain Lead", name: "Kevin Murrell", image: null },
            { role: "Chassis Lead", name: "John Bryan", image: null },
            { role: "Administrative Director", name: "Logan Miller", image: null },
        ],
        teamMembers: [
            "Jared Aguillard", "Nasser Alhosani", "Elisabeth Andries", "Ernie Babin", "Benny Boudreaux", "Tyler Brasseaux", "John Bryan", "Kevin Castrinos", "​Ryan Deshotels", "Christopher Dewey", "Alyssa Hermesch", "Kyle Lambert", "Van Le", "Forrest Lee", "Branson Leonard", "Dylan Macon", "Logan Miller", "Eric Murrell", "Kevin Murrell", "Josh Perkins", "Jay Pertuit", "Trey Petitjean", "Tim Poche", "Jonathan Sebold", "Greg Talmage", "Sebastian Valero", "Eddie Veal", "Jacob Veillon"
        ],
        layout: 2
    },
    "2016": {
        year: "2016",
        name: "Kyra",
        landingPhoto: LandingICImages.Landing2016,
        carPhoto: ICImages.y2016,
        specs: [
            "Weight: 445 lbs", "Wheelbase: 62.5 in", "Engine: Honda CBR 600 F4i", "Power: 65 WHP", "Torque: 42 lb/ft", "Tires: Hoosier", "Wheels: 13\" OZ Magnesium", "Data: PE3 ECU, AIM EVO4 & G-Dash"
        ],
        performance: [
            ["Results: Michigan", "Overall: 29th/138", "Endurance: 10th", "Fuel Efficiency: 53rd", "Autocross: 55th", "Skidpad: 31st", "Acceleration: 35th", "Design: 39th", "Business: 17th", "Cost: 25th", "Points: 570.1/1000​"],
            ["Results: Lincoln", "Overall: 53rd/102", "Endurance: 58th", "Fuel Efficiency: DNS", "Autocross: DNS", "Skidpad: DNS", "Acceleration: DNS", "Design: 32nd", "Business: 13th", "Cost: 58th", "Points: 177.5/1000​"]
        ],
        teamPhoto: OldTeamImages.y2016,
        teamLeads: [
            { role: "Team Captain", name: "Connor Albrecht", image: null },
            { role: "President", name: "Eric Rohli", image: null },
            { role: "Treasurer", name: "Van Le", image: null },
            { role: "Powertrain Lead", name: "Eric Murrell", image: null },
            { role: "Chassis Lead", name: "Kody Deslatte", image: null },
        ],
        teamMembers: [
            "Ernie Babin", "Benny Boudreaux", "Tyler Brasseaux", "John Bryan", "Saif Bukhari", "Joey Fawad", "Tommy Harrington", "Alyssa Hermesch", "Kyle Lambert", "Van Le", "Forrest Lee", "Branson Leonard", "Brett Lewis", "​Logan Miller", "Leslie Morgan", "Matthew Moses", "Kevin Murrell", "​Don Rogers", "Eric Rohli", "Alex Rome", "Josh Perkins", "​Jay Pertuit", "Sebastian Valero", "Eddie Veal", "​Alex Wray"
        ],
        layout: 2
    },
    "2015": {
        year: "2015",
        name: "Chelsea",
        landingPhoto: LandingICImages.Landing2015,
        carPhoto: ICImages.y2015,
        specs: [
            "Weight: 461 lbs", "Wheelbase: 60.5 in", "Engine: Honda CBR 600 F4i", "Power: 67 WHP", "Torque: 31 lb/ft", "Tires: Hoosier", "Wheels: 13\" OZ Magnesium", "Data: PE3 ECU, AIM EVO4 & G-Dash"
        ],
        performance: [
            ["Results: Michigan", "Overall: 22nd/119", "Endurance: 19th", "Fuel Efficiency: 26th", "Autocross: 33rd", "Skidpad: 21st", "Acceleration: 27th", "Design: 68th", "Business: 57th", "Cost: 62nd", "Points: 572.5/1000"],
            ["Results: Lincoln", "Overall: 9th/80", "Endurance: 9th", "Fuel Efficiency: 15th", "Autocross: 24th", "Skidpad: 18th", "Acceleration: 29th", "Design: 26th", "Business: 24th", "Cost: 29th", "Points: 660.7/1000"]
        ],
        teamLeads: [ // this is ordered the same way as the old website; dont touch
            { role: "Team Captain", name: "Joe Hollier", image: Team2015.JoeHollier},
            { role: "Powertrain Lead", name: "Joe Kenney", image: Team2015.JoeKenney },
            { role: "President", name: "Alex Rome", image: Team2015.AlexRome },
            { role: "Chassis Lead", name: "Connor Albercht", image: Team2015.ConnorAlbrecht },
            { role: "Treasurer", name: "Eric Rohli", image: Team2015.EricRohli },
            { role: "Vice President", name: "Jacob Danos", image: Team2015.JacobDanos },
            { role: "Brakes Lead", name: "Kody Deslatte", image: Team2015.KodyDeslatte },
            { role: "Electronics Lead", name: "Tommy Harrington", image: Team2015.TommyHarrington },
            { role: "Kinematics Lead", name: "Saif Bukhari", image: Team2015.SaifBukhari },
            { role: "Body and Aerodynamics Lead", name: "Kyle Lambert", image: Team2015.KyleLambert },
            { role: "Brake Team", name: "Eric Murrell", image: Team2015.EricMurrell },
            { role: "Exhaust Lead", name: "Kevin Murrell", image: Team2015.KevinMurrell },
            { role: "Public Relations", name: "Leslie Morgan", image: Team2015.LeslieMorgan },
            { role: "", name: "Forrest Lee", image: Team2015.ForrestLee },
            { role: "Engine Lead", name: "Van Le", image: Team2015.VanLe },
            { role: "Manufacturing", name: "Ernie Babin", image: Team2015.ErnieBabin },
            { role: "", name: "Kelsey Rodriguez", image: Team2015.KelseyRodriguez },
            { role: "", name: "Preston Cothren", image: Team2015.PrestonCothren },
            { role: "Oil", name: "John Bryan", image: Team2015.JohnBryan },
            { role: "", name: "Jay Pertuit", image: Team2015.JayPertuit },
            { role: "Oil", name: "Zack Farque", image: Team2015.ZackFarque },
            { role: "", name: "Cedric Boudreaux", image: Team2015.CedricBoudreaux },
            { role: "", name: "Brandon Campo", image: Team2015.BrandonCampo },
            { role: "", name: "Pawan Sharma", image: Team2015.PawanSharma },
            { role: "", name: "Jude Canady", image: Team2015.JudeCanady },            
        ],
        layout: 3
    },
    "2014": {
        year: "2014",
        name: "Emily",
        landingPhoto: LandingICImages.Landing2014,
        carPhoto: ICImages.y2014,
        specs: [
            "Weight: 499 lbs", "Wheelbase: 61 in", "Engine: K6 Suzuki G5XR", "Power: 66 WHP", "Torque: 25 lb/ft", "Tires: Hoosier 13\"", "Wheels: Keizer Mag/Aluminum", "Data: PE3 ECU, AIM EVO4 & G-Dash"
        ],
        performance: [
            ["Results: Michigan", "Overall: 40th/120", "Endurance: 35th", "Fuel Efficiency: 37th", "Skidpad: 44th", "Autocross: 51st", "Acceleration: 42nd", "Design: 38th", "Business: 22nd", "Cost: 72nd", "Points: 409.7/1000"],
            ["Results: Lincoln", "Overall: 42nd/80", "Endurance: DNF (6/14 Laps)", "Skidpad: 21st", "Autocross: 38th", "Acceleration: 19th", "Design: 47th", "Business: 36th", "Cost: 43rd", "Points: 351/1000"]
        ],
        teamLeads: [ // this is ordered the same way as the old website; dont touch
            { role: "", name: "Graham Lewis", image: Team2014.GrahamLewis },
            { role: "", name: "Simon Shirazi", image: Team2014.SimonShirazi },
            { role: "", name: "Matthew Richards", image: Team2014.MatthewRichards },
            { role: "", name: "Frank Duvic", image: Team2014.FrankDuvic },
            { role: "", name: "Austin Hall", image: Team2014.AustinHall },
            { role: "", name: "Matt Mabile", image: Team2014.MattMabile },
            { role: "", name: "Luke Dodge", image: Team2014.LukeDodge },
            { role: "", name: "Steven Rougeau", image: Team2014.StevenRougeau },
            { role: "", name: "Will Koederitz", image: Team2014.WillKoederitz },
            { role: "", name: "Joe Hollier", image: Team2014.JoeHollier },
            { role: "", name: "Alex Rome", image: Team2014.AlexRome },
            { role: "", name: "Ryan Kinler", image: Team2014.RyanKinler },
            { role: "", name: "Connor Albrecht", image: Team2014.ConnorAlbrecht },
            { role: "", name: "Tonny Harrington", image: Team2014.TommyHarrington },
            { role: "", name: "Kody Deslatte", image: Team2014.KodyDeslatte },
            { role: "", name: "Joe Kenney", image: Team2014.JoeKenney },
            { role: "", name: "Saif Bukhari", image: Team2014.SaifBukhari },
            { role: "", name: "Travis Bourg", image: Team2014.TravisBourg },
            { role: "", name: "Joey Fawad", image: Team2014.JoeyFawad },
            { role: "", name: "Kevin Murrell", image: Team2014.KevinMurrell },
            { role: "", name: "Rebecca Fitzgerald", image: Team2014.RebeccaFitzgerald },
            { role: "", name: "Eric Murrell", image: Team2014.EricMurrell },
            { role: "", name: "Forrest Lee", image: Team2014.ForrestLee },
            { role: "", name: "Eric Rohli", image: Team2014.EricRohli },
            { role: "", name: "Blake Gaspard", image: Team2014.BlakeGaspard },
            { role: "", name: "John Darbone", image: Team2014.JohnDarbone },
            { role: "", name: "Travis Odom", image: Team2014.TravisOdom },
        ],
        layout: 3
    },
    "2013": {
        year: "2013",
        name: "Carly Rae",
        landingPhoto: LandingICImages.Landing2013,
        carPhoto: ICImages.y2013,
        specs: [
            "Weight: 514 lbs", "Wheelbase: 64 in", "Engine: K6 Suzuki G5XR", "Power: 65 WHP", "Torque: 25 lb/ft", "Tires: Hoosier 13\"", "Wheels: Keizer Mag/Alumnimum", "Data: PE3 ECU, AIM EVO4 & G-Dash"
        ],
        performance: [
            ["Results: Michigan", "Overall: 73rd/120", "Endurance: DNF", "Autocross: 46th", "Skidpad: 49th", "Acceleration: 43rd", "Design: 63rd", "Business: 103rd", "Cost: 103rd", "Points: 240.3/1000"]
        ],
        teamPhoto: OldTeamImages.y2013,
        teamLeads : [{ role: "", name: ""}],
        teamMembers: [
            "Luke Dodge", "Frank Duvic", "Joe Hollier", "Simon Shirazi", "Kody Deslatte"
        ],
    },
    "2012": {
        year: "2012",
        name: "⠀",
        carPhoto: PreClubImages.y2012,
        specs: [
            "Weight: 550 lbs", "Engine: Suzuki K5 GSXR600"
        ],
        performance: [
            ["Results: Michigan", "Overall: 104th/120", "Endurance: DNF", "Autocross: 55th", "Skidpad: DNF", "Acceleration: DNF", "Design: 102nd", "Business: 103rd", "Cost: 103rd", "Points: 35.7/1000"]
        ]
    },
    "2011": {
        year: "2011",
        name: "⠀",
        carPhoto: PreClubImages.y2011,
        specs: [
            "Weight: 525 lbs", "Engine: Suzuki K5 GSXR600"
        ],
        performance: [
            ["Results: Michigan", "Overall: 95th/121", "Endurance: DNF", "Autocross: 57th", "Skidpad: DNF", "Acceleration: DNF", "Design: 67th", "Business: DNF", "Cost: 84th", "Points: 125.9/1000"]
        ]
    },
    "2009": {
        year: "2009",
        name: "⠀",
        carPhoto: PreClubImages.y2009,
        specs: [
            "Weight: 400 lbs", "Engine: Yamaha YFZ450"
        ],
        performance: [
            ["Results: Michigan", "Overall: 83rd/122", "Endurance: DNF", "Autocross: DNF", "Skidpad: DNF", "Acceleration: DNF", "Design: 1 pt", "Business: 36.8 pts", "Cost: 71.9 pts", "Points: 109.7/1000"]
        ],
        teamPhoto: OldTeamImages.y2009
    },
    "2007-2008": {
        year: "2007-2008",
        name: "⠀",
        carPhoto: PreClubImages.y200708,
        specs: [
            "2007 Engine: Yamaha YFZ450", "2008 Engine: Yamaha YFZ450"
        ],
        performance: [
            ["2007 Cars", "Results: Michigan", "Overall: 59th/106", "Endurance: DNF", "Autocross: 65th", "Skidpad: 35th", "Acceleration: 57th", "Design: 38th", "Business: 55th", "Cost: 56th", "Points: 321.47/1000"],
            ["2008 Car", "Results: Michigan", "Overall: 90th/121", "Endurance: DNF", "Autocross: 74th", "Skidpad: DNA", "Acceleration: DNA", "Design: 61st", "Business: 85th", "Cost: 86th", "Points: 181.4/1000"]
        ]

    },
    "2006": {
        year: "2006",
        name: "⠀",
        carPhoto: PreClubImages.y2006,
        specs: [
            "Weight: 560 lbs", "Engine: Honda CBR F4i"
        ],
        performance: [
            ["Results: Michigan", "Overall: 57th/126", "Endurance: 43rd", "Autocross: 57th", "Skidpad: 40th", "Acceleration: 71st", "Design: 73rd", "Business: 65th", "Cost: 101st", "Points: 317.2/1000"]
        ]
    },
    "1993": {
        year: "1993",
        name: "⠀",
        carPhoto: PreClubImages.y1993,
    },
    "1983": {
        year: "1983",
        name: "⠀",
        carPhoto: PreClubImages.y1983,
        performance: [
            ["Results: UT Arlington Autocross Shootout", "Overall: 4th"]
        ]
    }
}