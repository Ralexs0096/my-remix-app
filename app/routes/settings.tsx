import { Link, Outlet } from '@remix-run/react';

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p>This is the Settings page</p>
      <nav>
        <Link to="app">App</Link>
        <Link to="profile">profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}
