import { Icon, Link } from '@/components/common';
import React from 'react';

export type QueryDataItem = {
  id: string;
  value: string;
  label: string;
  tags: string[];
};

export type QuickSearchState = {
  data: QueryDataItem[];
  query?: string | null;
  isOpen?: boolean;
  isExpanded?: boolean;
};

export type QuickSearchContextValue = {
  query?: string | null;
  isOpen?: boolean;
  onOpenChange(isOpen: boolean): void;
  onQueryChange(isOpen: boolean): void;
};

type Action<S> = (current: S) => S;
type Dispatch<A> = (value: A) => void;

type QuickSearchActions = {
  setQuery(value: string | null): void;
  clearQuery(): void;
  openDrawer(): void;
  openDrawerOnQuery(value: string | null): void;
  openDrawerOnSpace(event: React.KeyboardEvent<HTMLInputElement>): void;
  closeDrawer(): void;
  closeDrawerOnQuery(value: string | null): void;
  toggleDrawer(): void;
  expandDrawer(): void;
  expandOnBackspace(event: React.KeyboardEvent<HTMLInputElement>, value?: string | null): void;
  contractDrawer(): void;
  contractDrawerOnQuery(event: React.KeyboardEvent<HTMLInputElement>, value?: string | null): void;
  resetOnEscape(event: React.KeyboardEvent<HTMLInputElement>): void;
};

type UseQuickSearchActions = (dispatch: Dispatch<Action<QuickSearchState>>) => QuickSearchActions;

const useQuickSearchActions: UseQuickSearchActions = (dispatch) => {
  return {
    setQuery(value) {
      dispatch((current) => ({
        ...current,
        query: value,
      }));
    },

    clearQuery() {
      dispatch((current) => ({
        ...current,
        query: null,
        isOpen: false,
        isExpanded: false,
      }));
    },

    openDrawer() {
      dispatch((current) => ({
        ...current,
        isOpen: true,
      }));
    },

    closeDrawer() {
      dispatch((current) => ({
        ...current,
        isOpen: false,
      }));
    },

    toggleDrawer() {
      dispatch((current) => ({
        ...current,
        isOpen: current.isOpen ? false : true,
      }));
    },

    openDrawerOnQuery(value) {
      dispatch((current) => {
        const payload = { ...current, isOpen: true };
        const shouldOpen = value !== null && value.length !== 0;
        return shouldOpen ? payload : current;
      });
    },

    openDrawerOnSpace(event) {
      dispatch((current) => {
        if (current.query === null && event.key === 'Space') {
          event.stopPropagation();
          event.preventDefault();
          return {
            ...current,
            query: null,
            isOpen: true,
          };
        }
        return current;
      });
    },

    closeDrawerOnQuery(value) {
      dispatch((current) => {
        const payload = { ...current, isOpen: false, query: null };
        const shouldOpen = value?.length === 0;
        return shouldOpen ? payload : current;
      });
    },

    resetOnEscape(event) {
      dispatch((current) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          event.preventDefault();
          return {
            ...current,
            isExpanded: false,
            isOpen: false,
            query: null,
          };
        }
        return current;
      });
    },

    expandDrawer() {
      dispatch((current) => ({
        ...current,
        isExpanded: true,
      }));
    },

    contractDrawer() {
      dispatch((current) => ({
        ...current,
        isExpanded: false,
      }));
    },

    expandOnBackspace(event, value) {
      dispatch((current) => {
        const hasQuery = value !== null;
        if (event.key === 'Backspace' && !hasQuery) {
          event.stopPropagation();
          event.preventDefault();
          return {
            ...current,
            isExpanded: true,
          };
        }
        return current;
      });
    },

    contractDrawerOnQuery(event, value) {
      dispatch((current) => {
        const hasQuery = value !== null;
        const hasInput = value && value.length;
        if (event.key && hasQuery && hasInput) {
          return {
            ...current,
            isExpanded: false,
          };
        }
        return current;
      });
    },
  };
};

export const QuickSearchMenuItem = (props: QueryDataItem) => {
  const { id, label, value } = props;
  return (
    <Link id={id} to={value}>
      {label}
    </Link>
  );
};

export const QuickSearchMenu = (props: Partial<QuickSearchState>) => {
  const { data, isOpen, isExpanded } = props;
  if (!isOpen) return null;
  if (isExpanded) return null;
  return (
    <div className="tbdx-quick-search-menu">
      {data?.map((item) => <QuickSearchMenuItem key={item.id} {...item} />)}
    </div>
  );
};

export const QuickSearchExpandedMenu = (props: Partial<QuickSearchState>) => {
  const { isExpanded } = props;
  if (!isExpanded) return null;
  return (
    <div className="tbdx-quick-search-expaned-menu">
      <p>Expanded Menu</p>
    </div>
  );
};

export const QuickSearchClose = (props: Partial<QuickSearchActions>) => {
  const { clearQuery } = props;
  return (
    <button
      type="button"
      role="button"
      onClick={clearQuery}
      children={<Icon name="dismiss_circle" size="xl" />}
      className="tbdx-quick-search-close"
    />
  );
};

export const QuickSearch = ({ data }: { data: QueryDataItem[] }) => {
  const [state, dispatch] = React.useState<QuickSearchState>({
    isOpen: undefined,
    query: null,
    data,
  });

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const actions = useQuickSearchActions(dispatch);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="tbdx-quick-search">
      <div className="tbdx-quick-search-box">
        <input
          type="text"
          ref={inputRef}
          value={state.query || ''}
          className="tbdx-quick-search-input"
          onChange={(e) => {
            actions.setQuery(e.target.value);
            actions.openDrawerOnQuery(e.target.value);
            actions.closeDrawerOnQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            actions.resetOnEscape(e);
            actions.openDrawerOnSpace(e);
            actions.expandOnBackspace(e, state.query);
            actions.contractDrawerOnQuery(e, state.query);
          }}
        />
        <QuickSearchClose clearQuery={actions.clearQuery} />
      </div>
      <QuickSearchMenu isOpen={state.isOpen} isExpanded={state.isExpanded} data={state.data} />
      <QuickSearchExpandedMenu isExpanded={state.isExpanded} />
    </div>
  );
};
