import * as React from "react";

interface HomeCardProps {
  name: string;
  address: string;
  imageUrl: string;
}

export const HomeCard: React.FC<HomeCardProps> = ({
  name,
  address,
  imageUrl,
}) => {
  return (
    <article className="flex items-center p-3.5 bg-amber-50 rounded-xl w-auto h-[16.67%] max-w-[250px]">
      <div className = "flex flex-col text-center">
        <div className="flex flex-row">
            <img src={imageUrl} alt="Home" className="h-[40%] w-[36%]" />
            <h2 className="mx-0 my-2.5 text-xl font-bold text-stone-600">
            {name}
            </h2>
        </div>
        <div>
            <p className="text-base font-medium text-stone-600">{address}</p>
        </div>
      </div>
    </article>
  );
};

// w-[267px] max-sm:w-[90%]