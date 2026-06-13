import { devViewLabels } from "@/lib/devMocks";
import type { ViewType } from "@/types/flow";

export function DevPanel({
  currentView,
  onLanding,
  onPreview,
}: {
  currentView: ViewType | "landing";
  onLanding: () => void;
  onPreview: (type: ViewType) => void;
}) {
  return (
    <aside className="dev-panel" aria-label="로컬 개발 패널">
      <details className="dev-panel-details">
        <summary className="dev-panel-toggle">Dev</summary>
        <div className="dev-panel-body">
          <div className="dev-panel-head">
            <strong>Local preview</strong>
            <span>{currentView}</span>
          </div>
          <div className="dev-panel-grid">
            <a className={`dev-panel-action${currentView === "landing" ? " is-active" : ""}`} href="/?dev=landing" onClick={onLanding}>
              랜딩
            </a>
            {devViewLabels.map((item) => (
              <a
                className={`dev-panel-action${currentView === item.type ? " is-active" : ""}`}
                href={`/?dev=${item.type}`}
                key={item.type}
                onClick={() => onPreview(item.type)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </details>
    </aside>
  );
}
