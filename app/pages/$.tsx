import { NotFoundPage } from "../components/error-pages";

export const handle = { bare: true };

/** Catch-all unknown paths. No loader — `ssr: false` forbids route loaders. */
export default function NotFound(): React.ReactNode {
  return <NotFoundPage />;
}
