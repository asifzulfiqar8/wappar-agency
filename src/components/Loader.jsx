import { Logo } from "@/assets/icons";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999] w-screen h-screen bg-white text-black font-bold grid place-items-center text-[30px]">
      <div className="animate-ping">
        <Logo />
      </div>
    </div>
  );
};

export default Loader;
