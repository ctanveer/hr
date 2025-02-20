import { Request, Response } from "express";
import { CheckOutTimeForEmployee, createCheckInTimeForEmployee } from "../models/attendance/attendance.query";

export async function postAttendanceToEmployee (req: Request, res: Response) {
    try {
        const restaurantId = Number(req.params.id);
        const employeeId = Number(req.params.employeeId);
        if (employeeId && restaurantId) {
            const { isCheckedIn } = req.body;
            if( typeof isCheckedIn === "boolean") {
                const position = await createCheckInTimeForEmployee(employeeId, restaurantId, {isCheckedIn});
                res.status(201).json(position);
            }else res.status(400).json({ message: "Invalid employee ID."})
        }else res.status(400).json({ message: "Invalid restaurant ID."})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function updateAttendanceOfEmployee (req: Request, res: Response) {
    try {
        const employeeId = Number(req.params.employeeId);
        const attendanceId = Number(req.params.attendanceId);
        if (employeeId && attendanceId) {
            const { isCheckedIn } = req.body;
            if ( typeof isCheckedIn === 'boolean') {
              const attendance = await CheckOutTimeForEmployee( employeeId, attendanceId,{isCheckedIn});
              res.status(201).json(attendance);
            } else res.status(400).json({ message: "Invalid employee ID." });
          } else res.status(400).json({ message: "Invalid attendance ID." });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
  }