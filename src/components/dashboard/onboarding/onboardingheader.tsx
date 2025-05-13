import logo from "@/assets/logo.png";

const Onboardingheader = () => {
  return (
    <header className=" bg-white border-b border-[#008000]/20 shadow-md sticky top-0  z-50">
      <div className="container w-full px-7 flex h-16 items-center justify-between">
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <span className="font-bold text-lg text-[#008000]">
            CorperConnect
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1">
            <div className="h-2 w-8 rounded-full bg-[#008000]"></div>
            <div className="h-2 w-8 rounded-full bg-[#008000]/30"></div>
            <div className="h-2 w-8 rounded-full bg-[#008000]/30"></div>
          </div>
          <span className="text-sm text-muted-foreground">Profile Setup</span>
        </div>
      </div>
    </header>
  );
};

export default Onboardingheader;
