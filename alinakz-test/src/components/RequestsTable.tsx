import { useAppDispatch, useAppSelector } from "@/redux/store";
import { deleteRequest, getRequests } from "@/redux/store/requestsSlice";
import { useEffect, ReactNode, ChangeEvent, useState, useMemo } from "react";
import {
  NumberParam,
  StringParam,
  useQueryParam,
  withDefault,
} from "use-query-params";
import { SearchInput } from "@/components/ui/SearchInput";
import SortIcon from "@/icons/sort.svg";
import FilterIcon from "@/icons/filter.svg";
import { format, parse } from "date-fns";
import ArrowLeftIcon from "@/icons/arrow-left.svg";
import ArrowRightIcon from "@/icons/arrow-right.svg";
import EditIcon from "@/icons/edit.svg";
import RemoveIcon from "@/icons/remove.svg";
import { Button } from "@/components/ui/Button";
import { ConfirmDeletion } from "@/components/ConfirmDeletion.tsx";

function HeadCell({ children }: { children?: ReactNode }) {
  return (
    <th className="pb-[20px] pr-[10px] text-left text-[14px] font-normal leading-[40px] text-accent">
      {children}
    </th>
  );
}

function TableCell({ children }: { children?: ReactNode }) {
  return (
    <td className="pr-[10px] text-left text-[14px] font-normal leading-[40px]">
      {children}
    </td>
  );
}

const PAGE_SIZE = 20;

export function RequestsTable() {
  const dispatch = useAppDispatch();
  const requests = useAppSelector((store) => store.requests);

  const PageParam = withDefault(NumberParam, 1);
  const [page, setPage] = useQueryParam("page", PageParam);

  const QueryParam = withDefault(StringParam, "");
  const [query, setQuery] = useQueryParam("query", QueryParam);

  const [pageInput, setPageInput] = useState("");

  const totalPages = useMemo(
    () => Math.max(Math.ceil(requests.total / PAGE_SIZE), 1),
    [requests.total],
  );

  useEffect(() => {
    dispatch(
      getRequests({
        page,
        query,
        limit: PAGE_SIZE,
      }),
    );
  }, [page, query, dispatch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleMoveToPage = () => {
    const page = Number(pageInput);
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  const getDeleteHandler = (id: number) => () => {
    dispatch(deleteRequest({ id, page, query, limit: PAGE_SIZE }));
  };

  return (
    <div>
      <div className="mb-[24px] flex w-full items-center gap-[20px]">
        <SearchInput
          value={query}
          onChange={handleSearch}
          className="w-full flex-[3]"
          placeholder="Поиск"
        />
        <div className="flex flex-1 items-center justify-end gap-[20px] sm:gap-[60px]">
          <button>
            <SortIcon />
          </button>
          <button>
            <FilterIcon />
          </button>
        </div>
      </div>
      <div className="block max-w-full overflow-x-auto">
        <table className="mb-[42px] w-full table-auto whitespace-nowrap">
          <thead>
            <tr className="pb-[20px]">
              <HeadCell>ID</HeadCell>
              <HeadCell>ФИО</HeadCell>
              <HeadCell>Номер телефона</HeadCell>
              <HeadCell>Тип заявки</HeadCell>
              <HeadCell>Дата</HeadCell>
              <HeadCell>Кол-во</HeadCell>
              <HeadCell>Город</HeadCell>
              <HeadCell>Звонок</HeadCell>
              <HeadCell />
            </tr>
          </thead>
          <tbody>
            {requests.data.map((item) => (
              <tr key={item.id} className="border-b border-muted">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.full_name}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>
                  {format(
                    parse(item.date, "MM/dd/yyyy", new Date()),
                    "dd.MM.yyyy",
                  )}
                </TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.call}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-[25px]">
                    <button className="text-accent">
                      <EditIcon />
                    </button>
                    <ConfirmDeletion onConfirm={getDeleteHandler(item.id)}>
                      <button className="text-error">
                        <RemoveIcon />
                      </button>
                    </ConfirmDeletion>
                  </div>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-between gap-[10px] pt-[10px] md:flex-row md:pt-0">
        <div className="flex items-center gap-[16px]">
          <button onClick={handlePrevPage} disabled={page === 1}>
            <ArrowLeftIcon />
          </button>
          <div className="flex w-[75px] justify-center">{`${page}/${totalPages}`}</div>
          <button onClick={handleNextPage} disabled={page === totalPages}>
            <ArrowRightIcon />
          </button>
        </div>
        <div className="flex flex-col items-center gap-[12px] sm:flex-row">
          <span>Перейти на страницу</span>
          <input
            value={pageInput}
            min={1}
            max={totalPages}
            onChange={(e) => setPageInput(e.target.value)}
            type="number"
            className={`w-[56px] border-b text-center focus:outline-none ${
              +pageInput > totalPages ? "border-red-600" : "border-muted"
            }`}
          />
          <Button
            onClick={handleMoveToPage}
            variant="secondary"
            size="small"
            disabled={+pageInput > totalPages}
          >
            Перейти
          </Button>
        </div>
      </div>
    </div>
  );
}
