import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { VisitanosPageContent } from "@/components/pages/VisitanosPageContent";
import { InnerShell } from "@/components/inner/InnerShell";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "innerMeta.visitanos" });
  return { title: t("title"), description: t("description") };
}

export default async function VisitanosPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <InnerShell activePage="visitanos">
      <VisitanosPageContent />
    </InnerShell>
  );
}
