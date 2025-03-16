import { HomeCard } from "./HomeCard";

export function HomeManagement() {
  return (
    <section className="relative">
      <h2 className="self-start mt-6 text-base font-semibold max-md:ml-0.5">
        Manage Homes
      </h2>
      <div className="flex flex-col py-6 pr-20 pl-7 mt-5 bg-amber-50 rounded-xl max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
        <h3 className="text-base font-semibold">Homes</h3>
        <HomeCard />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center w-12 h-12 bg-amber-50 rounded-full shadow-md border border-gray-300">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/721344af5d33d63e8c28b2eafe23084162c6adbb6d379002ef9dd447777e643c?placeholderIfAbsent=true"
          alt="Add"
          className=" z-10 self-center w-[25px]"
        />
      </div>
    </section>
  );
}