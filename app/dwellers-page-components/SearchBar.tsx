export const SearchBar = () => {
  return (
    <div className="flex flex-wrap gap-10 py-3 pr-5 pl-20 text-xl text-black rounded-3xl max-md:pl-5 max-md:max-w-full" style={{ backgroundColor: "rgba(255, 255, 255, 0.63)" }}>
      <input
        type="text"
        placeholder="Search for dwellers"
        className="my-auto bg-transparent outline-none"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/29551108171387b2e4304d35741259b4fe1dcd8754496b1ee06181904b89c2ec?placeholderIfAbsent=true"
        alt="Search"
        className="object-contain shrink-0 aspect-square w-[35px]"
      />
    </div>
  );
};