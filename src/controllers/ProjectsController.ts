import db from '../database/connection'    

import {Request, Response} from 'express'

export default class ProjectController{
    async create(request: Request, response: Response){
        const {
            name, 
            avatar, 
            address, 
            whatsapp, 
            email, 
            title, 
            description
        } = request.body
        
        const trx = await db.transaction()
        
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                address,
                whatsapp,
                email
            })
            
            const user_id = insertedUsersIds[0]
            
            await trx('projects').insert({
                title,
                description,
                user_id
            })
            await trx.commit()
            
            return response.status(201).send()
            
        } catch (error) {
            trx.rollback()
            console.log(error)
            return response.status(400).json(error)
        }
    }
    
    async index (request: Request, response: Response){
        try{
            const projects =  await db('projects')
            .join('users', 'projects.user_id', 'users.id')
            .select('projects.*', 'users.*')
            return response.json(projects)
        }catch (error){
            console.log(error)
            return response.status(500).send(error)
        }
    }
}

