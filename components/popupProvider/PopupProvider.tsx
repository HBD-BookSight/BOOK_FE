"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePopupState } from "../../context/popupStore";

const PopupProvider = () => {
  const { content, isOpen } = usePopupState();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="pointer-events-none fixed inset-0 z-50 flex size-full items-center justify-center"
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupProvider;
