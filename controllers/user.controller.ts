import { Request, Response } from "express";
import prisma from "../config/db.prisma";


const getIndexPage = (req: Request, res: Response) => {
    res.json({data:"Your're on :: Index Page"})
}

const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
        where: {
            id: 1
        },
        include: {
            cars: true
        }
    })
    res.json(users)
}

const getUserById = async (req: Request, res: Response) => {
    const user = await prisma.user.findFirst({
        where: {
            id: +req.params.id
        },
        include: {
            cars: true
        }
    })
    res.json(user)
}

const createUser = async (req: Request, res: Response) =>{
    const {username} = req.body

    const newUser = await prisma.user.create({
        data: {
            username,
            cars: {
                createMany: {
                    data: [{
                        model: 'chevrolet',
                    },
                    {
                        model: 'toyota',
                    }
                ]
                },
            },
        },
        include: {
            cars: true
        }
    })

    res.json(newUser)
}


export {
    getIndexPage,
    getAllUsers,
    getUserById,
    createUser
}