import React from 'react';
import useStore from '@store/store';

import Avatar from './Avatar';
import MessageContent from './MessageContent';

import { Role } from '@type/chat';
import RoleSelector from './RoleSelector';

const backgroundStyle = ['dark:bg-gray-800', 'bg-gray-50 dark:bg-gray-650'];

const Message = React.memo(
  ({
     role,
     content,
     messageIndex,
     sticky = false,
   }: {
    role: Role;
    content: string;
    messageIndex: number;
    sticky?: boolean;
  }) => {
    const hideSideMenu = useStore((state) => state.hideSideMenu);
    const advancedMode = useStore((state) => state.advancedMode);

    return (
      <div
        className={`w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group ${
          backgroundStyle[messageIndex % 2]
        }`}
      >
        <div
          className={`text-base gap-4 md:gap-6 m-auto p-4 md:py-6 flex transition-all ease-in-out ${
            hideSideMenu
              ? 'md:max-w-screen-xl lg:max-w-screen-xl xl:max-w-screen-xl'
              : 'md:max-w-7xl lg:max-w-8xl xl:max-w-9xl'
          }`}
        >
          <Avatar role={role} />
          <div className='w-full'>
            {advancedMode && (
              <RoleSelector
                role={role}
                messageIndex={messageIndex}
                sticky={sticky}
              />
            )}
            <MessageContent
              role={role}
              content={content}
              messageIndex={messageIndex}
              sticky={sticky}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Message;
