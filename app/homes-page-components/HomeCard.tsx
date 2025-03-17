import * as React from "react";

interface HomeCardProps {
  name: string;
  address: string;
  //imageUrl: string;
}

export const HomeCard: React.FC<HomeCardProps> = ({
  name,
  address,
  //imageUrl,
}) => {
  return (
    <article className="flex items-center p-6 bg-amber-50 rounded-xl w-[300px]">
      <div className="flex flex-col text-center w-full">
        <div className="flex flex-row items-center gap-4">
          
            <h2 className="text-xl font-bold text-stone-600">
            {name}
            </h2>
        </div>
        <div className="mt-4">
            <p className="text-base font-medium text-stone-600">{address}</p>
        </div>
      </div>
    </article>
  );
};

// w-[267px] max-sm:w-[90%]