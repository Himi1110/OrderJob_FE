import { Avatar, Indicator } from "@mantine/core";
import React from "react";
import HimiAvt from "@img/HimiAvt.jpg";
import NavLinks from "./NavLinks";
import AssetIcon from "@img/Asset.svg";
import BellIcon from "@img/Bell.svg";
import SettingIcon from "@img/Setting.svg";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 text-white h-20 flex justify-between px-5 items-center">
      <div className="flex gap-2 items-center text-java-300">
        <img src={AssetIcon} />
        <div className="text-3xl font-semibold">OrderJob</div>
      </div>

      <NavLinks />

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div>Himi tới chơi</div>
          <Avatar size={30} src={HimiAvt} alt="it's me" />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <img src={SettingIcon} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="cyan" withBorder processing>
            <img src={BellIcon} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
