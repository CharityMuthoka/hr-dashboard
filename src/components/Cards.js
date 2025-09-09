import {React, useState,useRef, useEffect} from 'react';


export default function Cards({ activePage, setActivePage }) {

  
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}