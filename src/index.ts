import Express from 'express'
import returnName from './returnName'

const app = Express()

const port = 8081; 

// define a route handler for the default home page
app.get( "/", ( req: Express.Request, res: Express.Response ) => {
    const name = returnName('Ville')
    res.send(name);
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );