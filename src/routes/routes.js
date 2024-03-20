import { getPetByStatus, addPet, putPet } from '../ProvideData/ProvideData.js';

import { Router, response } from 'express';


const router = Router();

router.get('/api/v1/pets', async(req, res) => {
  const params = req.query;
  try {
    const pets = await getPetByStatus(params.status);
    res.status(200).json({
      success: true,
      data: {
        pets
      },
    });
  } catch (err) {
    res.json({
      success: false,
      errors: {
        message: err.message
      }
    });
  }
});

router.post('/api/v1/pets', async (req, res) => {
  const petData = req.body;
  try {
    const response = await addPet(petData);
    res.status(201).send(response);

  } catch (err) {
    res.status(err.response.status).json({
      success: false,
      errors: {
        message: err.message,
        details: {
          errorCode: err.response.data.code,
          errorMessage: err.response.data.message
        }
      },
    });
  }
});

router.put('/api/v1/pets', async (req, res) => {
  const petData = req.body;
  try {
    const response = await putPet(petData);
    res.status(202).send(response);
  } catch (err) {
    res.status(err.response.status).json({
      success: false,
      errors: {
        message: err.message,
        details: {
          errorCode: err.response.data.code,
          errorMessage: err.response.data.message
        }
      },
    });
  }
});


export { router };


