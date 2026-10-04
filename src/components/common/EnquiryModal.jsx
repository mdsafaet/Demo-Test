import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/common/Dialog";
import { markets } from "@/data/markets";
import { contactInfo } from "@/data/navigation";

/**
 * One enquiry form for the whole site. Any element with a `data-enquire` attribute opens it:
 *   <a href="#enquire" data-enquire>Enquire</a>
 * Submitting opens the visitor's email app with the message filled in (no server needed).
 * To send to a real backend instead, replace the body of onSubmit with a fetch() call.
 */
export default function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      if (!e.target.closest?.("[data-enquire]")) return;
      e.preventDefault();
      setSent(false);
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone") || "-"}`,
      `Interested in: ${f.get("market")}`,
      "",
      f.get("message"),
    ].join("\n");
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="nova-dialog enquiry-dialog">
        <div className="dialog-body">
          <p className="eyebrow blue">ENQUIRE</p>
          <DialogTitle className="dialog-title">Let’s talk about your next chapter.</DialogTitle>
          {sent ? (
            <DialogDescription className="dialog-description">
              Thank you. Your email app should now open with your enquiry ready to send. You can also write to us directly at {contactInfo.email}.
            </DialogDescription>
          ) : (
            <>
              <DialogDescription className="dialog-description">
                Tell us a little about what you are looking for and our team will get back to you.
              </DialogDescription>
              <form className="enquiry-form" onSubmit={onSubmit}>
                <div className="row">
                  <label>Name<input name="name" required autoComplete="name" /></label>
                  <label>Email<input name="email" type="email" required autoComplete="email" /></label>
                </div>
                <div className="row">
                  <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
                  <label>
                    Interested in
                    <select name="market" defaultValue="General enquiry">
                      <option>General enquiry</option>
                      {markets.map((m) => <option key={m.name}>{m.name}</option>)}
                    </select>
                  </label>
                </div>
                <label>Message<textarea name="message" required /></label>
                <button type="submit" className="button button-blue">Send enquiry</button>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
