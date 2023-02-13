import { Pagination } from "react-admin";

export default function AdminPagination() {
  return <Pagination rowsPerPageOptions={[25, 50, 100]} />;
}
