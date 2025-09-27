const OrderInfo = ({id}) => {
  return (
    <>
      {/* Order Info */}
      <div className="p-4">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800">Order #{id?.quote_item_id}</h2>
        </div>
      </div>
      <hr className="mb-8" />
    </>
  );
};

export default OrderInfo;
