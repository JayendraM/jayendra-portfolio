import type { CaseStudyDecision } from "@/content/case-studies";

export function DecisionCard({
  decision,
  index,
}: {
  decision: CaseStudyDecision;
  index: number;
}) {
  return (
    <div className="border-l-2 border-accent pl-6 py-2">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle-foreground mb-2">
        DECISION {String(index + 1).padStart(2, "0")}
      </div>
      <h4 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-foreground">
        {decision.title}
      </h4>
      <dl className="mt-4 space-y-3 text-base md:text-lg">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
            Alternatives considered
          </dt>
          <dd className="text-foreground/90 leading-relaxed">
            {decision.alternatives}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
            Trade-off accepted
          </dt>
          <dd className="text-foreground/90 leading-relaxed">
            {decision.tradeoff}
          </dd>
        </div>
      </dl>
    </div>
  );
}
