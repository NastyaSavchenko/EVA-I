import styled from 'styled-components';

export const ReviewsStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 190px 100px 190px;
  font-family: Inter;
  font-style: normal;
  color: #000;
`
export const ReviewsTitle = styled.p`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 80px;
  margin-bottom: 80px;
`

export const ReviewsInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ReviewsText = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 40px; 
  margin-bottom: 40px;
  width: 623px;
`

export const ReviewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  /* width: 623px; */
  margin-right: auto;
`

export const ReviewsPersonContainer = styled.div`
  display: flex;
  gap: 16px;
`
export const PersonImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid grey;
`

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const PersonName = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;
`
export const PersonPosition = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 20px;
`

export const ReviewsImgContainer = styled.div`
  display: flex;
  align-items: end;
  width: 404px;
  height: 324px;
  padding: 10px;
  align-items: center;
  border: 1px solid grey;
`