import { HotkeysPanel } from "@/components/HotkeysPanel";

const Index = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-6">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--hud-accent)/0.08)] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[hsl(220_80%_50%/0.08)] blur-[120px]" />
      </div>

      {/* Grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <header className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--hud-muted))]">
            Game HUD · Overlay
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Hotkeys Interface</h1>
        </header>
        <HotkeysPanel />
      </div>
    </main>
  );
};

export default Index;
