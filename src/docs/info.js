export const info = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API AdoptMe',
            version: '1.0.0',
            description: 'API de adopciones'
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: ['./src/docs/*.yml']
}