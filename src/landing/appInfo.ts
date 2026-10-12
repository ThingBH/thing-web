// Store-listing names and identifiers of the apps covered by the privacy policy and the
// data-deletion page, kept in one place so they are trivial to change if a listing name changes.
// Note: the member app ("Gym Thing") and the staff app ("Gym Thing Admin") have similar names;
// always label which is which wherever they appear together.
export const APPS = {
  admin: { name: 'Gym Thing Admin', id: 'bh.thing.gym.admin' },
  member: { name: 'Gym Thing', id: 'bh.thing.gym' },
  memberTrain: { name: 'Train Fitness', id: 'bh.thing.trainfitness' },
} as const

// These names differ ON PURPOSE by one trailing dot - do not "normalise" them.
// LEGAL_ENTITY_NAME is the company as written on its Commercial Registration (no trailing dot).
// The store names are quoted verbatim in the policy pages and must match each listing exactly:
// GOOGLE_PLAY_DEVELOPER_NAME is the Google Play developer name (trailing dot);
// APP_STORE_DEVELOPER_NAME is the Apple App Store seller/developer (team) name (no trailing dot).
export const LEGAL_ENTITY_NAME = 'Thing W.L.L'
export const GOOGLE_PLAY_DEVELOPER_NAME = 'Thing W.L.L.'
export const APP_STORE_DEVELOPER_NAME = 'Thing W.L.L'
