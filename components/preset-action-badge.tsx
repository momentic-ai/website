import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PresetActionBadgeProps = {
  type: "browser" | "interactive";
};

const PresetActionBadge: React.FC<PresetActionBadgeProps> = (props) => {
  return (
    <Badge
      variant="outline"
      className={cn("text-base rounded-md font-normal shadow-none", {
        "bg-blue-100 text-blue-800 border-blue-300":
          props.type === "interactive",
        "bg-orange-100 text-orange-800 border-orange-300":
          props.type === "browser",
      })}
    >
      {props.type === "browser" ? "Browser" : "Interactive"}
    </Badge>
  );
};

export default PresetActionBadge;
