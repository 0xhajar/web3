import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then(response => response.data);

const create = personPayload => 
  axios.post(baseUrl, personPayload).then(response => response.data);

const update = (id, personPayload) => 
  axios.put(`${baseUrl}/${id}`, personPayload).then(response => response.data);

const remove = id => 
  axios.delete(`${baseUrl}/${id}`);

const PersonsAPI = {
  getAll,
  create,
  update,
  remove
};

export default PersonsAPI;
