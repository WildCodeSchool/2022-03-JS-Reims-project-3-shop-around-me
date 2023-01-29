import { Pagination } from "react-admin";

export default function AdminPagination() {
  return <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;
}
