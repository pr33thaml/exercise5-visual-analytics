/** Set in `.env.local` as NEXT_PUBLIC_EDIT_PASSWORD=your-secret */
export function getEditPassword() {
  return process.env.NEXT_PUBLIC_EDIT_PASSWORD ?? "exercise5";
}
