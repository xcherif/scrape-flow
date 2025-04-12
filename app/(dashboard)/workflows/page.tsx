import { getWorkflowsForUser } from "@/actions/getWorkflowsForUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, InboxIcon } from "lucide-react";
import { Suspense } from "react";

function page() {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">
            Manage your workflows and tasks
          </p>
        </div>
      </div>
      <div className="h-full py-6">
        <Suspense fallback={<UserWorkFlowSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
}

function UserWorkFlowSkeleton() {
  return (
    <div className="space-y-2">
      <div className="space-y-4">
        {[1, 2, 3, 4].map((_, index) => (
          <Skeleton key={index} className="h-32 w-full" />
        ))}
      </div>
    </div>
  );
}

async function UserWorkflows() {
  try {
    const workFlows = await getWorkflowsForUser();
    if (workFlows.length === 0) {
      return (
        <div className="flex flex-col items-center mt-10 h-full gap-4">
          <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
            <InboxIcon size={40} className="stroke-primary" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-bold">No workflows found</p>
            <p className=" text-sm text-muted-foreground">
              Click the button bellow to create a new workflow
            </p>
          </div>
        </div>
      );
    }
    return <div className=""></div>;
  } catch (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="w-4 h-4" />
        <AlertTitle>Error loading workflows</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }
}
export default page;
