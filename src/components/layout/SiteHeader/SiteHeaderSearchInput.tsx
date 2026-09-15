"use client";

import { FieldValues, useForm } from "react-hook-form";
import SearchIcon from "@/assets/img/search-icon.svg";

const SiteHeaderSearchInput = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formValues: FieldValues) => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("s", formValues.search);
    const newUrl = "/search?" + urlSearchParams.toString();
    history.replaceState({}, "", newUrl);
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="group/header-search has-focus-within:border-blaze relative flex items-center overflow-hidden border-b border-transparent border-white/40 font-semibold max-md:flex-row-reverse xl:rounded-md xl:border-0"
    >
      <label className="sr-only">Search:</label>
      <input
        {...register("search", { required: true })}
        placeholder="Search..."
        className="z-10 h-11 max-w-full pr-8 transition-all outline-none group-has-focus-within/header-search:w-40 group-has-focus-within/header-search:pl-4 max-xl:grow xl:w-8"
      />
      <button
        type="submit"
        className="right-0 flex h-11 w-8 cursor-pointer items-center justify-center group-has-focus-within/header-search:z-20"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
    </form>
  );
};
export default SiteHeaderSearchInput;
