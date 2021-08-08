import { Router } from 'express';

export default class AuthRouter {

  static configure(app: Router) {
    const router: Router = Router();

    app.use('/auth', router);

    router.get('/', (req, res) => {
      res.json({
        message: 'hereeeeeeeee'
      });
    })

    //app.get("/router", controller)
  }
  
};
