import { serverHttp } from './http';
import './steps/index';

serverHttp.listen(3001, () => console.log("Server is running on Port 3001"));