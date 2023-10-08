import { format } from "date-fns"

import db from "@/lib/db"

import { CategoryClient } from "./_components/client"
import { CategoriesColumn } from "./_components/columns"

export default async function CategoriesPage({
  params,
}: {
  params: { storeId: string }
}) {
  const categories = await db.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  const formattedCategories: CategoriesColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }))
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient category={formattedCategories} />
      </div>
    </div>
  )
}
