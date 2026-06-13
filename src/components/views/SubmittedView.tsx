import { Icon } from "@/components/common/Icon";
import type { SimpleView } from "@/types/flow";

export function SubmittedView({ view }: { view: SimpleView }) {
  const completionRate = view.completionRate ?? 100;
  const submittedDocuments = view.submittedDocuments?.length ? view.submittedDocuments : [
    { id: "business-registration", title: "사업자등록 신청서", statusLabel: "완료", meta: "우선순위 1" },
    { id: "hygiene-education", title: "위생교육 수료증", statusLabel: "완료", meta: "우선순위 2" },
    { id: "facility-check", title: "시설 기준 확인 자료", statusLabel: "완료", meta: "우선순위 3" },
    { id: "business-report", title: "휴게음식점 영업신고", statusLabel: "완료", meta: "우선순위 4" },
  ];
  const docCount = submittedDocuments.length;
  const nextNotes = view.nextNotes?.length ? view.nextNotes : [
    "접수번호와 제출 기록은 따로 보관하세요.",
    "추가 연락이 오면 답변 내용을 다시 기록하세요.",
  ];

  return (
    <div className="submitted-a" aria-labelledby="submitted-title">
      <section className="suba-hero">
        <span className="suba-seal" aria-hidden="true"><Icon name="check" size={38} /></span>
        <span className="suba-kicker">제출 완료</span>
        <h1 className="suba-title" id="submitted-title">{view.title}</h1>
        <p className="suba-copy">{view.subtitle || "필요한 모든 서류가 정상적으로 접수됐어요. 수고 많으셨어요."}</p>
      </section>

      <section className="suba-receipt" aria-label="제출 요약">
        <div className="suba-receipt-cells">
          <div className="suba-cell">
            <small>완료 서류</small>
            <strong>{docCount}<em>건</em></strong>
          </div>
          <div className="suba-cell">
            <small>진행률</small>
            <strong className="is-primary">{completionRate}<em>%</em></strong>
          </div>
        </div>
        <div className="suba-receipt-ok">
          <span className="suba-ok-check" aria-hidden="true"><Icon name="check" size={12} /></span>
          모든 서류가 완료 상태예요
        </div>
      </section>

      <details className="suba-docs">
        <summary className="suba-docs-summary">
          <span className="suba-docs-icon" aria-hidden="true"><Icon name="fileCheck" size={15} /></span>
          <span className="suba-docs-label">제출한 서류 {docCount}건 보기</span>
          <span className="suba-docs-chevron" aria-hidden="true" />
        </summary>
        <ul className="suba-docs-list">
          {submittedDocuments.map((item) => (
            <li className="suba-doc" key={item.id}>
              <span className="suba-doc-check" aria-hidden="true"><Icon name="check" size={12} /></span>
              <span className="suba-doc-name">{item.title}</span>
              <span className="suba-doc-status">{item.statusLabel}</span>
            </li>
          ))}
        </ul>
      </details>

      <section className="suba-notes" aria-label="마지막 확인">
        <h2 className="suba-notes-head">마지막 확인</h2>
        {nextNotes.map((note) => (
          <p className="suba-note" key={note}>
            <span className="suba-note-dot" aria-hidden="true" />
            <span>{note}</span>
          </p>
        ))}
      </section>
    </div>
  );
}
