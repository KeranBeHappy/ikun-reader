import { NavBar, Space } from 'antd-mobile'
import { MoreOutline } from 'antd-mobile-icons'

function Mine() {
  const Right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <MoreOutline />
      </Space>
    </div>
  )

  return (
    <div className="Page">
      <NavBar back={null} right={Right}>我的</NavBar>
    </div>
  );
}

export default Mine;