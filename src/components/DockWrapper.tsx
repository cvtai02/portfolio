"use client";

import Dock from "./Dock";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { useRouter } from "next/navigation";

export default function DockWrapper() {
  const router = useRouter();

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Blog",
      onClick: () => router.push("/blog"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About",
      onClick: () => router.push("/about"),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];

  return (
    <Dock
      className="fixed z-50"
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}
