import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Update profile",
};

export default function Page() {
  const countryFlag = "pt.jpg";
  const nationality = "Algeria";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>
      <Suspense fallback={<Spinner />}>
        <UpdateProfileForm>
          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          />
        </UpdateProfileForm>
        <p className="text-lg mb-8 text-primary-200">
          Providing the following information will make your check-in process
          faster and smoother. See you soon!
        </p>
      </Suspense>
    </div>
  );
}
