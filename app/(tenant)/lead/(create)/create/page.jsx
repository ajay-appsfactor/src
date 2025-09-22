import CreateLeadForm from "@/components/lead/create/CreateLeadForm";
// import LeadForm from "@/components/lead/edit/LeadForm";

export const metadata = {
  title: "Lead | Lead Information",
};




export default function CreateLeadePage() {
  return (
    <main>
      <CreateLeadForm />
      {/* <LeadForm /> */}
    </main>
  );
}