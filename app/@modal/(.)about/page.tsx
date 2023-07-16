import Modal from "@/app/components/Modal";

export default function AboutModal() {
    return <Modal>
    <div className="max-md:text-center md:flex md:flex-row md:justify-between">
      <h1
        className={`pb-0.5 md:pb-2 text-3xl md:text-5xl font-extrabold text-neutral-100`}
      >
        About
      </h1>
    </div>
  </Modal>
}