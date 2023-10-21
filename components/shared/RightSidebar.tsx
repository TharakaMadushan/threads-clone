import { currentUser } from "@clerk/nextjs";

import UserCard from "../cards/UserCard";


async function RightSidebar() {
  const user = await currentUser();
  if (!user) return null;

  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>
          Suggested Communities
        </h3>

       
      </div>

      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>Similar Minds</h3>
       
      </div>
    </section>
  );
}

export default RightSidebar;
