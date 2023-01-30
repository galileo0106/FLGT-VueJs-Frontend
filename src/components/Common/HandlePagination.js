import { ref, computed } from "vue";

export default function handlePagination(list) {
  let page = ref(1);

  const data = list.map((item) => {
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
