import { CategoriesExplorer } from "@/components/CategoriesExplorer";

type Props = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function CategoriesPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <main className="container-shell pb-20 pt-32">
      <CategoriesExplorer initialQuery={params?.q ?? ""} />
    </main>
  );
}
