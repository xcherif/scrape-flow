import { cn } from "@/lib/utils";
import { TaskParamType } from "@/types/task";
import { Position } from "@xyflow/react";
import { Handle } from "@xyflow/react";

function NodeInputs({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2 divide-y">{children}</div>;
}
export default NodeInputs;

export function NodeInput({ input }: { input: any }) {
  return (
    <div className="flex justify-start relative p-3 bg-secondary w-full">
      <pre>{JSON.stringify(input, null, 4)}</pre>
      <Handle
        id={input.name}
        type="target"
        position={Position.Left}
        className={cn(
          "!bg-muted-foreground !border-2 !border-background !-left-2 !w-4 !h-4"
        )}
      />
    </div>
  );
}
