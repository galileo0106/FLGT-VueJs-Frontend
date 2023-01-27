import { ref, computed } from "vue";

export default function handlePagination() {
  let page = ref(1);

  const blogList = [
    {
        id: 1,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 2,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 3,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 4,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img4_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img4_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 5,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img5_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img5_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 6,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img6_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img6_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 7,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img7_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img7_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 8,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img8_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img8_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 9,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img9_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img9_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 10,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 11,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 12,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 13,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img4_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img4_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 14,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img5_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img5_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 15,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img6_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img6_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 16,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img7_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img7_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 17,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img8_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img8_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 18,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img9_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img9_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 19,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 20,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 21,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 22,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img4_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img4_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 23,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img5_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img5_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 24,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img6_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img6_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 25,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img7_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img7_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 26,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img8_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img8_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 27,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img9_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img9_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 28,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 29,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 30,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 31,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 32,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img4_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img4_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 33,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img5_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img5_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 34,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img6_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img6_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 35,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img7_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img7_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 36,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img8_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img8_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 37,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img9_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img9_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 38,
        title: "blogItemTitle1",
        description: "blogItemDesc1",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 39,
        title: "blogItemTitle2",
        description: "blogItemDesc2",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 40,
        title: "blogItemTitle3",
        description: "blogItemDesc3",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
  ];
  const data = blogList.map((item) => {
    return { index: item, data: item };
  });

  const perPage = 9;
  const pageSize = 3;
  const totalPage = Math.ceil(data.length / perPage);

  const paginatedData = computed(() =>
    data.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(totalPage / perPage)) {
      page.value += 1;
      console.log(page.value)
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { data, paginatedData, perPage, page, nextPage, backPage, goToPage, pageSize };
}
