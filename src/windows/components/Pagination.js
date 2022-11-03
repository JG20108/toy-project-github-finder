import React, {useState, useEffect} from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function App() {


  useEffect(() => {
    
  });

  return (
    <nav aria-label='Page navigation example'>
      <MDBPagination center className='mb-0'>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' aria-label='Previous'>
            <span aria-hidden='true'>«</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>2</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' aria-label='Next'>
            <span aria-hidden='true'>»</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}