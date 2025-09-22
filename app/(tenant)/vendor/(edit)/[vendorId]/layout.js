
import Sidebar from "@/components/vendor/shared/Sidebar";

export default async  function Layout({ children, params }) {
   const { vendorId } = await  params;
  return (
    <div className="flex flex-col md:flex-row gap-4 ">
      <Sidebar vendorId={vendorId} />
      <div className="flex-1 bg-white border border-gray-200 rounded overflow-auto">
        {children}
      </div>
    </div>
  );
}
