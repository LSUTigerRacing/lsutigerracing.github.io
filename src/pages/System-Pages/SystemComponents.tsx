import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import DownArrow from "../../assets/images/General/down-arrow.png"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const LandingComponent = ( props: { name: any; blurb: any; image: any } ) => {
    const {
        name,
        blurb,
        image
    } = props;
    // const tl = useRef<gsap.core.Timeline | null>(null);

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
            duration: 0.8,
            delay: 0.3
        })
        gsap.from("#landing-img", {
            clipPath: "inset(100% 0 0 0)",
			ease: "power1.out",
            duration: 0.7,
            delay: 0.7
        })
	})

    return (
        <section className="white-landing">
            <div className="white-landing-content relative">
                <h2 id="landing-title">Meet {name}.</h2>
                <p className="whitespace-pre-line" id="landing-blurb">
                    {blurb}
                </p>

                <div className="default-vis yellow-button mt-6">
                    <h3>Interest Form</h3>
                </div>
  
                <div className="absolute bottom-0 w-fit h-fit flex items-center gap-4 default-vis">
                    <div className="w-fit">
                        <h3 className="whitespace-nowrap text-[1.rem]">Explore {name}</h3>
                    </div>
                    <img className="w-[3rem] arrow-icon" src={DownArrow}/>
                </div>
            </div>
            <div className="white-landing-img-container">
                <img
                    src={image}
                    id="landing-img"
                />
            </div>

            <div className="mobile-flex-vis w-full items-center justify-between gap-6 mt-4 relative">
                <div className="subsystem-mobile-hide yellow-button">
                    <h3>Interest Form</h3>
                </div>
                <div></div> {/* empty div to force proper space of the explore __ on mobile */}
                <div className="w-fit h-fit py-3 flex items-center text-right gap-4">
                    <div className="w-fit">
                        <h3 className="whitespace-nowrap text-[1.rem]">Explore {name}</h3>
                    </div>
                    <img className="w-[3rem] arrow-icon" src={DownArrow}/>
                </div>
            </div>

        </section>
  );
};

const TableOfContents = ( props: { sections: any } ) => {
    const {
        sections
    } = props;

    const scrollToSection = ( index: any ) => {
        const sectionIndex = parseInt(index) - 1;
    };

    return (
        <div className="table-of-contents">
            <h3 className="seperator-bottom-sm">Our Subsystems</h3>
            <div className="table-of-contents-container">
                {sections.map((section: any) => (
                    <div className="table-of-contents-item">
                        <h3>{section.index}</h3>
                        <h3>{section.title}</h3>
                    </div>
                ))}
            </div>
        </div>
  );
};

const SubsystemComponent = ( props: { index: any; title: any; description: any; images: any, layout: any } ) => {
    const {
        index,
        title,
        description,
        images,
        layout
    } = props;
    return (
        <>
            <div className="purple-line mt-10"/>
            <div className="subsystem-component mt-5">
                <h2 className="text-[var(--purple-line)]">{index}</h2>
                
                <div className="subsystem-content">
                    <h2 className="seperator-bottom-sm">{title}</h2>
                    <p className="seperator-bottom-sm whitespace-pre-line">{description}</p>
                
                    {layout == 1 && (
                        <Collage3Equal images={images} />
                    )}
                    {layout == 2 && (
                        <Collage3Side images={images} />
                    )}
                    {layout == 3 && (
                        <Collage3Bottom images={images} />
                    )}
                    {layout == 4 && (
                        <Collage2Right images={images} />
                    )}
                    {layout == 5 && (
                        <Collage2Center images={images} />
                    )}
                    {layout == 6 && (
                        <Collage2Left images={images} />
                    )} 
                    {layout == 7 && (
                        <CollageSingle images={images} />
                    )}
                </div>

            </div>
        </>

  );
};

const Collage3Equal = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="subsystem-collage collage-equal">
            <img
                src={images[0]}
            />
            <img
                src={images[1]}
            />
            <img
                src={images[2]}
            />
        </div>       
    )
}

const Collage3Side = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="subsystem-collage collage-hero-side">
            <img
                src={images[0]}
            />
            <div className="collage-hero-side-right">
                <img
                    src={images[1]}
                />
                <img
                    src={images[2]}
                />
            </div>
        </div>       
    )
}

const Collage3Bottom = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="subsystem-collage collage-hero-bottom">
            <img
                src={images[0]}
            />
            <div className="collage-hero-bottom-top">
                <img
                    src={images[1]}
                />
                <img
                    src={images[2]}
                />
            </div>
        </div>       
    )
}

const Collage2Right = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="subsystem-collage collage-2-right">
            <img
                src={images[0]}
            />
            <img
                src={images[1]}
            />
        </div>       
    )
}

const Collage2Center = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="subsystem-collage collage-2-center">
            <img
                src={images[0]}
            />
            <img
                src={images[1]}
            />
        </div>       
    )
}


const Collage2Left = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="subsystem-collage collage-2-left">
            <img
                src={images[0]}
            />
            <img
                src={images[1]}
            />
        </div>       
    )
}

const CollageSingle = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="subsystem-collage collage-1-single">
            <img
                src={images[0]}
            />
        </div>       
    )
}


export { LandingComponent, SubsystemComponent, TableOfContents };