import React from "react";

const Comments = () => {
  return (
    <div
      part="comments-count-button-icon"
      role="button"
      aria-labelledby="comments-count-button"
      class="icon-wrapper "
      aria-placeholder="Comments"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-placeholder="Comments"
      >
        <path d="M10.48 13.84h4.92c.9 0 1.6-.71 1.6-1.56V5.57C17 4.7 16.3 4 15.4 4H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16zM6.8 17.8a1 1 0 01-1.4-.2.98.98 0 01-.2-.59v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3h10.8C16.84 3 18 4.15 18 5.57v6.7a2.58 2.58 0 01-2.6 2.57h-4.59L6.8 17.8z"></path>
      </svg>
     Comments
    </div>
  );
};


export default Comments;