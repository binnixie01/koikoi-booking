import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded-md bg-white/20 relative group  block p-2 h-full w-full", className)}
      {...props} />)
  );
}

export { Skeleton }
