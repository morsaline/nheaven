"use client";
import { cn } from "@/lib/utils";
import { Button } from "antd";
import React, { FC } from "react";

interface MyButtonProps {
  title: string;
  className?: string;
}
const MyButton: FC<MyButtonProps> = ({ title, className }) => {
  return (
    <>
      <Button
        className={cn("bg-tomato text-white rounded-md border-none", className)}
      >
        {title}
      </Button>
    </>
  );
};

export default MyButton;
