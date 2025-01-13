import React, { useState } from "react";
import dynamic from "next/dynamic";
import Button from "../Button";
import Modal from "../Modal";
const Input = dynamic(() => import("@/components/Input"));

const HomeForm = () => {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  console.table(formValues);

  const handleForm = (e) => {
    e.preventDefault();
    // setModal(true)
  };
  return (
    <>
      <form
        onSubmit={handleForm}
        className="bg-[#242424] rounded-[30px] border border-[#F8F8F830] py-4 px-4 md:py-[40px] md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 relative z-10"
      >
        <div className="md:col-span-6">
          <Input
            label="Name"
            name="name"
            placeholder="Enter name"
            onChange={(e) => handleFormValues(e)}
          />
        </div>
        <div className="md:col-span-6">
          <Input
            label="Last name"
            name="lastName"
            placeholder="Enter last name"
            onChange={(e) => handleFormValues(e)}
          />
        </div>
        <div className="md:col-span-6">
          <Input
            label="Email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => handleFormValues(e)}
          />
        </div>
        <div className="md:col-span-6">
          <Input
            label="Phone Number"
            name="phone"
            placeholder="Enter phone number"
            onChange={(e) => handleFormValues(e)}
          />
        </div>
        <p className="md:col-span-12 text-[#8B949E] text-xs md:text-lg font-geist">
          By submitting this form you agree to our terms and conditions and
          privacy policy.
        </p>
        <div className="md:col-span-12 grid place-items-center">
          <Button
            text="Order now"
            width="w-full sm:w-[164px]"
            textSize="text-base md:text-[22px]"
            weight="font-medium"
          />
        </div>
      </form>
      {modal && (
        <Modal bg="bg-[#1C1C1D]" onClose={() => setModal(false)}>
          cards
        </Modal>
      )}
    </>
  );
};

export default HomeForm;
