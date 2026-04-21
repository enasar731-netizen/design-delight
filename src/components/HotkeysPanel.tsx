import { Keyboard, Settings2, Pin } from "lucide-react";

type Hotkey = {
  label: string;
  keys: string[];
  category?: string;
  active?: boolean;
};

const hotkeys: Hotkey[] = [
  { label: "Attack Aura", keys: ["R"], active: true },
  { label: "Frost Nova", keys: ["Q"] },
  { label: "Shield Bash", keys: ["E"] },
  { label: "Ultimate Strike", keys: ["Shift", "F"] },
  { label: "Dash Forward", keys: ["Space"] },
  { label: "Quick Heal", keys: ["1"] },
  { label: "Mana Potion", keys: ["2"] },
  { label: "Open Inventory", keys: ["Tab"] },
  { label: "Toggle Map", keys: ["M"] },
  { label: "Voice Chat", keys: ["V"] },
];

const Key = ({ children, accent }: { children: React.ReactNode; accent?: boolean }) => (
  <kbd
    className={`inline-flex min-w-[2rem] items-center justify-center rounded-md border px-2 py-1 font-mono text-xs font-semibold tracking-wide transition-all ${
      accent
        ? "border-[hsl(var(--hud-accent))] bg-[hsl(var(--hud-accent)/0.15)] text-[hsl(var(--hud-accent))] shadow-[0_0_12px_hsl(var(--hud-glow)/0.5)]"
        : "border-[hsl(var(--hud-key-border))] bg-[image:var(--gradient-key)] text-foreground shadow-[var(--shadow-key)]"
    }`}
  >
    {children}
  </kbd>
);

export const HotkeysPanel = () => {
  return (
    <div className="w-[340px] overflow-hidden rounded-xl border border-[hsl(var(--hud-panel-border))] bg-[image:var(--gradient-hud)] font-sans text-foreground shadow-[var(--shadow-hud)] backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[hsl(var(--hud-panel-border))] bg-[hsl(var(--hud-header))] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-[hsl(var(--hud-accent)/0.15)] p-1.5">
            <Keyboard className="h-3.5 w-3.5 text-[hsl(var(--hud-accent))]" />
          </div>
          <span className="text-[13px] font-semibold tracking-wide">Hotkeys</span>
          <span className="ml-1 rounded-sm bg-[hsl(var(--hud-key))] px-1.5 py-0.5 font-mono text-[10px] text-[hsl(var(--hud-muted))]">
            {hotkeys.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="rounded-md p-1.5 text-[hsl(var(--hud-muted))] transition-colors hover:bg-[hsl(var(--hud-key))] hover:text-foreground">
            <Pin className="h-3.5 w-3.5" />
          </button>
          <button className="rounded-md p-1.5 text-[hsl(var(--hud-muted))] transition-colors hover:bg-[hsl(var(--hud-key))] hover:text-foreground">
            <Settings2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="divide-y divide-[hsl(var(--hud-panel-border)/0.5)]">
        {hotkeys.map((hk) => (
          <div
            key={hk.label}
            className="group flex items-center justify-between px-4 py-2.5 transition-colors hover:bg-[hsl(var(--hud-key)/0.4)]"
          >
            <div className="flex items-center gap-2.5">
              {hk.active && (
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--hud-accent))] shadow-[0_0_8px_hsl(var(--hud-glow))]" />
              )}
              <span
                className={`text-[13px] ${
                  hk.active ? "font-medium text-foreground" : "text-[hsl(var(--hud-muted))] group-hover:text-foreground"
                }`}
              >
                {hk.label}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {hk.keys.map((k, i) => (
                <span key={k} className="flex items-center gap-1">
                  {i > 0 && <span className="text-[10px] text-[hsl(var(--hud-muted))]">+</span>}
                  <Key accent={hk.active}>{k}</Key>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[hsl(var(--hud-panel-border))] bg-[hsl(var(--hud-header)/0.6)] px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(var(--hud-muted))]">
          v2.4 · session active
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-[hsl(var(--hud-muted))]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[hsl(var(--hud-accent))]" />
          LIVE
        </span>
      </div>
    </div>
  );
};
