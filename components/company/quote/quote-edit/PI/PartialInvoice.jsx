import SharedActionButtons from "../SharedActionButtons";

export default function PartialInvoice({ data }) {
  return <SharedActionButtons type="PI" data={data} showEmail />;
}
