import { Outlet } from 'react-router';
import { HeaderView } from '@/shared/ui/header-view.jsx';
import { FooterView } from '@/shared/ui/footer-view.jsx';
import { QuickMenu } from '@/shared/ui/quick-menu.jsx';

export function Layout() {
  return (
    <>
      <HeaderView />
      <main>
        <Outlet />
      </main>
      <FooterView />
      <QuickMenu />
    </>
  );
}
