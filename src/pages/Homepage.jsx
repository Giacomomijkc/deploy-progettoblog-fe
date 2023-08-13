import React from 'react';
import NavigationBar from '../components/NavigationBar';
import AllPosts from '../components/AllPosts';
import Footer from '../components/Footer';
import './homepage.css'
import { useTheme } from '../components/ThemeContext';

export const Homepage = ({ posts, query, setQuery, authors, getPosts, getAuthors, getComments,userData }) => {
  const { theme } = useTheme();


  return (
    <>
    <div className={`content-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <NavigationBar query={query} setQuery={setQuery} showSearch={true} userData={userData} />
      <AllPosts posts={posts} query={query} getPosts={getPosts} authors={authors} getAuthors={getAuthors} getComments={getComments} />
      <Footer />
    </div>
    </>
  )
}

export default Homepage;