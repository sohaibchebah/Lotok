import React from "react";
import { Button } from "../../../@/components/ui/button";

interface Props {
  changeUrl: (url: string) => void;
}

const BaseUrl = ({ changeUrl }: Props) => {
  const baseUrl = "http://192.168.4.20:8000";

  const change = () => {
    changeUrl(baseUrl);
  };
  return (
    <div onClick={change}>
      <Button className="w-[0px] h-[1px] bg-transparent text-black hover:bg-transparent ">
        .
      </Button>{" "}
      {/* Optional button for user interaction */}
    </div>
  );
};

export default BaseUrl;
