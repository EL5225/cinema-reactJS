import { Button, CloseIcon } from "@/components/atoms";
import { useState } from "react";
import { createPortal } from "react-dom";

export const Modal = ({
  children,
  showModal,
  judulModal,
  footerModal,
  onClose,
}) => {
  return (
    <>
      {showModal &&
        createPortal(
          <div className="fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-auto max-h-full bg-gray-500 dark:bg-white dark:bg-opacity-20 bg-opacity-50 backdrop-blur-sm duration-300">
            <div className="relative w-full max-w-2xl max-h-full">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-start justify-between p-4  rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {judulModal}
                  </h3>
                  <Button onClick={onClose}>
                    <CloseIcon />
                  </Button>
                </div>
                {/* Modal content */}
                <div className="p-6 space-y-6 dark:text-white">{children}</div>
                {/* Modal footer */}
                <div className="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600 dark:text-white">
                  {footerModal}
                </div>
              </div>
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
};
