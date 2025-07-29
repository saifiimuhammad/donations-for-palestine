"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DonationType } from "@/constants/donations";

const DonationCard = ({ value }: { value: DonationType }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % value.image.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [value.image.length]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition hover:shadow-xl flex flex-col">
      <div className="relative w-full h-48 sm:h-56 lg:h-64">
        <Image
          src={value.image[imageIndex]}
          alt={value.name}
          fill
          className="object-cover w-full h-full transition-all duration-500 ease-in-out"
        />
        <Image
          src={value.logo}
          alt={`${value.name} logo`}
          width={40}
          height={40}
          className="object-contain absolute top-4 left-4 shadow bg-white rounded-full p-1"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-roboto">
          {value.name}
        </h2>
        <p className="text-sm text-gray-600 mb-4">{value.description}</p>

        <div className="mt-auto">
          <Link
            href={value.link}
            target="_blank"
            className="inline-block text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
