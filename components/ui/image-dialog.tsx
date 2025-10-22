'use client'

import React from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Button } from './button'

interface ImageDialogProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title: string
}

export function ImageDialog({
  isOpen,
  onClose,
  imageSrc,
  title,
}: ImageDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative z-10 max-h-[90vh] max-w-4xl p-4">
        {/* Image with close button */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={title}
            width={800}
            height={600}
            className="max-h-[80vh] w-full object-contain"
          />

          {/* Close button positioned on image */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 cursor-pointer rounded-md bg-white/50 p-2 shadow-lg transition-colors hover:bg-white/60 dark:bg-gray-800/50 dark:hover:bg-gray-800/60"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
