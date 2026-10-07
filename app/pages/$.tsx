import { data } from "react-router";
import { NotFoundPage } from "../components/error-pages";

export const handle = { bare: true };

export function loader() {
  return data(null, { status: 404 });
}

export default function NotFound(): React.ReactNode {
  return <NotFoundPage />;
}
