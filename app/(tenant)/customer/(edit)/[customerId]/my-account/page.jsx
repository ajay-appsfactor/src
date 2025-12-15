import MyAccount from "@/components/customer/my-account/MyAccount";

export const metadata = {
  title: "Customer | My Account",
};

export default async function QuoteTablePage({params}) {
  const { customerId } = await params;
  return (
    <section className="w-full max-w-8xl mx-auto">
      <MyAccount userId={customerId} />
    </section>
  );
}
