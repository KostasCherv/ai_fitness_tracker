const CornerElements = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 animate-pulse-glow"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-primary/40 animate-pulse-glow" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-primary/40 animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>
    </>
  );
};
export default CornerElements;
