import styled from "styled-components"

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;
  iframe[src*="ads-iframe"] { 
    display: none;
  }
  #disqus_thread {
    a {
      color: #000 !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: #000;
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`