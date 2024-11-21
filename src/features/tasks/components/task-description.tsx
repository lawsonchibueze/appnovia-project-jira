// import { useState } from "react";
// import { PencilIcon, XIcon } from "lucide-react";

// import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { DottedSeparator } from "@/components/dotted-separator";

// import { Task } from "../types";
// import { useUpdateTask } from "../api/use-update-task";

interface TaskDescriptionProps {
  desc: string;
  setDesc: (desc: string) => void;
}

export const TaskDescription = ({ desc, setDesc }: TaskDescriptionProps) => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [value, setValue] = useState(task.description);

  // const { mutate, isPending } = useUpdateTask();

  // const handleSave = () => {
  //   mutate({
  //     json: { description: value },
  //     param: { taskId: task.$id }
  //   }, {
  //     onSuccess: () => {
  //       setIsEditing(false);
  //     }
  //   });
  // };

  return (
    <div className="p-4 border rounded-lg">
      {/* <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Overview</p>
        <div
          onClick={() => setIsEditing((prev) => !prev)}
          size="sm"
          variant="secondary"
        >
          {isEditing ? (
            <XIcon className="size-4 mr-2" />
          ) : (
            <PencilIcon className="size-4 mr-2" />
          )}
          {isEditing ? "Cancel" : "Edit"}
        </div>
      </div> */}
      {/* <DottedSeparator className="my-4" />
      {isEditing ? ( */}
      <div className="flex flex-col gap-y-4">
        <Textarea
          placeholder="Add a description..."
          value={desc}
          rows={4}
          onChange={(e) => setDesc(e.target.value)}
          // disabled={isPending}
        />
        {/* <Button
            size="sm"
            className="w-fit ml-auto"
            onClick={handleSave}
            disabled={isPending}
          >
            {isPending ? "Saving..." : "Save Changes"}
          </Button> */}
      </div>
      {/* ) : (
        <div>
          {desc || (
            <span className="text-muted-foreground">No description set</span>
          )}
        </div>
      )} */}
    </div>
  );
};
