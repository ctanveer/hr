import { Op } from "sequelize";
import Applicant from "./applicant.model";

// export async function findAllApplicant() {
//   try {
//     const applicant = await Applicant.findAll({});
//     return applicant;
//   } catch (error) {
//     throw new Error('Error finding applicant.');
//   }
// }

export async function createApplicant(data: {
    name: string, 
    email: string,
    experience: string,
    phoneNumber: number,
    address: string,
    skillTags: string,
    hourlyRate: number
}) {
    try {
        const newApplicant = await Applicant.create(data);
        return newApplicant;
    } catch (error) {
        throw new Error('Error creating new applicant.')
    }
}


// export async function findApplicantById(id: number) {
//   try {
//     const employee = await Applicant.findAll({
//       where: {
//         applicantId: id
//       }
//     });
//     return employee;
//   } catch (error) {
//     throw new Error('Error finding applicant.')
//   }
// }

export async function findApplicantBySearchTerm (searchTerm: string) {
    try {
      const applicant = await Applicant.findAll({
        where: { 
            [Op.or]: [
                { experience: {[Op.iLike]: `%${searchTerm}%`} },
                { skillTags: {[Op.iLike]: `%${searchTerm}%`} }
            ]
        }
      })
      return applicant;
    } catch (error) {
      console.log(error);
      throw new Error ('Error searching for applicant.')
    }
  }