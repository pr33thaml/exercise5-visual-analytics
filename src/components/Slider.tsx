"use client";

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  accent: string;
  onChange: (v: number) => void;
  format?: (v: number) => string;
};

export function Slider({
  label,
  value,
  min,
  max,
  step,
  accent,
  onChange,
  format,
}: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/60">
          {label}
        </label>
        <span
          className="border-2 border-black px-2 py-0.5 font-mono text-[10px] font-bold"
          style={{ backgroundColor: accent, color: "#0A0A0A" }}
        >
          {format ? format(value) : value.toFixed(2)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="sharp-slider h-2 w-full cursor-pointer appearance-none bg-black/10"
        style={{ accentColor: accent }}
      />
    </div>
  );
}
