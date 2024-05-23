import React from "react";

interface Props {
  className: string;
}

const LinkedIn = ({ className }: Props) => {
  return (
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1.79084C0 0.802052 0.821894 0 1.8358 0H23.1642C24.1781 0 25 0.802055 25 1.79084V23.2092C25 24.1983 24.1781 25 23.1642 25L1.8358 25C0.821894 25 0 24.1983 0 23.2092V1.79084ZM7.72403 20.9276V9.63869H3.97181V20.9276H7.72403ZM5.8479 8.09738C7.15638 8.09738 7.9708 7.23052 7.9708 6.14719C7.94641 5.03948 7.15638 4.19667 5.87273 4.19667C4.5892 4.19667 3.75 5.03948 3.75 6.14719C3.75 7.23052 4.56424 8.09738 5.82345 8.09738H5.8479ZM13.5178 20.9276V14.6234C13.5178 14.286 13.5422 13.9489 13.6413 13.7078C13.9125 13.0336 14.5299 12.3355 15.5665 12.3355C16.9242 12.3355 17.4674 13.3707 17.4674 14.8883V20.9276H21.2192V14.4547C21.2192 10.9872 19.3681 9.37379 16.8994 9.37379C14.909 9.37379 14.0166 10.4678 13.5179 11.237V11.2759H13.4929C13.5011 11.263 13.5094 11.25 13.5179 11.237V9.63869H9.76573C9.81497 10.698 9.76573 20.9276 9.76573 20.9276H13.5178Z" />
      </svg>
    </div>
  );
};

export default LinkedIn;
