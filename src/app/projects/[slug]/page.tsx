import { notFound } from "next/navigation";
import { GenericProjectPage } from "@/components/GenericProjectPage";
import { projectOrder } from "@/lib/project-paths";

/** horeca / kazagris keep dedicated pages with full i18n copy */
const slugs = projectOrder.filter((id) => id !== "horeca" && id !== "kazagris");

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slugs as readonly string[]).includes(slug)) notFound();
  return <GenericProjectPage slug={slug} />;
}
