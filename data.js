// ===== Mondo Reads site data =====
// Everything on the site comes from this file. Edit here, push, done.
window.SITE = {
  links: {
    youtube: "https://www.youtube.com/@mondoreads",
    tiktok: "https://www.tiktok.com/@mondoreads",
    instagram: "https://www.instagram.com/mondo.reads/"
  },
  // Channel ID. The site embeds the channel's newest long video (Shorts excluded) automatically.
  channelId: "UCY-cPu7T_vDLlpaRB5lxhhw",
  members: ["Mondo", "Kastor", "Aaron", "Isaac", "Bryce", "Elliott"],

  // Public read-along schedule, in order. "readBy" = the Sunday that episode goes up.
  // The site shows whichever book has the next upcoming date, so it flips on its own.
  reading: [
    {
      title: "Tender Is the Flesh",
      author: "Agustina Bazterrica",
      isbn: "9781982150921",
      note: "Read each section by its date and the episode is waiting for you.",
      sections: [
        { ep: 1, chapters: "Part 1", pages: "1–72",   readBy: "2026-11-01" },
        { ep: 2, chapters: "Part 2 to the end", pages: "72–end", readBy: "2026-11-08", note: "Finale" }
      ]
    },
    {
      title: "East of Eden",
      author: "John Steinbeck",
      isbn: "9780142004234",
      note: "Chapters are official. Page numbers are the Penguin paperback, so check your copy. Read each section by its date and the episode is waiting for you.",
      sections: [
        { ep: 1, chapters: "Ch. 1–7",   pages: "1–71",    readBy: "2026-11-15" },
        { ep: 2, chapters: "Ch. 8–11",  pages: "72–128",  readBy: "2026-11-22", note: "End of Part One" },
        { ep: 3, chapters: "Ch. 12–17", pages: "129–205", readBy: "2026-11-29" },
        { ep: 4, chapters: "Ch. 18–22", pages: "205–275", readBy: "2026-12-06", note: "End of Part Two" },
        { ep: 5, chapters: "Ch. 23–26", pages: "276–345", readBy: "2026-12-13" },
        { ep: 6, chapters: "Ch. 27–33", pages: "345–412", readBy: "2026-12-20", note: "End of Part Three" },
        { ep: 7, chapters: "Ch. 34–41", pages: "413–480", readBy: "2026-12-27" },
        { ep: 8, chapters: "Ch. 42–48", pages: "480–538", readBy: "2027-01-03" },
        { ep: 9, chapters: "Ch. 49–55", pages: "538–601", readBy: "2027-01-10", note: "Finale" }
      ]
    }
  ],

  upNext: ["Exhalation · Ted Chiang", "Project Hail Mary · Andy Weir", "Fahrenheit 451 · Ray Bradbury", "The Hitchhiker's Guide to the Galaxy · Douglas Adams"],

  library: [
    {
      title: "Tender Is the Flesh",
      author: "Agustina Bazterrica",
      isbn: "9781982150921",
      finished: "2026-11-08",
      revealOn: "2026-11-08", // hidden until the finale episode is up
      episodes: [
        { label: "Part 1 · pp. 1–72", url: "" },
        { label: "Part 2 · pp. 72–end (spoilers)", url: "" }
      ],
      reviews: [
        { name: "Kastor", score: 8,   text: "Tough first half, but it all ties together. Rewarding if you push through." },
        { name: "Isaac",  score: 7.5, text: "Not what I'd normally read. It makes you uncomfortable, and it's the right length for that." },
        { name: "Mondo",  score: 6,   text: "Quick read, but the same pattern on repeat and not one character I liked." },
        { name: "Aaron",  score: 5,   text: "Incredibly well written. I did not like it." }
      ],
      quotes: []
    }
  ]
};
