import { Request, Response } from "express";
import prisma from "../config/db.prisma";


const createCarsById = async (req: Request, res: Response) =>{

    const {model} = req.body

    const newCar = await prisma.car.create({
        data: {
            model,
            userId: +req.params.id
        }
    })
}

const getAllCars = async (req: Request, res: Response) => {
    const cars = await prisma.car.findMany()
    res.json(cars)
}

const deleteCarById =  async (req: Request, res: Response) => {
    const deleted_car = await prisma.car.delete({
        where: {
            id: +req.params.id
        }
    })
    res.json({data: deleted_car, msg: 'success --'})
}

export {
    getAllCars,
    deleteCarById,
    createCarsById,
}