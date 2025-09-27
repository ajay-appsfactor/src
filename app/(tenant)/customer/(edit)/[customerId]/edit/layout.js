import Sidebar from "@/components/customer/edit/Sidebar";

export default async function Layout({ children, params }) {
  const { customerId } = await params;
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Sidebar  */}
      <Sidebar customerId={customerId} />

      {/* Main content */} 
      <div className="w-full bg-white border border-gray-200 rounded">
        {children}
      </div>
    </div>
  );
}
