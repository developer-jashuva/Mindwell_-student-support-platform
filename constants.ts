
import { Counselor, Resource, ResourceType, ForumPost } from './types';

export const COUNSELORS: Counselor[] = [
  { id: 1, name: 'Dr. Anya Sharma', specialty: 'Anxiety & Stress Management', imageUrl: 'https://picsum.photos/seed/anya/200' },
  { id: 2, name: 'Mr. Rohan Verma', specialty: 'Depression & Mood Disorders', imageUrl: 'https://picsum.photos/seed/rohan/200' },
  { id: 3, name: 'Ms. Priya Singh', specialty: 'Academic & Career Counseling', imageUrl: 'https://picsum.photos/seed/priya/200' },
];

export const RESOURCES: Resource[] = [
  { id: 1, title: 'Understanding Anxiety', type: ResourceType.Article, description: 'A guide to understanding the symptoms and types of anxiety.', category: 'Anxiety', link: '#' },
  { id: 2, title: '5-Minute Guided Meditation', type: ResourceType.Audio, description: 'A short audio track to help you relax and recenter.', category: 'Mindfulness', link: '#' },
  { id: 3, title: 'Techniques for Better Sleep', type: ResourceType.Video, description: 'Learn scientifically-backed methods for improving sleep quality.', category: 'Sleep', link: '#' },
  { id: 4, title: 'Coping with Exam Stress', type: ResourceType.Article, description: 'Practical tips for managing stress during exam periods.', category: 'Stress', link: '#' },
  { id: 5, title: 'Introduction to Cognitive Behavioral Therapy (CBT)', type: ResourceType.Video, description: 'An animated video explaining the basics of CBT.', category: 'Therapy', link: '#' },
  { id: 6, title: 'Deep Breathing Exercises', type: ResourceType.Audio, description: 'Follow along with these simple breathing exercises to calm your mind.', category: 'Mindfulness', link: '#' },
];

export const FORUM_POSTS: ForumPost[] = [
  {
    id: 1,
    title: 'Feeling overwhelmed with coursework. Any tips?',
    author: 'Student_23',
    timestamp: '2 days ago',
    replies: 5,
    content: 'Lately, the pressure from all my classes is getting to be too much. I feel like I\'m constantly behind. Does anyone have strategies for managing a heavy workload without getting burned out?',
    comments: [
      { id: 1, author: 'Helpful_Peer', timestamp: '2 days ago', content: 'I felt the same way last semester. The Pomodoro Technique really helped me. 25 minutes of focused work, then a 5-minute break. It makes tasks feel less daunting.' },
      { id: 2, author: 'Volunteer_Mod', timestamp: '1 day ago', content: 'That\'s a great suggestion! Also, remember to talk to your professors. Sometimes they can offer extensions or help you prioritize. We also have some resources in the "Academic Stress" section of the Resource Hub.' },
    ]
  },
  {
    id: 2,
    title: 'How do you make friends in a new city?',
    author: 'Newcomer_7',
    timestamp: '5 days ago',
    replies: 8,
    content: 'I just moved here for college and I\'m finding it hard to connect with people. It feels a bit lonely. Any advice on how to meet new people and make friends?',
    comments: [],
  },
];

export const DASHBOARD_DATA = {
  issuesByCategory: [
    { name: 'Anxiety', count: 450 },
    { name: 'Academics', count: 380 },
    { name: 'Depression', count: 290 },
    { name: 'Social', count: 210 },
    { name: 'Sleep', count: 150 },
    { name: 'Other', count: 90 },
  ],
  usageOverTime: [
    { month: 'Jan', users: 200 },
    { month: 'Feb', users: 250 },
    { month: 'Mar', users: 310 },
    { month: 'Apr', users: 350 },
    { month: 'May', users: 420 },
    { month: 'Jun', users: 510 },
  ]
};
