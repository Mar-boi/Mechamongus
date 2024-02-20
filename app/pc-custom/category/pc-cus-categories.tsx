"use client";

import { categories } from "@/utils/Categories";

import { usePathname, useSearchParams } from "next/navigation";
import Custom_Category from "./pc-cus-category";

const Pc_cus_Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isPc_Custom = pathname == "/pc-custom";

  if (!isPc_Custom) return null;

  return (
    <div className="bg-white">
      <div className="pt-1 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <Custom_Category
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={
              category == item.label ||
              (category == null && item.label == "All")
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Pc_cus_Categories;
