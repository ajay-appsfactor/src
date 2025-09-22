import { Lock } from "lucide-react";
// import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-red-100 rounded-full">
            <Lock className="h-10 w-10 text-red-600" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Access Denied
        </h1>
        <p className="text-gray-600 mb-6">
          You are not authorized to view this page. Please contact your
          administrator if you believe this is an error.
        </p>
        {/* <Link
          href="/super-admin/dashboard"
          className="inline-block px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg font-medium transition"
        >
          Go Back Home
        </Link> */}
      </div>
    </div>
  );
}



// export default function UnauthorizedPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-bold">
//       Access Denied – You are not authorized to view this page.
//     </div>
//   );
// }

