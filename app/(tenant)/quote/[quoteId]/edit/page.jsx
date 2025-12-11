import { notFound } from "next/navigation";
import QuoteEdit from '@/components/company/quote/quote-edit';


export const metadata = {
  title: "Customer | Quote Edit",
};

export default async function QuoteEditPage({params}) { 
  const { quoteId } = await params;

  if (!quoteId) return notFound();

  return (
    <main>
      <QuoteEdit  quoteId={quoteId} />
    </main>
  );
}


