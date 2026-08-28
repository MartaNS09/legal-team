import { getStructuredDataGraph } from '@/lib/seo';

export function StructuredData() {
  const graph = getStructuredDataGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
