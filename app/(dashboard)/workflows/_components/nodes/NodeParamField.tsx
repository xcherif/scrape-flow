"use client";

import { TaskParam, TaskParamType } from "@/types/task";
import StringParam from "@/app/(dashboard)/workflows/_components/nodes/param/StringParam";
import { useReactFlow } from "@xyflow/react";
import { AppNode } from "@/types/appNode";

function NodeParamField({
  param,
  nodeId,
}: {
  param: TaskParam;
  nodeId: string;
}) {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data.inputs?.[param.name];

  switch (param.type) {
    case TaskParamType.STRING:
      return <StringParam param={param} />;
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
}
export default NodeParamField;
