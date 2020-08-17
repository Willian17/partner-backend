import request from 'supertest'
import app from '../app'

describe('Projects', ()=> {
    it('Should be able to create a new project ', async ()=> {
        const response = await request(app).post('/projects').send({
            name: 'Willian',
            avatar: 'https://avatars2.githubusercontent.com/u/53010824?s=460&u=40f41a9ce155fe1a214f422849ad88fd7f0b9710&v=4',
            address: 'Rondonópolis/MT',
            whatsapp: '66 999333655',
            email: 'willianfenandes113@gmail.com' ,
            title: 'Partner',
            description: 'Plataforma para formar sócios, busco um programador parceiro'
        })

        expect(response.status).toEqual(201)
    } )
    it("Should be able to list a projects" , async()=> {
        await request(app).post('/projects').send({
            name: 'Willian Fernandes',
            avatar: 'https://avatars2.githubusercontent.com/u/53010824?s=460&u=40f41a9ce155fe1a214f422849ad88fd7f0b9710&v=4',
            address: 'Rondonópolis/MT',
            whatsapp: '(66) 999333655',
            email: 'willianfenandes113@gmail.com' ,
            title: 'Partners',
            description: 'Plataforma para formar sócios, busco um programador parceiro'
        })

        await request(app).post('/projects').send({
            name: 'Diego Fernandes',
            avatar: 'https://avatars2.githubusercontent.com/u/53010824?s=460&u=40f41a9ce155fe1a214f422849ad88fd7f0b9710&v=4',
            address: 'Cuiabá/MT',
            whatsapp: '(66) 484888948',
            email: 'dudupq113@gmail.com' ,
            title: 'To-Do-List',
            description: 'Plataforma para listar tarefas, busco um dev parceiro'
        })

        const response = await request(app).get('/projects')

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining( {
                    id: expect.any(Number),
                    name: 'Willian Fernandes',
                    avatar: 'https://avatars2.githubusercontent.com/u/53010824?s=460&u=40f41a9ce155fe1a214f422849ad88fd7f0b9710&v=4',
                    address: 'Rondonópolis/MT',
                    whatsapp: '(66) 999333655',
                    email: 'willianfenandes113@gmail.com' ,
                    title: 'Partners',
                    description: 'Plataforma para formar sócios, busco um programador parceiro'
                }),
                expect.objectContaining( {
                    id: expect.any(Number),
                    name: 'Diego Fernandes',
                    avatar: 'https://avatars2.githubusercontent.com/u/53010824?s=460&u=40f41a9ce155fe1a214f422849ad88fd7f0b9710&v=4',
                    address: 'Cuiabá/MT',
                    whatsapp: '(66) 484888948',
                    email: 'dudupq113@gmail.com' ,
                    title: 'To-Do-List',
                    description: 'Plataforma para listar tarefas, busco um dev parceiro'
                }),
            ])
        )
    })
})