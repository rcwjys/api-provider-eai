import axios from "axios";

const getPetByStatus = async (petStatus) => {
  const response = await axios.get(`https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${petStatus}`);

  if (!response.status === 200) {
    throw new Error('failed to fetch data');
  }

  return response.data;
}

const addPet = async(petData) => {
  const response = await axios.post(`https://petstore3.swagger.io/api/v3/pet`, petData);

  return response.data;

}

const putPet = async(petData) => {
  const response = await axios.put(`https://petstore3.swagger.io/api/v3/pet`, petData);

  return response.data;
}

export { getPetByStatus, addPet, putPet };