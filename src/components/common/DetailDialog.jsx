import { useRef } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/common/Dialog";
import Button from "@/components/common/Button";

/** detail = { title, text, image?, meta? } | null */
export default function DetailDialog({ detail, onClose }) {
  const last = useRef(detail);
  if (detail) last.current = detail; // keep the text on screen while the modal fades out
  const d = detail ?? last.current;
  return (
    <Dialog open={detail !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="nova-dialog">
        {d?.image && <img className="dialog-image" src={detail.image} alt={detail.title} />}
        <div className="dialog-body">
          <p className="eyebrow blue">{d?.meta}</p>
          <DialogTitle className="dialog-title">{d?.title}</DialogTitle>
          <DialogDescription className="dialog-description">{d?.text}</DialogDescription>
          <Button href={d?.ctaHref ?? "#enquire"} variant="blue" iconSize={18} {...(d?.ctaHref ? {} : { "data-enquire": true })} onClick={onClose}>{d?.ctaLabel ?? "Enquire with NOVA"}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
