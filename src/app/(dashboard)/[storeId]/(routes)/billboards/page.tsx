import { format } from "date-fns"

import db from "@/lib/db"

import { BillboardClient } from "./_components/client"
import { BillboardColumn } from "./_components/columns"

export default async function BillboardsPage({
  params,
}: {
  params: { storeId: string }
}) {
  const billboards = await db.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  })

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }))
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient billboards={formattedBillboards} />
      </div>
    </div>
  )
}
