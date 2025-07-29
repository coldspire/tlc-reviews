/**
 * @typedef {Object} Review
 * @property {string} name
 * @property {string} dateAdded
 * @property {number} rating
 * @property {string[]} category
 * @property {string[]} comments
 */

/**
 * @type {Review[]}
 */
export default [
  {
    name: "Extraction 2",
    dateAdded: "2025-07-28",
    rating: 3,
    category: ["movie", "action"],
    comments: ["Test comment 1", "Test comment 2", "Test comment 3", "Test comment 4"]
  }
];
