import React, { useMemo, useState } from 'react';
import useFetchPosts from './hooks/useFetchPosts';
import FeaturedPosts from './components/FeaturedPosts';
import SearchFilter from './components/SearchFilter';
import PostList from './components/PostList';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const { posts, loading, error } = useFetchPosts(searchQuery);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.author?.fullName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        post.text.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        filter === 'all' ||
        (filter === 'original' && !post.reposted) ||
        (filter === 'reshared' && post.reposted) ||
        (filter === 'video' && post.video?.video?.length);

      return matchesSearch && matchesFilter;
    });
  }, [posts, searchQuery, filter]);

  const topPosts = useMemo(() => {
    return [...posts]
      .sort(
        (a, b) =>
          (b.socialActivityCountsInsight?.totalReactionCount || 0) -
          (a.socialActivityCountsInsight?.totalReactionCount || 0)
      )
      .slice(0, 3);
  }, [posts]);

  return (
    <>
      <Navbar />

      <main className="container">
        {error ? (
          <p>Error loading posts: {error}</p>
        ) : (
          <>
            <FeaturedPosts loading={loading} posts={topPosts} />

            <section className="section">
              <h2 className="section-title">Post Listing</h2>

              <SearchFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filter={filter}
                setFilter={setFilter}
              />

              <PostList loading={loading} posts={filteredPosts} />
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
