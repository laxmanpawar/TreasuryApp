import * as React from "react";

export function FormInput({ label, type, placeholder }) {
    const id = `${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="mb-5">
            <label htmlFor={id} className="mb-1.5 text-xs text-zinc-700">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="px-4 py-0 w-full h-10 text-sm rounded-md border border-solid border-slate-200"
                aria-label={label}
            />
        </div>
    );
}