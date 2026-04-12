export interface DayHours {
  day: string;
  shortDay: string;
  // weekday index matching JS getDay() — 0=Sun, 1=Mon, ..., 6=Sat
  weekday: number;
  closed: boolean;
  // intervals expressed as [openMinutes, closeMinutes] from midnight
  intervals: [number, number][];
  display: string;
}

const hm = (h: number, m: number) => h * 60 + m;

export const weekHours: DayHours[] = [
  {
    day: "Lunedì",
    shortDay: "Lun",
    weekday: 1,
    closed: true,
    intervals: [],
    display: "Chiuso",
  },
  {
    day: "Martedì",
    shortDay: "Mar",
    weekday: 2,
    closed: true,
    intervals: [],
    display: "Chiuso",
  },
  {
    day: "Mercoledì",
    shortDay: "Mer",
    weekday: 3,
    closed: false,
    intervals: [
      [hm(12, 0), hm(15, 0)],
      [hm(18, 0), hm(23, 0)],
    ],
    display: "12:00–15:00 / 18:00–23:00",
  },
  {
    day: "Giovedì",
    shortDay: "Gio",
    weekday: 4,
    closed: false,
    intervals: [
      [hm(12, 0), hm(15, 0)],
      [hm(18, 0), hm(23, 0)],
    ],
    display: "12:00–15:00 / 18:00–23:00",
  },
  {
    day: "Venerdì",
    shortDay: "Ven",
    weekday: 5,
    closed: false,
    intervals: [
      [hm(12, 0), hm(15, 0)],
      [hm(18, 0), hm(23, 30)],
    ],
    display: "12:00–15:00 / 18:00–23:30",
  },
  {
    day: "Sabato",
    shortDay: "Sab",
    weekday: 6,
    closed: false,
    intervals: [[hm(18, 0), hm(23, 30)]],
    display: "18:00–23:30",
  },
  {
    day: "Domenica",
    shortDay: "Dom",
    weekday: 0,
    closed: false,
    intervals: [[hm(18, 0), hm(23, 0)]],
    display: "18:00–23:00",
  },
];

export const isOpenNow = (now: Date = new Date()): boolean => {
  const weekday = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = weekHours.find((d) => d.weekday === weekday);
  if (!today || today.closed) return false;
  return today.intervals.some(([open, close]) => minutes >= open && minutes < close);
};
