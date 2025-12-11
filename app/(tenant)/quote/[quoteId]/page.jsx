import { notFound } from "next/navigation";
import QuoteItemsForm from "@/components/customer/quote-item/page";

export const metadata = {
  title: "Customer | Quote Item",
};


const QuoteItemPage = async ({ params }) => {
  const { quoteId } = await params;
  // console.log("Id check :", await params);

  if (!quoteId) return notFound();

  return (
    <main>
      {/* Render one table with all items */}
      <QuoteItemsForm quoteId={quoteId} />
    </main>
  );
};

export default QuoteItemPage;
