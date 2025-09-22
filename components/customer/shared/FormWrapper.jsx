import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function FormWrapper({
  title,
  backHref,
  backLabel,
  customerName,
  children,
}) {
  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-2xl w-full">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800">
            {customerName && <span>{customerName}</span>} - {title}
          </h2>
          <Button asChild variant="outline">
            <Link href={backHref}>
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>
          </Button>
        </div>
      </div>
      <hr />
      <div className="px-6 py-2 mt-2 w-full">{children}</div>
    </div>
  );
}
