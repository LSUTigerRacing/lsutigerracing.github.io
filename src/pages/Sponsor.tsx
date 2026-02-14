import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import Landing from "../assets/images/Sponsor/Landing.png";
import WhyPartner from "../assets/images/Sponsor/WhyPartner.png";

import { ICImages } from "../assets/images/Cars/"
import { SponsorIcons } from '../assets/images/Sponsor/Icons';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
    useGSAP(() => {
        gsap.from("#landing-title", {
            opacity:0,
            y: -20,
            ease: "power1.out",
            duration: 0.8
        })
        gsap.from("#landing-blurb", {
            opacity:0,
            y: 20,
            ease: "power1.out",
            duration: 0.6,
            delay: 0.4
        })
        gsap.from("#landing-img", {
            clipPath: "inset(100% 0 0 0)",
			ease: "power1.out",
            duration: 0.7,
            delay: 0.7
        })
	})

    return (
    <div className="w-full background">
        <section className="white-landing">
            <div className="white-landing-content">
                <div id="landing-title">
                    <h2>Keep our engines roaring.*</h2>
                    <h4>*and our batteries whirring.</h4>
                </div>

                <p id="landing-blurb">
                    The LSU TigerRacing team sincerely thanks all of our generous sponsors. We could not build our electric vehicles, maintain our combustion cars, and thrive as one of LSU's premiere engineering organizations without the help of our sponsors. 
                    <br/> <br/> 
                    If you are interested in becoming a TigerRacing sponsor, please look at our sponsorship packet linked below and contact our team at 
                    <br/> <br/>
                    Your support makes a real difference to our team.
                </p>

                <div className="default-vis yellow-button white-landing-button mt-6">
                    <h3>Sponsorship Packet</h3>
                </div>
            </div>
            <div className="white-landing-img-container">
                <img
                    src={Landing}
                    id="landing-img"
                />
            </div>
            <div className="mobile-vis yellow-button sponsor-button white-landing-button mt-3">
                <h3>Sponsorship Packet</h3>
            </div>

        </section>

        <section className="sponsor-why-partner" >
            <div className='sponsor-why-partner-blurb'>
                <h2 className="mb-5">Why partner with us?</h2>
                <p>
                    External sponsors account for 95% of our team’s annual budget. Contributions towards our team allow us to continue representing LSU on an international stage, as well as giving back to our local community. 
                    <br/> <br/>
                    Your business will gain brand exposure via our 5000+ social media followers, and access our network of university connections. By partnering with us, you invest in the next generation of engineers and gain access to our exclusive resume booklet of our top engineering talent.
                    <br/> <br/>
                    TigerRacing is a registered 501(c)(3) non-profit organization. Any and all donations are considered tax-deductible.
                </p>
            </div>
            <div className="sponsor-stats flex flex-col justify-between">
                <div className="sponsor-why-partner-big-stat">
                    <h1>12+</h1>
                    <h3>Years of Performance</h3>
                </div>
                <div className="purple-line"/>
                <div className="sponsor-why-partner-stats">
                    <div>
                        <h2>5500+</h2>
                        <p>Followers across social medias</p>
                    </div>
                    <div>
                        <h2>7th/89</h2>
                        <p>Peak overall placement</p>
                    </div>
                </div>
                <div className="purple-line"/>
                <div className="sponsor-why-partner-stats">
                    <div>
                        <h2>74.6%</h2>
                        <p>of alumni in major-relevant careers</p>
                    </div>
                    <div>
                        <h2>80+</h2>
                        <p>Active Members</p>
                    </div>
                </div>
                <div className="purple-line"/>
            </div>
        </section>

        <section className="sponsor-tier-section">
            <h2 className='mb-5'>Sponsorship Tiers</h2>
            <div className="sponsor-tier-section-container">
                <Tier
                    image={ICImages.y2022}
                    title="Platinum Tier"
                    description="Logo on T-Shirt 
                    Resume Booklet
                    16 x 8 inch Logo on Car"
                    extra="+ everything in Gold"
                />
                <Tier
                    image={ICImages.y2021}
                    title="Gold Tier"
                    description="Polo Shirt
                    Social Media Post
                    10 x 6 inch Logo on Car"
                    extra="+ everything in Silver"
                />
                <Tier
                    image={ICImages.y2016}
                    title="Silver Tier"
                    description="Framed Photo
                    Logo on Website
                    Attendance to Drive Days
                    6 x 4 inch Logo on Car"
                    extra="+ everything in Bronze"
                />
                <Tier
                    image={ICImages.y2013}
                    title="Bronze Tier"
                    description="Machine Shop Tour
                    T-Shirt"
                    extra=""
                />
            </div>
        </section>
        <div className='purple-line mt-24'/>
        <section className='w-[var(--default-width)] m-auto py-8'>
            <h2>Our Sponsors</h2>
            <section className='mt-10'>
                <h3>Platinum</h3>
                <div className='flex gap-16 flex-wrap'>
                    <SponsorIcon
                        image={SponsorIcons.BASF}
                        to="https://www.basf.com/"
                    />
                </div>

            </section>
            <section className='mt-10'>
                <h3>Gold</h3>
                <div className='flex gap-16 flex-wrap'>
                    <SponsorIcon
                        image={SponsorIcons.CollisionSolutions}
                        to="https://www.collision-solutions.com"
                    />
                    <SponsorIcon
                        image={SponsorIcons.Kenesto}
                        to="https://www.kenesto.com"
                    />
                    <SponsorIcon
                        image={SponsorIcons.Solidworks}
                        to="https://www.solidworks.com"
                    />
                    <SponsorIcon
                        image={SponsorIcons.Wurth}
                        to="https://wurthtool.com"
                    />
                    
                </div>
            </section>

            <section className='mt-10'>
                <h3>Silver</h3>
                <div className='flex flex-wrap gap-16'>

                    <SponsorIcon
                        image={SponsorIcons.Automotive360}
                        to="https://www.360autobr.com"
                    />
                    <SponsorIcon
                        image={SponsorIcons.Acuity}
                        to="https://acuityinstruments.com"
                    />
                    <SponsorIcon
                        image={SponsorIcons.CompositeEnvisions}
                        to="https://www.compositeenvisions.com"
                    />
                    <SponsorIcon
                        image={SponsorIcons.Exxon}
                        to="https://corporate.exxonmobil.com"
                    />
                </div>
            </section>

            <section className='mt-10'>
                <h3>Bronze</h3>
                <div className='flex gap-16 flex-wrap '>
                    <SponsorIcon
                        image={SponsorIcons.EssexParts}
                        to="https://www.essexparts.com"
                    />
                </div>
            </section>
        </section>
    </div>
  );
};

export default Sponsor;

const Tier = ( props: { image: any; title: any; description: any; extra: any; } ) => {
    const {
        image,
        title,
        description,
        extra
    } = props;
    return (
        <div className="sponsor-tier-component">
            <img
                src={image}
                alt={title}
                className="w-fit h-[30vh] object-cover mb-[2%]"
            />
            <h3 className="ml-[3%] mb-[2%]">{title}</h3>
            <p className="ml-[3%] mb-[2%] whitespace-pre-line">{description}</p>
            <h4 className='ml-[3%] '>{extra}</h4>
        </div>
    )
}

const SponsorIcon = ( props: { image: any; to: any; } ) => {
    const {
        image,
        to,
    } = props;
    return (
        <a 
            href={to}
            target="_blank"
            className="p-4"
        >
            <img
                src={image}
                className="max-w-[20rem] max-h-[30vh] object-contain mb-[2%]"
            />
        </a>
    )
}