import myPageLinkList from '@constants/myPageLinkList';

export const isInMyPage = (currentPage: string): boolean => {
  let result = false;
  if (currentPage === 'my') return true;
  myPageLinkList.forEach((page) => {
    if (page.toLowerCase() === currentPage) result = true;
  });
  return result;
};
