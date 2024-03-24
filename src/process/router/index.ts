import { StartupPage } from '@/pages/Startup';
import { Paths } from '../lib/paths';
import { DeskPage } from '@/pages/Desk';

export const routes: TRoute[] = [
  { path: Paths.desks, element: StartupPage },
  { path: Paths.desk, element: DeskPage },
  { path: Paths.all, element: StartupPage },
]