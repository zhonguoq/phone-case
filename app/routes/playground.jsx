import { Outlet } from "@remix-run/react";

export const meta = () => ({
    description: 'nihaoaaa'
});

export default function JokesRoute() {
  return (
    <div>
      <h1>PlayGround!</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

