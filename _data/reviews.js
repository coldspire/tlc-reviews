import { DateTime } from "luxon"; // Luxon is included with Eleventy

/**
 * @typedef {Object} Review
 * @property {string} name
 * @property {string} [source]
 * @property {string} dateAdded
 * @property {string} dateExperienced
 * @property {number} rating
 * @property {boolean} [finished]
 * @property {string[]} categories
 * @property {string[]} comments
 */

/**
 * @type {Review[]}
 */
const reviewsRaw = [
  /*
  {
    name: "",
    dateAdded: "",
    dateExperienced: "",
    rating: ,
    categories: [],
    comments: []
  },
  */
  {
    name: "Iced horchata oat milk shaken espresso",
    source: "Starbucks",
    dateAdded: "2025-07-29",
    dateExperienced: "2025-07-29",
    rating: 2,
    finished: true,
    categories: ["drinks", "coffee"],
    comments: [
      "I guess I'm just not an oat milk fan. And not enough horchata-ness for me.",
    ],
  },
  {
    name: "Extraction 2",
    dateAdded: "2025-07-28",
    dateExperienced: "2025-07-25",
    rating: 3,
    finished: false,
    categories: ["entertainment", "movie", "action"],
    comments: [
      "The 20-ish minute long take is technically impressive, but call me old-fashioned: I like a good serious of cuts.",
      "Also, the last bit of the movie is the most action-for-action's-sake sequence I've maybe ever seen. I bailed on it."
    ],
  },
  {
    name: "John Wick",
    dateAdded: "2025-07-29",
    dateExperienced: "2025-07-12",
    rating: 3,
    finished: true,
    categories: ["entertainment", "movie", "action"],
    comments: [
      "The procedural action was fine. The organized assassin syndicate was my favorite part.",
    ],
  },
];

function asUtcString(date) {
  return DateTime.fromISO(date, { zone: "utc" }).toLocaleString(
    DateTime.DATE_FULL,
  );
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
