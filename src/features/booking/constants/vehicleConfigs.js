/* ──────────────────────────────────────────────
   Vehicle seat configurations
   Each row: [leftCell, middleCell, rightCell]
     null     → empty invisible spacer
     'driver' → driver seat (non-bookable)
     'aisle'  → visual aisle indicator
     number   → bookable passenger seat
────────────────────────────────────────────── */
export const VEHICLE_CONFIGS = {
  '12': {
    seatStates: {
      1: 'available', 2: 'available',
      3: 'booked',    4: 'available',
      5: 'pending',   6: 'available',
      7: 'booked',    8: 'available',
      9: 'available', 10: 'pending',
      11: 'available',
    },
    // Row 0 (divider): driver (left) + seats 01–02
    // Cabin: pairs 04/03, 06/05, 08/07 with aisle
    // Back row: 11, 10, 09 across full width
    rows: [
      ['driver', 1,       2],
      [4,        'aisle', 3],
      [6,        'aisle', 5],
      [8,        'aisle', 7],
      [11,       10,      9],
    ],
  },
  '9': {
    seatStates: {
      1: 'available', 2: 'booked',
      3: 'available', 4: 'pending',
      5: 'available', 6: 'available',
      7: 'booked',    8: 'available',
      9: 'available',
    },
    // Row 0 (divider): driver (left) + seats 01–02
    // Cabin: pairs 04/03, 06/05 with aisle
    // Back row: 09, 08, 07 across full width
    rows: [
      ['driver', 1,       2],
      [4,        'aisle', 3],
      [6,        'aisle', 5],
      [9,        8,       7],
    ],
  },
}
