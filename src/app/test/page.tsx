import React from 'react';
import UserName from "./UserName";

// Define the type for the session prop
interface session {
  user?: {
    name: string;
  };
}

interface DashboardProps {
  session: session;
}

const Dashboard: React.FC<DashboardProps> = ({ session }) => {
  return (
    <nav>
      <UserName session={session} />
    </nav>
  );
};

export default Dashboard;
