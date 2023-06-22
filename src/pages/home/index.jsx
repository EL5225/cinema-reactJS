import { Button, Modal } from "@/components";
import { ContentLayout } from "@/layouts";
import { useState } from "react";

export const Home = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <ContentLayout>
      <Button onClick={toggleModal}>Show Modal</Button>
      <Modal
        showModal={isShowModal}
        judulModal="Judul Modal"
        footerModal="Footer Modal"
        onClose={toggleModal}
      >
        Content Modal
      </Modal>
    </ContentLayout>
  );
};
