export function HomeCard() {
    return (
      <article className="flex flex-col items-start pt-2 pr-16 pb-3.5 pl-3 mt-8 max-w-full rounded-xl border border-solid bg-amber-50 border-[#EEECDE] w-[400px] max-md:pr-5">
        <div className="flex gap-3.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/dd308eb83c5be0417d389a12bcf08cfaead78a54ad82efad231dc8ae625e6a12?placeholderIfAbsent=true"
            alt="Home"
            className="object-contain shrink-0 aspect-square w-[50px]"
          />
          <div className="flex flex-col my-auto">
            <h4 className="text-xl font-bold">Greenwood Residence</h4>
            <p className="self-start mt-2.5 text-base font-medium">
              123 Eco Street, London, UK
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 ml-2.5 text-xs">
          <div className="flex flex-col items-start self-start">
            <h5 className="text-sm font-medium">Dwellers:</h5>
            <ul className="mt-3">
              <li className="self-stretch">Lelah Nickols (Home Manager)</li>
              <li className="mt-2">Nicolas Jackson (Resident)</li>
              <li className="mt-2">Robert b. lewis (Guest)</li>
              <li className="mt-1.5 font-thin">more ...</li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="text-sm font-medium">Devices:</h5>
            <ul className="mt-3">
              <li>Living Room Lights</li>
              <li className="mt-2">Kitchen AC</li>
              <li className="mt-2.5">Smart Thermostat</li>
              <li className="self-stretch mt-2.5">Living Room Ceiling Fan</li>
              <li className="mt-2.5 font-thin">more ...</li>
            </ul>
          </div>
        </div>
      </article>
    );
  }