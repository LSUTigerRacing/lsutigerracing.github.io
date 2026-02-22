import { BusinessImages } from "../../assets/images/System-Pages";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";

const Business = () => {
  return (
 	<div className="w-full background">
        <LandingComponent 
			name="Business"
			blurb="Our business system manages the financial and partnership infrastructure that makes our racing program possible, where budget oversight and sponsor relationships secure the resources needed to build and compete with a world-class race car.

            As a business team member, you'll track expenditures across technical subsystems to ensure fiscal responsibility, develop funding strategies that sustain operations year after year, and cultivate partnerships with companies that share our commitment to engineering excellence and innovation."
        	image={BusinessImages.Landing} 
		/>

        <TableOfContents
            sections={[
                { index: "01", title: "Finance" },
                { index: "02", title: "Sponsor Relations" },
            ]}
        />
        <SubsystemComponent
            index="01"
            title="Finance"
            description="Running a competitive race team requires smart financial management and strategic resource allocation. Our financial team oversees the team's budget, tracks expenditures across all subsystems, and develops funding strategies that keep the program sustainable year after year. Members gain practical experience with financial forecasting, cost-benefit analysis, purchase order management, and the accounting systems that ensure every dollar is spent effectively."
            images={[BusinessImages.Finance.Financial]} 
            layout={7}
        />
        <SubsystemComponent
            index="02"
            title="Sponsor Relations"
            description="Building and maintaining partnerships with companies and organizations is what makes our team possible. Our sponsor relations team cultivates relationships with current sponsors, identifies and pursues new partnership opportunities, and ensures sponsors receive value from their investment in our program. Members develop skills in professional communication, proposal writing, presentation delivery, and relationship management that extend far beyond the classroom."
            images={[BusinessImages.SponsorRelations.BASF]} 
            layout={7}
        />
    </div>
  );
};

export default Business;