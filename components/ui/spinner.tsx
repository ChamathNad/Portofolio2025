"use client";

export default function Spinner({
      attributes,
  }: {
      attributes?: string;
  }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`border-t-transparent rounded-full animate-spin ${attributes}`}></div>
    </div>
  );
}
