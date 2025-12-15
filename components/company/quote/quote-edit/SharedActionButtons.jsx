"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Tiptap from "./Tiptap";
import { generatePDF } from "@/utils/pdfGenerator";
import {  toast } from "react-toastify";

const SharedActionButtons = ({ type, data, showEmail = false }) => {
  const [open, setOpen] = useState(false);

  // VIEW
  const handleView = () => generatePDF({ type, data, download: false });

  // DOWNLOAD
  const handleDownload = () => generatePDF({ type, data, download: true });

  // EMAIL
  const [emailTo, setEmailTo] = useState(data.customer_email || "");
  const [subject, setSubject] = useState(
    `${type} for Order id is ${data.quote_item_id}`
  );

  const [message, setMessage] = useState(`
<div style="font-family: Arial, sans-serif; font-size: 5px; line-height: 1.5; color: #333;">
  <p>Hello ${data.billing_name},</p> 
  <br />
  <p>Thank you for your order! Please see attached invoice.</p>
  <p>
    Shipping Method:<br/>
    Tracking Number:
  </p>
  <br />


  <p>
    Jonh Doe | Accountant | 3DQUOTEPRO | ISO 9001:2015 | ITAR Certified<br/>
    <a href="https://www.3dquotepro.com" style="color: #1a73e8; text-decoration: none;">www.3dquotepro.com</a><br/>
    Direct: 877.238.7907 | Fax: 512.524.3638 | <a href="mailto:accounting@3dquotepro.com" style="color: #1a73e8;">accounting@3dquotepro.com</a><br/>
    5988 Edmond Street, Las Vegas, NV 89118
  </p>
  <br />
  <p>
    Payment by check please mail to the above address<br/>
    ACH info please email <a href="mailto:accounting@3dquotepro.com" style="color: #1a73e8;">accounting@3dquotepro.com</a>
  </p>
  
  <p>
    Services: <br />
    CNC, Sheet Metal, Laser Cutting, Water Jet Cutting, Urethanes, SLA, FDM, SLS, DMLS, Polyjet, Metal Castings, Metal & Plastic Prototype & Production Tooling & Molding
  </p>
    <br />
  <p>Regards,<br/>3DQUOTEPRO</p>
</div>
`);

  const sendEmail = () => {
    const link = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    // window.location.href = link;
    toast.success("Email sent successfully."); 
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 text-center">
      <h4 className="text-sm text-center font-semibold">{`Generate ${type}`}</h4>
      <Button
        size="sm"
        variant="outline"
        className="cursor-pointer"
        onClick={handleView}
      >
        VIEW
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="cursor-pointer"
        onClick={handleDownload}
      >
        DOWNLOAD
      </Button>

      {showEmail && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" className="cursor-pointer">
              EMAIL CUSTOMER
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-[95vw] sm:!max-w-screen-xl w-full p-4">
            <DialogHeader>
              <DialogTitle>Send {type} Email</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-2 mt-2">
              <div className="mb-2">
                <Label htmlFor="email" className="block mb-2">
                  Email <span className="text-rose-500">*</span>
                </Label>
                <Input
                  placeholder="Email"
                  value={emailTo}
                  onChange={(e) => setEmailTo(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <Label htmlFor="email" className="block mb-2">
                  Subject <span className="text-rose-500">*</span>
                </Label>
                <Input
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <Label htmlFor="email" className="block mb-2">
                  Message <span className="text-rose-500">*</span>
                </Label>
                <div
                  className="border rounded-md overflow-auto"
                  style={{
                    maxHeight: "400px", 
                    minHeight: "100px",
                    
                  }}
                >
                  <Tiptap value={message} onChange={setMessage} />
                </div>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>
              <Button onClick={sendEmail} className="cursor-pointer">
                Send Email
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default SharedActionButtons;
