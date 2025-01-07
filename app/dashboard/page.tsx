
import { signOut } from "../utils/auth";
import requireUser from "../utils/hooks";

export default async function dashboard() {
  const session = await requireUser();

  return (
    <div>
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <h1>Hello from the Dashboard route</h1>
      <button type="submit">Sign Out</button>
    </form>
    </div>
  );
}
