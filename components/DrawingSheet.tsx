import { EnclaveMark, RouteMark, SystemMark } from "@/components/Marks";

export function DrawingSheet() {
  return (
    <figure className="sheet" aria-label="Drawing sheet of the group’s three lines of work">
      <div className="sheet-frame">
        <div className="sheet-head">
          <span>Emaan Group</span>
          <span>Sheet 01</span>
        </div>
        <p className="sheet-title">Three lines of work</p>
        <div className="sheet-row">
          <div>
            <p className="sheet-kicker">01 · Freight</p>
            <p>Import, export, forwarding, and the papers that finish a move.</p>
          </div>
          <div className="sheet-svg">
            <RouteMark tone="paper" />
          </div>
        </div>
        <div className="sheet-row">
          <div>
            <p className="sheet-kicker">02 · Systems</p>
            <p>Custom software and the tools a business actually runs on.</p>
          </div>
          <div className="sheet-svg">
            <SystemMark tone="paper" />
          </div>
        </div>
        <div className="sheet-row">
          <div>
            <p className="sheet-kicker">03 · Places</p>
            <p>Enclave and Housing, planned as residential communities.</p>
          </div>
          <div className="sheet-svg">
            <EnclaveMark tone="paper" />
          </div>
        </div>
        <p className="sheet-foot">Not a map. Not to scale.</p>
      </div>
    </figure>
  );
}
