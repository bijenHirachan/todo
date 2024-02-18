import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();

  return (
    //border-l border-t border-r rounded-t
    //hover:text-blue-800
    <ul className="flex border-b text-sm tracking-wide">
      <li className="-mb-px mr-1">
        <Link
          className={`bg-white inline-block  py-2 px-4 text-blue-500 font-semibold ${
            searchParams.get("todos") === null
              ? "border-l border-t border-r rounded-t"
              : "hover:text-blue-800"
          } `}
          to="/"
        >
          All
        </Link>
      </li>
      <li className="-mb-px mr-1">
        <Link
          className={`bg-white inline-block  py-2 px-4 text-blue-500 font-semibold ${
            searchParams.get("todos") === "active"
              ? "border-l border-t border-r rounded-t"
              : "hover:text-blue-800"
          } `}
          to={"/?todos=active"}
        >
          Active
        </Link>
      </li>
      <li className="-mb-px mr-1">
        <Link
          className={`bg-white inline-block  py-2 px-4 text-blue-500 font-semibold ${
            searchParams.get("todos") === "completed"
              ? "border-l border-t border-r rounded-t"
              : "hover:text-blue-800"
          } `}
          to={"/?todos=completed"}
        >
          Completed
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
