import { useState } from "react";

export const useRowSelect = <T>(
  rowIds: T[],
  initialSelectedRowIds: T[] = []
): {
  selectedRowIds: T[];
  isSelected: (rowId: T) => boolean;
  isSelectedAll: boolean;
  isIndeterminate: boolean;
  toggleSelected: (id: T) => void;
  toggleSelectedAll: () => void;
} => {
  const [selectedRowIds, setSelectedRowIds] = useState<T[]>(
    initialSelectedRowIds
  );

  const isSelected = (rowId: T) => selectedRowIds.includes(rowId);
  const isSelectedAll =
    rowIds.length > 0 && selectedRowIds.length === rowIds.length;
  const isIndeterminate =
    selectedRowIds.length > 0 && selectedRowIds.length < rowIds.length;

  const toggleSelected = (rowId: T) => {
    isSelected(rowId)
      ? setSelectedRowIds(
          selectedRowIds.filter((selectedId) => selectedId !== rowId)
        )
      : setSelectedRowIds([...selectedRowIds, rowId]);
  };
  const toggleSelectedAll = () => {
    isSelectedAll ? setSelectedRowIds([]) : setSelectedRowIds(rowIds);
  };

  return {
    selectedRowIds,
    isSelected,
    isSelectedAll,
    isIndeterminate,
    toggleSelected,
    toggleSelectedAll,
  };
};
