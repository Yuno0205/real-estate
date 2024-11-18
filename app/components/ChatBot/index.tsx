"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

function ChatBot() {
  return (
    <div className="w-full min-h-screen">
      <FacebookProvider appId="552946714013365">
        <CustomChat
          pageId="462431816958415"
          minimized
          loggedInGreeting="Chào bạn! Tôi có thể giúp gì cho bạn?"
          loggedOutGreeting="Vui lòng đăng nhập Facebook để trò chuyện với chúng tôi."
        />
      </FacebookProvider>
    </div>
  );
}

export default ChatBot;
