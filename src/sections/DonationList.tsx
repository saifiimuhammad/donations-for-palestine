import DonationCard from "@/components/DonationCard";
import { donations } from "@/constants/donations";

const DonationList = () => {
  return (
    <div className="w-full min-h-screen pt-12 pb-4 px-4 sm:px-12 lg:px-22">
      <h1 className="text-2xl sm:text-3xl font-bold font-roboto mb-6">
        Verified Trusts
      </h1>
      <div className="donation-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map((value) => (
          <DonationCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};
export default DonationList;
