import AboutPage from "@/app/components/AboutPage";
import Modal from "@/app/components/Modal";

export default function AboutModal() {
  // Display the About page inside of a Modal instead of sending the user to a new page
  return (
    <>
    <title>About</title>
      <Modal>
        <div className="max-md:text-center md:flex md:flex-row md:justify-between">
          <AboutPage />
        </div>
      </Modal>
    </>
  );
}
