export type PaginationProps = {
  currentPage: number;
  totalCount: number;
  onPageChange: (page: number) => void;
};