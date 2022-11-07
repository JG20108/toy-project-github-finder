import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/slices/githubUsers';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export default function Pagination() {
  const { total_pages } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
      <Wrapper>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={(event) => {
            dispatch(setPage(event.selected + 1));
          }}
          pageRangeDisplayed={5}
          pageCount={total_pages}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName={'pagination justify-content-center'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </Wrapper>
  );
}

const Wrapper = styled.section`
  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    margin-bottom: -12%;
  }
  .pagination > .active > a {
    background-color: #0036FF;
    border-color: #0036FF;
    color: #fff;
  }
  .pagination > li > a {
    border: 1px solid #0036FF;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: #0036FF;
    border-color: #0036FF;
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #0036FF;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;
