import db from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import SettingForm from "./_component/settings-form"

export default async function SettingsPage({params} : { params: { storeId: string } }) {
    
    const { userId } = auth()

    if(!userId) {
        redirect('/sign-in')
    }

    const store = await db.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })

    if (!store) {
        redirect('/')
    }

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SettingForm store={store} />
            </div>
        </div>
    )
}