import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <div>DashboardPage</div>
      <ul>
        <Link href="/dashboard/1">
          <li>user1</li>
        </Link>
        <Link href="/dashboard/2">
          <li>user2</li>
        </Link>
        <Link href="/dashboard/3">
          <li>user3</li>
        </Link>
        <Link href="/dashboard/4">
          <li>user4</li>
        </Link>
      </ul>
    </>
  );
};

export default DashboardPage;
