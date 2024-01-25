import { Request, Response } from "express";
import { gettingAllActiveChefs } from "../models/attendance/attendance.query";

export async function getAllChefs(req: Request, res: Response) {
    try {
        let restaurantId = Number(req.params.restaurantId);
        if (restaurantId) {
        //     const activeChefs = await gettingAllActiveChefs(restaurantId);
        //     const  jsonData = activeChefs;
        //     const filteredData = jsonData.filter((entry:any) => entry.employee !== null);
        //     console.log(filteredData);
            // res.json({ data: filteredData });
        const activeChefs = await gettingAllActiveChefs(restaurantId);
        const jsonData = activeChefs.map(entry => entry.toJSON()); 
        const currentDate = new Date().toISOString().split('T')[0];
        const filteredData = jsonData.filter((entry: any) => {
        const entryDate = typeof entry.createdAt === 'string' ? entry.createdAt.split('T')[0] : null;
  return entry.employee !== null && (!entryDate || entryDate >= currentDate);
});

        console.log(filteredData);
        res.json({ data: filteredData });  
      } else res.status(400).json({ message: "Invalid restaurant ID." });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}