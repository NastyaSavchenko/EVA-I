import styled from 'styled-components';

export const ReviewsStyles = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`

export const ReviewsInfoContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ReviewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 623px;
`

export const ReviewsText = styled.p`
  font-size: 28px;
  line-height: 1.4; 
  margin-bottom: 40px;
`

export const ReviewsPersonContainer = styled.div`
  display: flex;
  gap: 16px;
`
export const PersonImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid var(--light-grey);
`

export const PersonName = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 2;
  margin-bottom: 16px;
`
export const PersonPosition = styled.p`
  font-size: 24px;
  line-height: 0.8;
`

export const ReviewsImgContainer = styled.div`
  width: 404px;
  height: 324px;
  padding: 10px;
  border: 1px solid var(--light-grey);
`