import { StartupPage } from '../../pages/Startup/index';
import { TaskPage } from '../../pages/Task/index';

export const routes: TRoute[] = [
  { path: 'tasks/', element: StartupPage },
  { path: 'tasks/:id', element: TaskPage },
  { path: '*', element: StartupPage }
]