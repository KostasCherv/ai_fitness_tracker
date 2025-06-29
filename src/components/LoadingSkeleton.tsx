import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'button' | 'profile';
  lines?: number;
}

const LoadingSkeleton = ({ type = 'text', lines = 3 }: LoadingSkeletonProps) => {
  if (type === 'card') {
    return (
      <Card className="bg-card/90 backdrop-blur-sm border border-border overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full skeleton"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-muted rounded skeleton w-3/4"></div>
              <div className="h-3 bg-muted rounded skeleton w-1/2"></div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md skeleton"></div>
              <div className="flex-1 space-y-1">
                <div className="h-3 bg-muted rounded skeleton w-2/3"></div>
                <div className="h-2 bg-muted rounded skeleton w-1/2"></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (type === 'button') {
    return (
      <div className="h-10 bg-muted rounded skeleton w-32"></div>
    );
  }

  if (type === 'profile') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full skeleton"></div>
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-muted rounded skeleton w-1/3"></div>
            <div className="h-4 bg-muted rounded skeleton w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          {[...Array(lines)].map((_, i) => (
            <div key={i} className="h-4 bg-muted rounded skeleton" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
          ))}
        </div>
      </div>
    );
  }

  // Default text skeleton
  return (
    <div className="space-y-2">
      {[...Array(lines)].map((_, i) => (
        <div key={i} className="h-4 bg-muted rounded skeleton" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
      ))}
    </div>
  );
};

export default LoadingSkeleton; 