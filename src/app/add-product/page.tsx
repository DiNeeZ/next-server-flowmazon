import { addProduct } from "@/actions";
import FormSubmitButton from "@/components/FormSubmitButton";

export const metadata = {
  title: "Add Product - Flowmazon",
};

export default function AddProductPage() {
  return (
    <section className="container mx-auto w-full">
      <div className="flex flex-col items-center">
        <h1 className="my-3 w-full text-center text-lg font-bold uppercase text-neutral">
          Add Product
        </h1>
        <form
          action={addProduct}
          className="form-control mt-4 w-full max-w-xl gap-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="input input-bordered"
          />

          <textarea
            name="description"
            placeholder="Description of a Product"
            rows={5}
            required
            className="textarea textarea-bordered"
          />

          <input
            name="imageUrl"
            type="url"
            placeholder="Image URL"
            required
            className="input input-bordered"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            required
            className="input input-bordered"
          />

          <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
        </form>
      </div>
    </section>
  );
}
