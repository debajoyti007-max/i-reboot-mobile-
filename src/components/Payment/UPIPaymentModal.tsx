import { useEffect, useState } from "react"
import QRCode from "qrcode"
import { X, Copy, Check, MessageCircle, ShieldCheck, QrCode } from "lucide-react"
import { PUROBITE_CONTACT, type ProductPack } from "../../data/purobiteData"

interface UPIPaymentModalProps {
  pack: ProductPack | null
  onClose: () => void
}

export default function UPIPaymentModal({ pack, onClose }: UPIPaymentModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("")
  const [copied, setCopied] = useState(false)

  const upiId = PUROBITE_CONTACT.upiId || "8250755958@paytm"
  const payeeName = PUROBITE_CONTACT.upiPayeeName || "PuroBite Handcrafted Foods"
  const amount = pack ? pack.price : 399
  const packName = pack ? `${pack.name} (${pack.weight})` : "PuroBite Banana Chew"

  // Standard Indian UPI payment URI scheme
  const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(
    payeeName
  )}&am=${amount}&cu=INR&tn=${encodeURIComponent(`PuroBite ${pack ? pack.weight : ""}`)}`

  // Generate QR Code dynamically
  useEffect(() => {
    if (!pack) return
    QRCode.toDataURL(upiUri, {
      width: 280,
      margin: 1.5,
      color: {
        dark: "#141b16",
        light: "#ffffff",
      },
      errorCorrectionLevel: "M",
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("QR Code generation error:", err))
  }, [pack, upiUri])

  // Copy UPI ID to clipboard
  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Pre-filled WhatsApp confirmation message
  const whatsappConfirmUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    `Hello PuroBite! I have completed payment of ₹${amount} for: ${packName}.\n\nHere are my delivery details:\nName: \nAddress: \nPincode: \n\n(Attaching payment screenshot below)`
  )}`

  if (!pack) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#faf8f5] rounded-3xl border border-[#e8e3d8] shadow-2xl p-5 sm:p-6 text-stone-900 z-10 animate-in zoom-in-95 duration-200 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-200/60 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full herbal-pill text-[11px] font-semibold mb-2">
            <QrCode className="w-3.5 h-3.5 text-emerald-700" />
            <span>Instant UPI / QR Payment</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900 leading-tight">
            Pay For {pack.name}
          </h3>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-2xl font-bold font-serif-luxury text-[#193322]">
              ₹{pack.price}
            </span>
            <span className="text-xs text-stone-500 font-light">
              • {pack.weight}
            </span>
          </div>
        </div>

        {/* Dynamic QR Code Card (For desktop scan or mobile screenshot) */}
        <div className="p-4 rounded-2xl bg-white border border-[#e8e3d8] shadow-xs flex flex-col items-center justify-center mb-4">
          <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-xl overflow-hidden bg-white p-2 border border-stone-200 shadow-2xs flex items-center justify-center">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt="Scan to pay via UPI"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-stone-400">
                Generating QR...
              </div>
            )}
          </div>

          <span className="text-[11px] text-stone-500 mt-2 font-light">
            Scan with Google Pay, PhonePe, Paytm, or BHIM
          </span>
        </div>

        {/* Mobile 1-Tap Pay Button (Opens UPI Apps on Phone) */}
        <div className="space-y-2.5 mb-4">
          <a
            href={upiUri}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] font-semibold text-xs sm:text-sm tracking-wide shadow-xs transition-colors touch-press cursor-pointer"
          >
            <span>⚡ Tap to Pay ₹{amount} in UPI App</span>
          </a>

          {/* UPI ID Copy Bar */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-100 border border-stone-200">
            <div className="min-w-0 pr-2">
              <span className="text-[9px] uppercase tracking-wider text-stone-400 font-mono block">
                UPI ID (VPA)
              </span>
              <span className="text-xs font-mono font-bold text-stone-900 truncate block">
                {upiId}
              </span>
            </div>
            <button
              onClick={handleCopyUPI}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-stone-300 hover:border-[#b47919] text-xs font-semibold text-stone-800 transition-colors shrink-0 cursor-pointer shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Post-Payment WhatsApp Confirmation */}
        <div className="p-3.5 rounded-xl bg-[#eef6f1] border border-[#c7e1d1] text-center">
          <span className="text-[11px] text-stone-700 font-light block mb-2 leading-relaxed">
            After completing payment, tap below to share your delivery address & screenshot with our Kolkata kitchen for instant dispatch!
          </span>
          <a
            href={whatsappConfirmUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#224732] hover:bg-[#163022] text-white text-xs font-bold tracking-wide shadow-xs transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Send Address & Screenshot on WhatsApp</span>
          </a>
        </div>

        {/* Security Trust Note */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500 mt-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Direct bank-to-bank UPI payment • 100% Safe & Instant</span>
        </div>
      </div>
    </div>
  )
}
