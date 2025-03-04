"use client";

import AdminControlBar from "@/components/adminControlBar/AdminControlBar";
import AdminEventForm, { AdminEventFormRef } from "@/components/popupProvider/adminForm/AdminEventForm";
import AdminPopupModal from "@/components/popupProvider/AdminPopupModal";
import { usePopupActon } from "@/context/popupStore";
import { useRef } from "react";

/**
 * 팝업 상태를 페이지 컴포넌트에서 분리하고 필요한 팝업 모달을 컨트롤바에 전달하는 컨테이너
 */
const AdminControlBarContainer = () => {
  const { openPopup, closePopup } = usePopupActon();
  const ref = useRef<AdminEventFormRef>(null);

  const onClick = () => {
    openPopup(
      <AdminPopupModal>
        <AdminEventForm ref={ref} />
      </AdminPopupModal>,
      closePopup,
      () => {
        ref.current?.handleSubmit();
      }
    );
  };
  return <AdminControlBar onClick={onClick} />;
};

export default AdminControlBarContainer;
