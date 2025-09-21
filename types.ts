
export enum View {
  Landing = 'Landing',
  Chat = 'Chat',
  Booking = 'Booking',
  Resources = 'Resources',
  PeerSupport = 'Peer Support',
  Dashboard = 'Dashboard',
}

export interface Counselor {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
}

export enum ResourceType {
  Article = 'Article',
  Video = 'Video',
  Audio = 'Audio',
}

export interface Resource {
  id: number;
  title: string;
  type: ResourceType;
  description: string;
  category: string;
  link: string;
}

export interface ForumPost {
  id: number;
  title: string;
  author: string;
  timestamp: string;
  replies: number;
  content: string;
  comments: ForumComment[];
}

export interface ForumComment {
  id: number;
  author: string;
  timestamp: string;
  content: string;
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}
