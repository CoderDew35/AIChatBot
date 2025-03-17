import React from 'react';
import { Message } from '../types/chat';
import { Bot, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface ChatMessageProps {
  message: Message;
  isDark?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isDark }) => {
  const isUser = message.role === 'user';

  return (
    <div className={cn(
      'flex items-start gap-4 p-6 rounded-lg',
      isUser 
        ? isDark ? 'bg-gray-800' : 'bg-white' 
        : isDark ? 'bg-gray-800/50' : 'bg-gray-50'
    )}>
      <div className={cn(
        'rounded-full p-2',
        isUser 
          ? isDark ? 'bg-blue-500/20' : 'bg-blue-100'
          : isDark ? 'bg-green-500/20' : 'bg-green-100'
      )}>
        {isUser 
          ? <User className={isDark ? 'w-6 h-6 text-blue-400' : 'w-6 h-6 text-blue-600'} />
          : <Bot className={isDark ? 'w-6 h-6 text-green-400' : 'w-6 h-6 text-green-600'} />
        }
      </div>
      <div className="flex-1">
        <p className={`text-sm whitespace-pre-wrap ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
          {message.content}
        </p>
      </div>
    </div>
  );
};