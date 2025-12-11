"use client";

import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Tiptap from "../Invoice/Tiptap";

const PurchaseActions = ({ data }) => {
  const [open, setOpen] = useState(false);
  // Suppose data.created_at is ISO string
  const createdAt = data.created_at ? new Date(data.created_at) : new Date();

  // Format
  const formattedDate = format(createdAt, "dd MMM yyyy, hh:mm a");

  // Convert image to Base64
  const loadImageAsBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  // Generate PDF Doc
  const generatePDFDoc = async (download = false) => {
    const doc = new jsPDF();
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - margin * 2;

    // Logo
    const logoBase64 = await loadImageAsBase64("/logo.png");
    doc.addImage(logoBase64, "PNG", margin, 8, 50, 20);

    // Header
    const rightEdge = margin + contentWidth;
    doc.setFontSize(11);
    const headerTexts = [
      "3D Printing / Rapid Prototyping",
      "Plastic & Metal Manufacturing",
      "Sheet Metal and Laser Cutting",
      "Production Plastic & Metal Tooling & Molding",
    ];
    const startY = 15;
    const lineHeight = 6;
    headerTexts.forEach((text, index) => {
      const y = startY + index * lineHeight;
      doc.text(text, rightEdge, y, { align: "right" });
    });

    // Line
    doc.setLineWidth(0.5);
    doc.setDrawColor(80, 170, 176);
    doc.line(margin, 40, margin + contentWidth, 40);

    // Quote / Bill / Ship
    let sectionY = 50;
    const colWidth = contentWidth / 3;
    const col1X = margin;
    const col2X = margin + colWidth;
    const col3X = margin + colWidth * 2;

    // Column 1: Quote Info
    doc.setTextColor(80, 170, 176);
    doc.setFontSize(11);
    doc.text("Purchase Order", col1X, sectionY);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.text(String(data.quote_item_id) || "N/A", col1X, sectionY + 5);
    doc.setFontSize(11);
    doc.setTextColor(80, 170, 176);
    doc.text("Date Issued", col1X, sectionY + 18);

    doc.setTextColor(0, 0, 0);
    doc.text(formattedDate, col1X, sectionY + 23);

    // Column 2: Bill To
    const bill = data.customer || {};
    doc.setFontSize(11);
    doc.text("Bill To", col2X, sectionY);
    const billLines = [
      data.billing_name || "",
      data.billing_address || "",
      `${data.billing_city || ""}, ${data.billing_state || ""} ${
        data.billing_zip || ""
      }`,
      data.billing_country || "",
      data.billing_phone || "",
    ];

    let lineY = sectionY + 6;
    billLines.forEach((line) => {
      if (line.trim()) {
        doc.text(line, col2X, lineY);
        lineY += 6;
      }
    });

    // Column 3: Ship To
    const ship = data.shipping || bill;
    doc.text("Ship To", col3X, sectionY);
    const shipLines = [
      data.billing_name || "",
      data.shipping_address || "",
      `${data.shipping_city || ""}, ${data.shipping_state || ""} ${
        data.shipping_zip || ""
      }`,
      data.shipping_country || "",
      data.billing_phone || "",
    ];
    let shipY = sectionY + 6;
    shipLines.forEach((line) => {
      if (line.trim()) {
        doc.text(line, col3X, shipY);
        shipY += 6;
      }
    });

    // Item Table
    const tableY = sectionY + 38;
    const items = data.QuoteItems || [];

    //  Table Rows
    const tableBody = items.map((item, index) => [
      index + 1, // FILE (Unique ID)
      item.quantity || "", // QTY
      item.file_name || "", // FILE NAME
      //   METHODOLOGY
      [item.service || "", item.material || "", item.finish || ""]
        .filter(Boolean)
        .join("\n"),

      `$ ${item.piece_price || "0.00"}`, // PIECE PRICE
      `$ ${item.ext_price || "0.00"}`, // EXT PRICE
    ]);

    autoTable(doc, {
      startY: tableY,
      margin: { left: margin, right: margin }, // ALIGN WITH LAYOUT
      tableWidth: contentWidth,
      head: [
        ["FILE", "QTY", "FILE NAME", "METHODOLOGY", "PIECE PRICE", "EXT PRICE"],
      ],
      body: tableBody,
      theme: "striped",
      headStyles: { fillColor: [80, 170, 176], textColor: 255 },
      styles: { fontSize: 9, cellPadding: 2, valign: "top" },
      bodyStyles: {
        minCellHeight: 20,
      },
      columnStyles: {
        0: { cellWidth: 15 }, // FILE (ID)
        1: { cellWidth: 15 }, // QTY
        2: { cellWidth: 45 }, // FILE NAME
        3: { cellWidth: 65 }, // METHODOLOGY
        4: { cellWidth: 25 }, // PIECE PRICE
        5: { cellWidth: 25 }, // EXT PRICE
      },
    });

    const Y = doc.lastAutoTable.finalY;
    const descY = Y -4;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(9);
    doc.text(`Description: ${items[0]?.description || ""}`, margin, descY);
    // Line
    doc.setLineWidth(0.3);
    doc.setDrawColor(80, 170, 176);
    doc.line(margin, 115, margin + contentWidth, 115);

    const tableEndY = doc.lastAutoTable.finalY + 6;

    // Sub Total
    doc.setFontSize(11);
    const labelX = margin + contentWidth - 60;
    const valueX = margin + contentWidth;
    doc.text("Sub Total:", labelX, tableEndY);
    doc.setTextColor(80, 170, 176);
    doc.text(`$ ${data.subtotal || "0.00"}`, valueX, tableEndY, {
      align: "right",
    });
    doc.setTextColor(0, 0, 0);

    // Total Box
    const totalBoxWidth = 65; // Box width
    const totalBoxHeight = 28; // Box height
    const totalBoxX = margin + contentWidth - totalBoxWidth; // Right aligned
    const totalBoxY = tableEndY + 4; // Slightly more spacing

    // Draw rounded rectangle with fill color
    doc.setFillColor(80, 170, 176);
    doc.roundedRect(
      totalBoxX,
      totalBoxY,
      totalBoxWidth,
      totalBoxHeight,
      0,
      0,
      "F"
    );

    // Set text color to white
    doc.setTextColor(255, 255, 255);

    // "Total" label
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold"); // Bold label
    doc.text("Total", totalBoxX + totalBoxWidth / 2, totalBoxY + 12, {
      align: "center",
    });

    // Total amount
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold"); // Bold amount
    doc.text(
      `$ ${data.total?.toFixed(2) || "0.00"}`, // Always 2 decimal places
      totalBoxX + totalBoxWidth / 2,
      totalBoxY + 18,
      { align: "center" }
    );

    // Reset font and color for rest of PDF
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");

    // Notes
    const notesStartY = totalBoxY + 40;

    doc.setTextColor(0, 0, 0);
    const notesContentY = notesStartY + 10;
    const notesMaxWidth = 100; // Wider box

    doc.setFontSize(11);
    doc.setTextColor(80, 170, 176);
    doc.setFont(undefined, "bold");
    doc.text("Notes", margin, notesStartY);

    // Prepare structured notes
    const leftNotes = [
      { title: "Lead Time:", value: "Standard Production" },
      { title: "Terms:", value: "Net 30" },
      { title: "Freight Condition:", value: "FOB Las Vegas, NV" },
      { title: "Validity:", value: "30 Days" },
    ];

    let currentY = notesContentY;
    doc.setFont(undefined, "normal");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);

    leftNotes.forEach((note) => {
      doc.text(note.title, margin, currentY - 4);
      doc.text(note.value, margin + 35, currentY - 4, {
        maxWidth: notesMaxWidth,
      }); // slight indent
      currentY += 5; // space between lines
    });

    // RIGHT COLUMN PARAGRAPH
    const rightNotes =
      "Parts quoted will be manufactured using 3DQuotePro processes and materials listed above, " +
      "and will be inspected per 3DQuotePro standard tolerance criteria. " +
      "All Terms & Conditions apply.";

    // Right column X position
    const rightColumnX = margin + 110;

    doc.text(rightNotes, rightColumnX, notesContentY - 10, {
      maxWidth: contentWidth - 110,
      lineHeightFactor: 1.4,
    });

    // Terms Sections
    const termsStartY = notesStartY + 40;

    doc.setFontSize(11);
    doc.setTextColor(80, 170, 176);
    doc.setFont(undefined, "bold");
    doc.text("Terms", margin, termsStartY);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");

    const termsText =
      "1. The supply is based on the available data or details. Any change in data may result in a change in price.\n" +
      "2. The quoted single prices refer to the requested amounts and number of pieces.\n" +
      "3. 3% Credit Card Fee will be applied for any order over $3,000.\n" +
      "4. All quotes are subject to a handling fee if deemed necessary.\n" +
      "5. Quoted to Level 1 Inspection unless otherwise stated.\n" +
      "6. Accounting email address: accounting@3dquotepro.com\n" +
      "7. Remit to address: 5988 Edmond St. Las Vegas, NV 89118\n" +
      "8. All quotes are FOB Las Vegas, NV, unless otherwise stated.";

    doc.text(termsText, margin, termsStartY + 8, {
      maxWidth: contentWidth - 10,
      lineHeightFactor: 1.4,
    });

    // ---------------- FINALIZE ----------------
    if (download) {
      doc.save(`Purchase_Order_${data.quote_item_id}.pdf`);
    } else {
      window.open(doc.output("bloburl"), "_blank");
    }
  };

  const handleView = async () => {
    await generatePDFDoc(false);
  };

  // const handleView = () => {
  //   const quoteId = data?.quote_item_id || 0;
  //   const defaultId = 0;
  //   const baseUrl = window.location.origin;
  //   const viewUrl = `${baseUrl}/quote/rfq/${quoteId}/${defaultId}/view`;
  //   window.open(viewUrl, "_blank");
  // };

  const handleDownload = async () => {
    await generatePDFDoc(true);
  };


  // Email
  const [emailTo, setEmailTo] = useState(data.customer_email || "");
  const [subject, setSubject] = useState(`Purchase for Order ${data.quote_item_id}`);
  const [message, setMessage] = useState(
    `Dear ${
      data.customerName || data.customer?.name
    },\n\nPlease find the RFQ attached.\n\nRegards,`
  );

  const sendEmail = () => {
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
    setOpen(false); // close dialog
  };
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm text-center font-semibold">Generate Invoice</h4>
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
      {/* Email Dialog */}
      <Dialog open={open} onOpenChange={setOpen} className="max-w-7xl w-full">
        <DialogTrigger asChild>
          <Button size="sm" variant="outline" className="cursor-pointer">
            EMAIL CUSTOMER
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-[95vw] sm:!max-w-screen-xl w-full p-4">
          <DialogHeader>
            <DialogTitle>{`Send Customer Email (Invoice #${data.quote_item_id})`}</DialogTitle>
            {/* <DialogDescription>
              Review and send email to the customer.
            </DialogDescription> */}
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-2">
            <div>
              <label className="text-sm font-medium">
                Email <span className="text-rose-500">*</span>
              </label>
              <Input
                value={emailTo}
                onChange={(e) => setEmailTo(e.target.value)}
                placeholder="customer@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Subject</label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div> */}

            <div>
              <label className="text-sm font-medium mb-1 block">Message</label>
              <Tiptap value={message} onChange={setMessage} />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={sendEmail}>Send Email</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
      {/* <Button size="sm" variant="outline" className="cursor-pointer" onClick={handleEmail}>
        EMAIL CUSTOMER
      </Button> */}
    </div>
  );
};

export default PurchaseActions;
