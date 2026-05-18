import { redirect } from "next/navigation";

// Philosophy content has been merged into the public landing at /.
export default function Page() {
  redirect("/");
}
