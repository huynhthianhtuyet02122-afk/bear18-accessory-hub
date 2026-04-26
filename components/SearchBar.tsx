"use client";

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function SearchBar({ placeholder = "Tìm phụ kiện...", value = "", onChange }: SearchBarProps) {
  return (
    <label className="relative block w-full md:w-80">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-subtle" aria-hidden>
        ⌕
      </span>
      <input
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="w-full rounded-lg border border-outline-variant bg-white py-4 pl-12 pr-4 text-base text-black placeholder:text-subtle outline-none transition focus:border-black focus:ring-4 focus:ring-zinc-200"
        placeholder={placeholder}
        type="search"
      />
    </label>
  );
}
