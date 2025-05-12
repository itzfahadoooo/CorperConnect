import Onboardingheader from "@/components/dashboard/onboarding/onboardingheader";
import ProfileForm from "@/components/dashboard/onboarding/profileform";

const Onboarding = () => {
  return (
    <>
      <Onboardingheader />

      <div className="container py-10 flex flex-col items-center justify-center">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-3xl font-bold text-[#008000]">
            Complete Your Profile
          </h1>
          <p className="text-muted-foreground">
            Please provide your personal information to complete your
            CorperConnect profile
          </p>
        </div>
        <ProfileForm />
      </div>
    </>
  );
};

export default Onboarding;
