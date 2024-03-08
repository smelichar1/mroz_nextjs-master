// components/MainContent.tsx
import React, { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface MainContentProps {
  blocks: string[];
  setBlocks: React.Dispatch<React.SetStateAction<string[]>>;
}

const MainContent: React.FC<MainContentProps> = ({ blocks, setBlocks }) => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await prisma.user.findMany();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
      <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        <div>
          <h2>List of Users</h2>
          <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>


            ))}
          </ul>
        </div>

        {blocks.map((block, index) => (
            <div key={index} className="mb-4">
              {/* Your existing code for rendering other blocks */}
            </div>
        ))}
      </main>
  );
};

export default MainContent;
