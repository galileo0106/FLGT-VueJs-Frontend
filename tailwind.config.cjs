/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeGreyText1: "#333333",
        themeDarkPurpleText: "#170550",
      },
      fontFamily: {
        normal_font: ['"PingFang SC"'],
      },
      boxShadow: {
        normal: "0px 1px 0px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        chinese_pc_banner_1: "linear-gradient(to right, #F9F6FD 0%, #E4DFFE 36.98%, #DED9FA 78.1%, #F3EAFF 100%)",
        banner_illustration_1: "url('../../src/assets/chinese_pc/banner_illustration_1.png')",
        chinese_pc_banner_2: "url('../../src/assets/chinese_pc/banner_2.png')",
        chinese_pc_banner_3: "url('../../src/assets/chinese_pc/banner_3.png')",
        video_page: "url('../../src/assets/chinese_pc/video_pc.png')",
        video_mobile_page: "url('../../src/assets/chinese_mobile/ecology_mobile.svg')",
        laptop_pc: "url('../../src/assets/chinese_pc/laptop_pc.svg')",
        laptop_mobile: "url('../../src/assets/chinese_mobile/laptop_mobile.svg')",
        download_page: "linear-gradient(to right, #F9F6FD 0%, #E4DFFE 36.98%, #DED9FA 78.1%, #F3EAFF 100%)",
        chinese_mobile_banner_1: "url('../../src/assets/chinese_mobile/banner_1.png')",
        chinese_mobile_banner_2: "url('../../src/assets/chinese_mobile/banner_2.png')",
        chinese_mobile_banner_3: "url('../../src/assets/chinese_mobile/banner_3.png')",
        fast_box: "linear-gradient(to right, #3D1C82 12.86%, #F4027A 95.51%)",
        community_page: "url('../../src/assets/chinese_pc/community_page_pc.png')",
        community_mobile_page: "url('../../src/assets/chinese_mobile/community_page_mobile.png')",
        competitivense_page: "url('../../src/assets/chinese_pc/Competitiveness.svg')",
        competitivense_mobile_page: "url('../../src/assets/chinese_mobile/Competitiveness_mobile.svg')",
        diagram_page: "url('../../src/assets/chinese_pc/diagram_bg.svg')",
        diagram_pc: "url('../../src/assets/chinese_pc/diagram_pc.svg')",
        diagram_mobile: "url('../../src/assets/chinese_mobile/diagram_mobile.svg')",
        footer: "linear-gradient(to right, #110B10 0%, #150550 100%)",

        download_bg_pc: "url('../../src/assets/chinese_pc/download/download_bg_pc.png')",
        download_bg_mobile: "url('../../src/assets/chinese_mobile/download/download_bg_mobile.png')",
        download_show_pc: "url('../../src/assets/chinese_pc/download/download_show_pc.png')",
        download_show_mobile: "url('../../src/assets/chinese_mobile/download/download_show_mobile.png')",

        mining_bg_pc: "url('../../src/assets/chinese_pc/mining/mining_bg_pc.png')",
        mining_bg_mobile: "url('../../src/assets/chinese_mobile/mining/mining_bg_mobile.png')",
        issuance_bg_pc: "url('../../src/assets/chinese_pc/mining/ming_bg_part2_pc.png')",

        team_bg_pc: "url('../../src/assets/chinese_pc/team/team_bg_pc.png')",
        team_mobile_pc: "url('../../src/assets/chinese_mobile/team/team_img_mobile.png')",

        help_bg_pc: "url('../../src/assets/chinese_pc/help/help_bg_pc.png')",
        help_bg_mobile: "url('../../src/assets/chinese_mobile/help/help_bg_mobile.png')",
        contact_us_bg_pc: "linear-gradient(to right, #f9f6fd40 0%, #e0dffe40 36.98%, #c3dbff40 78.1%, #f3eaff40 100%)",
      },
      boxShadow: {
        btn1: "-6px 8px 4px 0px rgba(240, 33, 72, 0.25)",
      },
    },
  },
  plugins: [],
};
