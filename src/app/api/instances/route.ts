import { getDocument } from "@/config";
import { StoredInstance } from "@/types";
import { validateAuth } from "@/utils/auth";

export async function GET(req: Request) {
  const user = await validateAuth(req);

  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const instances = await getDocument<StoredInstance>({
    collectionName: "instances",
    queries: [["user", "==", user]],
  });

  return Response.json({ instances });
}
