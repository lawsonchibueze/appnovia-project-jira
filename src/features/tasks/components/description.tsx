import { Textarea } from "@/components/ui/textarea";

interface TaskDescriptionProps {
  desc: string;
  setDesc: (desc: string) => void;
}

export const Description = ({ desc, setDesc }: TaskDescriptionProps) => {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex flex-col gap-y-4">
        <Textarea
          placeholder="Add a description..."
          value={desc}
          rows={4}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
    </div>
  );
};
