const items = [
  "Website",
  "Application",
  "SEO",
  "Company Profile",
  "Google Workspace",
  "Excel Modular & Spreadsheet",
  "OBE System",
  "UI/UX Design",
  "Digital Marketing",
  "Business",
  "Education",
  "Machine Learning",
];

export default function Marquee() {
  const repeated = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-white py-4 select-none">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="font-display text-sm font-semibold text-navy-900/70 uppercase tracking-wider">
              {item}
            </span>
            <span className="text-sky-500 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
