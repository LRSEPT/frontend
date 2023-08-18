import React, { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import PostCard from '../components/PostCard'

import useFetch from '../hooks/useFetch'

import PostDateContainer from '../components/PostDateContainer'

const url = 'http://localhost:1337/api/posts?populate=*';

export default function HomePage() {
  const [ loading, error, data ] = useFetch(url);
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedYear, setSelectedYear] = useState("No Year Selected");
  const [selectedMonth, setSelectedMonth] = useState("No Month Selected");
  const [selectedCategory, setSelectedCategory] = useState("No Category Selected");
  const [filteredDataDate, setFilteredDataDate] = useState([]);
  const [filteredDataCategory, setFilteredDataCategory] = useState([]);

  console.log(data);

  useEffect(() => {
    if (data) {
      const yearsSet = new Set();
      const monthsSet = new Set();
      const categoriesSet = new Set();
      data.data.forEach((post) => {
        const dateObj = new Date(post.attributes.updatedAt);
        yearsSet.add(dateObj.getFullYear().toString());
        monthsSet.add(dateObj.toLocaleString('en-US', { month: 'long' }));
        post.attributes.categories.data.forEach((cat) => {
          categoriesSet.add(cat.attributes.name);
        })
      });
      setYears(['No Year Selected', ...Array.from(yearsSet)]);
      setMonths(['No Month Selected', ...Array.from(monthsSet)]);
      setCategory(['No Category Selected', ...Array.from(categoriesSet)]);
    }
  }, [data]);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  }
  const handleMonthSelect = (mon) => {
    setSelectedMonth(mon);
  }
  const handleCategroySelect = (cat) => {
    setSelectedCategory(cat);
  }

  useEffect(() => {
    if(selectedYear === "No Year Selected") 
      setSelectedMonth("No Month Selected")
  },[selectedYear])

  const hasYear = (post) => {
    const dateObj = new Date(post.attributes.updatedAt);
    if(dateObj.getFullYear().toString() === selectedYear) {
      return true; 
    }
    return false
  }

  const hasMonth = (post) => {
    const dateObj = new Date(post.attributes.updatedAt);
    if(dateObj.toLocaleString('en-US', { month: 'long' }) === selectedMonth) return true
    return false
  }

  const hasCategory = (post) => {
    const allCategories = post.attributes.categories.data.map((cat) => (
      cat.attributes.name
    ))
    console.log(allCategories)
    if(allCategories.includes(selectedCategory)) return true;
    return false;
  }

  useEffect(() => {
    if(selectedYear !== 'No Year Selected' && selectedMonth === 'No Month Selected') {
      setFilteredDataDate(data.data.filter(hasYear))
    }
    else if(selectedYear !== 'No Year Selected') {
      setFilteredDataDate(data.data.filter(hasMonth))
    }
    else {
      setFilteredDataDate([])
    }
  },[selectedMonth,selectedYear]) 

  useEffect(() => {
    if(selectedCategory !== 'No Category Selected') {
      setFilteredDataCategory([]);
      if(filteredDataDate.length === 0) {
        setFilteredDataCategory(data.data.filter(hasCategory))
      }
      else {
        setFilteredDataCategory(filteredDataDate.filter(hasCategory))
      }
    }
    else {
      setFilteredDataCategory([])
    }
  },[selectedCategory,filteredDataDate])

  if(loading) return (<p className={style.loading}>Loading ... </p>)
  if(error) return (<p className={style.error}>Error : {error} ! </p>)

  return (
    <div className='home'>
      <div className={style.all}>
          <div className={style.date}>
            <PostDateContainer Months={months} Years={years} Category={category} onMonthSelect={handleMonthSelect} onYearSelect={handleYearSelect} onCategorySelect={handleCategroySelect} />
          </div>
          <div className={style.posts}>
            {
              (filteredDataDate.length === 0) && (filteredDataCategory.length === 0) ? 
              data.data.map((post) => (
                <PostCard key={post.id} post={post} post_id={post.id}/>
              ))
              : 
              (filteredDataCategory.length === 0)?
              filteredDataDate.map((post) => (
                <PostCard key={post.id} post={post} post_id={post.id}/>
              ))
              :
              filteredDataCategory.map((post) => (
                <PostCard key={post.id} post={post} post_id={post.id}/>
              ))
            }
          </div>
      </div>
    </div>
  )
}
