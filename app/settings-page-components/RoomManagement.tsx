import { RoomCard } from "./RoomCard";

export function RoomManagement() {
  const rooms = [
    {
      name: "Living room",
      icon: "https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/558a0e50a42cd0d50f9d1c14139df0f95dddc7c45dfed34686acc554eb33e94e?placeholderIfAbsent=true",
    },
    {
      name: "Bedroom",
      icon: "https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/c405af47a7457ffea9ac5a878137832349c33d4285cd10eb5168a5a1dae07423?placeholderIfAbsent=true",
    },
    {
      name: "Kitchen",
      icon: "https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/6398f4c7cf800dd017de9857ae743d9022f6054ae1dcd5d2030014b10f574fb7?placeholderIfAbsent=true",
    },
  ];

  return (
    // <section>
    //   <h2 className="self-start mt-4 text-base font-semibold">Add Rooms</h2>
    //   <div className="flex flex-col pt-6 pr-20 pl-7 mt-6 w-full font-semibold bg-amber-50 rounded-xl max-md:px-5 max-md:max-w-full">
    //     <div className="flex gap-10 items-end self-start">
    //       {rooms.map((room, index) => (
    //         <RoomCard key={index} name={room.name} icon={room.icon} />
    //       ))}
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-center">
    //     <div className="flex justify-center items-center w-12 h-12 mt-[-25] bg-amber-50 rounded-full shadow-md">
    //       <img
    //           src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/721344af5d33d63e8c28b2eafe23084162c6adbb6d379002ef9dd447777e643c?placeholderIfAbsent=true"
    //           alt="Add"
    //           className="object-contain z-10 self-center  mb-0 aspect-square w-[35px] max-md:mb-2.5"
    //         />
    //     </div>
    //   </div>
    // </section>

      <section className="relative">
      <h2 className="self-start mt-4 text-base font-semibold">Add Rooms</h2>
      <div className="flex flex-col pt-6 pr-20 pl-7 mt-6 w-full font-semibold bg-amber-50 rounded-xl max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 items-end self-start">
          {rooms.map((room, index) => (
            <RoomCard key={index} name={room.name} icon={room.icon} />
          ))}
        </div>
        {/* Add a circular background around the plus icon */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center items-center w-12 h-12 bg-amber-50 rounded-full shadow-md border border-gray-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/721344af5d33d63e8c28b2eafe23084162c6adbb6d379002ef9dd447777e643c?placeholderIfAbsent=true"
            alt="Add"
            className="object-contain aspect-square w-[25px]"
          />
        </div>
      </div>
      </section>
  );
}