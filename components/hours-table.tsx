const hours = [
  { day: "Monday", open: "11:00", close: "23:00" },
  { day: "Tuesday", open: "11:00", close: "23:00" },
  { day: "Wednesday", open: "11:00", close: "23:00" },
  { day: "Thursday", open: "11:00", close: "23:00" },
  { day: "Friday", open: "11:00", close: "00:00" },
  { day: "Saturday", open: "10:00", close: "00:00" },
  { day: "Sunday", open: "10:00", close: "22:00" }
];

const isOpenNow = (open: string, close: string) => {
  const now = new Date();
  const [openH, openM] = open.split(":").map(Number);
  const [closeH, closeM] = close.split(":").map(Number);
  const openTime = new Date(now);
  openTime.setHours(openH, openM, 0, 0);
  const closeTime = new Date(now);
  closeTime.setHours(closeH, closeM, 0, 0);
  if (closeH < openH) {
    // past midnight wrap
    closeTime.setDate(closeTime.getDate() + 1);
  }
  return now >= openTime && now <= closeTime;
};

export const HoursTable = () => {
  const currentDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());

  return (
    <div className="overflow-hidden rounded-3xl border border-muted/60 bg-white shadow-brass">
      <table className="w-full text-left text-sm">
        <tbody>
          {hours.map((entry) => {
            const active = entry.day === currentDay && isOpenNow(entry.open, entry.close);
            return (
              <tr key={entry.day} className={active ? "bg-primary/10" : ""}>
                <th className="px-6 py-4 text-left font-semibold text-ink">{entry.day}</th>
                <td className="px-6 py-4 text-ink/70">
                  {entry.open} - {entry.close}
                </td>
                {active && <td className="px-6 py-4 text-sm font-semibold text-success">Open now</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
