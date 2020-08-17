import express from 'express'
import ProjectsController from './controllers/ProjectsController'

const routes = express.Router()

const projectsController = new ProjectsController()

routes.post('/projects', projectsController.create)
routes.get('/projects', projectsController.index)

export default routes