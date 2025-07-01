"use client";

import { useEffect, useState } from "react";
import { CheckIcon, XIcon, AlertTriangleIcon } from "lucide-react";

interface PlanNotificationProps {
  message: string;
  type: "success" | "error" | "warning";
  onClose: () => void;
  duration?: number;
}

const PlanNotification = ({ 
  message, 
  type, 
  onClose, 
  duration = 3000 
}: PlanNotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckIcon className="w-5 h-5" />;
      case "error":
        return <XIcon className="w-5 h-5" />;
      case "warning":
        return <AlertTriangleIcon className="w-5 h-5" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-500/20 border-green-500/30 text-green-500";
      case "error":
        return "bg-red-500/20 border-red-500/30 text-red-500";
      case "warning":
        return "bg-yellow-500/20 border-yellow-500/30 text-yellow-500";
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`flex items-center gap-3 p-4 rounded-lg border backdrop-blur-sm ${getStyles()}`}
      >
        {getIcon()}
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="ml-2 hover:opacity-70 transition-opacity"
        >
          <XIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PlanNotification; 