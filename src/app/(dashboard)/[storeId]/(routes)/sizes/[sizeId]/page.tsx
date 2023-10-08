import db from "@/lib/db"

import { SizeForm } from "./_components/size-form"

export default async function CategoryPage({
  params,
}: {
  params: { sizeId: string }
}) {
  const size = await db.size.findUnique({
    where: {
      id: params.sizeId,
    },
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm size={size} />
      </div>
    </div>
  )
}
