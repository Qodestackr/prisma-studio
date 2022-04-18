import { Request, Response } from "express";
import prisma from "../config/db.prisma";

const getIndexPage = (req: Request, res: Response) => {
    res.json({data:"Your're on :: Index Page"})
}

const createUser = async (req: Request, res: Response) =>{
    const {username, bio} = req.body

    const newUser = await prisma.user.create({
        data: {
            username,
            bio
        },
        include: {
            cars: true
        }
    })

    res.json({data: newUser, msg: `Hello ${newUser.username}. Account created succesfully`})
}


const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
        include: {
            cars: false
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

const deleteUser =  async (req: Request, res: Response) =>{
    const deleteUser = await prisma.user.delete({
        where: {
          id: +req.params.id,
        }
      }) 
    
      res.json({data: deleteUser, msg: 'success'})
}


export {
    getIndexPage,
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
}