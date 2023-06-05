import React from "react"
import { FileAddOutlined, FileDoneOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Layout, Menu } from "antd"
import { Todo } from "./Todo"

const { Sider } = Layout
type MenuItem = Required<MenuProps>["items"][number]

export const Form: React.FC = () => {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem
  }
  const items: MenuProps["items"] = [
    getItem("Task", "1", <FileAddOutlined />),
    getItem("Done Task", "2", <FileDoneOutlined />),
  ]
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        className="bg-base-300"
      >
        <div className="text-4xl p-4">
          <label className="text-primary">Todo</label>
          <label className="text-base-content">List</label>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Todo />
      </Layout>
    </Layout>
  )
}
