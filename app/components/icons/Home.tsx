import React from "react";

interface Props {
  className: string;
}

const Home = ({ className }: Props) => {
  return (
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
        className={className}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5 5.14515L21.875 14.5202V21.0938C21.875 22.3882 20.8257 23.4375 19.5312 23.4375H5.46875C4.17433 23.4375 3.125 22.3882 3.125 21.0938V14.5202L12.5 5.14515Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3125 3.90625V9.375L17.1875 6.25V3.90625C17.1875 3.47478 17.5373 3.125 17.9688 3.125H19.5312C19.9627 3.125 20.3125 3.47478 20.3125 3.90625Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
=======
        className={className}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 5.14515L21.875 14.5202V21.0938C21.875 22.3882 20.8257 23.4375 19.5312 23.4375H5.46875C4.17433 23.4375 3.125 22.3882 3.125 21.0938V14.5202L12.5 5.14515Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3125 3.90625V9.375L17.1875 6.25V3.90625C17.1875 3.47478 17.5373 3.125 17.9688 3.125H19.5312C19.9627 3.125 20.3125 3.47478 20.3125 3.90625Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
>>>>>>> 4988c9f (added articles section)
          d="M11.3951 2.34375C12.0053 1.73356 12.9947 1.73356 13.6049 2.34375L23.9899 12.7288C24.295 13.0339 24.295 13.5286 23.9899 13.8337C23.6848 14.1388 23.1902 14.1388 22.8851 13.8337L12.5 3.44861L2.11493 13.8337C1.80983 14.1388 1.31517 14.1388 1.01007 13.8337C0.704976 13.5286 0.704976 13.0339 1.01007 12.7288L11.3951 2.34375Z"
        />
      </svg>
    </div>
  );
};

export default Home;
