import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MenuPageContent } from "@/components/pages/MenuPageContent";
import { InnerShell } from "@/components/inner/InnerShell";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "innerMeta.menu" });
  return { title: t("title"), description: t("description") };
}

export default async function MenuPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <InnerShell activePage="menu">
      <MenuPageContent />
    </InnerShell>
  );
}
