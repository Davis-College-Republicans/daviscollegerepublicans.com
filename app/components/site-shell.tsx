import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <div className="site-shell">
      <SiteHeader />
      <div className="site-main">{children}</div>
      <SiteFooter />
    </div>
  );
}
