import { UserResource } from "@clerk/types";
import CornerElements from "./CornerElements";

const ProfileHeader = ({ user }: { user: UserResource | null | undefined }) => {
  if (!user) return null;
  return (
    <div className="mb-10 relative backdrop-blur-sm border border-border p-6 card-glow animate-fadeIn">
      <CornerElements />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative group">
          {user.imageUrl ? (
            <div className="relative w-24 h-24 overflow-hidden rounded-lg border border-border group-hover:border-primary/50 transition-colors">
              <img
                src={user.imageUrl}
                alt={user.fullName || "Profile"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ) : (
            <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
              <span className="text-3xl font-bold text-primary text-glow">
                {user.fullName?.charAt(0) || "U"}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-background animate-pulse"></div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h1 className="text-3xl font-bold tracking-tight animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">{user.fullName}</span>
            </h1>
            <div className="flex items-center bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded px-3 py-1 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></div>
              <p className="text-xs font-mono text-primary text-glow">USER ACTIVE</p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 my-2 animate-fadeIn" style={{ animationDelay: "0.3s" }}></div>
          <p className="text-muted-foreground font-mono animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
