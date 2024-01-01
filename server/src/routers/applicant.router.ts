import { Router } from "express";
import { postApplicant, searchApplicant, getAllApplicant, login, deleteApplicant, updateApplicant, getAllApplicantLogin, deleteApplicantLoginData, getApplicantLoginData, getApplicantById } from "../controllers/applicant.controller";
const router = Router();

router.post('/signup', postApplicant);
router.post('/login', login);
router.get('/search', searchApplicant);
router.get('/all', getAllApplicant);
router.get('/:applicantId', getApplicantById);
router.get('/allLogin', getAllApplicantLogin);
router.get('/loginData/:applicantId', getApplicantLoginData);
router.delete('/:applicantId', deleteApplicant);
router.delete('/logindata/:applicantId', deleteApplicantLoginData);
router.put('/:applicantId', updateApplicant);

export default router;