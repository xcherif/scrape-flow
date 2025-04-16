"use client";

import { Workflow } from "@prisma/client";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";
import "@xyflow/react/dist/style.css";

function Editor({ workFlow }: { workFlow: Workflow }) {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <section className="flex h-full overflow-auto">
          <FlowEditor workFlow={workFlow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
}
export default Editor;
