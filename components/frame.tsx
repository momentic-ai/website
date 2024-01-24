import { cn } from "@/lib/utils";

export const Frame = ({
  children,
  className,
  border = false,
  fullWidth = false,
  transparent = false,
  center = false,
  caption,
}: {
  children: React.ReactNode;
  className?: string;
  border?: boolean;
  fullWidth?: boolean;
  transparent?: boolean;
  center?: boolean;
  caption?: string;
}) => {
  const frame = (
    <>
      <div
        className={cn(
          "my-4",
          border &&
            "p-1 pb-0 bg-gradient-to-tr from-blue-300/50 via-green-200/50 to-yellow-300/50 inline-block rounded-md sm:rounded-xl",
          className
        )}
      >
        <div
          className={cn(
            "inline-block rounded-md sm:rounded-xl overflow-hidden bg-primary/5 max-w-2xl [&>*]:mt-0 [&>*]:-mb-1",
            fullWidth && "max-w-full",
            transparent && "bg-transparent"
          )}
        >
          {children}
        </div>
      </div>
      {caption && (
        <div className="text-center text-xs">
          <i>{caption}</i>
        </div>
      )}
    </>
  );
  if (center) {
    return (
      <span className="flex justify-center items-center flex-col">{frame}</span>
    );
  }
  return frame;
};
