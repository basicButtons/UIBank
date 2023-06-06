import React, { useState, useLayoutEffect, useEffect } from "react";
import "./index.css";
import { Button, Drawer } from "antd";
import device from "./device";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";
const DS: any = styled(Drawer)`
  /* margin-top: ${(props: any) => (props.y !== 0 ? props.y : "112px")}; */
`;

export const MyDrawer: React.FC = () => {
  const {
    TabletAndMobile,
    DesktopOrLaptop,
    isTabletAndMobile,
    isMobile,
    isTablet,
    Mobile,
  } = device({
    tabletAndMobileMaxW: 1279,
    deskOrLaptopMinW: 768,
    tabletMinW: 768,
    tabletMaxW: 1279,
    mobileMaxW: 767,
  });
  const [y, setY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      setY(window.scrollY);
    });
  }, []);
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    if (open) window.scrollTo(0, 0);
  }, [open]);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isMobile && (
        <div>
          <MenuOutlined onClick={showDrawer} />
          <DS
            y={y}
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DS>
        </div>
      )}
    </>
  );
};
