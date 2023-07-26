import matter from "gray-matter";

export const getPost = (response) => {
    const blogContent = response.body_markdown;
    const slug = response.slug;
    const { data, content } = matter(fileContents);
    return {
        data,
        content,
    };
}