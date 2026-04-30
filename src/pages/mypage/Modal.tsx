import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = '확인',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-6">
      <div className="bg-white rounded-[12px] w-full max-w-[360px] overflow-hidden shadow-2xl">
        <div className="p-8 text-center">
          <h3 className="text-[20px] font-bold text-black mb-3 break-keep">{title}</h3>
          <p className="text-[14px] text-gray-400 font-light leading-relaxed break-keep">
            {message}
          </p>
        </div>

        <div className="flex border-t border-gray-100">
          <button
            onClick={onClose}
            className="flex-1 py-4 text-[14px] font-medium text-gray-400 hover:bg-gray-50 transition-colors border-r border-gray-100"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            /* ⭐️ 텍스트 색상을 red-500에서 black으로 변경 */
            className="flex-1 py-4 text-[14px] font-bold text-black hover:bg-gray-50 transition-colors"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
