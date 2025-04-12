"use client";

import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Separator } from "./ui/separator";

interface Props {
  icon?: LucideIcon;
  title?: string;
  subtitle?: string;

  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}
function CustomDialogHeader(props: Props) {
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
          {props.icon && (
            <props.icon
              size={30}
              className={cn("stroke-primary", props.iconClassName)}
            />
          )}
          {props.title && (
            <p className={cn("text-primary text-xl", props.titleClassName)}>
              {props.title}
            </p>
          )}
          {props.subtitle && (
            <p
              className={cn(
                "text-muted-foreground text-sm",
                props.subtitleClassName
              )}
            >
              {props.subtitle}
            </p>
          )}
        </div>
      </DialogTitle>
      <Separator />
    </DialogHeader>
  );
}
export default CustomDialogHeader;
