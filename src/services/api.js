const url = "https://rickandmortyapi.com/api";
const getCharters = async () => {
  const resp = await fetch(`${url}/character/`);
  const { results } = await resp.json();
  return results;
};
const getCharterById = async (id) => {
    
    const resp = await fetch (`${url}/character/${id}`);
    const result = await resp.json();
    return result;
}
const api = { getCharters, getCharterById };
export default api;
