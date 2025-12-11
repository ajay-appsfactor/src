import QuoteTable from "@/components/customer/quote-table/QuoteTable"; 

export const metadata = {
  title: "Customer | View Projects",
};

export default async function QuoteTablePage({params}) {
  const { customerId } = await params;
  return (
    <section className="w-full max-w-8xl mx-auto">
      <div className="flex items-center justify-start gap-4 px-6">
        <h2 className="text-lg font-semibold text-gray-800">View Projects</h2>
      </div>
      <QuoteTable userId={customerId} />
    </section>
  );
}
