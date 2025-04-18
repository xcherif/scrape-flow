import { NodeProps } from "@xyflow/react";
import { memo } from "react";
import NodeCard from "@/app/(dashboard)/workflows/_components/nodes/NodeCard";
import NodeHeader from "@/app/(dashboard)/workflows/_components/nodes/NodeHeader";
import { AppNodeData } from "@/types/appNode";

const NodeComponent = memo((props: NodeProps) => {
  const nodeData = props.data as AppNodeData;
  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected}>
      <NodeHeader taskType={nodeData.type} />
    </NodeCard>
  );
});

NodeComponent.displayName = "NodeComponent";

export default NodeComponent;
