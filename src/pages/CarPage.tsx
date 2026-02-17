import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { Navigate, useParams } from "react-router-dom"
import { carsData } from "./carData"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const CarPage = () => {
    const { year } = useParams<{ year: string }>();
	const carData = carsData[year || ''];
	
	if (!carData) {
		return <Navigate to="/cars" replace />;
	}

	useGSAP(() => {
		gsap.from("#landing-text", {
			opacity:0,
			y: -40,
			ease: "power1.out",
			duration: 0.4
		})
		gsap.from("#stats", {
			clipPath: "inset(100% 0 0 0)",
			ease: "power1.out",
			duration: 0.5,
			delay: 0.2
		})
	})

	return (
		<div className="w-full background bg-white!">
			<div className="car-single-landing">
				<img src={carData.landingPhoto || carData.carPhoto} alt={`${year} car`} />
				<div className="car-overlay">
					<div className="car-page-landing-content">
						<span className="mb-16" id="landing-text">
							<p className="text-[1.4rem]!">{carData.name}</p>
							<h2 className="leading-12">{year}</h2>
						</span>
						<div className="car-page-stats" id="stats">
							<h2 className="mb-4">Stats</h2>
							{carData.specs?.map((content, idx) => (
								<p className="mb-1">{content}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		
			<div className= {`${carData.performance ? "" : "hidden"} w-full background`}>
				<div className="w-[var(--default-width)] py-16 mx-auto">
					<h2>Performance</h2>
					<div className="car-page-performance-container">
						{carData.performance?.map((statistic, idx) => (
							<div className="flex-1 bg-white p-8 mt-8 text-black">
								<h2 className="mb-4">{statistic[0]}</h2>
								<h3>{statistic[1]}</h3>
								{statistic.slice(2).map((stat, statIdx) => (
									<p>{stat}</p>
								))}
							</div>
						))}
					</div>
				</div>
			</div>

			<img className={`${carData.teamPhoto? "" : "hidden"} car-page-team-photo`} src={carData.teamPhoto}/>
			
			{/* LAYOUT 2 team leads */}
			<div className={`${(carData.layout === 2) ? "" : "hidden"}`}>
				<h3 className='text-black text-center mt-16'>Team Leads</h3>

				<div className={`${carData.teamLeads? "" : "hidden"} w-[80%] ml-[15vw] max-[800px]:ml-[12.5vw] max-[800px]:ml-[10vw] my-8 grid grid-cols-3 justify-between`}
				>
					{carData.teamLeads?.map((member, idx) => (
						<div key={idx} className="w-full text-black mb-4">
							<h3 className='text-[1.6rem]! mb-1'>{member.role}</h3>
							<p className='text-[1.3rem]!'>{member.name}</p>
						</div>
					))}
				</div>
			</div>

			{/* LAYOUT 3 team leads*/}

			<div className={`${(carData.layout === 3) ? "" : "hidden"}`}>
				<div className={`w-[var(--default-width)] mx-auto my-8 text-black text-center`}>
					<h2>The Team</h2>
					<div className={`${(carData.layout === 3) ? "" : "hidden"} ${carData.teamLeads? "" : "hidden"} ${year === "2014" ? "car-page-2014-team": "car-page-2015-team"} my-8`}>
						{carData.teamLeads?.map((member, idx) => (
							<div key={idx} className='w-full h-fit'>
								<img
									src={member.image}
									className="w-full h-full object-cover"
								/>
								<h3 className="text-black text-[1.3rem] text-center">{member.name}{member.role ? `,` : ""} {member.role}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={`${carData.teamMembers ? "" : "hidden"} white-line`}/>
			
			<div className={`${carData.teamMembers ? "" : "hidden"} w-[80%] mx-auto`}>
				<h3 className='text-black text-center mt-16 mb-8'>Team Members</h3>
				<div className={`mb-16 grid grid-cols-3 max-[600px]:grid-cols-2 justify-between`}>
					{carData.teamMembers?.map((member, idx) => (
						<div className="w-full text-center " key={idx}>
							<p className="text-black text-[1.3rem]">{member}</p>
						</div>
					))}
				</div>
			</div>
		</div>

    )
}

export default CarPage