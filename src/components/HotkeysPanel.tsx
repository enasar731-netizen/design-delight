import { Keyboard } from "lucide-react";

export const HotkeysPanel = () => {
  return (
    <div className="inline-flex w-[180px] flex-col overflow-hidden rounded-[10px] border border-[hsl(var(--hud-panel-border))] bg-[hsl(var(--hud-panel))] font-sans text-foreground shadow-[0_8px_24px_-4px_hsl(220_50%_2%/0.6)]">
      {/* Header */}
      <div className="relative flex items-center border-b border-[hsl(var(--hud-panel-border))] bg-[hsl(var(--hud-header))] px-2.5 py-1.5">
        <Keyboard className="h-3.5 w-3.5 text-foreground" strokeWidth={2} />
        <span className="absolute left-1/2 -translate-x-1/2 text-[12px] font-semibold leading-none">Hotkeys</span>
      </div>

      {/* Row */}
      <div className="flex items-center justify-between px-2.5 py-1.5">
        <span className="text-[12px] leading-none">Attack Aura</span>
        <span className="font-mono text-[12px] font-medium leading-none text-[hsl(var(--hud-muted))]">
          R
        </span>
      </div>
    </div>
  );
};
