import { Navigate } from "react-router";
import { SITE_NAME } from "../config/site";

export const handle = { bare: true };

export function meta() {
  return [
    { title: `Team — ${SITE_NAME}` },
    { "http-equiv": "refresh", content: "0;url=/leadership" },
    { name: "robots", content: "noindex" },
  ];
}

/** /team is the nav label. The page lives at /leadership. */
export default function TeamRedirect(): React.ReactNode {
  return <Navigate to="/leadership" replace />;
}
