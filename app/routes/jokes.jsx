import { Outlet } from "@remix-run/react";

export const meta = () => ({
    description: 'nihaoaaa'
});

export default function JokesRoute() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
