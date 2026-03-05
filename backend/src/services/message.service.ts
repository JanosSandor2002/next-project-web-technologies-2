import Message from '../models/message.model.js';
import type { IMessage } from '../types/message.types.js';

export const createMessage = async (data: IMessage) => {
  return await Message.create(data);
};

export const getMessages = async () => {
  return await Message.find().sort({ createdAt: -1 });
};
