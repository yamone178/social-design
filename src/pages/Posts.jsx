import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import Article from '../components/Article';
import SkeletonLoader from '../components/SkeletonLoader';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock the posts data without fetching from JSON Server
    const mockData = [
      {
        id: 1,
        user: {
          name: 'Jane Doe',
          verified: true
        },
        time: '4m',
        content:
          'Lorem ipsum dolor sit amet consectetur. Ipsum fermentum neque sollicitudin tempor tortor cursus ultricies et. Id tortor fames nunc nisi congue suscipit.',
        likes: 8,
        comments: 1,
        shares: 3,
        improve: 32,
        hasMedia: false,
        type: 'content',
        images: []
      },
      {
        id: 2,
        user: {
          name: 'Jane Doe',
          verified: false
        },
        time: '4m',
        content:
          'Lorem ipsum dolor sit amet consectetur. Ipsum fermentum neque sollicitudin tempor tortor cursus ultricies et. Id tortor fames nunc nisi congue suscipit.',
        likes: 8,
        comments: 1,
        shares: 3,
        improve: 32,
        hasMedia: true,
        type: 'content',
        images: ['/assets/images/vdgp.png']
      },
      {
        id: 4,
        user: {
          name: 'Jane Doe',
          verified: true
        },
        time: '4m',
        content:
          'UI Designဆွဲတယ်ဆိုတာ Productတစ်ခုရဲ့ Interfaceကို ကြည့်လို့လှရုံသက်သက် ဆွဲရတာမျိုးမဟုတ်ဘဲ UX Research, User Personna, User Flow and Journey Mapping စတဲ့ UX Design Process အဆင့်ဆင့်ကရလာတဲ့ resultတွေ၊ Decision တွေပေါ်မှာအခြေခံပြီးမှ Productကိုအ...',
        likes: 12,
        comments: 0,
        shares: 3,
        improve: 32,
        hasMedia: true,
        type: 'content',
        images: ['/assets/images/img2-1.png', '/assets/images/img2-2.png', '/assets/images/img2-1.png'],
        flicked: true
      },
      {
        id: 5,
        user: {
          name: 'Jane Doe',
          verified: true
        },
        time: '4m',
        content:
          'Unleash power and creativity with the iPad Pro M4. Redefine what\'s possible—get yours today!',
        likes: 12,
        comments: 0,
        shares: 3,
        improve: 32,
        hasMedia: true,
        type: 'ads',
        images: [
          '/assets/images/img3-1.png',
          '/assets/images/img3-2.png',
          '/assets/images/img3-3.png'
        ],
        ads: {
          content:
            'iPad Pro 13-Inch (M4): Built for Apple Intelligence, Ultra Retina XDR Display, 256GB, 12MP Front/Back Camera, LiDAR Scanner, Wi-Fi 6E, Face ID, All-Day Battery Life — Space Black',
          price: '$ 1299.00'
        }
      },
      {
        id: 6,
        user: {
          name: 'Jane Doe',
          verified: true
        },
        time: '4m',
        content:
          'Unleash power and creativity with the iPad Pro M4. Redefine what\'s possible—get yours today!',
        likes: 12,
        comments: 0,
        shares: 3,
        improve: 32,
        hasMedia: true,
        type: 'content',
        images: ['/assets/images/img4-1.png', '/assets/images/img4-2.png']
      }
    ];

    // Simulate loading state and update data
    setTimeout(() => {
      setPosts(mockData);
      setIsLoading(false);
    }, 2000); // Simulate a 2-second delay for loading
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex flex-col">
      <div className="border-t border-gray-200">
        {posts.map((post) => {
          if (post.type === 'content' || post.type === 'ads') {
            return <Content key={post.id} post={post} />;
          }
          if (post.type === 'article') {
            return <Article key={post.id} post={post} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Posts;
