"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface VideoModalProps {
  trigger: React.ReactNode;
  videoUrl: string;
  title: string;
}

export const VideoModal = ({ trigger, videoUrl, title }: VideoModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="relative w-full max-w-3xl rounded-3xl bg-card p-6 shadow-atelier"
          >
            <Dialog.Close
              className="absolute right-4 top-4 rounded-full bg-muted/60 p-2 text-ink/70 transition hover:bg-muted"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
            <Dialog.Title className="sr-only">{title}</Dialog.Title>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-ink/10">
              <iframe
                src={videoUrl}
                title={title}
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
