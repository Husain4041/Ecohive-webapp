"use client";
import React, { useState, useRef, useEffect } from "react";
import { Sidebar } from "../Sidebar";
import { NotificationItem } from "./NotificationItem";
import { notifications } from "../data/notifications";
import { Notification } from "../types/notification";

export default function Notifications() {
  const [displayedNotifications, setDisplayedNotifications] = useState<Notification[]>(notifications.slice(0, 5));
  const [hasMore, setHasMore] = useState(notifications.length > 5);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const notificationsContainerRef = useRef<HTMLDivElement>(null);

  const checkOverflow = () => {
    if (notificationsContainerRef.current) {
      const { scrollHeight, clientHeight } = notificationsContainerRef.current;
      setIsOverflowing(scrollHeight > clientHeight);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [displayedNotifications]);

  const loadMore = () => {
    const currentLength = displayedNotifications.length;
    if (currentLength === notifications.length) {
      // Show Less
      setDisplayedNotifications(notifications.slice(0, 5));
      setHasMore(true);
    } else {
      // Load More
      const nextItems = notifications.slice(currentLength, currentLength + 5);
      setDisplayedNotifications(prev => [...prev, ...nextItems]);
      setHasMore(currentLength + 5 < notifications.length);
    }
  };

  const buttonText = displayedNotifications.length === notifications.length 
    ? "Show Less" 
    : "Load More";


  return (
    <main className="h-screen overflow-hidden px-12 pt-6 pb-4 rounded-xl bg-[#EEECDE] max-md:px-5">
      <div className="flex gap-3 h-full max-md:flex-col">
        <aside className="w-[18%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </aside>

        <section className="ml-4 w-[82%] flex flex-col h-full max-md:ml-0 max-md:w-full">
          <div className="flex flex-col h-full">
            <h1 className="text-xl font-semibold text-black mb-4">
              Notifications
            </h1>

            <div 
              ref={notificationsContainerRef}
              className="flex-1 overflow-y-auto mt-4"
            >
              <div className="space-y-4">
                {displayedNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    {...notification}
                  />
                ))}
              </div>
            </div>

            <button 
            onClick={loadMore}
            className="self-center px-8 py-3 mt-4 text-sm font-semibold text-black rounded-xl border border-solid bg-opacity-50 border-stone-600 w-[200px] max-md:px-4 hover:bg-opacity-75 transition-all"
            style={{ backgroundColor: "rgba(217, 217, 217, 0.45)" }}
          >
            {buttonText}
          </button>
            
          </div>
        </section>
      </div>
    </main>
  );
}

