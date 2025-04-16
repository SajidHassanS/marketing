import React from "react";
import { useParams } from "react-router-dom";
import { HomePageText } from "./data";
import NewsLetters from "../../components/NewsLetters";

// Images
import amazonImage from "../../assets/services/amazon.jpg";
import shopifyImage from "../../assets/services/shopify.jpg";
import marketingImage from "../../assets/services/marketing.jpg";
import seoImage from "../../assets/services/seo.jpg";
import ecommerceImage from "../../assets/services/ecommerce.jpg";
import freelancingImage from "../../assets/services/freelancing.jpg";
import designImage from "../../assets/services/design.jpg";
import videoImage from "../../assets/services/video.jpg";
import webdevImage from "../../assets/services/webdev.jpg";
import advanceCompImage from "../../assets/services/advance-computer.jpg";
import quickbooksImage from "../../assets/services/quickbooks.jpg";
import englishImage from "../../assets/services/english.jpg";
import basicCompImage from "../../assets/services/basic-computing.jpg";
import safetyImage from "../../assets/services/safety.jpg";
import emailMarketingImage from "../../assets/services/email-marketing.jpg";
import optimizationImage from "../../assets/services/optimization.jpg";
import marketingAnalysisImage from "../../assets/services/marketing-analysis.jpg";

