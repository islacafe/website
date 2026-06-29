import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HistoriaPageContent } from "@/components/pages/HistoriaPageContent";
import { InnerShell } from "@/components/inner/InnerShell";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "innerMeta.historia" });
  return { title: t("title"), description: t("description") };
}

export default async function HistoriaPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <InnerShell activePage="historia">
      <HistoriaPageContent />
    </InnerShell>
  );
}
