import React from "react";

interface RemoveCartItemProps {
  handleRemove: () => void;
}

export default function RemoveCartItem({ handleRemove }: RemoveCartItemProps) {
  const openDialog = () =>
    (
      document.getElementById("remove-cart-entry") as HTMLDialogElement
    ).showModal();

  return (
    <>
      <button
        className="p-2 text-error outline-red-600 transition duration-200 hover:text-red-600 focus:text-red-600 active:scale-90"
        onClick={openDialog}
      >
        <svg
          fill="currentColor"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M82.952,134.729c4.174,78.441,20.438,348.879,21.201,361.577L105.097,512h301.806l0.944-15.694 c0.765-12.698,17.029-283.136,21.201-361.577C429.048,134.729,82.952,134.729,82.952,134.729z M167.602,461.089l-14.599-279.58 l33.346-1.741l14.599,279.58L167.602,461.089z M272.696,460.219h-33.391V180.194h33.391V460.219z M344.395,461.089l-33.346-1.741 l14.603-279.58l33.346,1.741L344.395,461.089z"></path>{" "}
          <path d="M316.325,44.522V0H195.68l-0.003,44.522H61.217v55.703c0,0,389.565,0,389.565,0V44.522H316.325z M282.935,44.522h-53.866 v-11.13h53.866V44.522z"></path>{" "}
        </svg>
      </button>

      <dialog id="remove-cart-entry" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Delete this item?</h3>
          <p className="py-4">
            Are you shure you want to{" "}
            <span className="font-bold text-error">delete</span> this item?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-square btn-sm absolute right-2 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex gap-3">
                <button className="btn normal-case">Cancel</button>
                <button
                  onClick={handleRemove}
                  className="btn btn-error normal-case transition-colors duration-200 hover:bg-[#d64b51]"
                >
                  Yes, delete it
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
