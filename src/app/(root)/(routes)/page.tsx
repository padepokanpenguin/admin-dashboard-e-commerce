"use client"

import { useEffect } from "react"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"

export default function Home() {
  const { isOpen, onOpen, onClose } = useStoreModal()

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return null
}
