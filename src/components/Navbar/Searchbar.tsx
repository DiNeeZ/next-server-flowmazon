import { searchProducts } from "@/actions";

export default function Searchbar() {
  return (
    <form action={searchProducts}>
      <div className="form-control">
        <input
          name="searchQuery"
          type="text"
          placeholder="Search..."
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </form>
  );
}
