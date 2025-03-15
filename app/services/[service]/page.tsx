interface ServiceContent {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

const serviceData: Record<string, ServiceContent> = {
  'seo': {
    title: 'SEO Optimization (SEO)',
    description: "Boost your website's visibility and rank higher in search engine results with our data-driven SEO strategies.",
    features: [
      'Comprehensive Website Audit',
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Implementation',
      'Content Strategy & Creation',
      'Link Building'
    ],
    benefits: [
      'Increased Organic Traffic',
      'Higher Search Rankings',
      'Better User Experience',
      'Improved ROI',
      'Sustainable Long-term Growth',
      'Competitive Market Advantage'
    ]
  },
  'ppc': {
    title: 'Lead Generation Campaigns',
    description: 'Drive targeted traffic and generate leads with strategic paid advertising campaigns across multiple platforms.',
    features: [
      'Google Ads Management',
      'Campaign Strategy & Setup',
      'Ad Copy Creation',
      'Bid Management',
      'Performance Tracking',
      'ROI Optimization'
    ],
    benefits: [
      'Immediate Results',
      'Targeted Audience Reach',
      'Measurable Results',
      'Cost-Effective Advertising',
      'Flexible Budget Control',
      'Quick Market Testing'
    ]
  },
  'social-media': {
    title: 'Social Media Management',
    description: 'Build brand awareness and engage with your audience through strategic social media marketing campaigns.',
    features: [
      'Social Media Strategy Development',
      'Content Creation & Curation',
      'Community Management',
      'Social Media Advertising',
      'Analytics & Reporting',
      'Influencer Collaboration'
    ],
    benefits: [
      'Enhanced Brand Awareness',
      'Improved Customer Engagement',
      'Increased Social Following',
      'Better Customer Insights',
      'Real-time Brand Monitoring',
      'Viral Marketing Potential'
    ]
  },
  'content': {
    title: 'Content Creation',
    description: 'Create valuable, relevant content that attracts and retains your target audience while driving profitable customer action.',
    features: [
      'Content Strategy Planning',
      'Blog Writing & Management',
      'Email Marketing Campaigns',
      'Copywriting Services',
      'Content Distribution',
      'Performance Analysis'
    ],
    benefits: [
      'Increased Brand Authority',
      'Better Customer Trust',
      'Higher Conversion Rates',
      'Long-term SEO Benefits',
      'Improved Customer Education',
      'Enhanced Market Leadership'
    ]
  },
  'web-design': {
    title: 'Website Design & Development',
    description: 'Create stunning, user-friendly websites that drive conversions and provide exceptional user experience.',
    features: [
      'Custom Website Design',
      'Responsive Development',
      'UI/UX Optimization',
      'Website Maintenance',
      'Speed Optimization',
      'Security Implementation'
    ],
    benefits: [
      'Professional Online Presence',
      'Improved User Experience',
      'Higher Conversion Rates',
      'Mobile-Friendly Design',
      'Faster Loading Times',
      'Enhanced Brand Credibility'
    ]
  },
  'graphic-design': {
    title: 'Graphic Design',
    description: 'Create visually compelling designs that communicate your brand message effectively across all platforms.',
    features: [
      'Brand Identity Design',
      'Marketing Materials',
      'Social Media Graphics',
      'Packaging Design',
      'Print Design',
      'Digital Asset Creation'
    ],
    benefits: [
      'Strong Brand Identity',
      'Professional Visual Appeal',
      'Consistent Brand Message',
      'Stand Out from Competition',
      'Increased Brand Recognition',
      'Versatile Design Assets'
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(serviceData).map(service => ({ service }))
}

export default function ServicePage({
  params,
}: {
  params: { service: string }
}) {
  const service = serviceData[params.service]

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 mt-20">
        <h1 className="text-3xl font-bold text-red-600">Service not found</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6 relative inline-block">
            {service.title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600/20"></span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-purple-600/20 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-8 flex items-center">
              <span className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white mr-3">
                ★
              </span>
              Key Features
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center group">
                  <span className="text-purple-600 mr-3 text-xl transform group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <span className="text-gray-700 group-hover:text-purple-600 transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-purple-600/20 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-8 flex items-center">
              <span className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white mr-3">
                ⭐
              </span>
              Benefits
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center group">
                  <span className="text-purple-600 mr-3 text-xl transform group-hover:scale-110 transition-transform">
                    →
                  </span>
                  <span className="text-gray-700 group-hover:text-purple-600 transition-colors">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 hover:shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}