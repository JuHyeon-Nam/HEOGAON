import { HeogaonFlowApp } from "@/components/HeogaonFlowApp";
import type { ViewType } from "@/types/flow";

const DEV_VIEWS: ViewType[] = ["slot_question", "diagnosis", "understanding_review", "documents", "dashboard", "submitted"];

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ dev?: string | string[] }>;
}) {
  const params = await searchParams;
  const devParam = Array.isArray(params?.dev) ? params?.dev[0] : params?.dev;
  const initialDevView = devParam && DEV_VIEWS.includes(devParam as ViewType) ? (devParam as ViewType) : devParam === "landing" ? "landing" : undefined;

  return <HeogaonFlowApp initialDevView={initialDevView} />;
}
