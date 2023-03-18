import { ref } from "vue";
import usePageRequest from "./usePageRequest";

export default function useResource(resource) {
  const { makeRequest } = usePageRequest();
  const items = ref([]);
  const item = ref(null);
  const baseUrl = `https://jsonplaceholder.typicode.com/${resource}`;

  const fetchAll = async () => (items.value = await makeRequest(baseUrl));

  const fetchOne = async (id) => {
    item.value = await makeRequest(`${baseUrl}/${id}`);
  };

  return { items, fetchAll, item, fetchOne };
}
