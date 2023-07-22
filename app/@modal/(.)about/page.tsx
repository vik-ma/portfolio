import AboutPage from "@/app/components/AboutPage";
import Modal from "@/app/components/Modal";

export default function AboutModal() {
    return <Modal>
    <div className="max-md:text-center md:flex md:flex-row md:justify-between">
      <AboutPage />
    </div>
  </Modal>
}