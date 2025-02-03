export const getAllPosts = async (page: any) => {
  try {
    const response = await fetch(
      `http://localhost:3042/posts?_page=${page}&_per_page=6`
    );
    console.log(response);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
