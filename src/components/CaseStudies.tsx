import { CarShareCaseStudy } from './CarShareCaseStudy';
import { LogTriageDemo } from './LogTriageDemo';
import { SocInvestigationWalkthrough } from './SocInvestigationWalkthrough';

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-container" aria-labelledby="case-studies-heading">
      <div className="mb-12">
        <span className="section-label">Deep Dives</span>
        <h2 id="case-studies-heading" className="section-title">
          Interactive Case Studies
        </h2>
        <p className="mt-3 max-w-2xl text-content-secondary">
          Problem-solving in action — explore how I build products, investigate incidents, and
          think through trade-offs. Every demo uses sample data; no real exploit code.
        </p>
      </div>

      <div className="space-y-8">
        <CarShareCaseStudy />
        <SocInvestigationWalkthrough />
        <LogTriageDemo />
      </div>
    </section>
  );
}
