import SharedActionButtons from "../SharedActionButtons";

export default function ConfirmationOrder({ data }) {
  return <SharedActionButtons type="CO" data={data} showEmail />;
}
