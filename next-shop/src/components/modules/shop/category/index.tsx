import React from "react";
import CreateCategoryModal from "./CreateCategoryModal";

const ManageCategories = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-bold">Manage Categories</h1>
        <CreateCategoryModal />
      </div>
    </div>
  );
};

export default ManageCategories;
