import { NavBar, Space } from 'antd-mobile'
import { SearchOutline, MoreOutline } from 'antd-mobile-icons'

function Discover() {
  const Right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  )

  return (
    <div className="Page">
      <NavBar back={null} right={Right}>发现</NavBar>
    </div>
  );
}

export default Discover;