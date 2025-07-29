import { DateTime } from 'luxon'; // Luxon is included with Eleventy

/**
 * @typedef {Object} Review
 * @property {string} name
 * @property {string} dateAdded
 * @property {string} dateExperienced
 * @property {number} rating
 * @property {boolean} finished
 * @property {string[]} category
 * @property {string[]} comments
 */

/**
 * @type {Review[]}
 */
const reviewsRaw = [
  {
    name: "Extraction 2",
    dateAdded: "2025-07-28",
    dateExperienced: "2025-07-25",
    rating: 3,
    finished: false,
    category: ["entertainment", "movie", "action"],
    comments: ["Test comment 1", "Test comment 2", "Test comment 3", "Test comment 4"]
  },
  {
    name: "John Wick",
    dateAdded: "2025-07-29",
    dateExperienced: "2025-07-12",
    rating: 3,
    finished: true,
    category: ["entertainment", "movie", "action"],
    comments: ["Blah", "Blah 2"]
  }
];

function asUtcString(date) {
  return DateTime.fromISO(date, { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
}

/**
 * @returns {Review[]}
 */
export default function reviewsFinal() {
  /** @type Review[] **/
  const reviewsWithUtcDates = reviewsRaw.map(
    (review) =>
      /** @type Review **/ ({
        ...review,
        dateAdded: asUtcString(review.dateAdded),
        dateExperienced: asUtcString(review.dateExperienced),
      }),
  );

  return reviewsWithUtcDates
    .toSorted(
      (a, b) =>
        new Date(a.dateExperienced).getTime() -
        new Date(b.dateExperienced).getTime(),
    )
    .reverse();
}
