import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  baseParams?: {
    type?: string;
    listing?: string;
    q?: string;
  };
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  baseParams = {},
}: PaginationProps) {
  if (totalPages <= 1 && totalItems <= pageSize) {
    return null;
  }

  const buildUrl = (targetPage: number) => {
    const params = new URLSearchParams();

    if (baseParams.type && baseParams.type !== 'all') {
      params.set('type', baseParams.type);
    }
    if (baseParams.listing && baseParams.listing !== 'all') {
      params.set('listing', baseParams.listing);
    }
    if (baseParams.q && baseParams.q.trim()) {
      params.set('q', baseParams.q.trim());
    }
    if (targetPage > 1) {
      params.set('page', targetPage.toString());
    }

    const qs = params.toString();
    return qs ? `/?${qs}` : '/';
  };

  // Generate page numbers array with simple ellipsis logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push('...');
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <nav
      aria-label="Server Pagination"
      className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-nordic-dark/10 pt-6"
    >
      {/* Items count summary */}
      <div className="text-sm text-nordic-muted">
        Showing <span className="font-medium text-nordic-dark">{startItem}</span> to{' '}
        <span className="font-medium text-nordic-dark">{endItem}</span> of{' '}
        <span className="font-medium text-nordic-dark">{totalItems}</span> properties
      </div>

      {/* Page controls */}
      <div className="flex items-center gap-1.5">
        {/* Previous Button */}
        {currentPage > 1 ? (
          <Link
            href={buildUrl(currentPage - 1)}
            scroll={false}
            className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-nordic-dark bg-white border border-nordic-dark/10 rounded-lg hover:border-mosque hover:text-mosque transition-all shadow-xs"
            aria-label="Previous page"
          >
            <span className="material-icons text-base leading-none">chevron_left</span>
            <span className="hidden sm:inline">Previous</span>
          </Link>
        ) : (
          <span
            className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-nordic-muted/40 bg-white/50 border border-nordic-dark/5 rounded-lg cursor-not-allowed select-none"
            aria-disabled="true"
          >
            <span className="material-icons text-base leading-none">chevron_left</span>
            <span className="hidden sm:inline">Previous</span>
          </span>
        )}

        {/* Page Number Buttons */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((p, idx) => {
            if (p === '...') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-2 py-1 text-sm text-nordic-muted select-none"
                >
                  ...
                </span>
              );
            }

            const pageNum = Number(p);
            const isCurrent = pageNum === currentPage;

            return isCurrent ? (
              <span
                key={pageNum}
                aria-current="page"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium bg-nordic-dark text-white shadow-sm select-none"
              >
                {pageNum}
              </span>
            ) : (
              <Link
                key={pageNum}
                href={buildUrl(pageNum)}
                scroll={false}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium text-nordic-dark bg-white border border-nordic-dark/10 hover:border-mosque hover:text-mosque transition-all shadow-xs"
              >
                {pageNum}
              </Link>
            );
          })}
        </div>

        {/* Next Button */}
        {currentPage < totalPages ? (
          <Link
            href={buildUrl(currentPage + 1)}
            scroll={false}
            className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-nordic-dark bg-white border border-nordic-dark/10 rounded-lg hover:border-mosque hover:text-mosque transition-all shadow-xs"
            aria-label="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="material-icons text-base leading-none">chevron_right</span>
          </Link>
        ) : (
          <span
            className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-nordic-muted/40 bg-white/50 border border-nordic-dark/5 rounded-lg cursor-not-allowed select-none"
            aria-disabled="true"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="material-icons text-base leading-none">chevron_right</span>
          </span>
        )}
      </div>
    </nav>
  );
}
