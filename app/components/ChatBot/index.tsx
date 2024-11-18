"use client";

import { useEffect } from "react";

const FacebookChat: React.FC = () => {
  useEffect(() => {
    const loadFbSdk = () => {
      window.fbAsyncInit = function () {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: "v17.0", // Đảm bảo sử dụng phiên bản API chính xác
          });
        }
      };

      if (!document.getElementById("facebook-jssdk")) {
        const js = document.createElement("script");
        js.id = "facebook-jssdk";
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        const fjs = document.getElementsByTagName("script")[0];
        fjs?.parentNode?.insertBefore(js, fjs);
      }
    };

    loadFbSdk();
  }, []);

  return (
    <div
      className="fb-customerchat"
      data-attribution="biz_inbox"
      data-page_id="462431816958415"
    ></div>
  );
};

export default FacebookChat;
