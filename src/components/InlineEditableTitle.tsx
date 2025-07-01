"use client";

import { useState, useRef, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { EditIcon, CheckIcon, XIcon, Loader2Icon } from "lucide-react";

interface InlineEditableTitleProps {
  planId: string;
  userId: string;
  initialTitle: string;
  onUpdate?: () => void;
  className?: string;
}

const InlineEditableTitle = ({ 
  planId, 
  userId, 
  initialTitle, 
  onUpdate,
  className = "" 
}: InlineEditableTitleProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const updatePlanName = useMutation(api.plans.updatePlanName);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = async () => {
    if (!title.trim() || title.trim() === initialTitle) {
      setIsEditing(false);
      setTitle(initialTitle);
      return;
    }

    setIsSaving(true);
    try {
      await updatePlanName({ 
        userId, 
        planId: planId as any, 
        name: title.trim() 
      });
      setIsEditing(false);
      onUpdate?.();
    } catch (error) {
      console.error("Failed to update plan name:", error);
      setTitle(initialTitle);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(initialTitle);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="flex-1 bg-transparent border border-primary/30 rounded px-2 py-1 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 font-semibold"
          maxLength={50}
        />
        <div className="flex items-center gap-1">
          {isSaving ? (
            <Loader2Icon className="w-4 h-4 animate-spin text-primary" />
          ) : (
            <>
              <button
                onClick={handleSave}
                className="p-1 hover:bg-primary/20 rounded transition-colors"
                title="Save"
              >
                <CheckIcon className="w-4 h-4 text-green-500" />
              </button>
              <button
                onClick={handleCancel}
                className="p-1 hover:bg-red-500/20 rounded transition-colors"
                title="Cancel"
              >
                <XIcon className="w-4 h-4 text-red-500" />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <span className="font-semibold text-foreground">{title}</span>
      <button
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-primary/20 rounded transition-all duration-200"
        title="Edit title"
      >
        <EditIcon className="w-4 h-4 text-primary" />
      </button>
    </div>
  );
};

export default InlineEditableTitle; 