import { Router } from 'express';
import AuthRoutes from './routes/auth';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	AuthRoutes.configure(app);

	return app
}