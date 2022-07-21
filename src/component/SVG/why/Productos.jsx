import * as React from "react"

const Productos = (props) => (
  <svg
    width={102}
    height={102}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={51} cy={51} r={51} fill="#DDFFB1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M74.665 44.663c3.37 2.488 5.382 6.451 5.382 10.6v2.004c0 3.082-1.116 6.075-3.091 8.434a5.35 5.35 0 0 1 3.09 4.862 5.37 5.37 0 0 1-4.576 5.334l-32.684 5.028a10.53 10.53 0 0 1-1.593.122h-.224c-3.764 0-7.061-2-8.911-4.987l-4.995 1.11a2.674 2.674 0 0 1-3.25-2.607v-.377c0-.267.051-.52.124-.764h-.125a2.863 2.863 0 0 1-2.859-2.86 2.863 2.863 0 0 1 2.86-2.859h.124a2.64 2.64 0 0 1-.125-.764v-.378a2.674 2.674 0 0 1 3.253-2.606l4.993 1.11a10.54 10.54 0 0 1 2.708-2.936l-2.108-5.904a5.728 5.728 0 0 1-5.033-5.678c0-.441.055-.886.165-1.329a5.672 5.672 0 0 1-2.071-4.39c0-.79.162-1.564.475-2.28a7.583 7.583 0 0 1-3.335-6.298c0-3.184 2.014-6.04 4.965-7.142.625-2.426 2.807-4.208 5.331-4.293a5.71 5.71 0 0 1 4.954-2.862 5.7 5.7 0 0 1 5.386 3.823c1.875-.118 3.625.685 4.786 2.133a5.695 5.695 0 0 1 3.793 3.586c3.29-.2 6.051 2.445 6.051 5.708a5.67 5.67 0 0 1-1.077 3.336 5.67 5.67 0 0 1 1.077 3.336c0 .324-.037.645-.092.963.093.079.182.16.267.248.065-.053.128-.107.19-.162a4.98 4.98 0 0 1 .296-.246 4.08 4.08 0 0 1 1.683-.716l-.422-4.642a3.693 3.693 0 0 1 3.673-4.023h.248a3.693 3.693 0 0 1 3.674 4.022l-.42 4.622c.652.099 1.286.34 1.815.743.085.065.163.136.242.207.054.049.109.098.165.145a4.013 4.013 0 0 1 2.822-1.161c.86 0 1.711.28 2.399.788ZM72.422 55.47c0-3.63-1.699-7.095-4.544-9.27a1.998 1.998 0 0 0-.829-.37l-.14 1.542c1.078.524 1.7 1.323 1.7 2.223 0 1.63-2.048 2.86-4.765 2.86a7.81 7.81 0 0 1-.68-.04l-.031-.002a18.98 18.98 0 0 0-.242 2.872v3.87c0 1.418.168 2.83.483 4.213l7.643 1.176a11.768 11.768 0 0 0 1.405-5.573v-3.501Zm-8.453-18.266h-.25a1.785 1.785 0 0 0-1.775 1.944l.866 9.518-.728.234c-.835.268-1.098.62-1.098.695 0 .237 1.014.953 2.86.953 1.845 0 2.86-.716 2.86-.953 0-.075-.264-.427-1.099-.694l-.727-.234.865-9.518a1.785 1.785 0 0 0-1.775-1.944Zm-3.19 10.168-.138-1.51a2.13 2.13 0 0 0-.715.343 11.61 11.61 0 0 0-4.66 9.264v3.5c0 1.097.164 2.177.47 3.224l5.618.865a20.944 20.944 0 0 1-.37-3.903v-3.87c0-1.092.112-2.185.282-3.267-1.331-.495-2.188-1.373-2.188-2.423 0-.9.622-1.699 1.7-2.223Zm-11.232 9.896c0 1.414.276 2.785.794 4.095l3.348.516a13.346 13.346 0 0 1-.33-2.908v-3.501c0-3.37 1.308-6.605 3.555-9.068a2.106 2.106 0 0 0-1.493-.62c-.454 0-.904.147-1.266.414-2.885 2.131-4.608 5.52-4.608 9.068v2.004Zm1.057-23.562-.174-.98a3.798 3.798 0 0 0-3.742-3.147 3.81 3.81 0 0 0-3.508 2.32l-.269.63-.683-.055a2.888 2.888 0 0 1-.202-.023l-.028-.004c-.025-.004-.05-.008-.076-.008-1.867 0-3.48 1.4-3.753 3.258l-.088.61-.592.169a5.74 5.74 0 0 0-4.145 5.494c0 2.16 1.2 4.112 3.135 5.096l.955.485-.594.892a3.792 3.792 0 0 0 1.15 5.322l.66.417-.279.73a3.815 3.815 0 0 0-.262 1.356c0 2.116 1.71 3.84 3.813 3.84.29.02.578.05.864.094l5.42.834a13.006 13.006 0 0 1-.565-3.767v-2.004c0-.585.05-1.165.127-1.739-2.511-1.996-6.755-2.025-6.8-2.025v-1.906c.18 0 3.637.024 6.534 1.51a60.92 60.92 0 0 0-1.908-5.372c-1.897-1.936-5.957-2.006-7.39-1.862l-.19-1.896c.186-.02 3.426-.316 6.276.757-1.691-3.64-3.145-5.926-3.17-5.965l1.604-1.032c.12.187 1.992 3.133 3.975 7.687 1.448-3.798 4.026-5.903 4.158-6.01l.596.745.597.743c-.052.043-3.306 2.736-4.185 7.38.39 1.022.77 2.1 1.131 3.224a13.287 13.287 0 0 1 4.027-4.84 4.061 4.061 0 0 1 2.398-.788c.27 0 .534.035.792.087 0-.015.002-.03.003-.044l.003-.043a3.79 3.79 0 0 0-1.094-2.668l-.656-.668.656-.668a3.79 3.79 0 0 0 1.094-2.668 3.816 3.816 0 0 0-3.813-3.812c-.263 0-.535.032-.83.098l-.972.216ZM33.344 54.36h.672l2.416 6.766a10.373 10.373 0 0 1 1.633-.63 5.736 5.736 0 0 1-1.862-4.23c0-.44.055-.885.165-1.327a5.675 5.675 0 0 1-2.071-4.391c0-.79.162-1.564.476-2.28a7.582 7.582 0 0 1-3.336-6.298c0-3.185 2.015-6.041 4.965-7.142.626-2.427 2.807-4.208 5.331-4.293a5.706 5.706 0 0 1 3.349-2.627 3.786 3.786 0 0 0-1.254-.235c-.263 0-.535.032-.83.098l-.972.216-.174-.98a3.798 3.798 0 0 0-3.743-3.147c-1.53 0-2.906.91-3.506 2.318l-.27.634-.686-.057c-.067-.006-.132-.014-.197-.023l-.028-.004a.498.498 0 0 0-.078-.008c-1.867 0-3.481 1.4-3.754 3.258l-.088.61-.592.17a5.74 5.74 0 0 0-4.144 5.493 5.696 5.696 0 0 0 3.135 5.096l.954.486-.593.892a3.792 3.792 0 0 0 1.15 5.32l.66.418-.279.73a3.8 3.8 0 0 0-.262 1.355 3.816 3.816 0 0 0 3.813 3.812Zm-7.625 12.202v.378c0 .421.343.764.764.764h4.408c.085-.3.184-.592.295-.88l-4.536-1.008a.777.777 0 0 0-.931.746Zm-1.907 3.048a.955.955 0 0 0-.953.954c0 .525.428.953.953.953h6.721a10.49 10.49 0 0 1-.049-.954c0-.322.02-.638.048-.953h-6.719Zm1.907 4.955c0 .477.477.843.929.746l4.537-1.008c-.11-.288-.21-.58-.295-.88h-4.407a.766.766 0 0 0-.764.764v.378Zm49.462-.551a3.472 3.472 0 0 0 2.96-3.45 3.474 3.474 0 0 0-2.96-3.452l-32.683-5.028a8.694 8.694 0 0 0-1.305-.099h-.224c-4.73 0-8.578 3.85-8.578 8.578 0 4.73 3.848 8.579 8.578 8.579h.224c.433 0 .873-.034 1.306-.1l32.682-5.028Zm-.291-8.875c2.064-2.102 3.25-4.939 3.25-7.87v-2.004c0-3.548-1.723-6.938-4.608-9.067a2.106 2.106 0 0 0-2.712.166 13.674 13.674 0 0 1 3.508 9.105v3.5c0 2.046-.462 4.05-1.332 5.879l1.894.291Zm-32.968.659h-1.906v9.531h1.906v-9.531Zm5.719 0h1.906v9.531H47.64v-9.531Zm9.53 0h-1.905v9.531h1.906v-9.531Zm5.72 1.906h1.906v5.719H62.89v-5.719Zm9.53.953h-1.905v3.813h1.906v-3.813Z"
      fill="#1B1713"
    />
  </svg>
)

export default Productos