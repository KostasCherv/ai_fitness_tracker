const TerminalOverlay = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 animate-fadeIn" style={{ animationDelay: "1s" }}>
      <div className="relative bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded-lg p-3 overflow-hidden font-mono card-glow">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-2 border-b border-border pb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <p className="text-xs text-primary text-glow">SYSTEM ACTIVE</p>
          </div>
          <p className="text-xs text-muted-foreground">ID:78412.93</p>
        </div>

        <p className="text-sm text-foreground mb-2 tracking-tight">
          <span className="text-primary text-glow">/</span> WORKOUT ANALYSIS COMPLETE
        </p>

        <div className="space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center hover:text-primary transition-colors">
            <div className="text-primary mr-2 text-glow">01</div>
            <span>30 min strength training (upper body)</span>
          </div>
          <div className="flex items-center hover:text-primary transition-colors">
            <div className="text-primary mr-2 text-glow">02</div>
            <span>20 min cardio (moderate intensity)</span>
          </div>
          <div className="flex items-center hover:text-primary transition-colors">
            <div className="text-primary mr-2 text-glow">03</div>
            <span>10 min flexibility (recovery)</span>
          </div>
        </div>
        
        {/* Animated cursor */}
        <div className="absolute bottom-2 right-3 w-2 h-4 bg-primary animate-pulse"></div>
      </div>
    </div>
  );
};
export default TerminalOverlay;
