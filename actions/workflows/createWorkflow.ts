"use server";

import prisma from "@/lib/prisma";
import { createWorkflowType, createWorkflowSchema } from "@/schema/workflow";
import { WorkflowStatus } from "@/types/Workflow";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createWorkflow(form: createWorkflowType) {
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) {
    return new Error("Invalid form data");
  }
  const { userId } = auth();

  if (!userId) {
    return new Error("Unauthenticated");
  }

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: "TODO",
      ...data,
    },
  });

  if (!result) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}
