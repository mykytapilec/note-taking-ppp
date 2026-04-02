import { marked } from "marked";

export const renderMarkdown = (content: string) => {
  return marked.parse(content);
};