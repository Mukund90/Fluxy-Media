export function generateStaticParams() {
  // Define all possible service routes
  return [
    { service: 'seo' },
    { service: 'ppc' },
    { service: 'social-media' },
    { service: 'content' },
    { service: 'web-design' },
    { service: 'graphic-design' }
  ]
}

export default function ServicePage({
  params,
}: {
  params: { service: string }
}) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-purple-600">
        {params.service.replace('-', ' ').toUpperCase()}
      </h1>
    </div>
  )
}