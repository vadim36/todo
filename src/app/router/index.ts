import { StartupPage } from '@/pages/Startup';
import { TaskPage } from '@/pages/Task';
import { Paths } from '../lib/helpers/paths';

export const routes: TRoute[] = [
  { path: Paths.tasks, element: StartupPage },
  { path: Paths.task, element: TaskPage },
  { path: Paths.all, element: StartupPage }
]