import { create } from 'zustand';
import { ChatState, Message } from '../types/chat';

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  error: null,
  addMessage: (message) => 
    set((state) => ({ messages: [...state.messages, message] })),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));