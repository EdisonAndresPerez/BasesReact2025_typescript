import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface Props {
  totalPages: number;
}

const totalPagesExample = 5; // Example total pages

const CustomPagination = ({ totalPages }: Props) => {
  return (
    <div className="flex items-center justify-between border-t pt-6">
      <div className="text-sm text-gray-600">
        Page <span className="font-medium">1</span> of{" "}
        <span className="font-medium">3</span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            variant={totalPagesExample == index + 1 ? "default" : "outline"}
            size="sm"
          >
            {" "}
            {index + 1}{" "}
          </Button>
        ))}

        <div className="flex gap-1">
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="outline" size="sm">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-sm text-gray-600">Go to page</div>
    </div>
  );
};

export default CustomPagination;
