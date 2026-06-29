import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { EspacioPageContent } from "@/components/pages/EspacioPageContent";
import { InnerShell } from "@/components/inner/InnerShell";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "innerMeta.espacio" });
  return { title: t("title"), description: t("description") };
}

export default async function EspacioPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <InnerShell activePage="espacio">
      <EspacioPageContent />
    </InnerShell>
  );
}
