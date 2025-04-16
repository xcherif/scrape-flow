import { Loader2Icon } from "lucide-react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <Loader2Icon size={30} className="animate-spin" />
    </div>
  );
}
export default Loading;
