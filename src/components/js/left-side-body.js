import React, { useState } from "react";
import LeftSideBodyTab from "../../partOfWeb/js/left-side-body-tab";
import LeftSideBodyTabUser from "../../partOfWeb/js/left-side-body-tab-user";
import LeftSideBodyShortcut from "../../partOfWeb/js/left-side-body-shortcut";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "../css/left-side-body.css";
import LeftSideBodyTabExpand from "../../partOfWeb/js/left-side-body-tab-expand";

function LeftSideBody() {
  const [expandMode, expandModeSet] = useState("0");
  return (
    <div className="Left-side-body-box">
      <div className="Left-side-tabs-box">
        <LeftSideBodyTabUser
          avatar="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/321822155_899708297707235_5749840580572609327_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zGxgU9iPKkkAX8eoEc1&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCJt7pHrpEHJPA1USfj2crznUCfPWXLeyo1tSS46cD-EQ&oe=640F0B38"
          name="Đặng Trí Tâm"
        />
        <LeftSideBodyTab icon="friends" content="Bạn bè" />
        <LeftSideBodyTab icon="watch" content="Watch" />
        <LeftSideBodyTab icon="memories" content="Kỉ niệm" />
        <LeftSideBodyTab icon="marketplace" content="Marketplace" />
        <LeftSideBodyTab icon="saved" content="Đã lưu" />
        <LeftSideBodyTab icon="funds" content="Chiến dịch gây quỹ" />

        {expandMode === "0" ? (
          <div
            className="expand-box"
            onClick={() => {
              expandModeSet("1");
            }}
          >
            <div className="expand-btn">
              <KeyboardArrowDownRoundedIcon
                fontSize="small"
                style={{ color: "#e4e6eb" }}
              />
            </div>
            <p>Xem thêm</p>
          </div>
        ) : (
          <div className="expand-box-wrap">
            <LeftSideBodyTabExpand
              content="Chơi game"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/3JN6bzIH9li.png"
            />
            <LeftSideBodyTabExpand
              content="Đơn hàng và thanh toán"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/vWBUs7aYAiK.png"
            />
            <LeftSideBodyTabExpand content="Gần đây nhất" src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/kD5Sv0isIPs.png" />
            <LeftSideBodyTab content="Hiến máu" icon="hienmau" />
            <LeftSideBodyTabExpand content="Hoạt động quảng cáo gần đây" src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/cbPxeioybsd.png" />
            <LeftSideBodyTab content="Messenger" icon="messenger" />
            <LeftSideBodyTabExpand content="Messenger nhí" src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/ilSiTyZwdJA.png" />
            <LeftSideBodyTab content="Nhóm" icon="groups"></LeftSideBodyTab>
            <LeftSideBodyTabExpand content="Sự kiện" src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/c_pBf4yN--n.png" />
            <LeftSideBodyTab content="Trang" icon="pages"></LeftSideBodyTab>
            <LeftSideBodyTabExpand content="Trình quản lý quảng cáo" src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/C949oxkze-S.png" />
            <LeftSideBodyTabExpand content="Trung tâm khoa học khí hậu" src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/4LP02rGQaMl.png" />
            <LeftSideBodyTabExpand content="Trung tâm quảng cáo" src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/lqymE2iRETE.png" />
            <LeftSideBodyTabExpand content="Ứng phó khẩn cấp" src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/5CPaqlTUepF.png" />
            <LeftSideBodyTab content="Video chơi game" icon="game-livestream"></LeftSideBodyTab>
            <LeftSideBodyTab content="Video trực tiếp" icon="livestream"></LeftSideBodyTab>
            <LeftSideBodyTabExpand content="Yêu thích" src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png" />
            <div
              className="expand-box"
              onClick={() => {
                expandModeSet("0");
              }}
            >
              <div className="expand-btn">
                <KeyboardArrowUpRoundedIcon
                  fontSize="small"
                  style={{ color: "#e4e6eb" }}
                />
              </div>
              <p>Ẩn bớt</p>
            </div>
          </div>
        )}
      </div>
      <div className="line"></div>
      <div className="Left-side-shortcuts">
        <p className="shortcut-header">Lối tắt của bạn</p>
        <LeftSideBodyShortcut
          name="Luyện viết IELTS Writing 8.0+"
          img="https://scontent.fhan5-2.fna.fbcdn.net/v/t31.18172-8/23847227_132803937426665_6766764482128831949_o.jpg?stp=c284.0.1131.1131a_cp0_dst-jpg_s75x225&_nc_cat=105&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=a-Jcpp76yyEAX_agwUL&_nc_ht=scontent.fhan5-2.fna&oh=00_AfBX5vzjyVDzNbYDaG2NvkouA-Lrd9cUV_09sQjuDm3G6w&oe=64321E86"
        />
        <LeftSideBodyShortcut
          name="Chạy Vui Ghêeeeeeeee!"
          img="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/325242252_1931610500514469_4155328077569412285_n.jpg?stp=c420.0.1080.1080a_cp0_dst-jpg_s75x225&_nc_cat=104&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=E3v5rkvC9pYAX-tgcj1&_nc_oc=AQm4nY3SvlmDPaqO517zbVRgsjRngb8dujMvNyny07RI2sUq8x9XX0VuS9972-ad9iE&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCA-e4v6SakF2Z08kEGnCqlt1H-7qfFiru45A_F9WCWrQ&oe=640EF515"
        />
        <LeftSideBodyShortcut
          name="Hero Wars"
          img="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.2081-6/137174435_2875408222748563_7327360555959869042_n.png?stp=c1.1.72.72a_dst-png_p72x72&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=3ltncrvrnBUAX8hPhzi&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAFSWawmf_YUCOhYkhu-LlCy3_7D12Krf3eDgMlIBN9Vw&oe=640E9867"
        />
        <LeftSideBodyShortcut
          name="Texas Holdem Poker"
          img="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.2081-6/27045397_10155399661101229_4188312396068028416_n.png?stp=c1.1.72.72a_dst-png_p72x72&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=nzK8fTV9aNMAX9un0rR&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCBCMzUNixsKH8LUpA4JFNJegRs96V6aEwUv0Calm4J4A&oe=640F3C0E"
        />
        <LeftSideBodyShortcut
          name="Zoo World"
          img="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.2081-6/851536_10152327347506128_442922880_n.png?stp=c1.1.72.72a_dst-png_p72x72&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=T3aCysjjVK8AX9stbyR&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAtFAs9ZQ8jsl_HOU5V0sUoje-nz4EgQW-furhDkActpQ&oe=641021A6"
        />
      </div>
    </div>
  );
}

export default LeftSideBody;
