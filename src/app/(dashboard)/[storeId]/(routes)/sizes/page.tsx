import { format } from "date-fns"

import db from "@/lib/db"

import { SizeClient } from "./_components/client"
import { SizeColumn } from "./_components/columns"

export default async function SizesPage({
  params,
}: {
  params: { storeId: string }
}) {
  const sizes = await db.size.findMany({
    where: {
      storeId: params.storeId,
    },
  })

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }))
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient sizes={formattedSizes} />
      </div>
    </div>
  )
}
