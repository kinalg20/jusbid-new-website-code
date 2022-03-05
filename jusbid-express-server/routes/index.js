import express from 'express';
import { registerController, loginController, staticDataController } from '../controller';
import isAuthenticated from '../middlewares/auth';
import isAdmin from '../middlewares/admin';


const router = express.Router();

// --------------------- User Controller -------------------------------------- //

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/logout', isAuthenticated, loginController.logout);


// --------------------- Static Data Controller -------------------------------------- //

router.get('/get-amenities', staticDataController.getAmenities);
router.get('/get-amenity', staticDataController.getAmenityByName);
router.get('/get-cities', staticDataController.getCities);
router.get('/get-hotel-list', staticDataController.getHotelList);
router.get('/get-hotel-details', staticDataController.getHotelDetails);
router.get('/get-landingpage-details', staticDataController.getLandingPageDetails);
router.get('/get-popularhotel-details', staticDataController.getPopularHotels);
router.get('/get-room-amenities', staticDataController.getRoomAmenities);

export default router;
