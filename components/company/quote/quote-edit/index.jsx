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
import { Loader, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddNewItem from "./AddNewItem/AddNewItem";
import EditDetailsModal from "./EditDetailsModal";

const QuoteEdit = ({ quoteId }) => {
  // console.log("quoteID :", quoteId);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const handleEdit = (type, data) => {
    setModalType(type);
    setModalData({ ...data, quoteId });
    setModalOpen(true);
  };

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/company/quotes/${quoteId}/edits`);
      const data = await res.json();
      setOrder(data);
    } catch (err) {
      console.error("Failed to fetch order:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
      <OrderInfo id={order} />
      <ActionsToolbar data={order} />
      <OrderSummary ordersummary={order} />

      {/* Customer + Delivery + Notes */}
      <div className="grid sm:grid-cols-1 md:grid-cols-4 md:divide-x">
        <CustomerDetails customer={order} onEdit={handleEdit} />
        <DeliveryDetails delivery={order} onEdit={handleEdit} />
        <ClientNotes />
      </div>

      {/* Internal Notes + Payment Link */}
      <div className="border-t grid md:grid-cols-4 md:divide-x">
        <InternalNotes />
        <PaymentLink />
      </div>

      <ModelsTable quoteItems={order.QuoteItems} />
      <FilesDownload />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
        <DeleteOrder quoteId={quoteId} />

        <AddNewItem quoteId={quoteId} onSuccess={fetchOrder} >
          <Button
            size="sm"
            variant="secondary"
            className="flex items-center gap-2 text-gray-800 hover:text-gray-900 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Item</span>
          </Button>
        </AddNewItem>
      </div>

      {/*  Modal  */}
      <EditDetailsModal
        open={modalOpen}
        type={modalType}
        data={modalData}
        onClose={() => setModalOpen(false)}
        // onSave={(type, updatedData) => {
        //   if (type === "billing") {
        //     setOrder((prev) => ({
        //       ...prev,
        //       customer: { ...prev.customer, ...updatedData },
        //     }));
        //   }

        //   if (type === "delivery") {
        //     setOrder((prev) => ({
        //       ...prev,
        //       deliveryDetails: { ...prev.deliveryDetails, ...updatedData },
        //     }));
        //   }

        //   setModalOpen(false);
        // }}

        onSave={(type, updatedData) => {
          setOrder((prev) => {
            if (type === "billing") {
              return { ...prev, ...updatedData };
            }
            if (type === "delivery") {
              return { ...prev, ...updatedData };
            }
            return prev;
          });
          setModalOpen(false);
        }}
      />
    </div>
  );
};

export default QuoteEdit;
