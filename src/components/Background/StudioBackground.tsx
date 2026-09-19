export default function StudioBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#06070a]"
    >
      {/* 1. Subtle Engineering Grid with Soft Center Radial Falloff */}
      <div
        className="absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 85%)",
        }}
      />

      {/* 2. Luxury Hero Ambient Glow (Electric Sky / Cyan Laser) */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.65) 0%, rgba(59, 130, 246, 0.25) 50%, transparent 70%)",
        }}
      />

      {/* 3. Mid-Page Subtle Accent Glow (Services Section) */}
      <div
        className="absolute top-[42%] -left-[10%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, transparent 70%)",
        }}
      />

      {/* 4. Contact / Shop Location Subtle Emerald Glow */}
      <div
        className="absolute bottom-[10%] -right-[10%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
