import React from "react";

interface NotificationItemProps {
  icon: string;
  title: string;
  time: string;
  message: string;
  date: string;
  isNew?: boolean;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  icon,
  title,
  time,
  message,
  date,
  isNew = false,
}) => {
  return (
    <article className="flex gap-2.5 items-start px-7 py-5 text-black bg-amber-50 rounded-xl max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
      <div
        className={`flex shrink-0 my-auto rounded-full h-[15px] w-[15px] ${isNew ? "bg-black" : "bg-black bg-opacity-30"}`}
      />
      <img
        src={icon}
        alt=""
        className="object-contain shrink-0 aspect-square w-[60px]"
      />
      <div className="flex flex-col self-stretch my-auto">
        <h3 className="text-xl font-semibold">{title}</h3>
        <time className="self-start mt-3.5 text-base font-medium">{time}</time>
      </div>
      <div className="flex flex-col flex-1 self-stretch my-auto text-base">
        <p className="self-start mt-3">{message}</p>
        <time className="self-end mt-4 font-medium">{date}</time>
      </div>
    </article>
  );
};