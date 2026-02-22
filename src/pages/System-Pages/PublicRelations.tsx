import { PublicRelationsImages } from "../../assets/images/System-Pages";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";

const PublicRelations = () => {
  return (
 	<div className="w-full background">
        <LandingComponent 
			name="Public Relations"
			blurb="Our public relations system builds the team's brand and community connections, where strategic marketing and creative fundraising initiatives expand our reach and strengthen support for our program.
            
As a public relations team member, you'll create engaging content that showcases our technical achievements across social media platforms, organize fundraising events that generate revenue beyond traditional sponsorships, and develop campaigns that attract talented new members and enthusiastic supporters."
        	image={PublicRelationsImages.Landing} 
		/>

        <TableOfContents
            sections={[
                { index: "01", title: "Marketing" },
                { index: "02", title: "Fundraising" },
            ]}
        />
        <SubsystemComponent
            index="01"
            title="Marketing"
            description="Telling our story and building our brand requires creativity, strategy, and consistent execution. Our marketing team manages the team's social media presence, creates content that showcases our work, and develops campaigns that engage our community and attract new members. Members gain hands-on experience with graphic design, video production, content strategy, and the analytics that reveal what resonates with different audiences."
            images={[PublicRelationsImages.Marketing.Recording, PublicRelationsImages.Marketing.Camera]} 
            layout={4}
        />
        <SubsystemComponent
            index="02"
            title="Fundraising"
            description="Securing the resources needed to build a competitive race car takes persistence, creativity, and excellent people skills. Our fundraising team organizes events, runs campaigns, and develops initiatives that generate revenue beyond traditional sponsorships. Members learn event planning, donor engagement, campaign management, and the outreach strategies that turn interest into financial support."
            images={[PublicRelationsImages.Fundraising.Merch, PublicRelationsImages.Fundraising.Concessions]} 
            layout={4}
        />
    </div>
  );
};

export default PublicRelations;