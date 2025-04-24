"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ParamProps } from "@/types/appNode";
import { useId } from "react";

function StringParam({ param }: ParamProps) {
  const id = useId();
  return (
    <div className="p-1 space-y-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-1">*</p>}
      </Label>
      <Input id={id} />
      {param.helperText && (
        <p className="text-xs text-muted-foreground px-2">{param.helperText}</p>
      )}
    </div>
  );
}
export default StringParam;
