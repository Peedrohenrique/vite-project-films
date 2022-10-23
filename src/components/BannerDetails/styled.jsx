import styled from "styled-components";

export const ContainerBannerDetails = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--background-mobile-menu);

  .content-datails {
    display: flex;
    flex-direction: row;
    width: 80%;

    .content-datails-items-image {
      display: block;
      min-width: 18rem;
      border-radius: 2px;
      position: relative;
      top: 0;
      left: 0;
      background-color: blue;
      height: 29rem;

      .image-details {
        height: 100%;
        width: 100%;
        display: flex;
        object-fit: cover;
      }
    }
    .content-datails-items {
      padding: 0px 20px;
      display: flex;
      align-items: center;
      color: #fff;


      .items-datails {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > h3 {
          font-size: 2rem ;
        }
      }
    }
  }
`;
