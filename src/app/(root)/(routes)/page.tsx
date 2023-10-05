'use client'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
    const {isOpen, onOpen, onClose} = useStoreModal()


    useEffect(() => {
        if(!isOpen) {
            onOpen()
        }
    },[isOpen, onOpen])

  return (
    <div className="p-4">
        <Modal title='Test' description='test description' isOpen={isOpen} onClose={onClose}>
            Children
        </Modal>
    </div>
  )
}
