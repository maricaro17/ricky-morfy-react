const url = "https://rickandmortyapi.com/api";
const getCharters = async () => {
  const resp = await fetch(`${url}/character/`);
  const results = await resp.json();
  return results;
};
const getCharterById = async (id) => {
  const resp = await fetch(`${url}/character/${id}`);
  const result = await resp.json();
  return result;
};
const getPages = async (url) => {
  const resp = await fetch(url);
  const results = await resp.json();
  return results;
};
const api = { getCharters, getCharterById, getPages };
export default api;
