"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow } from "@prisma/client";
import { WorkflowStatus } from "@/types/Workflow";
import { cn } from "@/lib/utils";
import {
  FileTextIcon,
  MoreVertical,
  MoreVerticalIcon,
  PlayIcon,
  ShuffleIcon,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteWorkflowDialog from "@/app/(dashboard)/workflows/_components/DeleteWorkflowDialog";
import TooltipWrapper from "@/components/TooltipWrapper";

const statusColors = {
  [WorkflowStatus.DRAFT]: "bg-yellow-500 text-yellow-600",
  [WorkflowStatus.PUBLISHED]: "bg-green-500",
};

function WorkflowCard({ workFlow }: { workFlow: Workflow }) {
  const isDraft = workFlow.status === WorkflowStatus.DRAFT;
  return (
    <Card
      className="border border-separate
     shadow-sm rounded-lgoverflow-hidden hover:shadow-md dark:shadow-primary/30"
    >
      <CardContent className="p-4 flex items-center justify-between h-[100px]">
        <div className="flex justify-end items-center space-x-3">
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 bg-red-500 rounded-full",
              statusColors[workFlow.status as WorkflowStatus]
            )}
          >
            {isDraft ? (
              <FileTextIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-muted-foreground flex items-center font-semibold">
              <Link
                href={`/workflows/${workFlow.id}`}
                className="hover:underline"
              >
                {workFlow.name}
              </Link>
              {isDraft && (
                <span className="ml-2 font-medium text-xs rounded-full bg-yellow-100 text-yellow-800 px-2 py-0.5">
                  Draft
                </span>
              )}
            </h3>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href={`/workflows/editor/${workFlow.id}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "flex items-center gap-2"
            )}
          >
            <ShuffleIcon size={16} />
            Edit
          </Link>
          <WorkflowActions
            workflowName={workFlow.name}
            workflowId={workFlow.id}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function WorkflowActions({
  workflowName,
  workflowId,
}: {
  workflowName: string;
  workflowId: string;
}) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  return (
    <>
      <DeleteWorkflowDialog
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        workflowName={workflowName}
        workflowId={workflowId}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"sm"}>
            <TooltipWrapper content={"More options"}>
              <div className="w-full h-full flex items-center justify-center">
                <MoreVerticalIcon size={16} />
              </div>
            </TooltipWrapper>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-2 text-destructive"
            onSelect={() => setShowDeleteDialog((prev) => !prev)}
          >
            <TrashIcon size={16} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default WorkflowCard;