const services = [
  {
    slug: "amazon",
    title: HomePageText.services_box_title1,
    description1:
      "Learn how to sell and scale successfully on Amazon Marketplace with hands-on, real-world techniques. Whether you're launching your first product or optimizing an existing listing, this training covers every step.",
    description2:
      "From product research and optimized listings to PPC ads, order fulfillment, and customer service — this course equips you with the tools and confidence to manage a profitable Amazon business.",
    image: amazonImage,
  },
  {
    slug: "shopify",
    title: HomePageText.services_box_title2,
    description1:
      "Become a Shopify expert by learning how to create, customize, and run your own ecommerce store from scratch. Whether it's dropshipping or brand selling, you'll build a scalable business model.",
    description2:
      "You'll learn about product sourcing, theme editing, sales funnel optimization, payment gateways, order automation, and customer support to maximize conversions and growth.",
    image: shopifyImage,
  },
  {
    slug: "digital-marketing",
    title: HomePageText.services_box_title3,
    description1:
      "Master the core pillars of digital marketing including Facebook Ads, Google Ads, YouTube promotions, and content strategy. You'll gain insights into targeting the right audience, budget planning, and conversion tracking.",
    description2:
      "From setting up compelling ad creatives to analyzing ad performance, this course ensures you are ready to run successful campaigns that boost engagement, traffic, and revenue.",
    image: marketingImage,
  },
  {
    slug: "seo",
    title: HomePageText.services_box_title4,
    description1:
      "Understand both the technical and creative elements of Search Engine Optimization. This course covers keyword research, on-page structure, link building, and schema markup.",
    description2:
      "Practical training includes working with industry tools like Ahrefs, SEMrush, and Google Search Console to help websites rank and drive sustainable traffic organically.",
    image: seoImage,
  },
  {
    slug: "ecommerce",
    title: HomePageText.services_box_title5,
    description1:
      "Learn the fundamentals of ecommerce including marketplace selection, product research, supplier sourcing, order fulfillment, and customer service best practices.",
    description2:
      "Our expert-led training provides strategies on scaling, analyzing performance metrics, and implementing backend logistics for smooth and profitable operations.",
    image: ecommerceImage,
  },
  {
    slug: "freelancing",
    title: HomePageText.services_box_title6,
    description1:
      "Launch your freelancing career on platforms like Fiverr, Upwork, Freelancer, and more. Learn to position yourself, write winning proposals, and land high-paying gigs.",
    description2:
      "You'll develop key skills in communication, negotiation, portfolio building, and client retention to build a reliable remote income stream.",
    image: freelancingImage,
  },
  {
    slug: "graphic-design",
    title: HomePageText.services_box_title7,
    description1:
      "Learn the foundations of graphic design using top tools like Adobe Photoshop, Illustrator, and Canva. Create marketing material, branding kits, and social media content.",
    description2:
      "You'll explore layout design, typography, visual hierarchy, and real-world projects to build a strong portfolio for freelance or agency work.",
    image: designImage,
  },
  {
    slug: "video-editing",
    title: HomePageText.services_box_title8,
    description1:
      "Create engaging videos using tools like Adobe Premiere Pro, After Effects, and CapCut. Learn timelines, transitions, B-roll management, and color correction.",
    description2:
      "This course also covers audio syncing, subtitles, social media formats, and storytelling techniques for YouTube, Instagram, and client work.",
    image: videoImage,
  },
  {
    slug: "web-development",
    title: HomePageText.services_box_title9,
    description1:
      "Build beautiful, responsive websites using HTML, CSS, JavaScript, and React. This course covers layout design, animation, forms, and API integrations.",
    description2:
      "Learn how to host and deploy websites on platforms like GitHub Pages and Netlify while understanding version control using Git. Perfect for aspiring developers.",
    image: webdevImage,
  },
  {
    slug: "advance-computer",
    title: HomePageText.services_box_title10,
    description1:
      "Take your computer literacy to the next level. Learn about operating systems, file management, system utilities, and networking basics.",
    description2:
      "This course provides hands-on experience with troubleshooting, Microsoft Office suite, email systems, and essential tech tools used in the corporate world.",
    image: advanceCompImage,
  },
  {
    slug: "quickbooks",
    title: HomePageText.services_box_title11,
    description1:
      "Master QuickBooks for accounting, bookkeeping, payroll, and tax management. Get familiar with financial reporting and client billing.",
    description2:
      "Perfect for accountants, business owners, and virtual assistants who want to track income, expenses, and manage all financials in one place.",
    image: quickbooksImage,
  },
  {
    slug: "english-language",
    title: HomePageText.services_box_title12,
    description1:
      "Enhance your English speaking, listening, reading, and writing skills with our structured language program. Ideal for students and professionals.",
    description2:
      "Includes daily conversational practice, grammar improvement, vocabulary enrichment, accent training, and group interaction activities.",
    image: englishImage,
  },
  {
    slug: "basic-computing",
    title: HomePageText.services_box_title13,
    description1:
      "Designed for absolute beginners, this course covers using Windows, internet navigation, file management, and basic application usage.",
    description2:
      "You'll become confident with MS Office tools like Word, Excel, and PowerPoint, plus emailing, printing, and basic troubleshooting skills.",
    image: basicCompImage,
  },
  {
    slug: "safety-course",
    title: HomePageText.services_box_title14,
    description1:
      "Learn essential safety practices for workplaces including hazard identification, PPE usage, emergency protocols, and fire prevention.",
    description2:
      "This course meets industry safety standards and is great for manufacturing, construction, and office professionals who need compliance training.",
    image: safetyImage,
  },
  {
    slug: "marketing-analysis",
    title: "Marketing Analysis",
    description1:
      "Gain in-depth marketing intelligence to help businesses grow strategically. Learn to analyze customer behavior, ad performance, and engagement metrics.",
    description2:
      "Use tools like Google Analytics and Excel to generate insights, improve ROI, and present data-driven reports for management decision-making.",
    image: marketingAnalysisImage,
  },
  {
    slug: "website-optimization",
    title: "Website Optimization",
    description1:
      "Enhance your website’s speed, UX, and SEO with practical optimization skills. Learn how to reduce load time, improve mobile responsiveness, and structure pages for better engagement.",
    description2:
      "Includes techniques such as image compression, lazy loading, accessibility audits, and Core Web Vitals improvement using Lighthouse and PageSpeed Insights.",
    image: optimizationImage,
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    description1:
      "Create, manage, and optimize high-converting email campaigns with Mailchimp, Brevo, or ConvertKit. Learn how to nurture leads and retain customers.",
    description2:
      "Topics include list segmentation, automation workflows, A/B testing, analytics review, and writing subject lines that increase open and click-through rates.",
    image: emailMarketingImage,
  },
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.slug === serviceId);

  return (
    <div className="container py-5">
      {service ? (
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={service.image}
              alt={service.title}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h1>{service.title}</h1>
            <p>{service.description1}</p>
            <p>{service.description2}</p>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1>Service Not Found</h1>
          <p>We couldn’t find the service you're looking for.</p>
        </div>
      )}
      <NewsLetters />
    </div>
  );
}
