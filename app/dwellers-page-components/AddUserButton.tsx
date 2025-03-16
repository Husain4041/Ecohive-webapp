export const AddUserButton = () => {
  return (
    <button className="flex gap-10 self-end py-6 pr-2 pl-8 text-xl font-semibold text-white rounded-xl bg-[#9CAD88] max-md:pl-5">
      <span className="my-auto">Add Users</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/0ece9671dd11475bef09d11b63b6973084ec7d3ee9485e817d4409fa6908cf00?placeholderIfAbsent=true"
        alt="Add"
        className="object-contain shrink-0 aspect-square rounded-[40px] w-[35px]"
      />
    </button>
  );
};