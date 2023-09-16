export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimeStamps(state) {
    state.lastFetch = new Date().getTime();
  },
};
