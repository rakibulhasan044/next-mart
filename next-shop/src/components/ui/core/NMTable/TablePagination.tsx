import React, { useState } from "react";
import { Button } from "../../button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TablePagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPage = 10;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex items-center gap-2 my-5">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        variant={"outline"}
        size={"sm"}
        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
      >
        <ArrowLeft />
      </Button>

      {[...Array(totalPage)].map((_, index) => (
        <Button
          onClick={() => setCurrentPage(index + 1)}
          key={index}
          variant={currentPage === index + 1 ? "default" : "outline"}
          size={"sm"}
          className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
        >
          {index + 1}
        </Button>
      ))}

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        variant={"outline"}
        size={"sm"}
        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TablePagination;
