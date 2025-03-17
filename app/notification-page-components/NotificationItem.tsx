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
  isNew,
}) => {
  return (
    <article className="flex gap-3 p-3 bg-amber-50 rounded-xl">
      <img src={icon} alt="" className="w-8 h-8" />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-stone-600">{title}</h3>
          <span className="text-xs text-stone-600">{time}</span>
        </div>
        <p className="mt-1 text-xs text-stone-600">{message}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[10px] text-stone-600">{date}</span>
          {isNew && (
            <span className="px-2 py-0.5 text-[10px] font-medium text-amber-50 bg-stone-600 rounded-full">
              New
            </span>
          )}
        </div>
      </div>
    </article>
  );
};