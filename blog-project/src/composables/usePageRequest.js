import { reactive, computed } from "vue";
const activeRequest = reactive([]);

export default function usePageRequest() {
  const isLoading = computed(() => !!activeRequest.length);
  const makeRequest = async (url) => {
    //
    const index = activeRequest.length;
    activeRequest[index] = url;
    const response = await fetch(url).catch((error) => alert(error));
    const data = await response.json();
    activeRequest.splice(index, 1);
    return data;
  };
  return { isLoading, makeRequest };
}
