import './Bookshelf.scss';

import { NavBar, Space } from 'antd-mobile'
import { SearchOutline, MoreOutline } from 'antd-mobile-icons'

const bookData = [
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  },
  {
    book_name: '三国演义',
    author: '罗贯中',
    cover_image: '',
    have_read_chapter: "1000",
    total_chapter: "2000"
  }
]

const BookList = () => {
  return (
    <div className='View'>
      <div className='Book-list'>
        {
          bookData.map((item, index) => {
            return (
              <div className='Book-item' key={index}>
                <div className='Item-cover'>
                </div>
                <div className='Item-name'>{item.book_name}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const Right = (
  <div style={{ fontSize: 24 }}>
    <Space style={{ '--gap': '16px' }}>
      <SearchOutline />
      <MoreOutline />
    </Space>
  </div>
)

function Bookshelf() {
  return (
    <div className="Page">
      <NavBar back={null} right={Right}>书架</NavBar>
      <BookList />
    </div>
  );
}

export default Bookshelf;