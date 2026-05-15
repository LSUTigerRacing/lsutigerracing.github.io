import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { horizontalLoop } from "../helpers/horizontalLoop";

import { SEO } from "../components/SEO.tsx"

import Collage_1 from "../assets/images/Join/Collage_1.png";
import Collage_2 from "../assets/images/Join/Collage_2.png";
import Collage_3 from "../assets/images/Join/Collage_3.png";

import { CollageLoop } from "../assets/images/Join";

import Right_Arrow from "../assets/images/Join/join-right-arrow.png"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Join = () => {
    const landingRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        tl.current = gsap
            .timeline()
            .from("#join-landing-phrase", {
                opacity: 0,
                y: -25,
                delay: 0.3,
                duration: 0.6,
                ease: "power1.out",})
            .from(".yellow-button", {
                opacity: 0,
                y: -25,
                duration: 0.6,
                ease: "power1.out",
        }, "<0.35")
    }, {scope: landingRef})

    useGSAP(() => {
		gsap.from(".collage-item", {
			clipPath: " inset(0 0 100% 0)",
			duration: 0.8,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".join-blurb-collage",
				start: "top center",
				// markers: true
			}
		})

        const logos = gsap.utils.toArray<HTMLElement>('.join-loop-img');

		const loop = horizontalLoop(logos, {
			repeat: -1,
			speed: 0.8,
			paused: false,
			dragToScroll: true,
			invalidateOnRefresh: true,
			paddingRight: 30
		});
        
        gsap.from(".join-systems-box", {
            opacity: 0,
            y: 100,
            duration: 0.8,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".systems-container",
				start: "top center",
				// markers: true
			}
		})
    }, [])

  return (
    <div className="w-full background text-black! bg-white!">
        {/* <SEO
            title="TigerRacing | Join Us"
            description="We welcome LSU students of all majors and experience levels who share our passion for pushing the boundaries of electric vehicle technology. Whether you're a freshman with zero experience or a senior looking to apply your knowledge, there's a place for you on our team."
            url="https://www.formulalsu.org/join"
        /> */}

        <section className="purple-landing flex-col! justify-normal! gap-8" ref={landingRef}>
            <div className="max-w-[80%] max-[475px]:max-w-[var(--default-width)] text-center mx-auto" id="join-landing-phrase">
                <h2>Join one of LSU’s oldest and largest engineering organizations.</h2>
                <h3>All Majors Welcome!</h3>
            </div>

            <div className="yellow-button text-black mx-auto">
                <a 
                    href="https://forms.gle/CyRrWsUusvVLZGCeA"
                    target="_blank"
                >
                    <h3>Interest Form</h3>
                </a>
            </div>
        </section>
        
        <section className="join-blurb-section">
            <div className="join-blurb-content">
                <h2 className="seperator-bottom-sm">Why Join?</h2>
                <p>We welcome LSU students of all majors and experience levels who share our passion for pushing the boundaries of electric vehicle technology. Whether you're a freshman with zero experience or a senior looking to apply your knowledge, there's a place for you on our team.
                <br/><br/>
                FSAE offers hands-on experience you simply can't get in the classroom. You'll gain practical skills in areas like <strong>PCB design </strong>that aren't part of LSU's standard curriculum but are highly valued skills in the industry. From <strong>CAD modeling and finite element analysis </strong>to battery management systems and motor controller programming, you'll work with the same tools and technologies used by leading companies like Tesla, Rivian, and Formula 1 teams.
                <br/><br/>

                Our alumni have gone on to positions at top engineering firms, and <strong>recruiters actively seek out FSAE members</strong> for their proven ability to deliver real results under pressure. 
                <br/><br/>
                </p>
            </div>
            <div className="join-blurb-collage">
                <div className="flex-1 flex flex-col gap-5">
                    <img
                        src={Collage_3}
                        className="collage-item object-cover flex-1" // collage-item is a class used for only gsap anims
                    />
                    <img
                        src={Collage_2}
                        className="collage-item object-cover flex-1"
                    />
                </div>
                <img
                    src={Collage_1}
                    className="collage-item w-[50%] object-cover flex-1"
                />
            </div>
        </section>
        <div className="white-line mt-20 mb-6"/>
        <div className='join-loop-bar-container'>
            <div className='join-loop-bar'>
                <div className='join-loop-img'><img src={CollageLoop.Collage4}/></div>
                <div className='join-loop-img'><img src={CollageLoop.Collage2}/></div>
                <div className='join-loop-img'><img src={CollageLoop.Collage9}/></div>
                <div className='join-loop-img'><img src={CollageLoop.Collage11}/></div>
                <div className='join-loop-img'><img src={CollageLoop.Collage1}/></div>
                <div className='join-loop-img'><img src={CollageLoop.Collage8}/></div>
                <div className='join-loop-img'><img src={CollageLoop.Collage6}/></div>

                <div className='join-loop-img'><img src={CollageLoop.Collage5}/></div>
                <div className='join-loop-img'><img src={CollageLoop.Collage10}/></div>
            </div>
        </div>

        <div className="white-line mt-6 mb-20"/>
        <section className="w-[90%] mx-auto pb-10">
            <h2 className="mb-6">Our Systems</h2>

            <div className="systems-container">
                <SystemBox
                    to="/join/chassis"
                    title="Chassis"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />
                <SystemBox
                    to="/join/powertrain"
                    title="Powertrain"
                    description="Our powertrain system handles everything electrical, from battery packs and motor controllers to custom PCBs and wiring harnesses. If you're drawn to high-voltage systems, power electronics, or bringing electric vehicles to life, Powertrain is your home."
                />
                <SystemBox
                    to="/join/business"
                    title="Business"
                    description="Our business system manages the financial strategy and sponsor relationships that fund our racing program. If you're interested in budgeting, procurement, partnership development, or the business side of engineering teams, Business is your place."
                />
                <SystemBox
                    to="/join/software"
                    title="Software"
                    description="Our software system develops the code that runs our car and powers our operations, from embedded firmware to data analysis tools. If you're passionate about programming, real-time systems, or turning data into performance gains, Software is your team."
                />
                <SystemBox
                    to="/join/public-relations"
                    title="Public Relations"
                    description="Our public relations system builds our brand and community through marketing campaigns and fundraising initiatives. If you enjoy content creation, event planning, social media strategy, or connecting people to our mission, Public Relations is for you."
                />
            </div>
        </section>
        {/* <section className="background">
            <h2>How do I Join?</h2>
            <section className="w-[80%] flex mx-auto justify-between gap-16">
                <div className="flex-1 flex items-center justify-start gap-8">
                    <h2>1</h2>
                    <p>Sign up on the interest form!</p>
                </div>
                <div className="flex-1 flex flex-col">
                    <img
                        src={Collage_1}
                    />
                <div className="flex-1 flex items-center justify-start gap-6">
                    <h2>2</h2>
                    <p>Follow us on Instagram!</p>
                </div>
                <div className="flex-1 flex flex-col">
                    <img
                        src={Collage_1}
                    />
                    <div className="flex items-center justify-start gap-6">
                        <h2>3</h2>
                        <p>Show up to a meeting! (Check IG)</p>
                    </div>
                </div>

            </section>

        </section> */}
    </div>
  );
};

export default Join;


const SystemBox = ( props: { to: string; title: string; description: string; } ) => {
    const {
        to,
        title,
        description,
    } = props;
    return (
        <div className="join-systems-box">
            <h2 className="mb-[2%] text-[var(--standard-purple)]">{title}</h2>
            <p className="mb-[2%] whitespace-pre-line">{description}</p>
            <Link 
                to={to}
                className="flex items-center justify-end gap-1"
            >
                <h3>See More</h3>
                <img
                    src={Right_Arrow}
                />
            </Link>
        </div>
    )
}