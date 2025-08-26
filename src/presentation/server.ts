import express, { Application, Router } from "express";

export class Server {
private readonly port: number;
private readonly app: Application;
private readonly routes: Router;

constructor(port:number, routes:Router){
  this.port = port;
  this.app = express();
  this.routes = routes;
  this.middlewares()
}

 private middlewares():void{
  this.app.use(this.routes);
  this.app.use(express.json()); 
}

public async start(): Promise<void>{
  this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en http://localhost:${this.port}`);
    });
}

}