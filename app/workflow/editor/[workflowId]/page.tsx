import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import waitFor from "@/lib/helper/WaitFor";
import Editor from "../_components/Editor";

async function page({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;
  const { userId } = auth();
  if (!userId) return <div>Unauthorized</div>;

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
    },
  });

  if (!workflow) return <div>Workflow not found</div>;
  return <Editor workFlow={workflow} />;
}
export default page;
