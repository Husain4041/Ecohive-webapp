interface RoomCardProps {
    name: string;
    icon: string;
  }
  
  export function RoomCard({ name, icon }: RoomCardProps) {
    return (
      <article className="px-4 py-2.5 mt-2 mb-5 w-20 h-20 text-xs whitespace-nowrap rounded-xl border border-solid bg-amber-50 bg-opacity-50 border-[#EEECDE]">
        <img
          src={icon}
          alt={name}
          className="object-contain w-10 aspect-square max-md:mr-1.5"
        />
        <h3 className="mt-2">{name}</h3>
      </article>
    );
  }