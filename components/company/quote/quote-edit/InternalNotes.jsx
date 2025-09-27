const InternalNotes = () => {
  return (
    <div className="p-4 md:col-span-2">
      <h4 className="text-gray-800 font-semibold mb-2">Internal Notes</h4>
      <div className="text-sm text-gray-700 space-y-1">
        <p>Those are the hex codes of the colors to be used.</p>
        <div className="text-blue-800 text-sm font-semibold cursor-pointer">
          Edit notes
        </div>
      </div>
    </div>
  );
};

export default InternalNotes;
