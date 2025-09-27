"use client";

import { useEffect, useState } from "react";
import OrderInfo from "./OrderInfo";
import ActionsToolbar from "./ActionsToolbar";
import OrderSummary from "./OrderSummary";
import CustomerDetails from "./CustomerDetails";
import DeliveryDetails from "./DeliveryDetails";
import ClientNotes from "./ClientNotes";
import InternalNotes from "./InternalNotes";
import PaymentLink from "./PaymentLink";
import ModelsTable from "./ModelsTable";
import FilesDownload from "./FilesDownload";
import DeleteOrder from "./DeleteOrder";
import { Loader } from "lucide-react";

const QuoteEdit = ({ quoteId }) => {
  // console.log("quoteID :", quoteId);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/company/quotes/${quoteId}/edits`);
        const data = await res.json();
        // console.log("Result data :", data)
        setOrder(data);
      } catch (err) {
        console.error("Failed to fetch order:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [quoteId]);

  if (loading || !order) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-slate-700" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded border border-gray-200">
      <OrderInfo id ={order} />
      <ActionsToolbar />
      <OrderSummary ordersummary={order} />

      {/* Customer + Delivery + Notes */}
      <div className="grid sm:grid-cols-1 md:grid-cols-4 md:divide-x">
        <CustomerDetails  customer={order} />
        <DeliveryDetails delivery={order} />
        <ClientNotes />
      </div>

      {/* Internal Notes + Payment Link */}
      <div className="border-t grid md:grid-cols-4 md:divide-x">
        <InternalNotes />
        <PaymentLink />
      </div>

      <ModelsTable quoteItems={order.QuoteItems} />
      <FilesDownload />
      <DeleteOrder />
    </div>
  );
};

export default QuoteEdit;
