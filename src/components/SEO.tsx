import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

// full transparency; this code is gemini but it works soooo
export const SEO = ({ title, description, image, url }: SEOProps) => {
  const siteTitle = "TigerRacing Formula SAE";
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultDesc = "TigerRacing is LSU's Formula SAE team, a group of 30+ students with the goal of designing, manufacturing, and racing a Formula SAE car every year. Made up of undergraduate students across 8+ disciplines, the team builds an electric racecar each season for the FORMULA SAE Electric competition.";
  const defaultImg = "https://www.formulalsu.org/assets/Landing-BvXgL6IR.jpg"; // Use your absolute URL here
  const siteUrl = "https://www.formulalsu.org";

  return (
    <Helmet>
      {/* Standard Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />

      {/* Open Graph / Discord */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImg} />

      {/* The "Big Image" Fix */}
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Branding Color */}
      <meta name="theme-color" content="#510087" />
    </Helmet>
  );
};